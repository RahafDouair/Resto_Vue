

<template>
 <Navbar/>
   <LoadingScreen v-if="isLoading"></LoadingScreen>

 <!-- <HeroSection/>
<ServiceView/>
<AboutView/>
<PopularItems/> -->
<!-- <Testmonial/> -->
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ServiceView from './views/ServiceView.vue';
import AboutView from './views/AboutView.vue';
import LoadingScreen from './components/LoadingScreen.vue';
import PopularItems from './components/PopularItems.vue';
import Testmonial from './components/Testmonial.vue';



export default{
  components: { Navbar, LoadingScreen, HeroSection, ServiceView, AboutView, PopularItems, Testmonial },

  data:()=>({
    //  return()
    isLoading: true
  })
}
</script>
<style scoped>

</style>
