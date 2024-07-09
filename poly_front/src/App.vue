<template>
  <div class="flex flex-col min-h-screen">
    <NavbarComp v-if="!$route.meta.hideNavbarFooter" />
    <router-view></router-view>
    <footer-comp v-if="!$route.meta.hideNavbarFooter" />
  </div>
</template>

<script>
import AnimateOnScroll from "primevue/animateonscroll";

import FooterComp from "./components/FooterComp.vue";
import NavbarComp from "./components/NavbarComp.vue";

export default {
  name: "App",
  components: { NavbarComp, FooterComp },
};
</script>

<style scoped></style>
