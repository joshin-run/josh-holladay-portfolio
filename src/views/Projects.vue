<template>
  <div id="projects" class="page-wrapper">
    <div class="content-wrapper">
      <div>
        <Title
          :title="'Design'"
          :color="'#303030'"
        />
      </div>
      <div
        v-for="(desProj,index) in designProjects"
        :key="index"
      >
        <Project
          :imgSrc="desProj.imgSrc"
          :name="desProj.name"
          :imgPlacement="desProj.imgPlacement"
          :title="desProj.title"
          :stack="desProj.stack"
          :description="desProj.description"
        />
      </div>
    </div>
    <div class="content-wrapper development">
      <div>
        <Title
          :title="'Development'"
          :color="'#303030'"
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
            name: 'Crescendo Digital Marketing',
            imgPlacement: '',
            title: 'Crescendo Digital Marketing',
            stack: 'Vue / Sass',
            description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          },
          {
            imgSrc: 'crescendo/crescendo-hero',
            name: 'Josh Holladay Portfolio',
            imgPlacement: '',
            title: 'Portfolio',
            stack: 'Vue / Sass',
            description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          },
          {
            imgSrc: 'crescendo/crescendo-hero',
            name: 'Josh Holladay Portfolio',
            imgPlacement: '',
            title: 'Portfolio',
            stack: 'Vue / Sass',
            description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          },
        ],
        developmentProjects: [
          {
            imgSrc: 'portfolio/portfolio-hero',
            name: 'Portfolio',
            imgPlacement: 'right',
            title: 'Portfolio',
            stack: 'JS / Vue',
            description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          },
          {
            imgSrc: 'portfolio/portfolio-hero',
            name: 'name',
            imgPlacement: 'right',
            title: 'title',
            stack: 'stack / stack',
            description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
#projects {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // padding: 50px 0;
  // max-width: 1200px;
  // margin: 0 auto;
  // .design-content,
  // .development-content {
  //   width: 100%;
  //   padding: 0 30px;
  // }
}
@media only screen and (min-width: 1201px) {
  #projects {
    flex-direction: column;
  }
}
@media only screen and (min-width: 900px) {
  #projects {
    flex-direction: row;
  }
  .development {
    border-left: 2px solid rgb(235, 242, 255);
  }
}
</style>
