# 🏃‍♂️ Sports Intelligence - AI-Powered Strava Analytics

> Transform your Strava workouts into actionable insights with AI-driven training recommendations

## 🚀 Features

- 🎯 **AI-Powered Analytics**: Get personalized insights from your Strava data
- 📊 **Performance Tracking**: Visual progress charts showing 300% better results
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- ⚡ **Fast Performance**: Optimized with Vite and WebP images
- 📱 **Mobile-First**: Responsive design for all devices

## 🛠️ Tech Stack

- **Frontend**: HTML5, TypeScript, Tailwind CSS
- **Build Tool**: Vite 4.5.0
- **Styling**: Tailwind CSS 3.4.17 (latest stable)
- **Package Manager**: Yarn
- **Node Version**: v22.12.0 (see `.nvmrc`)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- 🟢 **Node.js** v22.12.0 (use `.nvmrc` file)
- 📦 **Yarn** package manager
- 🐙 **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone git@github.com:lajennylove/workout-frontend.git
cd workout-frontend
```

### 2. Install Node Version

```bash
# If you have nvm installed
nvm use

# Or install Node.js v22.12.0 manually
```

### 3. Install Dependencies

```bash
yarn install
```

### 4. Start Development Server

```bash
yarn dev
```

The application will be available at `http://localhost:3000` 🎉

### 5. Build for Production

```bash
yarn build
```

### 6. Preview Production Build

```bash
yarn preview
```

## 📁 Project Structure

```
workout-frontend/
├── 📄 index.html              # Main HTML file
├── 📁 src/
│   ├── 📄 main.ts             # TypeScript entry point
│   ├── 📄 style.css           # Global styles
│   └── 📁 assets/
│       ├── 📁 images/         # Image assets
│       └── 📁 icons/          # SVG icons
├── 📁 scripts/                # Build scripts
├── 📄 package.json            # Dependencies
├── 📄 tailwind.config.js      # Tailwind configuration
├── 📄 vite.config.ts          # Vite configuration
└── 📄 tsconfig.json           # TypeScript configuration
```

## 🎨 Design Features

### 🎯 Hero Section
- **AI-Powered Strava Analytics** headline
- Interactive stats cards with progress indicators
- Background image with overlay effects

### 📊 Progress Chart
- **Sports Intelligence vs Training Alone** comparison
- Exponential growth visualization
- 300% improvement demonstration

### 🎯 Goal Cards
- **Weight Loss**, **Health Status**, **Body Building** options
- Hover effects with grayscale-to-color transitions
- Custom CTAs for each goal

## 🖼️ Image Optimization

The project includes automatic image optimization:

- **WebP Format**: All images converted to WebP for better performance
- **Responsive Sizing**: Images optimized for different screen sizes
- **Lazy Loading**: Images load as needed for better performance

### Adding New Images

1. Place images in `src/assets/images/`
2. Import them in `src/assets/images/index.ts`
3. Use the `?url` suffix for Vite optimization
4. Run `yarn build` to process images

## 🎨 Styling

### Color Palette
- **Primary**: Orange (`#FF6B35`)
- **Background**: Stone/Gray tones
- **Text**: White and gray variations

### Typography
- **Headings**: Poppins (Display font)
- **Body**: Inter (Sans-serif)

## 📱 Responsive Design

- **Mobile-First**: Designed for mobile devices first
- **Breakpoints**: Tailwind's responsive utilities
- **Flexible Layout**: Adapts to all screen sizes

## 🚀 Deployment

### Build Process

```bash
# Development
yarn dev

# Production build
yarn build

# Preview production build
yarn preview
```

### Environment Setup

1. Ensure Node.js v22.12.0 is installed
2. Install dependencies with `yarn install`
3. Run `yarn build` for production
4. Deploy the `dist/` folder to your hosting service

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔄 Open a Pull Request

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build |
| `yarn optimize-images` | Optimize images manually |

## 🐛 Troubleshooting

### Common Issues

**Node Version Issues**
```bash
# Use the correct Node version
nvm use
```

**Dependencies Issues**
```bash
# Clear cache and reinstall
yarn cache clean
yarn install
```

**Build Issues**
```bash
# Clear build cache
rm -rf dist/
yarn build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vite** for the fast build tool
- **Tailwind CSS** for the utility-first CSS framework
- **Strava** for the fitness data inspiration

---

Made with ❤️ for fitness enthusiasts who want to maximize their training potential! 🏃‍♂️💪
