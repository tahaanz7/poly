<template>
  <section class="p-4 md:p-8">
    <div
      class="container mx-auto px-6 space-y-6 md:space-y-0 md:flex md:flex-row md:space-x-6 items-center"
    >
      <div class="md:w-1/2 flex flex-col space-y-6">
        <h1 class="text-3xl md:text-6xl font-bold">
          Polyclinique International de Rabat
        </h1>
        <p class="text-sm md:text-base">
          La Polyclinique Internationale de Rabat est une structure hospitalière
          privée, implantée depuis 1996 au cœur de la Capitale du Royaume du
          Maroc.
        </p>

        <!-- BUTTONS -->
        <div
          class="flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2 md:pt-12"
        >
          <button class="btn btn-secondary  text-white">
            Demander Devis
          </button>
          <button class="btn">Télécharger Document</button>
        </div>

        <!-- THREE ELEMENTS - CONVENTION - INSURANCE  -->
        <div
          class="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 pt-6 md:pt-12 justify-items-start"
        >
          <div class="flex flex-col  md:flex-col items-center space-y-1">
            <img class="icon" src="../assets/icons/urgent.svg" alt="" />
            <h2 class="text-xs md:text-sm text-center">URGENCES</h2>
          </div>
          <div class="flex flex-col items-center space-y-1">
            <img class="icon" src="../assets/icons/convention.svg" alt="" />
            <h2 class="text-xs md:text-sm text-center">CONVENTIONS AFRIQUE</h2>
          </div>
          <div class="flex flex-col items-center space-y-1">
            <img class="icon" src="../assets/icons/insurance.svg" alt="" />
            <h2 class="text-xs md:text-sm text-center">
              CONVENTIONS ASSURANCE
            </h2>
          </div>
        </div>
      </div>

      <div class="md:w-1/2 md:mt-0 mt-6 bg-gray-200 heroimage rounded-2xl">
        <img
          src="../assets/images/heroimage.jpg"
          class="object-cover w-full h-full rounded-xl"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.icon {
  width: 3rem; /* Adjust the size as needed */
  height: 3rem; /* Adjust the size as needed */
  color: gray;
}

.text-xs {
  color: gray;
  font-size: 0.75rem; /* 12px */
}


</style>
