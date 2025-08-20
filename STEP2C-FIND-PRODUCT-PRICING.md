# 🔍 STEP 2C: Find Product Pricing Section

## ✅ **I Can See the Sections Folder:**
- ✅ No `price.liquid` file visible
- ✅ Need to find the product pricing section
- ✅ Looking for product-related files

---

## 🎯 **LIKELY CANDIDATES FOR PRODUCT PRICING:**

### **From Your Sections List, Check These Files:**
1. **`main-product.liquid`** (line in your screenshot - most likely!)
2. **`featured-product.liquid`** 
3. **`product-recommendations.liquid`**
4. **`main-product-two-columns.liquid`**

### **Most Likely: main-product.liquid**
This is typically where the main product page pricing is handled.

---

## 🔧 **STEP 2C: Open Main Product File**

### **What You Need to Do:**
1. **Find and click "main-product.liquid"** in the sections list
2. **Open that file**
3. **Look for pricing code** (words like "price", "money", "$")
4. **Take a screenshot** of the first 30-40 lines
5. **Tell me**: "Main product section opened"

---

## 🔍 **Alternative: Check What product.json References**

### **Let's Go Back to product.json:**
1. **Scroll down in product.json** to see more sections
2. **Look for the main content section** 
3. **It should reference which section handles the main product display**

### **Common Patterns:**
```json
"main": {
  "type": "main-product"
}
```

---

## 💡 **What We're Looking For:**

### **In the Product Section File:**
```liquid
{{ product.price | money }}
{{ product.compare_at_price | money }}
<div class="price">
```

### **Where We'll Add Our Wholesale Logic:**
```liquid
{% render 'wholesale-detector' %}

{% if is_wholesale_customer %}
  <!-- Wholesale pricing display -->
{% else %}
  <!-- Regular pricing display -->
{% endif %}
```

---

## 📋 **TWO OPTIONS:**

### **Option A: Open main-product.liquid**
- Most likely contains the product pricing
- Screenshot first 30-40 lines

### **Option B: Scroll through product.json**
- Find the "main" section reference
- See which section file it uses

---

## 📞 **Report Back:**
**Either:**
1. **"Opening main-product.liquid"** (and screenshot)
2. **"Checking more of product.json"** (scroll down for main section)

**We're close to finding the pricing code and implementing the $5 discount!** 🚀

