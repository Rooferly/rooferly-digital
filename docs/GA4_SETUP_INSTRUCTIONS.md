# Google Analytics 4 Setup Instructions

## Current Configuration

Your Rooferly website is now configured with:

- **GA4 Measurement ID**: `G-G9CRPQTXKJ`
- **Google Tag Manager ID**: `GTM-N2FX2JVW`
- **Business Address**: 1552 S. Rte 59 #1415, Naperville, IL 60564

## Environment Setup

1. **Create `.env.local` file** in your project root:
```bash
# Copy the example file
cp env.example .env.local
```

2. **Add your environment variables** to `.env.local`:
```env
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-G9CRPQTXKJ
NEXT_PUBLIC_GTM_ID=GTM-N2FX2JVW
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

## Google Analytics 4 Setup

### 1. Verify GA4 Property
- Go to [Google Analytics](https://analytics.google.com)
- Ensure you have a GA4 property for `rooferly.co`
- Confirm the Measurement ID is `G-G9CRPQTXKJ`

### 2. Configure Data Streams
- In GA4, go to **Admin** → **Data Streams**
- Select your web stream for `rooferly.co`
- Verify the stream URL matches your domain

### 3. Enhanced Ecommerce Setup
For roofing lead tracking, configure these events:
- `estimate_request` - When users request estimates
- `phone_call` - Phone number clicks
- `email_click` - Email address clicks
- `service_page_view` - Service page visits
- `location_page_view` - Location page visits

## Google Tag Manager Setup

### 1. Verify GTM Container
- Go to [Google Tag Manager](https://tagmanager.google.com)
- Ensure container `GTM-N2FX2JVW` exists
- Verify it's configured for `rooferly.co`

### 2. Configure Tags
Set up these tags in GTM:
- **GA4 Configuration Tag** with Measurement ID `G-G9CRPQTXKJ`
- **Conversion Tracking** for estimate requests
- **Enhanced Ecommerce** for lead value tracking

## Testing

### Development Testing
1. Start your dev server: `npm run dev`
2. Open browser dev tools → Network tab
3. Visit `http://localhost:3000`
4. Look for requests to:
   - `googletagmanager.com/gtag/js?id=G-G9CRPQTXKJ`
   - `googletagmanager.com/gtm.js?id=GTM-N2FX2JVW`

### Production Testing
1. Deploy to Vercel
2. Visit `rooferly.co`
3. Use Google Analytics Realtime reports to verify tracking
4. Use GTM Preview mode to test tag firing

## Roofing-Specific Tracking

The setup includes custom tracking for:

- **Estimate Requests**: Track when users request roof estimates
- **Service Interest**: Track which roofing services get most attention
- **Location Targeting**: Track which Chicago areas generate most leads
- **Contact Methods**: Track phone vs email preferences

## Verification Checklist

- [ ] Environment variables set in `.env.local`
- [ ] GA4 property configured for `rooferly.co`
- [ ] GTM container linked to domain
- [ ] Tags firing in development
- [ ] Real-time data showing in GA4
- [ ] Enhanced ecommerce events configured
- [ ] Address updated across all pages

## Next Steps

1. **Deploy to Production**: Push changes to trigger Vercel deployment
2. **Verify Live Tracking**: Check GA4 real-time reports
3. **Set Up Goals**: Configure conversion goals in GA4
4. **Create Dashboards**: Build custom reports for roofing metrics
5. **Monitor Performance**: Track lead generation and user behavior

## Support

If you need help with the setup:
- Check the browser console for any JavaScript errors
- Use GTM Preview mode to debug tag firing
- Verify environment variables are loaded correctly
- Test with GA4 DebugView for real-time event monitoring
