<template>
  <crdn-bar />
  <nav class="p-8 md:p-4 sticky top-0" v-motion-slide-visible-once-top>
    <div
      class="container navedit px-8 mx-auto flex items-center justify-between"
    >
      <router-link class="block" to="/"
        ><div class="py-3">
          <img src="../assets/poly_logo.svg" alt="" /></div
      ></router-link>

      <div class="hidden md:flex space-x-4 lg:space-x-12">
        <router-link class="text-gray-600 hover:text-gray-900" to="/"
          >Acceuil</router-link
        >
        <router-link
          class="text-gray-600 hover:text-gray-900"
          to="/presentation"
          >Présentation</router-link
        >
        <router-link class="text-gray-600 hover:text-gray-900" to="/specialites"
          >Spécialités</router-link
        >
        <router-link class="text-gray-600 hover:text-gray-900" to="/medecins"
          >Medecins</router-link
        >
        <router-link
          class="text-gray-600 hover:text-gray-900"
          to="/prise-en-charge"
          >Prise en charge</router-link
        >
        <router-link class="text-gray-600 hover:text-gray-900" to="/blog"
          >Blog</router-link
        >
      </div>
      <div class="hidden md:flex">
        <router-link class="btn btn-outline btn-primary" to="/contact"
          >Contact</router-link
        >
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-500 hover:text-indigo-800">
          <svg
            class="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <div
      v-show="isMenuOpen"
      class="p-4 mt-4 menu before:md:hidden"
      v-motion-slide-visible-top
    >
      <router-link
        class="block text-xl text-gray-600 menuitem hover:text-gray-800 p-4 hover:bg-gray-100"
        to="/"
        >Acceuil</router-link
      >
      <router-link
        class="block text-xl text-gray-600 menuitem hover:text-gray-800 p-4 hover:bg-gray-100"
        to="/presentation"
        >Présentation</router-link
      >
      <router-link
        class="block text-xl text-gray-600 menuitem hover:text-gray-800 p-4 hover:bg-gray-100"
        to="/specialites"
        >Spécialités</router-link
      >
      <router-link
        class="block text-xl text-gray-600 menuitem hover:text-gray-800 p-4 hover:bg-gray-100"
        to="/medecins"
        >Medecins</router-link
      >
      <router-link
        class="block text-xl text-gray-600 menuitem hover:text-gray-800 p-4 hover:bg-gray-100"
        to="/prise-en-charge"
        >Prise en charge</router-link
      >
      <router-link
        class="block text-xl text-gray-600 menuitem hover:text-gray-800 p-4 hover:bg-gray-100"
        to="/blog"
        >Blog</router-link
      >
      <div class="p-4 block md:hidden">
        <router-link class="btn btn-outline btn-info" to="/contact"
          >Contact</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import CrdnBar from "./CrdnBar.vue";
export default {
  components: { CrdnBar },
  name: "NavbarComp",

  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
img {
  width: 90px;
}
.navedit,
.menu {
  border-radius: 32px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.09);
}
.menuitem {
  border-radius: 16px;
}
</style>
