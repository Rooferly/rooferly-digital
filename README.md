# Rooferly - Digital-First Roofing Marketing Website

A production-quality marketing website for Rooferly, a Chicago-based residential roofing service company. Built with Next.js 14, TypeScript, Tailwind CSS, and modern UI components.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📋 Project Overview

### Brand & Positioning
- **Brand**: Rooferly — online-first residential roofing service
- **Tagline**: "Roofing Made Simple"
- **Promise**: Fast, transparent estimates, easy scheduling, pro crews, and clear communication
- **Geography**: Chicagoland area (placeholder service areas included)

### Key Features
- ✅ Instant online estimates (mock implementation)
- ✅ Priority Scheduling upsell option
- ✅ Clear Good/Better/Best pricing packages
- ✅ Digital contracts and financing options (UI only)
- ✅ Progress updates via text/email (mock)
- ✅ Fully responsive design with dark mode support
- ✅ SEO optimized with structured data
- ✅ Analytics tracking (console-based for development)

## 🏗 Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **Form Handling**: React Hook Form (built-in validation)
- **State Management**: React built-in (useState, useEffect)

## 📁 Project Structure

```
rooferly/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── estimate/          # Estimate form page
│   ├── legal/             # Privacy & Terms pages
│   ├── pricing/           # Pricing page with tiers
│   ├── resources/         # Resources & guides
│   ├── schedule/          # Scheduling page
│   ├── service-areas/     # Service areas page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap.xml
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui base components
│   ├── site-header.tsx   # Main navigation
│   ├── site-footer.tsx   # Footer
│   ├── hero.tsx          # Hero section
│   ├── pricing-tiers.tsx # Pricing components
│   ├── estimate-form.tsx # Estimate widget
│   ├── schedule-grid.tsx # Calendar scheduling
│   └── ...              # Other components
├── lib/                  # Utilities
│   └── utils.ts          # Helper functions
└── public/              # Static assets
    └── (placeholder images)
```

## 🎨 Design System

### Colors
- **Primary**: `#0EA5E9` (sky-500)
- **Accents**: Tailwind slate, emerald, and amber variants
- **Design**: Modern, airy design with rounded-2xl cards and subtle shadows

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear heading structure with proper semantic HTML

### Components
- Rounded corners (rounded-2xl)
- Subtle shadows and hover effects
- Ample white space
- Consistent spacing system

## 📄 Pages & Features

### Home Page (`/`)
- Hero with value proposition and CTAs
- Value props section (5 key differentiators)
- "How it Works" (3-step process)
- Pricing tiers snapshot
- Customer testimonials carousel
- Trust indicators and badges

### Pricing Page (`/pricing`)
- Detailed Good/Better/Best tiers
- Roof type toggles (Asphalt/Metal/Flat)
- Add-ons grid with popular upgrades
- Pricing comparison table
- FAQ accordion (10 curated Q&As)

### Estimate Page (`/estimate`)
- 4-step estimate wizard
- Address input with local pricing
- Roof type and size selection
- Instant estimate calculation (mock)
- Lead capture form integration

### Schedule Page (`/schedule`)
- Calendar-style availability grid
- Priority Scheduling toggle
- Real-time slot selection
- Crew assignment display
- Custom scheduling options

### Additional Pages
- **About**: Mission, values, team, certifications
- **Service Areas**: Coverage map and area details
- **Resources**: Blog-style guides and downloadable tools
- **Contact**: Multiple contact methods and business info
- **Legal**: Privacy policy and terms of service

## 🔧 Form Handling & Lead Capture

### Lead Forms
All forms include:
- Client-side validation
- Success/error states
- UTM parameter capture
- Hidden fields for analytics
- GDPR-compliant consent checkboxes

### Form Submissions
- Mock API calls with console logging
- Easy integration points for real CRMs
- TODO comments for HubSpot/Zoho integration

### Analytics Tracking
Events tracked (console-based):
- `estimate_started`
- `estimate_submitted`
- `schedule_opened`
- `schedule_confirmed`
- `cta_clicked`
- `priority_selected`

## 🚀 Deployment & Integration

### Ready for Production
- All pages are fully functional
- Responsive design tested
- Performance optimized
- SEO-ready with metadata

### TODO: Real Integrations
The following areas have clear integration points marked with TODO comments:

1. **CRM Integration** (`lib/utils.ts`)
   - Replace `submitLead()` with real API calls
   - Integrate HubSpot, Zoho, or Salesforce

2. **Estimate API** (`components/estimate-form.tsx`)
   - Connect to real pricing calculation service
   - Integrate satellite imagery APIs

3. **Analytics** (`lib/utils.ts`)
   - Replace console logging with Google Analytics
   - Add conversion tracking

4. **Payment Processing**
   - Integrate Stripe for financing options
   - Add payment forms to scheduling flow

5. **Scheduling System**
   - Connect to real calendar system (Calendly, etc.)
   - Integrate crew management software

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Fully responsive across all devices
- Touch-friendly interface elements
- Optimized for mobile conversion

## ♿ Accessibility

- Semantic HTML structure
- Alt text for images
- Focus states for interactive elements
- 4.5:1 contrast ratios
- Screen reader compatible

## 🔍 SEO Features

- Next.js Metadata API
- OpenGraph tags on all pages
- JSON-LD structured data (LocalBusiness)
- XML sitemap generation
- Robots.txt configuration
- Performance optimized (target >90 Lighthouse score)

## 🎯 Marketing Features

### Conversion Optimization
- Multiple CTAs throughout site
- Sticky CTA bar on scroll
- Priority Scheduling upsells
- Social proof and testimonials
- Trust badges and certifications

### Lead Generation
- Low-friction estimate forms
- Multiple contact methods
- Resource downloads for lead capture
- Exit-intent capabilities (ready to implement)

## 📊 Performance

- Next.js Image optimization
- Lazy loading for non-critical content
- Efficient bundle splitting
- Fast page loads and smooth animations

## 🛠 Development Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Package Management
npm install          # Install dependencies
npm update          # Update packages
```

## 🤝 Contributing

This is a production-ready marketing website. For customization:

1. Update brand colors in `tailwind.config.ts`
2. Replace placeholder content in components
3. Add real images to `public/` directory
4. Configure real API integrations
5. Update service areas and pricing

## 📧 Support

For questions about implementation or customization, the codebase includes comprehensive TODO comments marking integration points and clear component documentation.

## 📄 License

This project is proprietary software for Rooferly marketing purposes.
