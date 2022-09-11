<template>
  <v-app>
    <v-main class="main">
      <CardDisplayVue 
        :number-card="numberCard"
        :name-card="nameCard"
        :month-card="monthCard"
        :year-card="yearCard"
        :secret-card="secretCard"
        />
      <CardInputVue 
        @change-number-emit="(num) => numberCard = num"
        @change-name-emit="(name) => nameCard = name"
        @change-month-emit="(month) => monthCard = month"
        @change-year-emit="(year) => yearCard = year"
        @change-secret-emit="(secret) => secretCard = secret"
        />
    </v-main>
  </v-app>
</template>

<script setup>
import CardInputVue from './components/CardInput.vue';
import CardDisplayVue from './components/CardDisplay.vue';
import { ref } from 'vue';

const numberCard = ref('');
const nameCard = ref('');
const monthCard = ref('');
const yearCard = ref('');
const secretCard = ref('');
</script>

<style>
  .main {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(5, 5em) repeat(3, 24em);
    grid-template-rows: repeat(5,10em) minmax(5em, auto);
  }


</style>
