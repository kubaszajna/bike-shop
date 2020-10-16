<template>
  <div class="home">
    <navbar></navbar>
    <Hero />
    <product-list />
    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-lg-6 col-sm-12 imageAbout">
          <img src="../assets/team.svg" alt width="400" />
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <h3>Learn More About us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!</p>
          <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
        </div>
      </div>
    </div>
    <Login></Login>

    <mini-cart></mini-cart>

  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import ProductList from "@/sections/ProductList.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Hero,
    ProductList,
    Login,
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 991px) {
  .imageAbout {
    margin-bottom: 30px;
  }
}
</style>
