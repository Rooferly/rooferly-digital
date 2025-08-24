# 🚀 GA4 Quick Start for Rooferly

## ⚡ 5-Minute Setup

### 1. Get Your GA4 Measurement ID
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property: **"Rooferly Website Analytics"**
3. Add web stream for: **rooferly.co**
4. Copy your Measurement ID: `G-XXXXXXXXXX`

### 2. Add ID to Your Website
```bash
# Create environment file
cp rooferly-env.example .env.local

# Edit .env.local and add your ID:
NEXT_PUBLIC_ROOFERLY_GA4_ID=G-XXXXXXXXXX
```

### 3. Test Your Setup
```bash
# Start your development server
npm run dev

# Go to testing page
http://localhost:3000/ga4-testing
```

### 4. Verify Events
1. Open GA4 Real-time reports in another tab
2. Click "Run All Tests" on testing page
3. Watch events appear in GA4 real-time reports

---

## 🎯 What You're Tracking

### 📞 Lead Generation
- `estimate_request` - Roof estimate requests
- `service_inquiry` - Service page inquiries  
- `phone_call_click` - Phone number clicks
- `form_submission` - Contact form submissions

### 🔍 Website Analyzer Tool
- `website_analysis_start` - Analysis begins
- `seo_insights_view` - SEO results viewed
- `competitor_research` - Competitor analysis
- `report_download` - Analysis reports

### 🏠 Roofing Business Specific
- `roof_visualization_view` - Virtual roof viewer
- `service_page_view` - Service page engagement
- `estimate_complete` - Estimate calculations
- `lead_conversion` - Qualified leads

---

## 📊 Custom Dimensions

Your GA4 tracks these roofing-specific dimensions:

- **Service Type**: roof_replacement, roof_repair, inspection
- **Geographic Area**: chicago, suburbs, service_area
- **Lead Source**: organic, paid, referral, direct
- **Urgency Level**: emergency, planned, research
- **Customer Type**: residential, commercial

---

## ✅ Success Checklist

- [ ] GA4 property created for Rooferly
- [ ] Measurement ID added to `.env.local`
- [ ] Test events firing successfully
- [ ] Real-time reports showing data
- [ ] Custom events working
- [ ] Enhanced measurement enabled

---

## 🚨 Troubleshooting

### Events Not Showing?
1. Check your GA4 Measurement ID is correct
2. Verify `.env.local` file exists and has correct variable name
3. Make sure you're looking at Real-time reports (not standard reports)
4. Check browser console for errors

### Testing Tips
1. Use Chrome DevTools Network tab to see requests
2. Enable GA4 DebugView for detailed event inspection
3. Test in incognito mode to avoid ad blockers
4. Wait 1-2 minutes for events to appear in GA4

---

## 📞 Next Steps

Once GA4 is working:
1. Set up conversion goals in GA4
2. Create custom audiences for retargeting
3. Link to Google Ads for lead tracking
4. Connect Google Search Console
5. Set up automated reports

**🏠 You're now tracking every aspect of your roofing business digitally!**
