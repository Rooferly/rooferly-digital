# 🔍 Google Analytics 4 Setup Guide for Rooferly

## Step 1: Create GA4 Property in Google Analytics

### 1.1 Access Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Start measuring" or "Create Property"

### 1.2 Create Property
1. **Property Name**: `Rooferly Website Analytics`
2. **Time Zone**: `United States - Central Time`
3. **Currency**: `US Dollar`
4. **Industry Category**: `Construction & Contracting`
5. **Business Size**: Choose appropriate size

### 1.3 Configure Data Stream
1. Choose **"Web"** as your platform
2. **Website URL**: `https://rooferly.co`
3. **Stream Name**: `Rooferly Main Website`
4. **Enhanced Measurement**: Enable all options (recommended)

### 1.4 Get Your Measurement ID
After creating the stream, you'll see your **Measurement ID** in format: `G-G9CRPQTXKJ`

**🔑 SAVE THIS ID - You'll need it for your website!**

---

## Step 2: Enhanced Measurement Features

Enable these automatic tracking features in GA4:

### ✅ Recommended Settings for Rooferly:
- **Page views** ✅ (Always on)
- **Scrolls** ✅ (Track engagement)
- **Outbound clicks** ✅ (Track external links)
- **Site search** ✅ (If you have search)
- **Video engagement** ✅ (For roof visualization videos)
- **File downloads** ✅ (PDFs, brochures, etc.)

---

## Step 3: Custom Events for Roofing Business

Set up these custom events specific to your roofing business:

### 🏠 Lead Generation Events
- `estimate_request` - When someone requests an estimate
- `phone_click` - When someone clicks your phone number
- `contact_form_submit` - Contact form submissions
- `service_area_check` - When someone checks if you serve their area

### 🔍 Website Analysis Events  
- `website_analysis_start` - When analysis begins
- `competitor_research` - When viewing competitor data
- `seo_recommendations_view` - When viewing SEO suggestions
- `report_download` - When downloading analysis reports

### 📍 Local SEO Events
- `location_search` - Searching for service areas
- `google_my_business_click` - GMB profile interactions
- `directions_click` - Getting directions to your business

---

## Step 4: Conversion Goals

Set up these conversions for your roofing business:

### 🎯 Primary Conversions
1. **Lead Submissions**: Any form submission
2. **Phone Calls**: Phone number clicks
3. **Estimate Requests**: Specific estimate forms
4. **Service Inquiries**: Contact about services

### 📊 Secondary Conversions  
1. **Email Signups**: Newsletter subscriptions
2. **Brochure Downloads**: PDF downloads
3. **Video Engagement**: Roof visualization videos
4. **Social Media Follows**: Social profile visits

---

## Step 5: Audience Segments

Create these audiences for better targeting:

### 🏘️ Geographic Audiences
- **Chicago Metro**: Users in Chicagoland area
- **High-Value Suburbs**: Premium neighborhoods
- **Service Area**: All areas you serve

### 🎯 Behavioral Audiences
- **High Intent**: Viewed multiple service pages
- **Returning Visitors**: Came back within 30 days
- **Mobile Users**: Primarily mobile traffic
- **Roof Replacement Interest**: Viewed replacement pages

---

## Step 6: Custom Dimensions

Set up these custom dimensions for roofing insights:

### 📋 Recommended Custom Dimensions
1. **Service Type**: roof replacement, repair, inspection
2. **Lead Source**: organic, paid, referral, direct
3. **Geographic Area**: specific city/suburb
4. **Device Type**: mobile, desktop, tablet
5. **Customer Type**: residential, commercial
6. **Urgency Level**: emergency, planned, research

---

## Step 7: Integration Checklist

### ✅ Website Integration
- [ ] Add GA4 Measurement ID to website
- [ ] Verify tracking is working
- [ ] Test custom events
- [ ] Configure enhanced ecommerce

### ✅ Google Tag Manager Integration
- [ ] Link GA4 to existing GTM (GTM-N2FX2JVW)
- [ ] Set up custom event triggers
- [ ] Configure conversion tracking
- [ ] Test all triggers

### ✅ Other Google Services
- [ ] Link to Google Ads (for lead tracking)
- [ ] Connect Google Search Console
- [ ] Link Google My Business
- [ ] Set up Google Data Studio reports

---

## Step 8: Testing & Verification

### 🧪 Testing Checklist
1. **Real-time Reports**: Check if data appears immediately
2. **Event Tracking**: Test custom events fire correctly
3. **Conversion Tracking**: Verify goals are recording
4. **Cross-Device**: Test on mobile and desktop
5. **Different Browsers**: Chrome, Safari, Firefox

### 📊 Verification Tools
- Use **GA4 DebugView** to see events in real-time
- Install **Google Analytics Debugger** Chrome extension
- Check **Real-time reports** in GA4 dashboard
- Use **GA4 Measurement Protocol** for testing

---

## 🚨 Important Notes for Rooferly

### Privacy & Compliance
- ✅ GA4 is cookieless-first (better for privacy)
- ✅ Set up consent management if required
- ✅ Configure data retention settings
- ✅ Review data collection for GDPR/CCPA compliance

### Roofing Industry Specific
- Focus on **local search performance**
- Track **service area expansion** opportunities  
- Monitor **seasonal trends** in roofing demand
- Measure **emergency vs planned** service requests

---

**Next Steps**: Once you have your GA4 Measurement ID, I'll help you integrate it into your Rooferly website and set up all the custom tracking!
