<template>
  <div>
  <!-- <v-app> -->
    <Header />
    <Home />
    <Design />
    <Development />
    <About />
    <Contact />
    <!-- <v-main>
      <router-view/>
    </v-main> -->
  <!-- </v-app> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './views/Home.vue'
import Design from './views/Design.vue'
import Development from './views/Development.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

// import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Design,
    Development,
    About,
    Contact,
  },
  // methods: {
  //   ...mapActions(['getUsers'])
  // },
  // async created() {
  //   await this.getUsers()
  // }
};
</script>

<style lang="scss">
// @import './styles/main.scss';
</style>

