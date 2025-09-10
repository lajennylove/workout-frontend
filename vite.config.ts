import { defineConfig } from 'vite'

export default defineConfig({
    base: '/workout-frontend/',
    server: {
        port: 3000,
        open: true
    },
    build: {
        assetsInlineLimit: 4096, // Inline assets smaller than 4kb
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name?.split('.') || []
                    const ext = info[info.length - 1]
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
                        return `assets/images/[name]-[hash][extname]`
                    }
                    return `assets/[name]-[hash][extname]`
                }
            }
        }
    },
    assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp']
})

