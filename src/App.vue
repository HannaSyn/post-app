<template>
  <v-app id="app" app dark>
    <TheMainLayout>
      <router-view/>
    </TheMainLayout>
  </v-app>
</template>

<script>
import TheMainLayout from '@/layouts/TheMainLayout'
export default {
  
  name: "App",
  components: {
    TheMainLayout
  }
}

</script>
