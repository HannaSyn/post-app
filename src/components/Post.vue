<template>
  <v-list-item>
    <v-list-item-content>
      <router-link :to="postLink">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 24 : 6"
              class="mx-auto pa-6 transition-swing"
            >
              <v-list-item-title class="title content">{{
                post.title
              }}</v-list-item-title>
              <v-list-item-subtitle class="text content">{{
                post.body
              }}</v-list-item-subtitle>
            </v-card>
          </template>
        </v-hover>
      </router-link>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      postUri: "posts/"
    };
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.postUri + this.post.id;
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 18px;
  margin: 0 0 15px;
}
</style>
