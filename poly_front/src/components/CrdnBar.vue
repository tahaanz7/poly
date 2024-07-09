<template>
  <div
    class="hidden md:flex container mx-auto py-2 p-8 text-gray-500 mt-4 border rounded-xl"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <div class="flex items-center">
          <span class="mr-2"><i class="fas fa-map-marker-alt"></i></span>
          <span>8, rue de Tunis, quartier Hassan Rabat-Maroc</span>
        </div>
        <div class="flex items-center">
          <span class="mr-2"><i class="fas fa-phone-alt"></i></span>
          <span>+212 661 14 75 46</span>
        </div>
        <div class="flex items-center">
          <span class="mr-2"><i class="fas fa-envelope"></i></span>
          <span>info@polycrabat.com</span>
        </div>
      </div>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-gray-400"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a href="#" class="hover:text-gray-400"
          ><i class="fab fa-youtube"></i
        ></a>
        <a href="#" class="hover:text-gray-400"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a href="#" class="hover:text-gray-400"
          ><i class="fab fa-instagram"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CrdnBar",
};
</script>

<style></style>
