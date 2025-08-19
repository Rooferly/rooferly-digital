# Cursor + Playwright Visual Development Workflow
**Best Practices for Iterative UI/UX Design with Automated Visual Validation**

---

## 🎯 **Workflow Overview**

This workflow creates an automated feedback loop for visual development:
1. **Design Reference** → Cursor applies style guide principles to code
2. **Code Changes** → Automated deployment/preview 
3. **Visual Validation** → Playwright captures and analyzes UI
4. **Feedback Loop** → Compare against design standards and iterate

---

## 🎨 **Rooferly Design Standards Reference**

> **📁 IMPORTANT**: This workflow automatically integrates with your comprehensive brand guidelines:
> - **Primary Reference**: `docs/brand-guide.md`
> - **SEO Guidelines**: `docs/MARKETING_SEO_STRATEGY.md`
> - **Implementation TODOs**: `docs/SEO_IMPLEMENTATION_TODOS.md`

### **Brand Colors** (from brand-guide.md)
```css
:root {
  /* Primary Colors */
  --steel-grey: #4A5568;
  --burnt-orange: #D97706;
  
  /* Supporting Colors */
  --white: #FFFFFF;
  --light-gray: #F6F6F6;
  --charcoal: #2D2D2D;
}
```

### **Typography Standards** (from brand-guide.md)
- **Headlines**: Inter/Montserrat (bold, clean)
- **Body Text**: Open Sans/Roboto (readable, professional)
- **Hierarchy**: Clear size differentiation (h1: 2.5rem, h2: 2rem, h3: 1.5rem)

### **Design Principles** (from brand-guide.md)
- ✅ Simple, clean layouts
- ✅ Bold CTAs in burnt orange
- ✅ Visual proof (photos, before/after sliders)
- ✅ Trust signals (licenses, warranties, reviews)
- ✅ Flat, simple iconography (shields, checkmarks, houses, maps)
- ✅ Steel grey for professionalism, burnt orange for warmth/action

### **Content Guidelines** (from brand-guide.md)
- Short, benefit-driven copy
- Scannable layouts
- Headline formula: Action + Benefit + Simplicity
- Words to use: "Get your instant estimate today," "See your new roof before you buy," "Roofing, made simple"
- Avoid: unexplained jargon, high-pressure sales lines, old-school clichés

### **Business Model Constraints** (from brand-guide.md)
- ✅ **ONLY** full roof replacements (no repairs)
- ✅ **ONLY** asphalt shingle roofs (no metal/tile)
- ✅ **ONLY** online sales (no in-person appointments)

### **SEO Focus Areas** (from MARKETING_SEO_STRATEGY.md)
- **Primary Keywords**: "roof replacement chicago," "asphalt shingle roofing chicago"
- **Unique Positioning**: "buy roof online chicago," "roof replacement without sales visit"
- **Content Pillars**: Educational content, Local authority, Technology innovation, Transparency & trust

---

## 🔄 **Automated Design Validation Workflow**

### **Phase 1: Code Development with Style Guide Integration**

