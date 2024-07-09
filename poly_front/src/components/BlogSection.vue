<template>
  <div class="container mx-auto">
    <div>
      <h1 class="font-bold text-center text-6xl">Articles Blog</h1>
      <p class="text-center text-gray-500 pt-4">
        Exploration et partage des connaissances médicales à travers nos
        articles détaillés et informatifs.
      </p>
    </div>
    <div class="mt-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <router-link to="/blog">
        <button class="btn">Explorer plus</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import BlogCard from "./BlogCard.vue";
import axios from "axios";

export default {
  name: "BlogSection",
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
        const response = await axios.get(
          "http://127.0.0.1:8000/api/blogs?order=desc"
        );
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

<style></style>
