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
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(5, 5em) repeat(3, 24em);
    grid-template-rows: repeat(5,10em) minmax(5em, auto);
  }


</style>
