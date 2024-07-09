<template>
  <div class="container mx-auto p-8">
    <div class="mt-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
    </div>
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
  created() {
    this.getBlogs();
  },
  methods: {
    async getBlogs() {
      await axios
        .get("http://127.0.0.1:8000/api/blogs?order=desc")
        .then((res) => {
          this.blogs = res.data.data;
          console.log(this.blogs);
        });
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
  /* Ensure the title is truncated if it's too long */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card-body p {
  /* Limit the content to a specific number of lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2; /* Number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
