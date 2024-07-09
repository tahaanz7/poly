<!-- components/BlogCard.vue -->
<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <figure class="h-48 overflow-hidden">
      <img
        :src="blog.image"
        :alt="blog.title"
        class="w-full h-full object-cover"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ blog.title }}</h2>
      <p class="text-gray-400">{{ formatDate(blog.created_at) }}</p>
      <p class="text-gray-600">{{ blog.content }}</p>
      <div class="card-actions justify-end">
        <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }">
          <button class="btn btn-secondary text-white">Lire la suite...</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
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
