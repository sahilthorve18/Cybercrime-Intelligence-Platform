# 🛡️ CyberInsight - Cybercrime Intelligence Platform

An advanced, mobile-responsive cybersecurity intelligence platform built with React, TypeScript, and Tailwind CSS. Features real-time analytics, risk assessment, compliance monitoring, and case studies to improve digital safety.

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ 
- npm v8+

### Installation

```bash
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

## 📱 NEW: Mobile Responsive Design

The platform is now **fully optimized for mobile devices**! All pages adapt perfectly to phones, tablets, and desktops.

### Mobile Features:
- ✅ Touch-friendly buttons (44px minimum)
- ✅ Readable text on all screen sizes
- ✅ No horizontal scrolling
- ✅ Responsive charts and graphs
- ✅ Mobile-optimized navigation menu
- ✅ Fast loading on 3G/4G networks

### Testing on Mobile:
```bash
# Start dev server
npm run dev

# On your phone (same WiFi):
# Visit: http://YOUR_COMPUTER_IP:5173
```

📚 **Full Mobile Documentation:**
- `MOBILE_RESPONSIVE_UPDATES.md` - Complete changelog
- `MOBILE_TESTING_GUIDE.md` - How to test
- `QUICK_START_MOBILE.md` - Quick start guide

## 🎯 Key Features

### 1. **Interactive Analytics Dashboard**
- Real-time visualization of 60+ survey responses
- Threat encounter statistics and distribution analysis
- 2FA (Two-Factor Authentication) adoption metrics
- Overall risk assessment indicators
- Dynamic charts using Chart.js (Doughnut & Bar charts)

### 2. **Personalized Risk Analyzer**
- Interactive cyber risk scoring system
- Evaluates security factors (2FA, passwords, updates)
- Real-time visualization
- Downloadable PDF reports
- Risk categorization: Low 🟢 | Medium 🟡 | High 🔴

### 3. **Compliance & Legal Framework**
Comprehensive coverage including:
- GDPR compliance
- ISO 27001 standards
- SOC 2 Type II certification
- IT Act 2000 (India)
- HIPAA guidelines
- PCI DSS standards

### 4. **Real-World Case Studies**
Four detailed cybercrime investigations:
- AI Voice Deepfake Scam - Mumbai
- WhatsApp Business Account Takeover - Delhi
- Cryptocurrency Investment Scam - Bangalore
- Ransomware Attack on Hospital - Pune

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS 3 (mobile-first)
- **Build Tool:** Vite (⚡ super fast)
- **Routing:** React Router v6
- **Charts:** Chart.js + react-chartjs-2
- **Icons:** Lucide React
- **CSV Parsing:** PapaParse
- **PDF Generation:** jsPDF

## 📁 Project Structure

```
cyberinsight/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive navigation
│   │   └── Dashboard.tsx      # Analytics dashboard
│   ├── pages/
│   │   ├── Home.tsx           # Landing page
│   │   ├── RiskAnalyzer.tsx   # Risk assessment
│   │   ├── Compliance.tsx     # Compliance info
│   │   ├── CaseStudy.tsx      # Case studies list
│   │   └── CaseStudyDetail.tsx # Case details
│   ├── App.tsx                # Main app with routing
│   ├── main.tsx               # React entry point
│   └── index.css              # Global styles + mobile CSS
├── public/
│   └── data.csv               # Survey response data
├── tailwind.config.js         # Tailwind config (with mobile breakpoints)
├── vite.config.ts             # Vite configuration
└── Mobile Documentation/
    ├── MOBILE_RESPONSIVE_UPDATES.md
    ├── MOBILE_TESTING_GUIDE.md
    ├── MOBILE_CHANGES_REFERENCE.md
    └── QUICK_START_MOBILE.md
```

## 📊 Pages & Features

### 1. **Home** (`/`)
- Hero section with CTA buttons
- Feature highlights (6 key features)
- Statistics showcase
- Fully responsive design

### 2. **Dashboard** (`/dashboard`)
- Real-time statistics cards:
  - Total Responses
  - Threat Encounter Rate
  - 2FA Adoption Rate
  - Overall Risk Status
- Interactive Charts:
  - Risk Distribution (Doughnut)
  - Security Metrics (Bar)
- Insights and recommendations
- Mobile-optimized card layouts

### 3. **Risk Analyzer** (`/risk-analyzer`)
- Personal & Group risk assessment
- Interactive form with touch-friendly inputs
- Real-time risk calculation
- Downloadable PDF reports
- Mobile-responsive forms

### 4. **Compliance** (`/compliance`)
- 6 regulatory standards
- Visual compliance status
- Detailed requirement lists
- Mobile-friendly card layouts

### 5. **Case Studies** (`/case-study`)
- Real-world incident analysis
- Detailed case breakdowns
- Lessons learned
- Prevention strategies

## 📱 Responsive Breakpoints

```javascript
xs:  475px  // Extra small phones
sm:  640px  // Small phones & up
md:  768px  // Tablets & up
lg:  1024px // Laptops & up
xl:  1280px // Desktops & up
2xl: 1536px // Large desktops
```

## 🎨 Design System

- **Color Scheme:** Dark theme (slate-950) with cyan/blue/purple accents
- **Responsive:** Mobile-first design approach
- **Accessibility:** WCAG 2.1 compliant, 44px touch targets
- **Performance:** Optimized bundle size (~150KB gzipped)
- **Modern UI:** Glassmorphism, gradients, smooth animations

## 📈 Real Data Included

### Survey Data (data.csv)
60+ authentic survey responses covering:
- Demographics & security practices
- Threat encounter experiences
- 2FA adoption rates
- Password security habits

### India Cybercrime Statistics (2024-2025)
- **7.4 Lakh+** complaints registered
- **₹1,750 Crores** in financial fraud
- **46%** case resolution rate
- **Top threats:** AI scams, UPI fraud, crypto schemes

## 🔧 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#0ea5e9',  // Your brand color
  }
}
```

### Add New Pages
1. Create file in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navbar in `src/components/Navbar.tsx`

### Modify Dashboard Data
Replace `/public/data.csv` with your data. Required columns:
- `Have you ever encountered any cyber threat? `
- `Do you use two-factor authentication (2FA)?`

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
# Deploy dist/ folder
```

## 🔐 Security Features

- **CSP Headers:** Content Security Policy configured
- **HTTPS Ready:** Production build optimized
- **Input Validation:** Data validation for CSV parsing
- **No Secrets:** No API keys in frontend code

## 🚨 Report Cybercrime

### Golden Hour Rule
Report within **1 hour** for maximum recovery:
- Within 1 hour: 70% recovery rate
- Within 24 hours: 40% recovery rate
- After 48 hours: <10% recovery rate

### Contact Information:
- **National Helpline:** 1930 (24/7 toll-free)
- **Online:** [cybercrime.gov.in](https://www.cybercrime.gov.in)
- **Email:** complaints@cybercrime.gov.in

## 📚 Additional Resources

- **Ministry of Electronics & IT:** [meity.gov.in](https://www.meity.gov.in)
- **CERT-In:** [cert-in.org.in](https://www.cert-in.org.in)
- **Data Protection:** Digital Personal Data Protection Act, 2023

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on mobile devices
5. Submit a pull request

## 📄 License

© 2024-2026 CyberInsight. All rights reserved.

## 🆘 Support

For issues or questions, create an issue on GitHub.

---

**Built with ❤️ for cybersecurity awareness | Now fully mobile-optimized 📱**
