<template>
  <v-app>
    <v-main class="main">
      <CardDisplayVue/>
      <CardInputVue/>
    </v-main>
  </v-app>
</template>

<script>
import CardInputVue from './components/CardInput.vue';
import CardDisplayVue from './components/CardDisplay.vue';

export default {
  name: 'App',

  components: {
    CardInputVue, CardDisplayVue
  },

  data: () => ({
    //
  }),
}
</script>

<style>
  .main {
    display: grid;
    grid-template-columns: repeat(2, 20em) 30em 1fr;
    grid-template-rows: repeat(3, 20em);
  }


</style>
