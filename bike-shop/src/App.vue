<template>
  <!-- <the-header></the-header> -->
  <!-- <navbar></navbar>
  <product-list></product-list>
  <mini-cart></mini-cart>
  <add-to-cart></add-to-cart> -->
  <router-view>
    
  </router-view>
</template>

<script>
// import TheHeader from './components/layout/TheHeader.vue';
// import Navbar from './components/layout/Navbar.vue';
// import ProductList from './components/products/ProductList.vue';
// import MiniCart from './components/cart/MiniCart.vue';
// import AddToCart from './components/cart/AddToCart.vue';

export default {
  components: {
    // TheHeader,
    // Navbar,
    // ProductList,
    // MiniCart,
    // AddToCart
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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