<template>
  <!-- <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-item sidebar-brand">
        <a href="#">pro sidebar</a>
        <button id="close-sidebar" @click="closeSidebar = true">
          <i class="fas fa-times text-secondary"></i>
        </button>
      </div>
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
  </nav> -->
  <header class="s-header" :class="{ 'menu-is-open': navigationOpen }">
    <nav class="header-nav">
      <a @click="toggleMenu" class="header-nav__close" title="close" href="#"
        ><span>Close</span></a
      >

      <div class="header-nav__content">
        <h3>Navigation</h3>
        <ul class="header-nav__list">
          <li class="current">
            <a class="smoothscroll" href="#home" title="home">Home</a>
          </li>
          <li><a class="smoothscroll" href="#services" title="services">Services</a></li>
          <li><a class="smoothscroll" href="#works" title="works">Works</a></li>
          <li>
            <a class="smoothscroll" href="#clients" title="clients">Clients</a>
          </li>
          <li>
            <a class="smoothscroll" href="#contact" title="contact">Contact</a>
          </li>
          <li>
            <a href="/admin" title="admin">Admin panel</a>
          </li>
        </ul>

        <div class="home-content__buttons modal-button-toggle"><button class="smoothscroll btn btn--stroke"> Login / Signup </button></div>

        <p>
          Perspiciatis hic praesentium nesciunt. Et neque a dolorum
          <a href="#">voluptatem</a> porro iusto sequi veritatis libero enim.
          Iusto id suscipit veritatis neque reprehenderit.
        </p>

        <ul class="header-nav__social">
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-behance"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-dribbble"></i></a>
          </li>
        </ul>
      </div>
    </nav>

    <a @click="toggleMenu" class="header-menu-toggle" href="#">
      <span class="header-menu-text">Menu</span>
      <span class="header-menu-icon"></span>
    </a>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      navigationOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.navigationOpen = !this.navigationOpen;
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar-content {
  overflow-y: hidden !important;
}
</style>