<template>
  <div class="pt-8 container mx-auto flex mb-32">
    <!-- Left half with background image -->
    <div class="md:w-1/2">
      <div class="flex space-x-4 h-full">
        <div
          class="w-2/5 bg-primary flex items-center justify-center rounded-l-3xl"
        ></div>
        <div
          class="w-3/5 h-full bg-cover bg-center bg-no-repeat rounded-r-3xl"
          :style="{ backgroundImage: `url(${image})` }"
        ></div>
      </div>
    </div>

    <!-- Right half with contact form -->
    <div class="flex-col w-1/2 flex space-y-4 pl-8">
      <h1 class="text-6xl">Contactez-nous</h1>
      <h3 class="font-thin pl-2 text-2xl text-gray-400">
        Nous sommes à votre écoute
      </h3>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-row space-x-2">
          <input type="text" placeholder="Nom" class="w-full" />
          <input type="text" placeholder="Prénom" class="w-full" />
        </div>
        <input type="email" placeholder="Email" class="w-full" />
        <input type="text" placeholder="Objet" class="w-full" />
        <textarea placeholder="Votre message" class="w-full"></textarea>
        <button class="btn btn-primary">Envoyer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import image from "../assets/images/contact_image.jpg";
</script>

<style scoped>
input,
textarea {
  border: 1px solid gray;
  padding: 15px 30px;
  border-radius: 10px;
  resize: none;
}

textarea {
  min-height: 150px; /* Minimum height */
  resize: none; /* Allow vertical resizing */
}
</style>
