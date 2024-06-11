<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-navbar fixed-top">
    <div class="container d-flex justify-content-between">
      <a class="navbar-brand warning font-weight-bolder" href="#"
        ><img src="../assets/logo.png"
      /></a>

      <button
        class="navbar-toggler"
        style="margin-right: 5px !important"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav flex-end">
          <li class="nav-item active">
            <router-link class="nav-link text-white" to="/">HOME </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link text-white" to="/about">ABOUT</router-link>
          </li> -->
          <!-- <li class="nav-item ">
            <a class="nav-link text-white" href="#">SERVICE </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">MENU</a>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/products"
              >products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/dashboard"
              >Dashboard</router-link
            >
          </li>
       
            <!-- <router-link
      v-if="isLoggedIn"
   
    >
      {{ user.firstName }}
    </router-link> -->
    
        </ul>

        <router-link
      v-if="isLoggedIn"
      class="btn bg-warning"
      to="/"
      @click="logout"
    >
      Logout
    </router-link>
    <router-link class="btn bg-warning"

   v-else
      to="/login"
    
    >
      Login
    </router-link>
        
   
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "pinia";
import user from "../store/user";

export default {
  computed: {
    ...mapState(user, ["isLoggedIn", "user"]),
  },
  methods: {
    ...mapActions(user, ["logout"]),
    //   function showSnackbar() {
    //   var snackbar = document.getElementById("mySnackbar");
    //   var toast = new bootstrap.Toast(snackbar);
    //   toast.show();
    // }
  },
};
</script>
<style>
.warning {
  color: #fea116 !important;
}
.bg-warning {
  background-color: #fea116 !important;
}
.bg-navbar {
  background: linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)),
    url(../img/bg-hero.jpg);
}
</style>
