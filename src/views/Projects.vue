<template>
  <div id="projects" class="page-wrapper-proj">
    <div class="content-wrapper-proj design-section">
      <div>
        <Title :title="'Design'" :color="'#2D3142'" :id="'design'" />
      </div>
      <div v-for="(desProj, index) in designProjects" :key="index">
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
    <div class="content-wrapper-proj development-section">
      <div id="development">
        <Title :title="'Development'" :color="'#2D3142'" :id="'development'" />
      </div>
      <div v-for="(devProj, index) in developmentProjects" :key="index">
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
import Title from "../components/Title.vue";
import Project from "../components/Project.vue";

export default {
  name: "Projects",
  components: {
    Title,
    Project,
  },
  data() {
    return {
      designProjects: [
        {
          imgSrc: "crescendo",
          title: "Crescendo Digital Marketing",
          stack: "Branding / UI / Figma / Founder",
          description:
            "A sales funnel for a Real Estate Marketing Agency. Designed with Figma and delivered using an out of the box CRM service that has a Wordpress like interface to create sales funnels. Are you a broker or agent looking to extend your marketing reach? Look no further than Crescendo, a lead generation machine.",
          btnLink: "http://gocrescendo.com",
          btnText: "View Site",
        },
        {
          imgSrc: "logo-design-concept-site",
          title: "Logo Design: Code Blue",
          stack: "UI / Sketch / Design / Concept",
          description:
            "This project was created to mix bold creativity with a professional theme and a hint of minimalism. The concept was to mock what the website of a design agency might look like who specializes in logo ideation and brand discovery. The hero was meant to appeal to the user and to encourage them to scroll further down.",
          btnLink:
            "https://www.behance.net/gallery/62614073/LogoDesign-Code-Blue",
          btnText: "View Design",
        },
        {
          imgSrc: "ad-graphics",
          title: "Marketing Ad Creatives",
          stack: "Figma / Illustration",
          description:
            "The designs were meant to be eye catching, unique, and cause the targetted market individual to real the words on the ad. The purpose was to stray away from traditional ads with houses and real estate agents showing a home. The motivation was to stand out and to put part of my creativity and voice in each image.",
          btnLink: "https://dribbble.com/joshholladay",
          btnText: "View More",
        },
        {
          imgSrc: "logos2",
          title: "Logos Unlimited",
          stack: "Branding / Sketch / Figma / Illustration",
          description:
            "From client branding to personal project icon design, this is one fascet of graphic creation that is always active and flowing. Taking the best parts of a company's inner most core, weaving those concepts into a new idea; it's increadebly rewarding to come up with the perfect fit.",
          btnLink: "https://dribbble.com/joshholladay",
          btnText: "View More",
        },
      ],
      developmentProjects: [
        {
          imgSrc: "portfolio-2",
          title: "Portfolio",
          stack: "JavaScript / Vue / Sass / Responsive / Web",
          description:
            "A project representing the latest development skills using the most approachable JavaScript framework, Vue.js. With a minimalistic approach, using the most favored color scheme and other stylistic preferences, this website implementation represents the character of its creator.",
          btnLink: "https://github.com/joshin-run/josh-holladay-portfolio",
          btnText: "View Code",
        },
        {
          imgSrc: "nuskin",
          title: "NuSkin",
          stack: "JavaScript / Vue / Nuxt / Node.js / Web",
          description:
            "Currently on the SignUp team where we update and fix bugs for NuSkin's new SignUp app. As a global company, our efforts range from configuring settings, regex combinations, data updats, and other updates to services and API calls. The code base is like a massive ocean of characters waiting to be tamed. ",
          btnLink: "https://www.nuskin.com/content/nuskin/en_US/home.html",
          btnText: "View Site",
        },
        {
          imgSrc: "enso",
          title: "Enso Rings",
          stack: "JavaScript / Vue / Nuxt / Web",
          description:
            'Silicon rings with a whole lot of character. This project\'s objectives were two fold, to migrate a codebase from Vue.js to a headless Nuxt framework. The second initiative was to move data and configuration into Contentful, and to execute on all of this, well, "gracefully". Needless to say, it all turned out just fine.',
          btnLink: "https://ensorings.com/",
          btnText: "View Site",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#projects {
  display: flex;
  flex-direction: column;
  .design-section,
  .development-section {
    padding: 50px 15px;
  }
  .design-section {
    background-color: #ffffff;
  }
  .development-section {
    background-color: #c7f9f7;
  }
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
}
</style>
