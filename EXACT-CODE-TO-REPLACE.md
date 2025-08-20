# 🔧 EXACT CODE REPLACEMENT for Wholesale Pricing

## 🎯 **FIND AND REPLACE THIS SECTION:**

### **FIND THIS CODE** (around lines 75-95):
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

### **REPLACE WITH THIS WHOLESALE LOGIC:**
```liquid
    {%- comment -%} WHOLESALE PRICING LOGIC - LOCKSMITH REPLACEMENT {%- endcomment -%}
    {% if customer and customer.tags contains 'wholesale' %}
      {%- comment -%} Wholesale Customer: Show $5.00 Discount {%- endcomment -%}
      {%- assign wholesale_price = price | minus: 500 -%}
      {%- assign wholesale_money_price = wholesale_price | money -%}
      {%- if settings.currency_code_enabled -%}
        {%- assign wholesale_money_price = wholesale_price | money_with_currency -%}
      {%- endif -%}
      
      {%- if target.compare_at_price and compare_at_price > price -%}
        <dl class="flex flex--wrap flex--align-baseline">
          <dt class="display--hidden">Wholesale Price</dt>
          <dd class="type--no-wrap space--mr--xsmall" style="color: #28a745; font-weight: bold;">
            {{ wholesale_money_price }}
          </dd>
          <dt class="display--hidden">Regular Price</dt>
          <dd class="product-price__compare-at type--no-wrap" style="color: #dc3545;">
            {{ money_price }}
          </dd>
          <dd class="type--no-wrap" style="color: #28a745; font-size: 0.85em; margin-left: 8px;">
            Save $5.00 - Wholesale
          </dd>
        </dl>
      {%- else -%}
        <dl class="flex flex--wrap flex--align-baseline">
          <dt class="display--hidden">Wholesale Price</dt>
          <dd class="type--no-wrap space--mr--xsmall" style="color: #28a745; font-weight: bold;">
            {{ wholesale_money_price }}
          </dd>
          <dd class="product-price__compare-at type--no-wrap" style="color: #dc3545; text-decoration: line-through;">
            {{ money_price }}
          </dd>
          <dd class="type--no-wrap" style="color: #28a745; font-size: 0.85em; margin-left: 8px;">
            Save $5.00 - Wholesale
          </dd>
        </dl>
      {%- endif -%}
    {% else %}
      {%- comment -%} Regular Customer: Original Pricing {%- endcomment -%}
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

1. **Scroll down** to find the pricing section (around line 75)
2. **Select the ENTIRE pricing if/else block** 
3. **Delete the selected code**
4. **Paste the new wholesale logic code**
5. **Save the file**
6. **Tell me**: "Wholesale pricing added!"

---

## 🎯 **RESULT:**

### **Wholesale Customers Will See:**
- **Green price**: $15.00 (with $5 discount)
- **Crossed out**: ~~$20.00~~ 
- **Message**: "Save $5.00 - Wholesale"

### **Regular Customers Will See:**
- **Normal pricing** (exactly the same as before)

---

## 🚀 **ALMOST DONE!**
After you save this, we'll test it with Lake Geneva Country Meats and then you can start saving $348/year!

**Make the replacement and tell me when it's saved!** 💰

