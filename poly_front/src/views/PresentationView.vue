<template>
  <div class="container mx-auto p-8">
    <!-- Presentation -->
    <h1 class="text-5xl md:text-8xl pb-12">Présentation</h1>
    <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-12">
      <div class="md:w-1/2">
        <h1 class="text-2xl mb-4 font-bold">À propos</h1>
        <p class="text-justify text-gray-700">
          <strong>La Polyclinique Internationale de Rabat</strong> est une
          structure hospitalière privée, implantée depuis 1996 au cœur de la
          Capitale du Royaume du Maroc. Première et unique clinique certifiée
          ISO 9001, version 2000, la Polyclinique Internationale de Rabat, a pu
          grâce à la compétence de ses médecins et de son personnel et grâce à
          la haute performance de son plateau technique, gagner la confiance des
          patients nationaux et de ceux qui arrivent d’autres pays, notamment de
          l’Afrique Subsaharienne. Elle a aussi pu convaincre, les compagnies
          d’assurances internationales les plus renommées comme SOS
          International, Vanbreda, GMC, Inter Mutuelle Assistance et Mondial
          Assistance, de ses capacités à offrir à leurs adhérents des
          prestations médicales équivalentes à celles dont ils peuvent
          bénéficier en Europe ou aux États-Unis d’Amérique.
        </p>
      </div>
      <div class="hidden md:w-1/2 md:flex">
        <img
          class="w-full h-auto object-cover rounded-lg"
          src="../assets/images/pres.jpg"
          alt=""
        />
      </div>
    </div>

    <!-- -------- Professor ----------------- -->
    <div
      class="flex flex-col md:flex-row items-start p-4 border rounded-lg shadow-lg mt-8"
    >
      <div class="flex-shrink-0 w-full md:w-1/2">
        <img
          src="../assets/images/doctorpres.jpg"
          alt="Image"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div class="mt-4 md:mt-0 md:ml-6 w-full md:w-1/2">
        <h2 class="text-2xl font-bold mb-4">Pr. Abdelmajid Saoura</h2>
        <p class="text-gray-700 text-justify">
          La carrière du Pr. Abdelmajid Saoura est marquée par une excellence
          académique et un engagement profond envers les soins de santé et la
          coopération en Afrique. Après avoir obtenu son doctorat en médecine à
          Rabat, il a établi une pratique privée renommée dans le nord du Maroc.
          En 1996, il a fondé la Polyclinique Internationale de Rabat, pionnière
          par sa certification ISO 9001 et son département dédié à l'Afrique.
          Ses initiatives incluent SEVAMED pour les évacuations médicales à
          travers l'Afrique anglophone, hispanophone et lusophone, favorisant
          une collaboration interafricaine significative. Reconnue
          internationalement, il a participé à des missions de formation, à des
          efforts humanitaires et à des parrainages culturels pour les étudiants
          africains. Le leadership du Pr. Saoura l'a positionné comme une figure
          clé dans l'avancement des soins de santé et de la coopération
          régionale à travers l'Afrique.
        </p>
      </div>
    </div>

    <!-- -- VALUES AND MISSION -->
    <div class="bg-primary rounded-lg mt-8">
      <!-- Our Mission -->
      <div class="flex-1 bg-primary rounded-lg p-8">
        <h2
          class="text-3xl mb-4 font-bold bg-primary text-white rounded-lg inline-block"
        >
          Notre Mission
        </h2>
        <div class="space-y-4">
          <p class="bg-primary text-white text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            adipisci consequatur dolores deserunt quaerat debitis ab distinctio
            quia commodi omnis dolore harum rem unde nihil minima, eos id?
            Minima magni minus ipsam pariatur natus, nihil, enim laudantium id
            reiciendis libero similique nam quia distinctio ea dicta repellat
            accusantium modi ullam perferendis animi? Laboriosam neque earum
            sint fuga qui asperiores atque, rem a quia reprehenderit
            voluptatibus adipisci aperiam quibusdam doloribus itaque pariatur
            tempora excepturi ipsa obcaecati velit perferendis dignissimos
            soluta temporibus. Explicabo pariatur deleniti odit. Non modi
            eligendi vel quaerat explicabo quod cum molestiae vitae et
            voluptates, sunt nam dolorem quibusdam.
          </p>
        </div>
      </div>

      <!-- Our Values -->
      <!--  <div class="flex-1 bg-primary rounded-lg p-8">
        <h2
          class="text-3xl mb-4 font-bold bg-primary text-white rounded-lg inline-block"
        >
          Nos Valeurs
        </h2>
        <div>
          <ul class="flex flex-col">
            <li class="bg-primary text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, maiores!</li>
            <li class="bg-primary text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, maiores!</li>
            <li class="bg-primary text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, maiores!</li>
            <li class="bg-primary text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, maiores!</li>
          </ul>
        </div>
      </div> -->
    </div>

    <!-- ---BLOGS--------- -->

    <div class="mt-8">
      <h2 class="text-3xl mb-4 font-bold">Blog Suggestions</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
    </div>

    <!--  ----- SPACE ----- -->
    <div class="mb-96"></div>
  </div>
</template>

<script>
import axios from "axios";
import BlogCard from "../components/BlogCard.vue";

export default {
  components: { BlogCard },
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    this.getBlogs();
  },
  methods: {
    async getBlogs() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/blogs");
        this.blogs = response.data.data.slice(0, 3);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.card figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-body h2 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card-body p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
