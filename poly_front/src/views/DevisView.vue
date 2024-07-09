<template>
  <div class="container mx-auto p-8">
    <div class="w-1/2 flex flex-col space-y-4">
      <h1 class="text-6xl">Demander Devis</h1>
      <h3 class="font-thin pl-2 text-2xl text-gray-400">
        Nous sommes à votre écoute
      </h3>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-row space-x-2 justify-between">
          <input type="text" placeholder="Nom" class="w-full" />
          <input type="text" placeholder="Prénom" class="w-full" />
        </div>
        <input type="email" name="" id="" placeholder="Email" />
        <input type="text" name="" id="" placeholder="Objet" />
        <textarea name="" id="" placeholder="Votre message"></textarea>
        <button class="btn btn-primary">Demander Devis</button>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
input,
textarea {
  border: 1px solid gray;
  padding: 15px 30px;
  border-radius: 10px;
}
</style>
