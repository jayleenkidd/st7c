# StayTech - Hotel Website Solutions

A modern, responsive website for StayTech Hospitality Solutions - a specialized hotel website design agency that helps hotels increase direct bookings and reduce OTA dependency.

## 🚀 Features

- **Interactive Service Carousel** - Showcasing 6 core services with dynamic backgrounds
- **12+ Hotel Templates** - Fully functional, live-preview hotel website templates
- **Responsive Design** - Mobile-first approach with perfect mobile optimization
- **Service Pages** - Detailed pages for each service offering
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Optimized** - Built with SEO best practices
- **Fast Performance** - Optimized for speed and user experience

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Fonts**: Google Fonts (Poppins & Open Sans)
- **Linting**: ESLint with TypeScript support
- **Development**: Hot Module Replacement (HMR)

## 📦 Installation & Local Development

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Steps to run locally:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd staytech-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The site will automatically reload when you make changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. **Create GitHub Actions workflow**
   
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3

       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'

       - name: Install dependencies
         run: npm ci

       - name: Build
         run: npm run build

       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

2. **Configure Vite for GitHub Pages**
   
   Update `vite.config.ts`:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/your-repository-name/', // Replace with your repo name
     optimizeDeps: {
       exclude: ['lucide-react'],
     },
   });
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Method 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with carousel
│   ├── USPSection.tsx   # Why we're different section
│   ├── ServicesOverview.tsx
│   ├── TemplateShowcase.tsx
│   ├── PricingSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/               # Service detail pages
│   ├── WebDesignService.tsx
│   ├── BookingEngineService.tsx
│   ├── SEOService.tsx
│   ├── WebRedesignService.tsx
│   ├── HotelPMSService.tsx
│   └── AnalyticsService.tsx
├── templates/           # Hotel website templates
│   ├── GrandMaharaja.tsx
│   ├── MinimalistHaven.tsx
│   ├── ParadiseShores.tsx
│   └── ... (12 total templates)
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Key Features Explained

### Service Carousel
- Auto-rotating carousel showcasing 6 services
- Interactive navigation with arrows and dots
- Dynamic backgrounds and gradients
- Mobile-optimized with touch-friendly controls

### Template Showcase
- 12 fully functional hotel website templates
- Live preview functionality
- Category filtering (Luxury, Boutique, Resort, Budget)
- Responsive design previews

### Service Pages
- Detailed information for each service
- Pricing and feature comparisons
- Call-to-action sections
- Mobile-optimized layouts

## 🔧 Customization

### Colors
The project uses a custom color scheme defined in Tailwind:
- Primary: `#0A2463` (Deep Blue)
- Secondary: `#5FBDB0` (Teal)
- Accent: `#FFD700` (Gold)

### Fonts
- Headings: Poppins (Google Fonts)
- Body: Open Sans (Google Fonts)

### Images
All images are sourced from Pexels with proper optimization for web delivery.

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized carousel for mobile devices
- Fast loading on mobile networks
- Accessible design patterns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions about this project:
- Email: info@staytech.com
- Phone: +91 12345 67890

---

Built with ❤️ by StayTech Hospitality Solutions