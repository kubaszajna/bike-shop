import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import { fb } from './firebase';
import VueFirestore from 'vue-firestore'


Vue.use(VueFirestore)

window.$ = window.jQuery = jQuery;

import 'bootstrap';
import 'popper.js';
import './assets/app.scss';

import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})

window.Toast = Toast;

Vue.component('Navbar', require('./components/Navbar.vue').default);

Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
