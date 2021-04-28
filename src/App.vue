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
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
    ...mapActions(['getUsers'])
  },
  async created() {
    await this.getUsers()
  }
};
</script>


