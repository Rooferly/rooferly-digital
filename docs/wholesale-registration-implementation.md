# Wholesale Registration Form Implementation Guide

## 🎯 **GOAL**: Replace BSS B2B Solution ($510/year savings)

This guide walks you through implementing the custom wholesale registration form to completely replace BSS B2B's functionality.

---

## 📋 **Implementation Steps**

### **Step 1: Upload Custom Snippets**

1. **Go to Shopify Admin** → Online Store → Themes → Actions → Edit Code
2. **Create new snippets**:
   - `snippets/wholesale-registration-form.liquid`
   - `snippets/wholesale-auto-tagger.liquid`
3. **Copy the content** from our generated files

### **Step 2: Create Custom Page Template**

1. **In the Templates folder**, create:
   - `templates/page.wholesale-registration.liquid`
2. **Copy the content** from our generated template file

### **Step 3: Update Wholesale Registration Page**

1. **Go to Shopify Admin** → Online Store → Pages
2. **Find your "wholesale-registration" page**
3. **Change the template** from default to `page.wholesale-registration`
4. **Save changes**

### **Step 4: Set Up Auto-Tagging Automation**

**Option A: Shopify Flow (Recommended)**
1. **Go to Shopify Admin** → Apps → Flow
2. **Create new workflow**:
   - **Trigger**: Customer created
   - **Condition**: Customer tags contain "wholesale-application"
   - **Action**: Add customer tag "wholesale"
   - **Action**: Send admin notification email

**Option B: Manual Review Process**
1. **Go to Shopify Admin** → Customers
2. **Filter by tag**: "wholesale-application"
3. **Manually add** "wholesale" tag after review
4. **Remove** "wholesale-application" tag when approved

### **Step 5: Test the New System**

1. **Visit**: `https://whiskeyshoresbbq.com/pages/wholesale-registration`
2. **Fill out the form** with test data
3. **Submit and verify**:
   - Customer is created in Shopify
   - Tags are applied correctly
   - Email notifications work
   - Wholesale pricing displays on products

### **Step 6: Remove BSS B2B Integration**

⚠️ **ONLY DO THIS AFTER TESTING** ⚠️

1. **Go to Shopify Admin** → Apps
2. **Find BSS: B2B Solution**
3. **Uninstall the app**
4. **Save $510/year** 🎉

---

## 🔧 **Features Replaced**

| BSS B2B Feature | Custom Implementation |
|----------------|----------------------|
| Registration Form | ✅ `wholesale-registration-form.liquid` |
| Auto-tagging | ✅ Shopify Flow automation |
| Customer Management | ✅ Native Shopify customers |
| Wholesale Pricing | ✅ Already implemented with Liquid logic |
| Order Restrictions | ✅ Already implemented (6-unit minimum) |

---

## 🎨 **Styling & Branding**

The form automatically matches your website's branding:
- **Primary Color**: `#ca663f` (your brand orange)
- **Typography**: Open Sans (consistent with site)
- **Responsive Design**: Mobile-optimized
- **Professional Layout**: Clean, modern form design

---

## 📊 **Data Collected**

The new form collects:
- **Personal Info**: Name, email, phone
- **Business Details**: Name, type, location
- **Volume Estimates**: Expected annual purchases
- **Product Interest**: Which seasonings they want
- **Additional Notes**: Custom requirements

---

## 🚀 **Next Steps After Implementation**

1. **Monitor form submissions** in Shopify Admin → Customers
2. **Set up email notifications** for new wholesale applications
3. **Create approval workflow** for reviewing applications
4. **Track savings**: $510/year from removing BSS B2B
5. **Test wholesale pricing** with approved customers

---

## 🛠 **Troubleshooting**

**Form not appearing?**
- Check template assignment on the page
- Verify snippet files are uploaded correctly

**Auto-tagging not working?**
- Ensure Shopify Flow is set up properly
- Check customer creation triggers

**Styling issues?**
- CSS is embedded in the snippet
- Check for theme conflicts

---

## 💰 **Cost Savings Achieved**

- **BSS B2B Solution**: $42.50/month = $510/year
- **Custom Implementation**: $0/month = $0/year
- **Annual Savings**: $510 🎯

**Ready to implement? Let's get this $510/year savings locked in!**

