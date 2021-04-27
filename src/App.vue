<template>
  <v-app>
    <Header />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
// import SDK from './sdk.js';
// import { test } from './sdk.js';

export default {
  name: 'App',
  components: {
    Header
  },
  // async mounted () {
  //   await this.SDK.test();
  // }
};
</script>
