<template>
  <hero-section />
  <about-section />
  <blog-section />
</template>
<script>
import AboutSection from "../components/AboutSection.vue";
import BlogSection from "../components/BlogSection.vue";
import HeroSection from "../components/HeroSection.vue";
import NavbarComp from "../components/NavbarComp.vue";
export default {
  components: { NavbarComp, HeroSection, AboutSection, BlogSection },
  name: "Acceuil",
};
</script>
<style></style>
