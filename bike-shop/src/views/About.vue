<template>
  <div class="about">
    <Navbar></Navbar>
    <h1>This is an about page</h1>
    <Hero />
    <Products />
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
  },
};
</script>
