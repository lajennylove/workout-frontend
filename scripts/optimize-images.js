#!/usr/bin/env node

import { execSync } from 'child_process';
import { readdirSync, statSync, existsSync, mkdirSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Image optimization settings
const OPTIMIZATION_SETTINGS = {
    // Recommended sizes for different use cases
    hero: { width: 1920, height: 1080, quality: 85 },
    card: { width: 800, height: 600, quality: 80 },
    icon: { width: 64, height: 64, quality: 90 }
};

// Check if ImageMagick is installed
function checkImageMagick() {
    try {
        execSync('convert -version', { stdio: 'ignore' });
        return true;
    } catch (error) {
        return false;
    }
}

// Optimize a single image
function optimizeImage(inputPath, outputPath, settings) {
    const { width, height, quality } = settings;

    try {
        // Resize and convert to WebP
        const command = `convert "${inputPath}" -resize ${width}x${height}^ -gravity center -extent ${width}x${height} -quality ${quality} "${outputPath}"`;
        execSync(command, { stdio: 'inherit' });
        console.log(`✅ Optimized: ${basename(inputPath)} -> ${basename(outputPath)}`);
    } catch (error) {
        console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
    }
}

// Process images in a directory
function processDirectory(dirPath, outputDir, settings) {
    if (!existsSync(dirPath)) {
        console.log(`📁 Directory not found: ${dirPath}`);
        return;
    }

    const files = readdirSync(dirPath);
    const imageFiles = files.filter(file => {
        const ext = extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    if (imageFiles.length === 0) {
        console.log(`📁 No images found in: ${dirPath}`);
        return;
    }

    // Create output directory if it doesn't exist
    if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
    }

    console.log(`🖼️  Processing ${imageFiles.length} images in ${dirPath}...`);

    imageFiles.forEach(file => {
        const inputPath = join(dirPath, file);
        const nameWithoutExt = basename(file, extname(file));
        const outputPath = join(outputDir, `${nameWithoutExt}.webp`);

        optimizeImage(inputPath, outputPath, settings);
    });
}

// Main function
function main() {
    console.log('🚀 Starting image optimization...\n');

    if (!checkImageMagick()) {
        console.log('❌ ImageMagick is not installed. Please install it first:');
        console.log('   macOS: brew install imagemagick');
        console.log('   Ubuntu: sudo apt-get install imagemagick');
        console.log('   Windows: Download from https://imagemagick.org/script/download.php');
        process.exit(1);
    }

    const projectRoot = join(__dirname, '..');
    const srcImagesDir = join(projectRoot, 'src', 'assets', 'images');
    const distImagesDir = join(projectRoot, 'dist', 'assets', 'images');

    // Process hero background image
    console.log('🎯 Processing hero background image...');
    processDirectory(join(srcImagesDir), join(distImagesDir), OPTIMIZATION_SETTINGS.hero);

    // Process goal card images
    console.log('\n🎯 Processing goal card images...');
    processDirectory(join(srcImagesDir, 'goals'), join(distImagesDir, 'goals'), OPTIMIZATION_SETTINGS.card);

    // Process icon images (if any)
    console.log('\n🎯 Processing icon images...');
    processDirectory(join(srcImagesDir, 'icons'), join(distImagesDir, 'icons'), OPTIMIZATION_SETTINGS.icon);

    console.log('\n✨ Image optimization complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Update your image imports to use .webp files');
    console.log('2. Test the optimized images in your application');
    console.log('3. Check file sizes in the dist/assets/images/ directory');
}

// Run the script
main();