import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetails from './pages/coaches/CoachDetails.vue'
// import CoachesList from './pages/coaches/CoachesList.vue'
// import CoachRegistration from './pages/coaches/CoachRegistration.vue'
// import ContactCoach from './pages/requests/ContactCoach.vue'
// import RequestsReceived from './pages/requests/RequestsReceived.vue'
import NotFound from './pages/NotFound.vue'

import Home from "./pages/homepage/Home.vue";
import Admin from "./pages/admin/Admin.vue";
import Overview from "./pages/admin/Overview.vue";
import Products from "./pages/admin/Products.vue";
import Orders from "./pages/admin/Orders.vue";
import Profile from "./pages/admin/Profile.vue";
import About from "./components/homepage/About.vue";
import Checkout from "./pages/checkout/Checkout.vue";
import { fb } from './firebase'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/coaches' },
    // { path: '/coaches', component: CoachesList },
    // { path: '/coaches/:id', component: CoachDetails, children: [
    //   { path: 'contact', component: ContactCoach }
    // ] },
    // { path: '/register', component: CoachRegistration },
    // { path: '/requests', component: RequestsReceived },

    { path: "/", component: Home },
    { path: "/admin", component: Admin,
      meta: { requiresAuth: true },
      children: [
        { path: "overview", component: Overview },
        { path: "products", component: Products },
        { path: "profile", component: Profile },
        { path: "orders", component: Orders }
      ]
    },
    { path: "/checkout", component: Checkout },
    { path: "/about", component: About },

    { path: '/:notFound(.*)', component: NotFound }
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router;