# ✅ Rooferly GA4 Verification Guide

## 🎯 Your GA4 Setup
- **Measurement ID**: `G-G9CRPQTXKJ` ✅
- **GTM Container**: `GTM-N2FX2JVW` ✅
- **Environment**: Configured ✅

---

## 🧪 **Step-by-Step Testing**

### 1. Open Your Testing Dashboard
```
http://localhost:3000/ga4-testing
```

### 2. Open GA4 Real-time Reports
1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your "Rooferly Website Analytics" property
3. Navigate to: **Reports → Real-time → Overview**
4. Keep this tab open while testing

### 3. Run Your First Test
1. Click **"Run All Tests"** on the testing dashboard
2. Watch for events appearing in GA4 Real-time reports
3. Events should appear within 10-30 seconds

---

## 📊 **Events You Should See**

When you run the tests, look for these events in GA4:

### 🏠 **Roofing Business Events**
- ✅ `estimate_request` - Roof estimate tracking
- ✅ `service_inquiry` - Service page inquiries  
- ✅ `website_analysis_start` - Analyzer tool usage
- ✅ `seo_insights_view` - SEO analysis results
- ✅ `competitor_research` - Competitor analysis
- ✅ `generate_lead` - Lead conversion tracking
- ✅ `roof_visualization_view` - Virtual roof viewer
- ✅ `view_item` - Service page views

### 🔄 **Automatic Events**
- ✅ `page_view` - Page visits
- ✅ `scroll` - Scroll depth tracking
- ✅ `session_start` - New sessions
- ✅ `first_visit` - New users

---

## 🔍 **Advanced Verification**

### Using Chrome DevTools
1. Open Chrome DevTools (F12)
2. Go to **Network** tab
3. Filter by "collect" 
4. Run tests and see GA4 requests being sent

### Using GA4 DebugView
1. In GA4, go to **Configure → DebugView**
2. Enable debug mode for detailed event inspection
3. See real-time event parameters and custom dimensions

---

## 🚨 **Troubleshooting**

### Events Not Showing?
1. ✅ Check `.env.local` has correct GA4 ID: `G-G9CRPQTXKJ`
2. ✅ Restart development server after environment changes
3. ✅ Clear browser cache and reload page
4. ✅ Test in incognito mode (to avoid ad blockers)
5. ✅ Wait 1-2 minutes for events to appear

### Still Not Working?
1. Check browser console for JavaScript errors
2. Verify you're looking at **Real-time** reports (not standard reports)
3. Make sure you selected correct GA4 property
4. Test on different browser/device

---

## 🎯 **Success Indicators**

✅ **Basic Tracking Working**: Page views appear in real-time  
✅ **Custom Events Working**: Test events fire successfully  
✅ **Enhanced Measurement**: Scroll events, outbound clicks tracked  
✅ **Roofing Events**: Business-specific events recording  
✅ **Custom Dimensions**: Service type, location data captured  

---

## 📈 **Next Steps After Verification**

Once GA4 is working:

### 1. Set Up Conversions
- Mark important events as conversions in GA4
- Set up goal values for lead generation
- Configure enhanced ecommerce for service tracking

### 2. Create Audiences
- **High Intent**: Users who viewed multiple service pages
- **Chicago Area**: Local visitors in your service area
- **Mobile Users**: Mobile-first audience for retargeting

### 3. Link Other Services
- Connect Google Ads for conversion tracking
- Link Google Search Console for SEO data
- Set up Google My Business integration

### 4. Custom Reports
- Create roofing industry specific reports
- Set up automated insights and alerts
- Build executive dashboards for business metrics

---

## 🏠 **Rooferly-Specific Metrics to Monitor**

- **Lead Generation Rate**: Forms / Sessions
- **Service Page Engagement**: Time on roofing service pages
- **Local Search Performance**: Chicago area traffic
- **Mobile Conversion Rate**: Mobile leads vs desktop
- **Seasonal Trends**: Roofing demand by month
- **Emergency vs Planned**: Service urgency patterns

---

**🎉 You're now tracking every aspect of your roofing business with GA4!**
