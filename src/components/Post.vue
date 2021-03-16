<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-html="post.title"></v-list-item-title>
      <v-list-item-subtitle v-html="post.body"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
}
</script>