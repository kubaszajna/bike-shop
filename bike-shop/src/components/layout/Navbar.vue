<template>
  <div class="navigation">
    <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand" href="#">Bike Shop</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link">Services</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/admin/overview" class="nav-link">Admin Panel</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 my-sm-0 mb-sm-0" type="search" placeholder="Search" aria-label="Search" />
            <a class="btn btn-outline-success my-2 mb-sm-2 mr-sm-2 mr-2" type="submit">Search</a>
            <a class="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit" data-toggle="modal" data-target="#login">{{ email }}</a>
            <a class="btn btn-outline-info my-2 my-sm-0" data-toggle="modal" data-target="#miniCart">
              <i class="fas fa-cart-plus"></i>
            </a>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import { fb } from "../../firebase";

export default {
  name: "Navbar",
  data() {
    return {
      email: "Login | Signup",
    };
  },
  props: {
    msg: String,
  },
  components: {},
  created() {
    // let user = fb.auth().currentUser;
    // this.email = user.email;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation {
  position: absolute;
  width: 100%;
}
.navbar-brand {
  margin-left: 15px;
}
.navbar-collapse {
  margin: 0 15px;
}
@media screen and (min-width: 992px) {
  .form-control {
    max-width: 150px;
  }
}
</style>
