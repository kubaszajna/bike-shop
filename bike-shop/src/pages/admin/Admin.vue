<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1" @click="toggleMenu()" :class="{ toggled: !closeSidebar }">
      <button @click="closeSidebar = false" class="btn btn-outline-primary m-4">
        <i class="fas fa-bars"></i>
      </button>
      <navbar></navbar>

      <main class="page-content pt-2">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/admin/Navbar.vue";
import { fb } from "../../firebase";

export default {
  name: "Admin",
  components: {
    Navbar
  },
  data() {
    return {
      name: null,
      email: null,
      closeSidebar: false,
    };
  },
  methods: {
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
