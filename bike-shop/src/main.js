import { createApp } from 'vue';
import { fb } from './firebase';
import Swal from 'sweetalert2';

import router from './router.js';
import store from './store/index.js';
// import './assets/js/modal.js';
import App from './App.vue';

import Navbar from './components/layout/Navbar.vue';
import ProductList from './components/products/ProductList.vue';
import ProductCustom from './components/products/ProductCustom.vue';
import MiniCart from './components/cart/MiniCart.vue';
import AddToCart from './components/cart/AddToCart.vue';

// import 'bootstrap';
// import 'popper.js';
import './assets/css/app.scss';

const app = createApp(App).use(router).use(store);

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})

window.Toast = Toast;

app.component('navbar', Navbar);
app.component('product-list', ProductList);
app.component('product-custom', ProductCustom);
app.component('mini-cart', MiniCart);
app.component('add-to-cart', AddToCart);

app.mount("#app");

fb.auth().onAuthStateChanged(() => {
  if (!app) {
    createApp(App).use(router).use(store).mount("#app");
  }
});

