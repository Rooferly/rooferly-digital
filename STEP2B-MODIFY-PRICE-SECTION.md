# 🎯 STEP 2B: Modify Price Section for Wholesale Logic

## ✅ **Perfect! I Found the Price Section:**
- ✅ Line 55: `"price": {`
- ✅ Line 56: `"type": "price"`
- ✅ This uses `sections/price.liquid` file
- ✅ This is where we add wholesale pricing!

---

## 🔧 **STEP 2B: Open Price Section File**

### **What You Need to Do:**
1. **Click on "sections" folder** in the left sidebar
2. **Find and click "price.liquid"** 
3. **Open the price.liquid file**
4. **Take a screenshot** of the first 30-40 lines
5. **Tell me**: "Price section opened - ready for wholesale modification"

---

## 💡 **What We're Going to Modify:**

### **Current Price Section Structure:**
The `sections/price.liquid` file likely contains:
```liquid
<div class="price">
  {{ product.price | money }}
</div>
```

### **What We'll Add:**
```liquid
{% render 'wholesale-detector' %}

{% if is_wholesale_customer %}
  <div class="wholesale-pricing">
    <span class="wholesale-label">Wholesale Price</span>
    <span class="wholesale-price">${{ product.price | minus: 500 | money_without_currency }}</span>
    <span class="wholesale-savings">${{ product.price | money_without_currency }}</span>
    <span class="wholesale-note">Save $5.00 - Wholesale Customer</span>
  </div>
{% else %}
  <!-- Regular pricing (existing code) -->
  <div class="regular-price">
    {{ product.price | money }}
  </div>
{% endif %}
```

---

## 🎯 **What Your Customers Will See:**

### **Wholesale Customers (Lake Geneva Country Meats, etc.):**
```
🏷️ Wholesale Price: $15.00 ~~$20.00~~ Save $5.00 - Wholesale Customer
```

### **Regular Customers:**
```
💵 $20.00 (normal pricing, unchanged)
```

---

## 📋 **Next Steps After Opening Price.liquid:**

1. **I'll analyze the current price display code**
2. **Give you exact code to replace/add**  
3. **Test with wholesale customer immediately**
4. **Deploy and save $348/year!**

---

## 📞 **Report Back:**
**Open sections/price.liquid and tell me:**
1. **"Price section opened"**
2. **Screenshot of the first 30-40 lines**
3. **Ready for wholesale pricing modification**

**We're about to implement the $5 discount that saves you $29/month!** 🚀

