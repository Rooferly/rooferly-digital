# 🔍 STEP 2D: Check Main Product Two Columns

## ✅ **Good Analysis:**
- ✅ The previous file had price *settings* not price *display*
- ✅ Those were just configuration options
- ✅ Smart to check main-product-two-columns.liquid next

---

## 🎯 **WHAT TO LOOK FOR in main-product-two-columns.liquid:**

### **Actual Price Display Code:**
```liquid
{{ product.price | money }}
{{ product.compare_at_price | money }}
<span class="price">
<div class="price">
```

### **NOT Configuration (like we just saw):**
```json
"type": "price_tag"
"label": "price settings"
```

---

## 🔧 **STEP 2D: Open main-product-two-columns.liquid**

### **What You Need to Do:**
1. **Open main-product-two-columns.liquid**
2. **Look for actual Liquid code** (not JSON settings)
3. **Search for price display** ({{ product.price }})
4. **Screenshot pricing section** when you find it
5. **Tell me**: "Found pricing code" or "Still searching"

---

## 💡 **WHAT WE'RE HUNTING FOR:**

### **Actual Pricing Display Code:**
```liquid
<div class="price">
  <span class="price__regular">
    {{ product.price | money }}
  </span>
  {% if product.compare_at_price > product.price %}
    <span class="price__sale">
      {{ product.compare_at_price | money }}
    </span>
  {% endif %}
</div>
```

### **Where We'll Add Our Wholesale Logic:**
```liquid
{% render 'wholesale-detector' %}

{% if is_wholesale_customer %}
  <!-- Wholesale pricing ($5 discount) -->
  <div class="wholesale-pricing">
    <span class="wholesale-price">${{ product.price | minus: 500 | money_without_currency }}</span>
    <span class="wholesale-savings">${{ product.price | money_without_currency }}</span>
    <small>Save $5.00 - Wholesale Price</small>
  </div>
{% else %}
  <!-- Regular pricing (existing code) -->
  <div class="price">
    {{ product.price | money }}
  </div>
{% endif %}
```

---

## 🎯 **ALTERNATIVE FILES TO CHECK:**

### **If main-product-two-columns doesn't have it:**
1. **`featured-product.liquid`** 
2. **Look for `product-block-price` in sections** (I saw this referenced)
3. **Check if there's a separate price snippet**

---

## 📞 **Report Back:**
**From main-product-two-columns.liquid, tell me:**
1. **"Found pricing code"** (and screenshot the pricing section)
2. **"Still configuration only"** (and we'll check next file)
3. **"This looks like the right file"** (if you see {{ product.price }})

**We're getting closer to the pricing code where we'll add the $5 wholesale discount!** 🔍🚀

