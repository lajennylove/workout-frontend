# Image Optimization Guide

## 🎯 Current Issue
Your images are very large (3799 × 5691 pixels) and not optimized for web performance. They need to be:
1. **Resized** to appropriate dimensions
2. **Converted** to WebP format for better compression
3. **Compressed** to reduce file sizes

## 📏 Recommended Image Dimensions

### Hero Background Image
- **Current**: 3799 × 5691 pixels (very large!)
- **Recommended**: 1920 × 1080 pixels (Full HD)
- **Aspect Ratio**: 16:9
- **File Size Target**: < 500KB

### Goal Card Images
- **Current**: 3799 × 5691 pixels (very large!)
- **Recommended**: 800 × 600 pixels
- **Aspect Ratio**: 4:3
- **File Size Target**: < 200KB each

### Icon Images
- **Recommended**: 64 × 64 pixels
- **File Size Target**: < 10KB each

## 🛠️ Manual Optimization Methods

### Method 1: Online Tools (Recommended)
1. **Squoosh.app** (Google's tool)
   - Go to https://squoosh.app/
   - Upload your image
   - Choose WebP format
   - Adjust quality (80-85% recommended)
   - Download optimized image

2. **TinyPNG/TinyJPG**
   - Go to https://tinypng.com/
   - Upload your image
   - Download compressed version
   - Convert to WebP using Squoosh.app

3. **ImageOptim** (macOS)
   - Download from https://imageoptim.com/
   - Drag and drop images
   - Automatic optimization

### Method 2: Command Line (if you have ImageMagick)
```bash
# Install ImageMagick first
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick

# Resize and convert to WebP
convert input.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 output.webp

# For card images
convert input.jpg -resize 800x600^ -gravity center -extent 800x600 -quality 80 output.webp
```

### Method 3: Using the Script
```bash
# Run the optimization script
yarn optimize-images
```

## 📁 File Structure After Optimization

```
src/assets/images/
├── hero-bg.webp          # 1920x1080, <500KB
├── goals/
│   ├── weight-loss-bg.webp    # 800x600, <200KB
│   ├── health-status-bg.webp  # 800x600, <200KB
│   └── body-building-bg.webp  # 800x600, <200KB
└── icons/
    ├── dumbbell.svg
    ├── heartbeat.svg
    ├── flexibility.svg
    └── clipboard.svg
```

## 🔄 Update Your Code

After optimizing images, update your imports:

```typescript
// src/assets/images/index.ts
import heroBg from './hero-bg.webp?url'
import { goalImages } from './goals/index'

export const images = {
    heroBg,
    ...goalImages
}
```

```typescript
// src/assets/images/goals/index.ts
import weightLossBg from './weight-loss-bg.webp?url'
import healthStatusBg from './health-status-bg.webp?url'
import bodyBuildingBg from './body-building-bg.webp?url'

export const goalImages = {
    weightLossBg,
    healthStatusBg,
    bodyBuildingBg
}
```

## 📊 Expected Performance Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Hero Image | ~2MB | ~500KB | 75% reduction |
| Card Images | ~2MB each | ~200KB each | 90% reduction |
| Total Page Load | ~8MB | ~1.1MB | 86% reduction |
| Load Time | ~15s | ~3s | 80% faster |

## ✅ Quick Start Steps

1. **Download your current images** from the project
2. **Use Squoosh.app** to optimize each image:
   - Hero: 1920x1080, WebP, 85% quality
   - Cards: 800x600, WebP, 80% quality
3. **Replace the placeholder files** in `src/assets/images/`
4. **Update file extensions** from `.jpg` to `.webp` in your imports
5. **Run `yarn build`** to test

## 🚀 Advanced Optimization (Future)

When you upgrade to Node.js 18+, you can use:
```bash
yarn add -D vite-plugin-image-optimizer sharp svgo
```

This will provide automatic optimization during build time.
