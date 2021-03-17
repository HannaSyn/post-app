<template>
  <v-list three-line>
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </v-list>
</template>

<script>
import Post from "@/components/Post";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    Post
  },
  computed: mapGetters(["posts"]),
  mounted() {
    if (!this.posts.length) {
      this.fetchPosts();
    }
  },
  methods: mapActions(["fetchPosts"])
};
</script>

<style></style>
