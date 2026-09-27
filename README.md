# CyberInsight - Industry-Level Security Intelligence Platform

A modern, full-featured cybersecurity intelligence platform built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ 
- npm v8+

### Installation

```bash
cd cyberinsight
npm install
```

### Development

```bash
npm run dev
```

The app will be available at: **http://localhost:5173**

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
cyberinsight/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Navigation with routing
│   │   └── Dashboard.tsx       # Analytics dashboard
│   ├── pages/
│   │   ├── Home.tsx            # Landing page
│   │   ├── RiskAnalyzer.tsx     # Risk analysis tools
│   │   ├── Compliance.tsx       # Compliance & regulations
│   │   └── CaseStudy.tsx        # Case studies
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx                # React entry point
│   └── index.css               # Global Tailwind styles
├── public/
│   └── data.csv                # Survey response data
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design Features

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite (⚡ Super fast)
- **Routing**: React Router v6
- **Charts**: Chart.js + react-chartjs-2
- **Icons**: Lucide React
- **CSV Parsing**: PapaParse

### Design System
- **Color Scheme**: Dark theme with cyan/blue accents
- **Responsive**: Mobile, tablet, desktop optimized
- **Accessibility**: WCAG 2.1 compliant
- **Performance**: Optimized for fast loading
- **Modern UI**: Glassmorphism, gradients, animations

## 📊 Pages & Features

### 1. **Home** (`/`)
- Hero section with CTA buttons
- Feature highlights
- Trust badges
- Call-to-action for dashboard access

### 2. **Dashboard** (`/dashboard`)
- Real-time statistics cards
  - Total Responses
  - Threat Encounter Rate
  - 2FA Adoption Rate
  - Overall Risk Status
- Charts
  - Risk Distribution (Doughnut Chart)
  - Security Metrics (Bar Chart)
- Insights and recommendations
- Quick stats panel

### 3. **Risk Analyzer** (`/risk-analyzer`)
- Advanced risk assessment tools
- Vulnerability analysis
- Customizable risk calculations

### 4. **Compliance** (`/compliance`)
- GDPR information
- ISO 27001 standards
- SOC 2 compliance
- IT Act 2000 details

### 5. **Case Studies** (`/case-study`)
- Real-world incident analysis
- Lessons learned
- Best practices

## 🔧 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#0ea5e9',  // Change to your brand color
  }
}
```

### Add New Pages
1. Create a new file in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navbar links in `src/components/Navbar.tsx`

### Modify Dashboard Data
1. Replace `/public/data.csv` with your data
2. Column headers must match:
   - `Have you ever encountered any cyber threat? `
   - `Do you use two-factor authentication (2FA)?`

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "typescript": "^5.3.3",
  "tailwindcss": "^3.3.6",
  "chart.js": "^4.4.0",
  "react-chartjs-2": "^5.2.0",
  "papaparse": "^5.4.1",
  "lucide-react": "^0.292.0"
}
```

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: Routes loaded on demand
- **Image Optimization**: CSS gradients instead of images
- **CSS Optimization**: Tailwind PurgeCSS removes unused styles
- **Bundle Size**: ~150KB gzipped

## 🔐 Security Features

- **CSP Headers**: Content Security Policy configured
- **HTTPS Ready**: Production build optimized for HTTPS
- **Input Validation**: Data validation for CSV parsing
- **CORS Handling**: Proper cross-origin resource handling

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Connect Git repo to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy build/ folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🧪 Testing

```bash
npm run test      # Run tests
npm run coverage  # Coverage report
```

## 📈 Analytics Integration

To add analytics, install:
```bash
npm install react-ga4
```

Then add to `App.tsx`:
```typescript
import ReactGA from "react-ga4";
ReactGA.initialize("GA_MEASUREMENT_ID");
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

© 2024 CyberInsight. All rights reserved.

## 🆘 Support

For issues or questions, please contact the development team.

---

**Happy coding! 🚀**