```javascript
// Example Cursor Prompt Template
`Update the hero section following Rooferly's design standards:
- Use steel grey (#4A5568) for professional text
- Burnt orange (#D97706) for primary CTA button
- Inter font for headline
- Ensure mobile responsiveness
- Add trust signals (licensed, insured badges)
- Keep copy short and benefit-driven
- Follow "Action + Benefit + Simplicity" headline formula`
```

### **Phase 2: Automated Preview & Screenshot Capture**

```javascript
// Playwright automation script for visual validation
async function validateDesignChanges() {
  // 1. Navigate to updated page
  await page.goto('http://localhost:3000');
  
  // 2. Take full-page screenshots at different viewports
  const viewports = [
    { width: 1920, height: 1080, name: 'desktop' },
    { width: 768, height: 1024, name: 'tablet' },
    { width: 375, height: 667, name: 'mobile' }
  ];
  
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.screenshot({
      path: `screenshots/${Date.now()}-${viewport.name}.png`,
      fullPage: true
    });
  }
  
  // 3. Validate specific design elements
  await validateColorUsage();
  await validateTypography();
  await validateCTAButtons();
  await validateMobileResponsiveness();
}
```

### **Phase 3: Design Validation Checks**

```javascript
// Automated design validation functions
async function validateColorUsage() {
  // Check if steel grey is used for primary text
  const primaryText = await page.locator('h1, h2, .primary-text');
  const computedColor = await primaryText.evaluate(el => 
    getComputedStyle(el).color
  );
  // Validate against #4A5568 (steel grey)
}

async function validateCTAButtons() {
  // Check if primary buttons use burnt orange
  const ctaButtons = await page.locator('.btn-primary, .cta-button');
  const buttonColor = await ctaButtons.evaluate(el => 
    getComputedStyle(el).backgroundColor
  );
  // Validate against #D97706 (burnt orange)
}

async function validateTypography() {
  // Check font families match design standards
  const headlines = await page.locator('h1, h2, h3');
  const fontFamily = await headlines.evaluate(el => 
    getComputedStyle(el).fontFamily
  );
  // Validate Inter/Montserrat usage
}
```

---

## 🤖 **Cursor Integration Commands**

### **Style Guide Prompts for Cursor**

> **📋 Reference Files**: Always read and follow guidelines from:
> - `docs/brand-guide.md` for complete brand standards
> - `docs/MARKETING_SEO_STRATEGY.md` for SEO requirements
> - `docs/SEO_IMPLEMENTATION_TODOS.md` for current priorities

```markdown
## Comprehensive Brand Compliance Prompt
"Update this component following Rooferly's complete brand guide (docs/brand-guide.md):

**Brand Colors & Visual Identity:**
- Steel grey (#4A5568) for professional text/headlines
- Burnt orange (#D97706) for CTAs and interactive elements
- Inter/Montserrat for headlines, Open Sans/Roboto for body text
- Simple, flat iconography (shields, checkmarks, houses, maps)

**Business Model Alignment:**
- Focus ONLY on roof replacement (not repairs)
- Emphasize ONLY asphalt shingle specialization
- Highlight ONLY online sales process (no appointments)

**Content Guidelines:**
- Use headline formula: Action + Benefit + Simplicity
- Include approved messaging: 'Get your instant estimate today,' 'See your new roof before you buy,' 'Roofing, made simple'
- Avoid jargon, pressure tactics, old-school clichés
- Keep copy short, benefit-driven, scannable

**Trust Signals:**
- Licensed & insured in Chicago
- 25-year warranty emphasis
- Technology-forward process (EagleView API, virtual visualization)
- Transparent pricing without sales visits"

## SEO-Optimized Component Prompt
"Update this component following SEO strategy (docs/MARKETING_SEO_STRATEGY.md):

**Primary Keywords Integration:**
- 'roof replacement chicago' and 'asphalt shingle roofing chicago'
- Local suburb targeting for Chicagoland area
- Technology differentiation: 'online roof replacement,' 'virtual roof estimate'

**Content Structure:**
- Educational content approach
- Local authority positioning
- Technology innovation emphasis
- Transparency & trust focus

**Schema Markup Needs:**
- LocalBusiness structured data
- Service-specific schema
- Review/rating markup ready
- Chicago area geographic targeting"

## Critical Priority Updates Prompt
"Address current SEO implementation priorities (docs/SEO_IMPLEMENTATION_TODOS.md):

**Immediate Fixes:**
- Add proper metadata (title, description, OpenGraph)
- Include local business schema markup
- Optimize for target keywords
- Add trust signals and credentials
- Ensure mobile-first responsive design

**Brand Consistency Check:**
- Verify steel grey (#4A5568) and burnt orange (#D97706) usage
- Confirm Inter/Montserrat headlines, Open Sans/Roboto body text
- Validate simple, clean layout principles
- Check for proper trust signal placement"

## Design Inspiration Implementation Prompt
"Create this component using design patterns from our inspiration guide (docs/DESIGN_INSPIRATION.md):

**Component Type**: [Specify: Hero Section, Form Flow, Product Selection, Trust Section, etc.]

**Inspiration Reference**: 
- **Primary**: [e.g., Tesla configurator style, Lemonade form flow]
- **Secondary**: [e.g., Apple pricing display, Square trust signals]

**Adaptation Guidelines:**
- Replace inspiration colors with Rooferly palette (steel grey #4A5568, burnt orange #D97706)
- Use Inter/Montserrat for headlines, Open Sans/Roboto for body
- Adapt messaging to roof replacement focus using approved phrases
- Maintain inspiration's layout principles and user flow
- Include Rooferly trust signals (licensed, insured, 25-year warranty)

**Specific Elements to Emulate:**
- [e.g., Large hero background, minimal text, single CTA]
- [e.g., Progress indicators, one question per screen]
- [e.g., Real-time preview, material swatches]
- [e.g., Clear pricing display, no hidden fees messaging]

**Mobile-First Considerations:**
- Follow mobile patterns from Airbnb/Uber style apps
- Touch-friendly buttons and forms
- Simplified navigation for small screens
- Fast loading with essential content first"
```

### **Validation Prompts for Cursor**

```markdown
## Design Review Prompt
"Review the current page against Rooferly's design standards:
1. Are we using the correct brand colors (#4A5568, #D97706)?
2. Is the typography hierarchy clear and using approved fonts?
3. Are CTAs prominent and using burnt orange?
4. Is the layout simple and scannable?
5. Are trust signals prominently displayed?
6. Does it work well on mobile?"

## Iteration Prompt
"Based on the Playwright screenshot analysis, update the design to:
- Fix any color inconsistencies with brand palette
- Improve mobile responsiveness issues
- Enhance CTA button prominence
- Add missing trust signals
- Simplify overly complex layouts"
```

---

## 📸 **Playwright Visual Testing Scripts**

### **Comprehensive Design Validation Script**

```javascript
// Save as: scripts/visual-validation.js
const { chromium } = require('playwright');

async function runDesignValidation() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Navigate to local development server
    await page.goto('http://localhost:3000');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Take screenshots for comparison
    await captureScreenshots(page);
    
    // Run design validation checks
    const validationResults = await runValidationChecks(page);
    
    // Generate validation report
    await generateReport(validationResults);
    
    console.log('✅ Design validation complete. Check screenshots/ folder for results.');
    
  } catch (error) {
    console.error('❌ Validation failed:', error);
  } finally {
    await browser.close();
  }
}

async function captureScreenshots(page) {
  const timestamp = Date.now();
  
  // Desktop view
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.screenshot({ 
    path: `screenshots/${timestamp}-desktop.png`, 
    fullPage: true 
  });
  
  // Tablet view
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.screenshot({ 
    path: `screenshots/${timestamp}-tablet.png`, 
    fullPage: true 
  });
  
  // Mobile view
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ 
    path: `screenshots/${timestamp}-mobile.png`, 
    fullPage: true 
  });
}

async function runValidationChecks(page) {
  const results = {};
  
  // Load brand guide and SEO requirements
  const brandGuide = await loadBrandGuide();
  const seoStrategy = await loadSEOStrategy();
  
  // Check brand colors against brand-guide.md
  results.colorValidation = await validateBrandColors(page, brandGuide);
  
  // Check typography against brand standards
  results.typographyValidation = await validateTypography(page, brandGuide);
  
  // Check CTA buttons for brand compliance
  results.ctaValidation = await validateCTAButtons(page, brandGuide);
  
  // Check content against brand messaging
  results.contentValidation = await validateContentMessaging(page, brandGuide);
  
  // Check SEO elements against strategy
  results.seoValidation = await validateSEOCompliance(page, seoStrategy);
  
  // Check business model alignment
  results.businessModelValidation = await validateBusinessModel(page, brandGuide);
  
  // Check responsive behavior
  results.responsiveValidation = await validateResponsiveness(page);
  
  return results;
}

// Load brand guide data for validation
async function loadBrandGuide() {
  const fs = require('fs');
  try {
    const brandGuideContent = fs.readFileSync('docs/brand-guide.md', 'utf8');
    const seoTodos = fs.readFileSync('docs/SEO_IMPLEMENTATION_TODOS.md', 'utf8');
    return {
      colors: {
        steelGrey: '#4A5568',
        burntOrange: '#D97706',
        white: '#FFFFFF',
        lightGray: '#F6F6F6',
        charcoal: '#2D2D2D'
      },
      typography: {
        headlines: ['Inter', 'Montserrat'],
        body: ['Open Sans', 'Roboto']
      },
      messaging: {
        approved: [
          'Get your instant estimate today',
          'See your new roof before you buy',
          'Roofing, made simple'
        ],
        avoid: ['unexplained jargon', 'high-pressure sales', 'old-school clichés']
      },
      businessModel: {
        onlyRoofReplacement: true,
        onlyAsphaltShingles: true,
        onlineOnly: true
      },
      fullContent: brandGuideContent,
      seoTodos: seoTodos
    };
  } catch (error) {
    console.warn('Could not load brand guide files:', error.message);
    return null;
  }
}

// Load SEO strategy for validation
async function loadSEOStrategy() {
  const fs = require('fs');
  try {
    const seoContent = fs.readFileSync('docs/MARKETING_SEO_STRATEGY.md', 'utf8');
    return {
      primaryKeywords: [
        'roof replacement chicago',
        'asphalt shingle roofing chicago',
        'new roof chicago'
      ],
      uniquePositioning: [
        'buy roof online chicago',
        'roof replacement without sales visit',
        'virtual roof replacement estimate'
      ],
      contentPillars: [
        'Educational content',
        'Local authority',
        'Technology innovation', 
        'Transparency & trust'
      ],
      fullContent: seoContent
    };
  } catch (error) {
    console.warn('Could not load SEO strategy file:', error.message);
    return null;
  }
}

// Run the validation
runDesignValidation();
```

### **Quick Visual Check Script**

```javascript
// Save as: scripts/quick-check.js
const { chromium } = require('playwright');

async function quickVisualCheck(url = 'http://localhost:3000') {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto(url);
  await page.waitForLoadState('networkidle');
  
  // Take a quick screenshot
  await page.screenshot({ 
    path: `screenshots/quick-check-${Date.now()}.png`, 
    fullPage: true 
  });
  
  console.log('📸 Quick screenshot captured');
  
  // Keep browser open for manual inspection
  console.log('🔍 Browser left open for manual review. Close when done.');
}

quickVisualCheck();
```

---

## 🔧 **Setup & Configuration**

### **1. Project Structure**
```
rooferly-digital/
├── scripts/
│   ├── visual-validation.js
│   ├── quick-check.js
│   └── design-compare.js
├── screenshots/
│   ├── baseline/
│   └── current/
├── docs/
│   ├── CURSOR_PLAYWRIGHT_DESIGN_WORKFLOW.md
│   └── DESIGN_STANDARDS.md
└── package.json
```

### **2. NPM Scripts Setup**
Add to your `package.json`:

```json
{
  "scripts": {
    "visual-test": "node scripts/visual-validation.js",
    "quick-check": "node scripts/quick-check.js",
    "dev-with-visual": "npm run dev & sleep 5 && npm run quick-check"
  }
}
```

### **3. VS Code Tasks (Optional)**
Create `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Visual Validation",
      "type": "shell",
      "command": "npm run visual-test",
      "group": "test",
      "presentation": {
        "echo": true,
        "reveal": "always"
      }
    }
  ]
}
```

---

## 🎯 **Workflow Commands**

### **Daily Development Workflow**
```bash
# 1. Start development server
npm run dev

# 2. Make design changes with Cursor
# Use design prompts from above

# 3. Quick visual check
npm run quick-check

# 4. Full validation (if needed)
npm run visual-test
```

### **Cursor Commands for Design Iteration**
```markdown
## Command 1: Apply Brand Standards
"Update the current component to strictly follow Rooferly's brand guidelines. Use steel grey (#4A5568) for text, burnt orange (#D97706) for CTAs, ensure mobile responsiveness, and add appropriate trust signals."

## Command 2: Review Against Standards
"Analyze the current page design and identify any deviations from Rooferly's style guide. Focus on colors, typography, layout simplicity, and mobile experience."

## Command 3: Optimize for Conversion
"Enhance this page for better conversion following Rooferly's UX principles: prominent CTAs, clear value proposition, trust signals, and stress-free user experience."
```

---

## 📋 **Design Checklist for Each Iteration**

### **Visual Standards ✓**
- [ ] Steel grey (#4A5568) used for primary text
- [ ] Burnt orange (#D97706) used for CTAs and accents
- [ ] Clean, simple layout with adequate white space
- [ ] Inter/Montserrat for headlines, Open Sans/Roboto for body
- [ ] Flat, simple iconography (shields, checkmarks, houses)

### **UX Principles ✓**
- [ ] Clear visual hierarchy
- [ ] Scannable content layout
- [ ] Prominent trust signals
- [ ] Stress-free user experience
- [ ] Mobile-first responsive design

### **Content Guidelines ✓**
- [ ] Headlines follow "Action + Benefit + Simplicity" formula
- [ ] Copy is short and benefit-driven
- [ ] Uses approved messaging (instant, simple, transparent)
- [ ] Avoids jargon and pressure tactics

### **Technical Standards ✓**
- [ ] Fast loading performance
- [ ] Accessibility compliance
- [ ] SEO optimization
- [ ] Cross-browser compatibility

---

## 🚀 **Next Steps**

1. **Set up the scripts** in your project
2. **Create baseline screenshots** of current design
3. **Test the workflow** with a small design change
4. **Iterate and refine** the automation based on your needs
5. **Document lessons learned** and workflow improvements

## 📚 **Complete Documentation Integration**

This workflow automatically pulls from and validates against your complete documentation:

### **Primary Brand Documents** ✅
- **`docs/brand-guide.md`** → Complete brand identity, messaging, visual standards
- **`docs/MARKETING_SEO_STRATEGY.md`** → SEO strategy, keyword targeting, content pillars
- **`docs/SEO_IMPLEMENTATION_TODOS.md`** → Current implementation priorities and checklist
- **`docs/DESIGN_INSPIRATION.md`** → Curated UI/UX inspiration and design patterns
- **`docs/DEVELOPMENT_CHECKLIST.md`** → Technical implementation roadmap

### **Validation Integration** ✅
- **Brand Colors** → Validates against brand-guide.md color palette
- **Typography** → Checks Inter/Montserrat headlines, Open Sans/Roboto body
- **Messaging** → Ensures approved phrases, avoids prohibited language
- **Business Model** → Validates roof replacement only, asphalt shingles only, online only
- **SEO Compliance** → Checks primary keywords, local targeting, schema markup
- **Content Strategy** → Validates educational content, local authority, technology innovation
- **Design Patterns** → Validates against DESIGN_INSPIRATION.md UI/UX best practices

### **Automated Workflow** ✅
1. **Cursor** reads brand-guide.md and applies standards to code
2. **Local server** serves updated pages
3. **Playwright** captures screenshots and validates against all docs
4. **Analysis** compares against comprehensive brand/SEO guidelines  
5. **Feedback** prompts Cursor with specific improvements based on documentation
6. **Iteration** continues until all guidelines are met

### **File Dependencies** 📋
```
docs/
├── brand-guide.md              ← Primary brand reference
├── MARKETING_SEO_STRATEGY.md   ← SEO and content strategy
├── SEO_IMPLEMENTATION_TODOS.md ← Current priorities
├── DESIGN_INSPIRATION.md       ← UI/UX design patterns & inspiration
├── DEVELOPMENT_CHECKLIST.md    ← Technical roadmap
└── CURSOR_PLAYWRIGHT_DESIGN_WORKFLOW.md ← This workflow
```

This workflow will help you maintain design consistency while rapidly iterating on your Rooferly platform, ensuring every change aligns with your comprehensive brand guide and SEO strategy! 🎨✨
