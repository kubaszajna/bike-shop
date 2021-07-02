<template>
  <div class="about">
    <navbar></navbar>
    <Hero />
    <ProductList />
  </div>
</template>

<script>
import Hero from "@/components/homepage/Hero.vue";
import ProductList from "@/components/products/ProductList.vue";

export default {
  name: "Home",
  components: {
    Hero,
    ProductList,
  },
};
</script>
