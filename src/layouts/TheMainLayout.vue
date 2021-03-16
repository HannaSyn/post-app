<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <Drawer/>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon ></v-app-bar-nav-icon>

      <v-toolbar-title>Post-App</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import Drawer from '@/components/Drawer';
  export default {
    data: () => ({ drawer: null }),
    components: {
      Drawer
    }
  }
</script>
