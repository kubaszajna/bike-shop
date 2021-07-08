<template>
  <div class="about">
    <hero></hero>
    <product-list></product-list>
    <product-custom></product-custom>
  </div>
</template>

<script>
import Hero from "@/components/homepage/Hero.vue";
import ProductList from "@/components/products/ProductList.vue";
import ProductCustom from '@/components/products/ProductCustom.vue';

export default {
  name: "Home",
  components: {
    Hero,
    ProductList,
    ProductCustom
  },
};
</script>
