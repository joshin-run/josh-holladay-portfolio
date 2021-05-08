<template>
  <div id="design">
    <div class="design-wrapper">
      <div>
        <Title
          :title="'Design'"
        />
      </div>
      <div v-for="(proj,index) in projects" :key="index">
        <Project
          :imgSrc="proj.imgSrc"
          :name="proj.name"
          :imgPlacement="proj.imgPlacement"
          :title="proj.title"
          :stack="proj.stack"
          :description="proj.description"
        />
        {{index}}
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import Project from '../components/Project.vue'

  export default {
    name: 'Design',
    components: {
      Title,
      Project
    },
    data() {
      return {
        projects: [
          {
            imgSrc: 'portfolio/portfolio-hero',
            name: 'Josh Holladay Portfolio',
            imgPlacement: '',
            title: 'Portfolio',
            stack: 'Vue / Sass',
            description: 'Here is my latest development work',
          },
          {
            imgSrc: 'portfolio/portfolio-hero',
            name: 'name',
            imgPlacement: 'right',
            title: 'title',
            stack: 'stack / stack',
            description: 'Here is my latest development work',
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
#design {
  width: 100%;
  .design-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
  }
}
</style>
