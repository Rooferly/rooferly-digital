# Rooferly Pre-Launch Email Sequence Template

## 📧 **Formspree.io Setup Instructions**

### **Step 1: Create Formspree Account**
1. Go to **formspree.io** and sign up
2. Create a new form named "Rooferly Pre-Launch VIP List"
3. Copy your form endpoint ID
4. Update `components/coming-soon-overlay.tsx` line 35: Replace `YOUR_FORM_ID` with your actual form ID

### **Step 2: Configure Auto-Response**
In your Formspree dashboard:
1. Go to your form settings
2. Enable "Auto-responder" 
3. Use the template below for the immediate response

---

## 📨 **Email Sequence Templates**

### **Email 1: Immediate Auto-Response** (Formspree Auto-responder)

**Subject**: 🎉 Welcome to the Rooferly VIP List + Your Special Code Inside

**Body**:
```
Hi there!

Welcome to the exclusive Rooferly VIP list! You're now part of a select group getting first access to Chicago's most revolutionary roofing experience.

🎁 YOUR EXCLUSIVE EARLY-BIRD CODE: **ROOFVIP25**
(Save 25% on your complete roof replacement - valid through launch + 30 days)

---

## What is Rooferly?

Rooferly is Chicago's first 100% digital asphalt shingle roof replacement company. We're revolutionizing how homeowners buy new roofs by making it as simple as shopping online.

### Our Revolutionary Process:
✅ **Instant Estimates** - Get accurate pricing in under 2 minutes using satellite technology
✅ **Virtual Visualization** - See your new roof before you buy with AR technology  
✅ **100% Online** - No pushy sales visits or door-to-door tactics
✅ **Asphalt Shingle Specialists** - We focus on one thing and do it perfectly
✅ **Transparent Pricing** - Fixed costs, no hidden fees, no surprises

---

## How It Works:

**Step 1**: Enter your address on rooferly.com
**Step 2**: Our satellite technology measures your roof automatically  
**Step 3**: Choose your asphalt shingle style and color
**Step 4**: See your new roof with virtual visualization
**Step 5**: Complete your purchase online - done!

*No sales appointments. No pressure tactics. No overwhelming choices.*

---

## Pre-Launch Exclusive Opportunity 🚀

**Launch Date**: Spring 2024 (Estimated: March-April)

As a VIP member, you get:
• **25% Early-Bird Discount** (Save $3,000-$8,000)
• **First Access** to our booking calendar
• **Priority Installation** scheduling
• **Exclusive Updates** on our launch progress

---

## Why We're Different:

**Traditional Roofing Companies:**
❌ High-pressure sales visits
❌ Overwhelming material choices  
❌ Hidden costs and surprises
❌ Pushy door-to-door salespeople
❌ Multiple contractor meetings

**Rooferly:**
✅ 100% online process
✅ Specialized in asphalt shingles only
✅ Transparent, fixed pricing
✅ No sales visits required
✅ Complete in under 30 minutes

---

## Stay Connected:

We'll send you updates as we approach launch, including:
• Behind-the-scenes development progress
• Exclusive previews of our technology
• Additional savings opportunities
• Launch date announcements

Questions? Just reply to this email - we read every message!

Welcome to the future of roofing,
The Rooferly Team

P.S. Remember your code: **ROOFVIP25** - Don't lose it! 

---

Rooferly
Chicago's Digital-First Roof Replacement Specialists
📧 hello@rooferly.com
🌐 rooferly.com

*You're receiving this because you signed up for early access to Rooferly. You can unsubscribe at any time.*
```

---

### **Email 2: Follow-up (Send 3 days later)**

**Subject**: 🏠 Your Roof Replacement Questions Answered + Process Preview

**Body**:
```
Hi [Name],

It's been a few days since you joined our VIP list, and we wanted to share more details about what makes Rooferly special.

## Most Common Questions We Get:

**Q: "Is this legit? Can I really buy a roof online?"**
A: Absolutely! Just like you can buy a car online now, we're bringing roofing into the digital age. Our satellite technology is the same used by insurance companies - it's incredibly accurate.

**Q: "What about quality? How do I know you'll do good work?"**
A: We're licensed, insured, and backed by a 25-year warranty. Our crews are certified professionals who specialize exclusively in asphalt shingle installation.

**Q: "Why only asphalt shingles?"**
A: By focusing on one material, we've perfected our process and can offer better quality and pricing than general contractors who try to do everything.

**Q: "What if something goes wrong?"**
A: We stand behind our work with comprehensive warranties and 24/7 customer support. Plus, our digital process creates a detailed record of everything.

## Sneak Peek: Our Technology in Action

[When ready, include screenshots/images of:]
• Satellite roof measurement technology
• Virtual roof visualization tool
• Color and style selection interface
• Pricing calculator in action

## Pre-Launch Pricing Preview:

**Average Chicago Home (2,000 sq ft)**:
• Traditional Roofing Company: $18,000-$25,000
• Rooferly Standard Price: $14,500
• Your VIP Price with ROOFVIP25: **$10,875**

*Savings: $7,125-$14,125 vs traditional companies!*

## What's Next?

We're currently in final testing phases and preparing our launch. Here's what's coming:

**February 2024**: Beta testing with select customers
**March 2024**: Soft launch to VIP list
**April 2024**: Public launch

You'll be the first to know when we're ready!

Keep your VIP code handy: **ROOFVIP25**

Best regards,
The Rooferly Team

P.S. Know someone who needs a new roof? Forward this email - we love referrals!
```

---

### **Email 3: Launch Announcement (Send when ready)**

**Subject**: 🚀 WE'RE LIVE! Rooferly is Now Available + Your VIP Access

**Body**:
```
[Launch announcement email with direct link to start the process and reminder of VIP code]
```

---

## 🔧 **Technical Setup Notes**

### **Form Integration:**
- Form endpoint: `https://formspree.io/f/YOUR_FORM_ID`
- Captures: email, source, timestamp, message
- Auto-response: Enabled with Email 1 template
- Notifications: Send to your email when new signups occur

### **Data Export:**
- Weekly CSV export of all signups
- Import into your preferred email marketing tool for follow-ups
- Track conversion rates from pre-launch to customers

### **Analytics Tracking:**
- Google Analytics event: `pre_launch_signup`
- Track source: `coming-soon-overlay`
- Monitor signup conversion rates

### **Security Features:**
- Formspree includes spam protection
- Email validation on frontend
- Rate limiting to prevent abuse

---

## 📊 **Launch Sequence Metrics to Track**

### **Email Performance:**
- Open rates (target: >40%)
- Click-through rates (target: >5%)
- Conversion to actual customers (track VIP code usage)

### **Pre-Launch Signups:**
- Daily signup rate
- Source tracking (overlay vs other)
- Geographic distribution (focus on Chicagoland)

---

**Next Steps:**
1. Set up Formspree account and update form ID
2. Configure auto-responder with Email 1 template  
3. Plan follow-up email sequence timing
4. Create process preview images for Email 2
5. Set up analytics tracking for signup conversion

*This system will capture high-quality leads and convert them into VIP customers with exclusive pricing!*
