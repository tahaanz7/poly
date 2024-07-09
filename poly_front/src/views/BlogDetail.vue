<template>
  <div>
    <div v-for="blog in blogs" :key="blog.id">
      <h1>{{ blog.title }}</h1>
    </div>
    <pre>{{ blog }}</pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogDetail",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      blogs: null,
    };
  },
  mounted() {
    this.getBlog();
  },
  methods: {
    async getBlog() {
      await axios
        .get(`"http://127.0.0.1:8000/api/blogs/${this.id}"`)
        .then((res) => {
          this.blogs = res;
          console.log(this.blogs);
        });
    },
  },
};
</script>

<style></style>
