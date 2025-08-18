# Rooferly Deployment Guide

## 🚀 Quick Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Set environment variables (if needed)
vercel env add
```

### Netlify
```bash
# Build the project
npm run build

# Deploy build folder to Netlify
# Upload the .next folder or connect your Git repository
```

### Self-Hosted
```bash
# Build for production
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "rooferly" -- start
```

## 🔧 Integration Checklist

Before going live, integrate these real services:

### 1. CRM Integration
**File**: `lib/utils.ts` - `submitLead()` function

**Options**:
- HubSpot API
- Zoho CRM
- Salesforce
- Pipedrive

**Example HubSpot Integration**:
```typescript
export async function submitLead(leadData: any) {
  const response = await fetch('/api/hubspot/contacts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leadData)
  })
  return response.json()
}
```

### 2. Analytics Setup
**Files**: `lib/utils.ts` - `trackEvent()` function

**Google Analytics 4**:
```typescript
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}
```

**Add to `app/layout.tsx`**:
```typescript
import Script from 'next/script'

// Add Google Analytics script tags
<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  `}
</Script>
```

### 3. Estimate API
**File**: `components/estimate-form.tsx` - `calculateEstimate()` function

Replace mock calculation with real API:
```typescript
const calculateEstimate = async () => {
  const response = await fetch('/api/estimate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  const result = await response.json()
  setEstimate(result)
}
```

### 4. Scheduling System
**File**: `components/schedule-grid.tsx`

**Options**:
- Calendly API
- Acuity Scheduling
- Custom booking system
- Square Appointments

### 5. Payment Processing
**For financing and deposits**:
- Stripe
- Square
- PayPal

### 6. Email Service
**For notifications and marketing**:
- SendGrid
- Mailchimp
- ConvertKit

## 🔑 Environment Variables

Create `.env.local` file:
```bash
# Analytics
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX

# CRM
HUBSPOT_API_KEY=your_hubspot_key
ZOHO_CLIENT_ID=your_zoho_id

# Email
SENDGRID_API_KEY=your_sendgrid_key

# Maps (if using real maps)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_maps_key

# Database (if needed)
DATABASE_URL=your_database_url
```

## 📧 Email Templates

Set up automated emails for:
- Lead confirmations
- Estimate deliveries
- Appointment reminders
- Project updates
- Follow-up sequences

## 🗺 Real Images

Replace placeholder images in `public/` with:
- High-quality roof installation photos
- Before/after comparisons
- Team photos
- Service area maps
- Drone shots of completed projects

**Recommended sizes**:
- Hero images: 1200x900px
- Team photos: 400x400px
- Project photos: 800x600px
- Service map: 1000x800px

## 🔍 SEO Optimization

### Update Content
- Replace placeholder business info
- Add real service areas
- Update phone numbers and addresses
- Add actual customer testimonials

### Schema Markup
Update JSON-LD in `app/page.tsx`:
- Real business address
- Actual phone numbers
- Live social media links
- Real operating hours

### Local SEO
- Claim Google My Business
- Add business to local directories
- Get customer reviews
- Create location-specific pages

## 📱 Mobile Testing

Test on actual devices:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop (Chrome, Firefox, Safari)

### Performance Testing
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run performance audit
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
```

Target scores:
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

## 🛡 Security Checklist

- [ ] HTTPS certificate installed
- [ ] API keys in environment variables
- [ ] Form validation and sanitization
- [ ] Rate limiting on forms
- [ ] GDPR compliance (privacy policy)
- [ ] Security headers configured

## 📊 Monitoring Setup

### Error Tracking
- Sentry
- Bugsnag
- LogRocket

### Uptime Monitoring
- Pingdom
- UptimeRobot
- StatusPage

### Analytics Dashboard
- Google Analytics
- Hotjar for user behavior
- Google Search Console

## 🔄 Maintenance

### Regular Updates
- Next.js framework updates
- Security patches
- Content updates
- Pricing adjustments
- Service area expansions

### Backup Strategy
- Database backups (if applicable)
- Code repository (Git)
- Image assets backup
- Configuration backup

## 🎯 Launch Checklist

- [ ] All integrations tested
- [ ] Real business info updated
- [ ] Contact forms working
- [ ] Analytics tracking verified
- [ ] Mobile responsiveness confirmed
- [ ] Performance benchmarks met
- [ ] SEO metadata complete
- [ ] Legal pages reviewed
- [ ] Security measures implemented
- [ ] Monitoring systems active

## 📞 Support Contacts

For technical issues with this implementation:
- Check component TODO comments
- Review console logs for mock data
- Verify environment variables
- Test API endpoints

The codebase is production-ready with clear integration points marked throughout.
