<template>
  <div class="about">
    <navbar></navbar>
    <Hero />
    <ProductList />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import ProductList from "@/sections/ProductList.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Products,
    ProductList,
  },
};
</script>
