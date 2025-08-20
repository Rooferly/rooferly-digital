# 🎯 STEP 2: Modify Product Template for Wholesale Pricing

## ✅ **Progress:**
- ✅ Wholesale detector created successfully
- ✅ Ready to implement pricing display
- ✅ Next: Modify product template

---

## 🔧 **STEP 2A: Open Product Template**

### **What You Need to Do:**
1. **Click on "templates" folder** in the left sidebar
2. **Find and click "product.liquid"** to open it
3. **Look for the pricing section** (usually contains words like "price", "money", or "$")
4. **Take a screenshot** of the first 30-40 lines of code
5. **Tell me**: "Product template opened - ready for pricing modification"

---

## 🎯 **STEP 2B: What We're Looking For**

### **In the product.liquid file, I need to find:**
- **Price display code** (something like `{{ product.price | money }}`)
- **Add to cart form** (where quantity selector is)
- **Product form section** (where we'll add wholesale logic)

### **Common patterns to look for:**
```liquid
{{ product.price | money }}
{{ product.compare_at_price | money }}
<form action="/cart/add" method="post">
```

---

## 💡 **What We'll Add:**

### **Wholesale Pricing Display:**
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
  <!-- Regular pricing display -->
  <span class="regular-price">${{ product.price | money_without_currency }}</span>
{% endif %}
```

### **Bulk Quantity Options:**
```liquid
{% if is_wholesale_customer %}
  <div class="wholesale-quantity">
    <label>Minimum Order: 6 items</label>
    <select name="quantity" min="6">
      <option value="6">6 items - ${{ product.price | minus: 500 | times: 6 | divided_by: 100.0 }}</option>
      <option value="12">12 items - ${{ product.price | minus: 500 | times: 12 | divided_by: 100.0 }}</option>
      <option value="18">18 items - ${{ product.price | minus: 500 | times: 18 | divided_by: 100.0 }}</option>
      <option value="24">24 items - ${{ product.price | minus: 500 | times: 24 | divided_by: 100.0 }}</option>
    </select>
  </div>
{% endif %}
```

---

## 📋 **Next Steps:**

### **After Opening Product Template:**
1. **Show me the pricing section** (screenshot first 30-40 lines)
2. **I'll identify exactly where to add the wholesale code**
3. **Give you the exact code to copy/paste**
4. **Test with Lake Geneva Country Meats**

---

## 🎯 **Expected Result:**

### **Your Wholesale Customers Will See:**
- **"Wholesale Price: $15.00 ~~$20.00~~ Save $5.00"**
- **Bulk options**: 6, 12, 18, 24 items with total prices
- **Clear wholesale customer experience**

### **Regular Customers Will See:**
- **Normal pricing** (unchanged)
- **Standard quantity options**

---

## 📞 **Report Back:**
**Open templates/product.liquid and tell me:**
1. **"Product template opened"**
2. **Screenshot of the first 30-40 lines**
3. **Ready for pricing modification**

**We're building the $5 discount display that saves you $348/year!** 🚀

