<template>
  <header class="s-header" :class="{ 'menu-is-open': navigationOpen }">
    <div class="header-logo">
      <a class="site-logo" href="index.html">
        <img src="../../assets/images/logo-biker.png" alt="Homepage" />
      </a>
    </div>

    <nav class="header-nav">
      <a @click="toggleMenu" class="header-nav__close" title="close" href="#0"
        ><span>Close</span></a
      >

      <div class="header-nav__content">
        <h3>Navigation</h3>
        <!-- <button class="modal-button">Click here to login</button> -->
        <ul class="header-nav__list">
          <li class="current">
            <a class="smoothscroll" href="#home" title="home">Home</a>
          </li>
          <li><a class="smoothscroll" href="#about" title="about">About</a></li>
          <li>
            <a class="smoothscroll" href="#services" title="services"
              >Services</a
            >
          </li>
          <li><a class="smoothscroll" href="#works" title="works">Works</a></li>
          <li>
            <a class="smoothscroll" href="#clients" title="clients">Clients</a>
          </li>
          <li>
            <a class="smoothscroll" href="#contact" title="contact">Contact</a>
          </li>
        </ul>

        <div class="home-content__buttons modal-button-toggle"><a href="#contact" class="smoothscroll btn btn--stroke"> Login / Signup </a></div>

        <p>
          Perspiciatis hic praesentium nesciunt. Et neque a dolorum
          <a href="#0">voluptatem</a> porro iusto sequi veritatis libero enim.
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

    <a @click="toggleMenu" class="header-menu-toggle" href="#0">
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
  },
  mounted() {
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");
    const modalButton = document.querySelector(".modal-button-toggle");
    const closeButton = document.querySelector(".close-button");

    const openModal = () => {
      modal.classList.add("is-open");
      body.style.overflow = "hidden";
    };

    const closeModal = () => {
      modal.classList.remove("is-open");
      body.style.overflow = "initial";
    };

    closeButton.addEventListener("click", closeModal);
    modalButton.addEventListener("click", openModal);
  },
};
</script>

<style lang="scss" scoped>
.modal-button-toggle {
  padding: 0 0 4rem 0;
  .btn {
    width: 185px;
    margin-top: 0;
  }
}
</style>