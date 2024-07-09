<template>
  <div class="container mx-auto mt-16 mb-40 md:mt-32">
    <div class="grid grid-cols-1 md:grid-cols-none md:flex md:space-x-8">
      <!-- Image Section -->
      <div
        class="img md:h-auto bg-cover bg-center bg-no-repeat rounded-3xl md:w-1/2"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>

      <!-- Text Section -->
      <div class="flex flex-col justify-start md:w-1/2">
        <div>
          <h1 class="title text-5xl pb-6 font-bold">À propos de nous</h1>
        </div>
        <div class="pb-8 text-justify">
          La Polyclinique Internationale de Rabat est une structure hospitalière
          privée, implantée depuis 1996 au cœur de la Capitale du Royaume du
          Maroc. Première et unique clinique certifiée ISO 9001, version 2000,
          la Polyclinique Internationale de Rabat, a pu grâce à la compétence de
          ses médecins et de son personnel et grâce à la haute performance de
          son plateau technique, gagner la confiance des patients nationaux et
          de ceux qui arrivent d’autres pays, notamment de l’Afrique
          Subsaharienne. Elle a aussi pu convaincre, les compagnies d’assurances
          internationales les plus renommées comme SOS International, Vanbreda,
          GMC, Inter Mutuelle Assistance et Mondial Assistance, de ses capacités
          à offrir à leurs adhérents des prestations médicales équivalentes à
          celles dont ils peuvent bénéficier en Europe ou aux États-Unis
          d’Amérique.
        </div>
        <div>
          <router-link to="/presentation">
            <button class="btn btn-primary">Lire la suite...</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image from "../assets/images/about-image.jpg";
</script>

<style scoped>
.title {
  color: var(--text-color);
}
.img {
  height: 500px;
}
</style>
