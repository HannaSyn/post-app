<template>
  <v-card
    height="400"
    width="256"
    class="mx-auto"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Post-App
          </v-list-item-title>
          <v-list-item-subtitle>
            Read or create new posts
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >

          <v-list-item-content>
            <router-link :to="item.routerLink">{{ item.title }}</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Posts', routerLink: '/'},
          { title: 'Create Post', routerLink: '/'},
        ],
        right: null,
      }
    },
  }
</script>
