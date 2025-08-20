# ⚡ FAST TRACK: Locksmith Replacement Code Implementation

## ✅ **Ready to Code:**
- ✅ Theme structure visible: `assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`
- ✅ Fast track approach selected
- ✅ Let's build the wholesale logic!

---

## 🔧 **STEP 1: Create Wholesale Detection Logic**

### **Action: Create New Snippet File**
1. **Right-click on "snippets" folder**
2. **Click "Create new snippet"**
3. **Name it**: `wholesale-detector`
4. **Copy and paste this exact code:**

```liquid
{% comment %}
  Wholesale Customer Detection Logic
  Checks if customer has 'wholesale' tag
  Usage: {% render 'wholesale-detector' %}
  Returns: is_wholesale_customer (true/false)
{% endcomment %}

{% liquid
  assign is_wholesale_customer = false
  
  if customer and customer.tags contains 'wholesale'
    assign is_wholesale_customer = true
  endif
%}

{% comment %} Make variable available globally {% endcomment %}
<script>
  window.isWholesaleCustomer = {{ is_wholesale_customer | json }};
</script>

<style>
  .wholesale-pricing {
    background: #f8f9fa;
    border: 2px solid #28a745;
    border-radius: 8px;
    padding: 15px;
    margin: 10px 0;
  }
  
  .wholesale-label {
    color: #28a745;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
  }
  
  .wholesale-price {
    color: #28a745;
    font-size: 24px;
    font-weight: bold;
  }
  
  .wholesale-savings {
    color: #dc3545;
    font-size: 14px;
    text-decoration: line-through;
  }
  
  .wholesale-note {
    color: #6c757d;
    font-size: 12px;
    font-style: italic;
  }
  
  .wholesale-quantity {
    margin: 15px 0;
    padding: 10px;
    background: #e9ecef;
    border-radius: 5px;
  }
  
  .wholesale-quantity label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #495057;
  }
  
  .wholesale-quantity select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 4px;
  }
</style>
```

5. **Click "Save"**

---

## 🎯 **STEP 2: Find Product Template**

### **Action: Locate Product Price Display**
1. **Click on "templates" folder**
2. **Look for "product.liquid"** (this is where product pricing is shown)
3. **Click on "product.liquid"** to open it
4. **Take a screenshot** of the first 20-30 lines of code
5. **Tell me**: "Product template opened - ready for next step"

---

## 📋 **WHAT WE'RE BUILDING:**

### **Wholesale Customer Experience:**
- **Sees**: "$X.XX ~~$Y.YY~~ (Save $5.00 - Wholesale Price)"
- **Gets**: Bulk quantity options (6, 12, 18, 24 items)  
- **Result**: Clear wholesale pricing and bulk ordering

### **Regular Customer Experience:**
- **Sees**: Normal pricing (no changes)
- **Gets**: Standard quantity options
- **Result**: Unchanged experience

### **Testing Plan:**
1. **Build logic → Test with Lake Geneva Country Meats first**
2. **Verify all 3 wholesale customers see wholesale pricing**
3. **Confirm regular customers see normal pricing**
4. **Deploy to live theme**

---

## ⏱️ **Progress Tracker:**
- ✅ **Step 1**: Create wholesale detector snippet  
- ⏳ **Step 2**: Modify product template (next)
- ⏳ **Step 3**: Test with wholesale customer
- ⏳ **Step 4**: Deploy and save $348/year!

---

## 📞 **Report Back:**
After creating the snippet, tell me:
1. **"Wholesale detector created successfully"**
2. **Open the product template** and show me the first 20-30 lines
3. **Ready for Step 2**

**We're building the foundation that saves you $29/month!** 🔥

