<template>
  <div class="app-root">
    <Header />
    <div class="main-content">
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
    <Sidebar>
      <nav-mobile />
   </Sidebar>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Skills from './views/Skills.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Sidebar from './components/Sidebar.vue'
import NavMobile from './components/NavMobile.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Projects,
    Skills,
    About,
    Contact,
    Sidebar,
    NavMobile,
  }
};
</script>

<style lang="scss">
.app-root {
  height:100vh;
  overflow:hidden;
}

.main-content {
  height: 100%;
  overflow: auto;
}
</style>

