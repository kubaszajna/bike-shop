<template>
  <!-- <the-header></the-header> -->
  <!-- <navbar></navbar>
  <product-list></product-list>
  <mini-cart></mini-cart>
  <add-to-cart></add-to-cart> -->
  <the-modal></the-modal>
  <router-view>
  </router-view>
</template>

<script>
// import TheHeader from './components/layout/TheHeader.vue';
// import Navbar from './components/layout/Navbar.vue';
// import ProductList from './components/products/ProductList.vue';
// import MiniCart from './components/cart/MiniCart.vue';
// import AddToCart from './components/cart/AddToCart.vue';
import TheModal from './components/layout/TheModal.vue';

export default {
  components: {
    // TheHeader,
    // Navbar,
    // ProductList,
    // MiniCart,
    // AddToCart,
    TheModal
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'lora-regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>