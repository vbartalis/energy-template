# 🌱 Green Energy Astro Template

A modern, responsive website template for green energy companies built with Astro and TailwindCSS. This template provides a complete solution for renewable energy businesses to showcase their services, innovations, and environmental impact.

## 🚀 Demo

**[🔗 View Live Demo](https://energy-template.vbartalis.dev/)** - **[Mirror](https://vbartalis.github.io/energy-template/)**




**[🎨 Get Template on Astro](https://astro.build/themes/details/energy-company-template/)**

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://energy-template.vbartalis.dev/)
[![Astro Template](https://img.shields.io/badge/Astro-Template-orange?style=for-the-badge)](https://astro.build/themes/details/energy-company-template/)

## 🖼️ Screenshots

### Light Theme
![Light Theme Screenshot](./screenshots/Light.png)

### Dark Theme
![Dark Theme Screenshot](./screenshots/Dark.png)

## ✨ Features

- **🎨 Modern Design**: Clean, professional design optimized for green energy companies
- **📱 Fully Responsive**: Mobile-first approach ensuring perfect display on all devices
- **⚡ Lightning Fast**: Built with Astro for optimal performance and SEO
- **🎯 Conversion Focused**: Strategic call-to-action placements throughout the site
- **♿ Accessible**: Following web accessibility best practices
- **🌙 Theme Support**: Built-in theme switching capabilities
- **📧 Contact Forms**: Ready-to-use contact and newsletter signup forms
- **🔧 Easy Customization**: Well-structured components for easy modification

## 📋 Sections Included

- **Hero Section**: Eye-catching landing area with compelling headline
- **Key Services**: Overview of main green energy services
- **Latest Innovations**: Showcase of cutting-edge technology and solutions
- **Customer Testimonials**: Social proof from satisfied clients
- **Environmental Impact**: Data-driven impact visualization
- **Featured Projects**: Case studies and success stories
- **Get Involved**: Call-to-action section for user engagement

## 🛠️ Built With

- **[Astro](https://astro.build/)** - Static site generator
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better development experience

## 🚀 Quick Start

You can get started with this template in two ways:

### Option 1: Using Dev Container (Recommended)

For the best development experience, especially on Windows, clone directly into a dev container:

1. **Open VS Code**
2. **Use Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. **Run**: "Dev Containers: Clone Repository in Container Volume..."
4. **Enter repository URL**: `https://github.com/vbartalis/energy-template.git`
5. **Wait for container setup** (automatic dependency installation)
6. **Start development**
   ```bash
   npm run dev
   ```

This approach ensures:
- ✅ Optimal file system performance
- ✅ Fast live reloading on all platforms
- ✅ Pre-configured development environment
- ✅ No local Node.js installation required

### Option 2: Local Development

#### Prerequisites

- Node.js 20.11.0 or higher
- npm or yarn package manager

**💡 Tip**: This project uses [Volta](https://volta.sh/) for Node.js version management. If you have Volta installed, it will automatically use the correct Node.js version (20.11.0) when you enter the project directory.

#### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vbartalis/energy-template.git
   cd energy-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   *Note: If using Volta, the correct Node.js version will be automatically selected.*

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see your site

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   └── style/
│       └── custom.css
├── src/
│   ├── components/
│   │   ├── blocks/
│   │   ├── sections/
│   │   │   ├── cta/
│   │   │   ├── environment/
│   │   │   ├── featured/
│   │   │   ├── hero/
│   │   │   ├── innovations/
│   │   │   ├── services/
│   │   │   └── testimonials/
│   │   └── shared/
│   ├── layouts/
│   │   ├── Footer.astro
│   │   ├── Layout.astro
│   │   └── Navbar.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Customization

### Colors and Styling
Modify the TailwindCSS configuration in `tailwind.config.mjs` to match your brand colors.

### Content
Update the data files in each section folder (`src/components/sections/*/data.ts`) to customize:
- Service offerings
- Company information
- Testimonials
- Project showcases

### Images
Replace images in the `assets` folders within each section to match your brand and projects.

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with host binding |
| `npm run start` | Start development server |
| `npm run build` | Build for production with type checking |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the Astro team for creating an amazing static site generator
- TailwindCSS for the utility-first CSS framework
- The open-source community for inspiration and best practices

## 📧 Contact

**Vilmos Bartalis** - [@vbartalis](https://github.com/vbartalis)

Project Link: [https://github.com/vbartalis/energy-template](https://github.com/vbartalis/energy-template)

---

⭐ If you found this template helpful, please consider giving it a star!
