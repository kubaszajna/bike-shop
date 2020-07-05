import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import About from "../views/About.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
    alias: '/home'
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "products",
        name: "Products",
        component: Products
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
