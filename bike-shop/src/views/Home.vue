<template>
  <div class="about">
    <Navbar></Navbar>
    <Hero />
    <Products />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Products
  }
};
</script>