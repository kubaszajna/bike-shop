<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1" @click="toggleMenu()" :class="{ toggled: !closeSidebar }">
      <button @click="closeSidebar = false" class="btn btn-outline-primary m-4">
        <i class="fas fa-bars"></i>
      </button>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">pro sidebar</a>
            <button id="close-sidebar" @click="closeSidebar = true">
              <i class="fas fa-times text-secondary"></i>
            </button>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img class="img-responsive img-rounded" src="../../assets/avatar.jpg" alt="User picture" />
            </div>
            <div class="user-info">
              <span class="user-name">
                Jhon
                <strong>Smith</strong>
              </span>
              <span class="user-role">{{ email }}</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search..." />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>

              <li>
                <router-link to="/admin/overview">
                  <i class="fa fa-chart-line"></i>
                  <span>Overview</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/products">
                  <i class="fab fa-amazon"></i>
                  <span>Products</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/orders">
                  <i class="fa fa-shopping-cart"></i>
                  <span>Orders</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/profile">
                  <i class="fa fa-user"></i>
                  <span>Profile</span>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <i class="fa fa-home"></i>
                  <span>Shop Homepage</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout()">
                  <i class="fa fa-power-off"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main class="page-content pt-2">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
// import Hero from "@/components/Hero.vue";
import { fb } from "../../firebase";

export default {
  name: "Admin",
  data() {
    return {
      name: null,
      email: null,
      closeSidebar: false,
    };
  },
  methods: {
    toggleMenu() {
      // $(".page-wrapper").toggleClass("toggled");
      let pageWrapper = document.querySelector('.page-wrapper')
      pageWrapper.classList.toggle('toggled');
    },
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    let user = fb.auth().currentUser;
    this.email = user.email;
  },
};
</script>

<style scoped lang="scss">
.sidebar-content {
  overflow-y: hidden !important;
}
#close-sidebar {
  background: none;
  border: none;
}
</style>
