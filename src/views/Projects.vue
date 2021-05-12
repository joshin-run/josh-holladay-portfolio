<template>
  <div id="projects" class="page-wrapper">
    <div class="content-wrapper">
      <div>
        <Title
          :title="'Design'"
          :color="'#303030'"
          :id="'design'"
        />
      </div>
      <div
        v-for="(desProj,index) in designProjects"
        :key="index"
      >
        <Project
          :imgSrc="desProj.imgSrc"
          :title="desProj.title"
          :stack="desProj.stack"
          :description="desProj.description"
          :btnLink="desProj.btnLink"
          :btnText="desProj.btnText"
        />
      </div>
    </div>
    <div class="content-wrapper development">
      <div id="development">
        <Title
          :title="'Development'"
          :color="'#303030'"
          :id="'development'"
        />
      </div>
      <div v-for="(devProj,index) in developmentProjects" :key="index">
        <Project
          :imgSrc="devProj.imgSrc"
          :title="devProj.title"
          :stack="devProj.stack"
          :description="devProj.description"
          :btnLink="devProj.btnLink"
          :btnText="devProj.btnText"
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
          title: 'Crescendo Digital Marketing',
          stack: 'Branding / UI / Figma / Founder',
          description: 'A sales funnel for a Real Estate Marketing Agency. Are you a broker or agent looking to extend your marketing reach? Look no further than Crescendo, a lead generation machine.',
          btnLink: 'http://gocrescendo.com',
          btnText: 'View Site',
        },
        {
          imgSrc: 'logoDesign/logo-design-concept-site',
          title: 'Logo Design Website Concept',
          stack: 'Vue / Sass',
          description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          btnLink: 'https://www.behance.net/gallery/62614073/LogoDesign-Code-Blue',
          btnText: 'View Design',
        },
        {
          imgSrc: 'adGraphics/ad-graphics',
          title: 'Marketing Ad Graphics',
          stack: 'Vue / Sass',
          description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          btnLink: 'https://dribbble.com/joshholladay',
          btnText: 'View More',
        },
        {
          imgSrc: 'logos/logos2',
          title: 'Logos',
          stack: 'Vue / Sass',
          description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          btnLink: 'https://dribbble.com/joshholladay',
          btnText: 'View More',
        },
      ],
      developmentProjects: [
        {
          imgSrc: 'portfolio/portfolio-hero',
          title: 'Portfolio',
          stack: 'JS / Vue',
          description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          btnLink: 'https://github.com/joshin-run/josh-holladay-portfolio',
          btnText: 'View Code',
        },
        {
          imgSrc: 'nuskin/nuskin',
          title: 'Portfolio',
          stack: 'JS / Vue',
          description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          btnLink: 'https://github.com/joshin-run/josh-holladay-portfolio',
          btnText: 'View Code',
        },
        {
          imgSrc: 'enso/enso',
          title: 'Portfolio',
          stack: 'JS / Vue',
          description: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          btnLink: 'https://github.com/joshin-run/josh-holladay-portfolio',
          btnText: 'View Code',
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
