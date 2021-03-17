<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerBar"
      app
    >
      <Drawer/>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawerBar = !drawerBar"></v-app-bar-nav-icon>

      <v-toolbar-title class="toolbar-title">Post-App</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import Drawer from '@/components/Drawer';
  export default {
    data: () => ({ drawerBar: true }),
    components: {
      Drawer
    }
  }
</script>

<style lang="scss">
.toolbar-title{
    font-size: 24px;
    font-weight: 900;
    color: #1eb980;
    position: relative;
    &::before{
      content: "";
      position: absolute;
      left: 4px;
      top: 3px;
      width: 5px;
      height: 22px;
      background-color: #ffcf44;
    }
}

.content{
  &::first-letter {
    text-transform: uppercase;
  }
}

a {
  text-decoration: none;
}

</style>
