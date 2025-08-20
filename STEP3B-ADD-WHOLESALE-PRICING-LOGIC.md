# 🎯 STEP 3B: Add Wholesale Pricing Logic

## ✅ **Great Progress!**
- ✅ Wholesale detector added successfully!
- ✅ Locksmith code just got reformatted (that's normal)
- ✅ Ready to add wholesale pricing logic

---

## 🔧 **STEP 3B: Replace the Pricing Display Section**

### **Find This Section (around line 75-95):**
```liquid
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
```

### **REPLACE IT WITH THIS WHOLESALE LOGIC:**
```liquid
    {%- comment -%} WHOLESALE PRICING LOGIC {%- endcomment -%}
    {% if customer and customer.tags contains 'wholesale' %}
      {%- comment -%} Wholesale Customer Pricing - $5.00 Discount {%- endcomment -%}
      {%- assign wholesale_price = price | minus: 500 -%}
      {%- assign wholesale_money_price = wholesale_price | money -%}
      {%- if settings.currency_code_enabled -%}
        {%- assign wholesale_money_price = wholesale_price | money_with_currency -%}
      {%- endif -%}
      
      <div class="wholesale-pricing">
        {%- if target.compare_at_price and compare_at_price > price -%}
          <dl class="flex flex--wrap flex--align-baseline">
            <dt class="display--hidden">Wholesale Price</dt>
            <dd class="type--no-wrap space--mr--xsmall wholesale-price" style="color: #28a745; font-weight: bold;">
              {{ wholesale_money_price }}
            </dd>
            <dt class="display--hidden">Regular Price</dt>
            <dd class="product-price__compare-at type--no-wrap" style="color: #dc3545;">
              {{ money_price }}
            </dd>
            <dd class="wholesale-note copy--small" style="color: #28a745; font-size: 0.85em;">
              Save $5.00 - Wholesale Price
            </dd>
          </dl>
        {%- else -%}
          <dl class="flex flex--wrap flex--align-baseline">
            <dt class="display--hidden">Wholesale Price</dt>
            <dd class="type--no-wrap space--mr--xsmall wholesale-price" style="color: #28a745; font-weight: bold;">
              {{ wholesale_money_price }}
            </dd>
            <dd class="product-price__compare-at type--no-wrap" style="color: #dc3545; text-decoration: line-through;">
              {{ money_price }}
            </dd>
            <dd class="wholesale-note copy--small" style="color: #28a745; font-size: 0.85em;">
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

## 🎯 **WHAT THIS DOES:**

### **For Wholesale Customers (Lake Geneva Country Meats, etc.):**
- **Shows**: Green wholesale price (e.g., $15.00)
- **Shows**: Crossed-out regular price (e.g., ~~$20.00~~)
- **Shows**: "Save $5.00 - Wholesale Price" message

### **For Regular Customers:**
- **Shows**: Normal pricing (unchanged)
- **Experience**: Exactly the same as before

---

## 📋 **STEP-BY-STEP:**

1. **Find the pricing section** (starting with `{%- if target.compare_at_price`)
2. **Select all the pricing code** (both the if and else parts)
3. **Replace with the wholesale logic code above**
4. **Save the file**
5. **Tell me**: "Pricing logic added - ready to test!"

---

## 🚀 **ALMOST DONE!**

After this change:
- **Wholesale customers** see $5.00 discount
- **Regular customers** see normal pricing
- **We can test with Lake Geneva Country Meats**
- **Then deploy and save $348/year!**

**Ready to replace the pricing section?** 💰

