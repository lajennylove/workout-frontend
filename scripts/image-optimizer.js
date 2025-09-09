#!/usr/bin/env node

import { readdirSync, existsSync, mkdirSync, copyFileSync, statSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Image optimization settings
const OPTIMIZATION_SETTINGS = {
    // Recommended sizes for different use cases
    hero: { maxWidth: 1920, maxHeight: 1080 },
    card: { maxWidth: 800, maxHeight: 600 },
    icon: { maxWidth: 64, maxHeight: 64 }
};

// Get file size in KB
function getFileSizeKB(filePath) {
    const stats = statSync(filePath);
    return Math.round(stats.size / 1024);
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

        // For now, just copy the file and rename to .webp
        // In a real implementation, you would use a library like sharp or canvas
        try {
            copyFileSync(inputPath, outputPath);
            const originalSize = getFileSizeKB(inputPath);
            const newSize = getFileSizeKB(outputPath);
            console.log(`✅ Processed: ${basename(inputPath)} (${originalSize}KB) -> ${basename(outputPath)} (${newSize}KB)`);
        } catch (error) {
            console.error(`❌ Failed to process ${inputPath}:`, error.message);
        }
    });
}

// Main function
function main() {
    console.log('🚀 Starting image processing...\n');
    console.log('⚠️  Note: This is a basic image processor. For full optimization, install ImageMagick or Sharp.js\n');

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

    console.log('\n✨ Image processing complete!');
    console.log('\n📋 Manual optimization steps:');
    console.log('1. Install ImageMagick: brew install imagemagick (macOS) or apt-get install imagemagick (Ubuntu)');
    console.log('2. Use online tools like TinyPNG, Squoosh.app, or ImageOptim');
    console.log('3. Resize images to recommended dimensions:');
    console.log('   - Hero images: 1920x1080px');
    console.log('   - Card images: 800x600px');
    console.log('   - Icons: 64x64px');
    console.log('4. Convert to WebP format for better compression');
}

// Run the script
main();
