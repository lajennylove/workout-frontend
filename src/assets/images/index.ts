// Image imports for Vite optimization
// This allows Vite to process and optimize images during build

// Hero background image
import heroBg from './hero-bg.webp?url'

// Goal card images
import { goalImages } from './goals/index'

// Profile image
import jennyMartinezBg from './jenny-martinez-bg.webp?url'

// Export the image URLs
export const images = {
    heroBg,
    ...goalImages,
    jennyMartinezBg
}

// You can also import images as modules for additional processing
// import heroBgOptimized from './hero-bg.jpg?optimize'
