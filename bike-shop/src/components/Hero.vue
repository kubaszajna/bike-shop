<template>
  <div class="hero">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-5 col-sm-12">
          <div class="hero-content">
            <h1 class="herotitle">Bike Shop for Developers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div class="hero-btn mt-5">
              <button class="btn custom-btn btn-info mr-4">Explore</button>
              <a href="#products" class="btn custom-btn btn-outline-secondary">Products</a>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-sm-10 imageAbout">
          <div class="graphic">
            <img src="../assets/homepage.svg" alt class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  height: 100vh;
}

@media screen and (max-width: 767px) {
  .hero {
    height: unset;
    margin-top: 5rem;
  }
}
</style>
