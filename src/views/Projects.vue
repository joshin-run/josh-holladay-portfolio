<template>
  <div id="projects" class="projects-wrapper">
    <div class="design-content">
      <div>
        <Title
          :title="'Design'"
        />
      </div>
      <div v-for="(desProj,index) in designProjects" :key="index">
        <Project
          :imgSrc="desProj.imgSrc"
          :name="desProj.name"
          :imgPlacement="desProj.imgPlacement"
          :title="desProj.title"
          :stack="desProj.stack"
          :description="desProj.description"
        />
        {{index}}
      </div>
    </div>
    <div class="development-content">
      <div>
        <Title
          :title="'Development'"
        />
      </div>
      <div v-for="(devProj,index) in developmentProjects" :key="index">
        <Project
          :imgSrc="devProj.imgSrc"
          :name="devProj.name"
          :imgPlacement="devProj.imgPlacement"
          :title="devProj.title"
          :stack="devProj.stack"
          :description="devProj.description"
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
    name: 'Projects',
    components: {
      Title,
      Project
    },
    data() {
      return {
        designProjects: [
          {
            imgSrc: 'crescendo/crescendo-hero',
            name: 'Josh Holladay Portfolio',
            imgPlacement: '',
            title: 'Portfolio',
            stack: 'Vue / Sass',
            description: 'Here is my latest development work',
          },
        ],
        developmentProjects: [
          {
            imgSrc: 'portfolio/portfolio-hero',
            name: 'name',
            imgPlacement: 'right',
            title: 'title',
            stack: 'stack / stack',
            description: 'Here is my latest development work',
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.projects-wrapper {
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  max-width: 1200px;
  margin: 0 auto;
  .design-content,
  .development-content {
    width: 100%;
    padding: 0 30px;
  }
}
@media only screen and (min-width: 1201px) {
  .projects-wrapper {
    padding: 80px 0;
    flex-direction: column;
  }
}
@media only screen and (min-width: 900px) {
  .projects-wrapper {
    flex-direction: row;
  }
  .design-content,
  .development-content {
    width: 50%;
    padding: 0 30px;
  }
  .development-content {
    border-left: 2px solid rgb(235, 242, 255);
  }
}
</style>
