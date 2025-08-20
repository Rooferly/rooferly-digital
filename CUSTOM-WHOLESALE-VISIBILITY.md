# 🎯 CUSTOM WHOLESALE PRODUCT VISIBILITY

## 💡 **SMART BUSINESS REQUIREMENT:**
**Each wholesale customer should only see products they actually want to stock/sell.**

### **CURRENT PROBLEM:**
- **Locksmith**: Basic #wholesale tag → Hide 16oz & 2lb for ALL wholesale
- **Your Need**: Granular control per customer
- **Example**: Customer A only wants 16oz → Hide 8oz & 2lb options

---

## 🔧 **CUSTOM SOLUTION: CUSTOMER-SPECIFIC TAGS**

### **Enhanced Tagging System:**
Instead of just `wholesale`, use specific tags:

```
CUSTOMER TAGS:
- wholesale-8oz-only     → Show only 8oz products
- wholesale-16oz-only    → Show only 16oz products  
- wholesale-2lb-only     → Show only 2lb products
- wholesale-8oz-16oz     → Show 8oz + 16oz (hide 2lb)
- wholesale-16oz-2lb     → Show 16oz + 2lb (hide 8oz)
- wholesale-all          → Show all sizes
```

### **REAL EXAMPLES:**
```
LAKE GENEVA COUNTRY MEATS:
Tags: wholesale, wholesale-16oz-only
→ Sees: Only 16oz products

15 LAKES BUTCHER BISTRO:  
Tags: wholesale, wholesale-8oz-16oz
→ Sees: 8oz + 16oz (no 2lb)

WANNEMAKERS:
Tags: wholesale, wholesale-all
→ Sees: All product sizes
```

---

## 🚀 **IMPLEMENTATION PLAN:**

### **STEP 1: Enhanced Wholesale Detection**
Update `wholesale-detector.liquid`:
```liquid
{%- comment -%} Detect wholesale customer and their allowed sizes {%- endcomment -%}
{%- assign is_wholesale = false -%}
{%- assign show_8oz = false -%}
{%- assign show_16oz = false -%}
{%- assign show_2lb = false -%}

{%- if customer and customer.tags contains 'wholesale' -%}
  {%- assign is_wholesale = true -%}
  
  {%- if customer.tags contains 'wholesale-8oz-only' -%}
    {%- assign show_8oz = true -%}
  {%- elsif customer.tags contains 'wholesale-16oz-only' -%}
    {%- assign show_16oz = true -%}
  {%- elsif customer.tags contains 'wholesale-2lb-only' -%}
    {%- assign show_2lb = true -%}
  {%- elsif customer.tags contains 'wholesale-8oz-16oz' -%}
    {%- assign show_8oz = true -%}
    {%- assign show_16oz = true -%}
  {%- elsif customer.tags contains 'wholesale-16oz-2lb' -%}
    {%- assign show_16oz = true -%}
    {%- assign show_2lb = true -%}
  {%- elsif customer.tags contains 'wholesale-all' -%}
    {%- assign show_8oz = true -%}
    {%- assign show_16oz = true -%}
    {%- assign show_2lb = true -%}
  {%- endif -%}
{%- else -%}
  {%- comment -%} Regular customers see all products {%- endcomment -%}
  {%- assign show_8oz = true -%}
  {%- assign show_16oz = true -%}
  {%- assign show_2lb = true -%}
{%- endif -%}

<script>
  window.isWholesaleCustomer = {{ is_wholesale | json }};
  window.wholesaleVisibility = {
    show8oz: {{ show_8oz | json }},
    show16oz: {{ show_16oz | json }},
    show2lb: {{ show_2lb | json }}
  };
</script>
```

### **STEP 2: Product Variant Filtering**
In product template, hide variants based on customer:
```liquid
{%- for variant in product.variants -%}
  {%- assign show_variant = true -%}
  
  {%- comment -%} Check if this variant should be visible {%- endcomment -%}
  {%- if variant.title contains '8oz' and show_8oz == false -%}
    {%- assign show_variant = false -%}
  {%- elsif variant.title contains '16oz' and show_16oz == false -%}
    {%- assign show_variant = false -%}
  {%- elsif variant.title contains '2lb' and show_2lb == false -%}
    {%- assign show_variant = false -%}
  {%- endif -%}
  
  {%- if show_variant -%}
    <div class="variant-option">
      {{ variant.title }} - {{ variant.price | money }}
    </div>
  {%- endif -%}
{%- endfor -%}
```

---

## 💰 **COST SAVINGS BREAKDOWN:**

### **REPLACE LOCKSMITH ($348/year):**
- ✅ **Custom visibility logic** → More flexible than Locksmith
- ✅ **Customer-specific control** → Better than basic #wholesale tag  
- ✅ **Granular permissions** → Exactly what you need

### **REPLACE BSS B2B ($510/year):**
- ✅ **Custom pricing logic** → $5.00 discount working
- ✅ **Custom visibility** → Size-specific per customer
- ✅ **Custom order forms** → Streamlined wholesale ordering

### **TOTAL SAVINGS: $858/year** 💰

---

## 🎯 **CUSTOMER SETUP EXAMPLES:**

### **Lake Geneva Country Meats** (16oz only):
```
Customer Tags: wholesale, wholesale-16oz-only
Result: Only sees 16oz products, $5 discount
```

### **15 Lakes Butcher Bistro** (8oz + 16oz):
```
Customer Tags: wholesale, wholesale-8oz-16oz  
Result: Sees 8oz + 16oz, hides 2lb, $5 discount
```

### **Wannemakers** (all sizes):
```
Customer Tags: wholesale, wholesale-all
Result: Sees all products, $5 discount
```

---

## 📞 **IMMEDIATE NEXT STEPS:**

### **OPTION 1: Test Current Setup First**
1. **Disable BSS B2B** → Test our pricing logic works
2. **Confirm $4.99 displays correctly**
3. **Then build enhanced visibility**

### **OPTION 2: Build Full System**
1. **Enhanced wholesale detection**
2. **Customer-specific visibility**  
3. **Replace both Locksmith + BSS**
4. **Save $858/year immediately**

**Which approach do you prefer?** 🚀

**This gives you MUCH more control than Locksmith's basic visibility!** ✨

