<template>
  <footer
    class="container mx-auto footer bg-base-200 text-base-content p-10 mt-auto"
  >
    <div class="footer grid grid-cols-1 space-y-6 md:grid-cols-4">
      <!-- LOOGOO -->
      <aside class="border-b pb-4 md:border-0">
        <img src="../../src/assets/poly_logo.svg" alt="" />

        <p>Polyclinique Internationale de Rabat.</p>
      </aside>

      <!-- CORDONEES -->
      <nav class="border-b pb-4 md:border-0">
        <h6 class="footer-title font-bold">Nos Coordonnées</h6>
        <div class="flex flex-row space-x-2 items-baseline">
          <i class="fa-solid fa-location-dot"></i>
          <a class="link link-hover"
            >8, rue de Tunis, quartier Hassan Rabat-Maroc</a
          >
        </div>
        <div class="flex flex-row space-x-2 items-baseline">
          <i class="fa-solid fa-envelope"></i>
          <a class="link link-hover"> info@polycrabat.com</a>
        </div>
        <div class="flex flex-row space-x-2 items-baseline">
          <i class="fa-solid fa-phone"></i>
          <a class="link link-hover">+212 661 14 75 46</a>
        </div>
        <div class="flex flex-row space-x-2 items-baseline">
          <i class="fa-solid fa-message"></i>
          <a class="link link-hover">Contactez-nous</a>
        </div>
      </nav>

      <!-- MENU -->
      <nav class="border-b pb-4 md:border-0">
        <h6 class="footer-title font-bold">Menu</h6>
        <div class="flex flex-row space-x-2 items-baseline">
          <i class="fa-solid fa-angle-right"></i>
          <a class="link link-hover">Acceuil</a>
        </div>
        <div class="flex flex-row space-x-2 items-baseline">
          <i class="fa-solid fa-angle-right"></i>
          <a class="link link-hover">Présentation </a>
        </div>
        <div class="flex flex-row space-x-2 items-baseline">
          <i class="fa-solid fa-angle-right"></i>
          <a class="link link-hover">Spécialités</a>
        </div>
        <div class="flex flex-row space-x-2 items-baseline">
          <i class="fa-solid fa-angle-right"></i>
          <a class="link link-hover">Medecins</a>
        </div>

        <div class="flex flex-row space-x-2 items-baseline">
          <i class="fa-solid fa-angle-right"></i>
          <a class="link link-hover">Prise en charge</a>
        </div>
        <div class="flex flex-row space-x-2 items-baseline">
          <i class="fa-solid fa-angle-right"></i>
          <a class="link link-hover">Blog</a>
        </div>
      </nav>

      <!-- SOCIAL -->
      <nav>
        <h6 class="footer-title font-bold">Social</h6>
        <div class="grid grid-flow-col gap-4 items-center">
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </nav>
    </div>
  </footer>
  <footer
    class="container mx-auto rounded-md footer footer-center text-base-content p-4"
  >
    <aside>
      <p>Copyright © 2024 - All right reserved</p>
    </aside>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped></style>
