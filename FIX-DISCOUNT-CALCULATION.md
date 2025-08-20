# 🔧 Fix Discount Calculation in price.liquid

## 🎯 **THE ISSUE:**
- **Current display**: ~~$9.99~~ $5.00 
- **Should display**: ~~$9.99~~ $4.99
- **Problem**: Showing the discount amount ($5.00) instead of the final price ($4.99)

---

## 📍 **WHERE THE DISCOUNT IS CALCULATED:**

### **In snippets/price.liquid, look for this section:**
```liquid
{% if customer and customer.tags contains 'wholesale' %}
  {%- assign wholesale_price = price | minus: 500 -%}
  {%- assign wholesale_money_price = wholesale_price | money -%}
  {%- if settings.currency_code_enabled -%}
    {%- assign wholesale_money_price = wholesale_price | money_with_currency -%}
  {%- endif -%}
```

### **The calculation is correct here:**
- `price | minus: 500` = $9.99 (999 cents) - $5.00 (500 cents) = $4.99 (499 cents)
- So `wholesale_price` should be 499 cents = $4.99

---

## 🔍 **THE DISPLAY ISSUE:**

### **Find this section in the display code:**
```liquid
<dd class="type--no-wrap space--mr--xsmall" style="color: #28a745; font-weight: bold;">
  {{ wholesale_money_price }}
</dd>
<dd class="product-price__compare-at type--no-wrap" style="color: #dc3545; text-decoration: line-through;">
  {{ money_price }}
</dd>
```

### **The problem might be:**
1. **Wrong variable being displayed**
2. **money filter not working correctly**
3. **Currency formatting issue**

---

## 🛠 **DEBUGGING STEPS:**

### **STEP 1: Add Debug Info**
**Add this debug code** right after the wholesale_price calculation:

```liquid
{%- assign wholesale_price = price | minus: 500 -%}
{%- assign wholesale_money_price = wholesale_price | money -%}

{%- comment -%} DEBUG: Show the calculations {%- endcomment -%}
<p style="background: yellow; padding: 5px; font-size: 12px;">
  DEBUG:<br>
  Original price (cents): {{ price }}<br>
  Wholesale price (cents): {{ wholesale_price }}<br>
  Wholesale money: {{ wholesale_money_price }}<br>
  Regular money: {{ money_price }}
</p>
```

### **STEP 2: Check What's Being Displayed**
This will show us:
- **Original price in cents**: 999
- **Wholesale price in cents**: 499 
- **Wholesale money formatted**: Should be $4.99
- **Regular money formatted**: $9.99

---

## 🔧 **LIKELY FIX:**

### **If the calculation is right but display is wrong:**
The issue might be in how we're displaying the prices. We might need to ensure we're showing:
- **Wholesale price**: {{ wholesale_money_price }} (should be $4.99)
- **Crossed out regular**: {{ money_price }} (should be ~~$9.99~~)

---

## 📞 **NEXT STEPS:**

**Add the debug code above and tell me:**
1. **What the debug output shows** (screenshot the yellow debug box)
2. **What values appear** for each price calculation

**This will tell us exactly where the $5.00 vs $4.99 issue is coming from!**

**Once we fix this small display bug, you'll have perfect wholesale pricing and can save $348/year!** 🔧💰

