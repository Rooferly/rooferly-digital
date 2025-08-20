# 🎯 STEP 3: Modify snippets/price.liquid for Wholesale Logic

## 🎉 **PERFECT! Found the Pricing File!**
- ✅ Found `snippets/price.liquid`
- ✅ I can see Locksmith code (exactly what we're replacing!)
- ✅ I can see BSS B2B code (working alongside for now)
- ✅ This is where we add our wholesale logic!

---

## 🔧 **STEP 3: Add Wholesale Logic to price.liquid**

### **What We're Going to Do:**
1. **Add our wholesale detector** at the top
2. **Modify the pricing display** to show wholesale pricing
3. **Keep existing Locksmith code** (for now, until we test)
4. **Test with wholesale customers**

### **Where to Add the Code:**
**Right after line 10** (after the Usage comment), add our wholesale logic.

---

## 💻 **EXACT CODE TO ADD:**

### **Find This Line in price.liquid:**
```liquid
{% endcomment %}

{% style %}
```

### **ADD THIS CODE RIGHT BEFORE {% style %}:**
```liquid
{% endcomment %}

{%- comment -%} WHOLESALE LOGIC - LOCKSMITH REPLACEMENT {%- endcomment -%}
{% render 'wholesale-detector' %}

{% style %}
```

### **Then Find This Section (around line 60):**
```liquid
<span bss-b2b-product-id="{{ product.id }}" bss-b2b-product-price
```

### **REPLACE the pricing display section with:**
```liquid
<span bss-b2b-product-id="{{ product.id }}" bss-b2b-product-price {% if use_variant %}bss-b2b-variant-price bss-b2b-variant-id="{{ locksmith_2cbe_product__selected_or_first_available_variant.id }}" bss-b2b-featured-product="true"{% endif %} bss-b2b-product-qb-id="{{ product.id }}" bss-b2b-qb-featured-product-id="{{ product.id }}" bss-b2b-section-id="{{ section.id }}">

{%- comment -%} WHOLESALE PRICING LOGIC {%- endcomment -%}
{% if customer and customer.tags contains 'wholesale' %}
  {%- comment -%} Wholesale Customer Pricing {%- endcomment -%}
  <div class="wholesale-pricing">
    {%- if target.compare_at_price and compare_at_price > price -%}
      <dl class="flex flex--wrap flex--align-baseline">
        <dt class="display--hidden">Wholesale Price</dt>
        <dd class="type--no-wrap space--mr--xsmall wholesale-price">
          ${{ price | minus: 500 | money_without_currency }}
        </dd>
        <dt class="display--hidden">Regular Price</dt>
        <dd class="product-price__compare-at type--no-wrap wholesale-savings">
          {{ money_price }}
        </dd>
        <dd class="wholesale-note copy--small">
          Save $5.00 - Wholesale Price
        </dd>
      </dl>
    {%- else -%}
      <dl>
        <dt class="display--hidden">Wholesale Price</dt>
        <dd class="type--no-wrap wholesale-price">
          ${{ price | minus: 500 | money_without_currency }}
        </dd>
        <dd class="wholesale-note copy--small">
          Save $5.00 - Wholesale Price
        </dd>
      </dl>
    {%- endif -%}
  </div>
{% else %}
  {%- comment -%} Regular Customer Pricing (Original Code) {%- endcomment -%}
  {%- if target.compare_at_price and compare_at_price > price -%}
    <dl class="flex flex--wrap flex--align-baseline">
      <dt class="display--hidden">
        {{ 'products.product.price.regular_price' | t }}
      </dt>
      <dd class="type--no-wrap space--mr--xsmall">
        {{ money_price }}
      </dd>
      <dt class="display--hidden">
        {{ 'products.product.price.sale_price' | t }}
      </dt>
      <dd class="product-price__compare-at type--no-wrap">
        {%- if settings.currency_code_enabled -%}
          {{ compare_at_price | money_with_currency }}
        {%- else -%}
          {{ compare_at_price | money }}
        {%- endif -%}
      </dd>
    </dl>
  {%- else -%}
    <dl>
      <dt class="display--hidden">
        {{ 'products.product.price.regular_price' | t }}
      </dt>
      <dd class="type--no-wrap">
        {{ money_price }}
      </dd>
    </dl>
  {%- endif -%}
{% endif %}
```

---

## 📋 **STEP-BY-STEP INSTRUCTIONS:**

### **1. Add Wholesale Detector:**
- **Find line 10** (after {% endcomment %})
- **Add**: `{% render 'wholesale-detector' %}`

### **2. Replace Pricing Display:**
- **Find the big pricing section** (around line 60)
- **Replace with the wholesale logic code above**

### **3. Save and Test:**
- **Save the file**
- **Test in preview with a wholesale customer**

---

## 🎯 **WHAT THIS WILL DO:**

### **For Wholesale Customers:**
- Show: "$15.00 Save $5.00 - Wholesale Price"
- Uses existing theme styling
- Works with BSS B2B system

### **For Regular Customers:**
- Show: Normal pricing (unchanged)
- Existing experience maintained

---

## 📞 **READY TO MAKE THE CHANGES?**
**Tell me when you're ready and I'll guide you through each modification step-by-step!**

**This is the modification that saves you $348/year!** 🚀

