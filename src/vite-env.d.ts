/// <reference types="vite/client" />

// Declare module for image imports
declare module '*.jpg' {
    const src: string
    export default src
}

declare module '*.jpeg' {
    const src: string
    export default src
}

declare module '*.png' {
    const src: string
    export default src
}

declare module '*.webp' {
    const src: string
    export default src
}

declare module '*.svg' {
    const src: string
    export default src
}

// Vite URL imports
declare module '*.jpg?url' {
    const src: string
    export default src
}

declare module '*.jpeg?url' {
    const src: string
    export default src
}

declare module '*.png?url' {
    const src: string
    export default src
}

declare module '*.webp?url' {
    const src: string
    export default src
}
