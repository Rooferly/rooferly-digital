# 🔧 STEP 2: Working with JSON Templates (Newer Shopify Format)

## ✅ **I See Your Theme Structure:**
- ✅ Your theme uses **JSON templates** (modern Shopify format)
- ✅ Files like `product.json`, `collection.json`, etc.
- ✅ Need to modify **sections** instead of templates

---

## 🎯 **NEW APPROACH: Modify Sections**

### **STEP 2A: Find Product Pricing Section**
1. **Click on "sections" folder** in the left sidebar
2. **Look for files related to product pricing**, such as:
   - `product-form.liquid`
   - `product-price.liquid` 
   - `price.liquid`
   - `product-info.liquid`
   - Any file with "product" or "price" in the name

3. **Take a screenshot** of the sections folder contents
4. **Tell me what files you see** in the sections folder

---

## 🔍 **ALTERNATIVE: Check Product.json First**

### **Let's see what the product template references:**
1. **Click on "product.json"** to open it
2. **Look for "sections"** in the JSON
3. **Screenshot the content** (first 20-30 lines)
4. **This will tell us which sections handle product pricing**

---

## 💡 **How JSON Templates Work:**

### **JSON Template Structure:**
```json
{
  "sections": {
    "product_form": {
      "type": "product-form"
    },
    "product_info": {
      "type": "product-info"  
    }
  }
}
```

### **We Need to Modify:**
- The **section files** that handle pricing
- Usually `product-form.liquid` or `product-info.liquid`
- Add our wholesale logic to these sections

---

## 📋 **TWO PATHS TO SUCCESS:**

### **Path A: Check product.json**
- Open `product.json`
- See which sections it uses
- Modify those specific sections

### **Path B: Find pricing sections**  
- Look in sections folder
- Find product-related files
- Modify the pricing display directly

---

## 📞 **What I Need From You:**

**Choose one of these:**
1. **Screenshot the "sections" folder contents**
2. **Open product.json and screenshot the first 20-30 lines**

Either way will show me exactly where to add the wholesale pricing logic!

**We're adapting to your theme structure - this is still the path to $348/year savings!** 🚀

