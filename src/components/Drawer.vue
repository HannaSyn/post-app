<template>
  <v-card
    class="drawer mx-auto"
  >
    <div>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="drawer__title title">
            Welcome!
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
            <router-link 
              :to="item.routerLink"
              class="drawer__link">
              {{ item.title }}
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Posts', routerLink: '/'},
          { title: 'Create Post', routerLink: '/create'},
        ],
        right: null,
      }
    },
  }
</script>
<style lang="scss" scoped>
.drawer{
  height:100%;
  width:256;
  
  &__title{
  color: #045d56;
  }
  &__link {
    position: relative;
    padding: 0 0 0 15px;
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
    font-weight: 900;
    &::before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 5px;
      height: 20px;
      background-color: #ff6859;
    }
  }
}


</style>