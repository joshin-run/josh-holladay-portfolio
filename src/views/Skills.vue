<template>
  <div class="skills page-wrapper">
    <div class="content-wrapper">
      <Title
        :title="'Skills'"
        :color="'#F9F9ED'"
        :id="'skills'"
      />
      <!-- :color="'#23527e'" -->
      <div
        v-for="(category,index) in categories"
        :key="index"
        class="category-container"
      >
        <p class="category">{{category.title}}</p>
        <span class="skill" v-for="(skill,index) in category.skills" :key="index">
          <p>{{skill.toUpperCase()}}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'

export default {
  name: 'Skills',
  components: {
    Title,
  },
  data() {
    return {
      categories: [
        {
          title: 'Design Skills',
          skills: [
            'Adobe Suite',
            'discovery sessions',
            'empathy',
            'Figma',
            'Graphic Design',
            'ideation',
            'Illustration',
            'illustrator',
            'invision',
            'Mobile Design',
            'photoshop',
            'prototyping',
            'Sketch',
            'sketching',
            'UI Design',
            'user research',
            'user testing',
            'UX Design',
            'wireframing',
            'zeplin',
          ]
        },
        {
          title: 'Development Skills',
          skills: [
            'angular',
            'api',
            'bootstrap',
            'css3',
            'contentful',
            'flex',
            'git',
            'grid',
            'html5',
            'javascript',
            'json',
            'node.js',
            'nuxt',
            'react',
            'redux',
            'responsive design',
            'rxjs',
            'sass',
            'storybook',
            'typescript',
            'vue',
            'vuex',
            'Web Development',
            'wordpress',
          ]
        },
        {
          title: 'Other Professional Skills',
          skills: [
            'Adaptablity',
            'advanced writing',
            'audio editing/production',
            'Confluence',
            'Creativity',
            'collaborative',
            'copy writing',
            'digital marketing',
            'Entrepreneurship',
            'Jira',
            'leadership',
            'Mac',
            'positive attitude',
            'proposal drafting',
            'salesmanship',
            'unconquerable spirit',
            'video editing/production',
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.skills {
  // background-color: #F9F9ED;
  background-color: #92828D;
  // background-color: #303030;
  // background-color: #fffcda;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  .category-container {
    margin-bottom: 20px;
  }
  .category {
    color: #F9F9ED;
    // color: #23527e;
    font-weight: 500;
    font-size: 2.35rem;
    margin-bottom: 20px;
  }
  .skill {
    display: inline-block;
    p {
      border: 3px solid #F9F9ED;
      // border: 3px solid #909090;
      // border: 3px solid #8c8c8c;
      border-radius: 50px;
      color: #F9F9ED;
      font-size: .75rem;
      margin: 5px 3px;
      padding: 10px 18px;
      font-weight: 600;
      transition: 0.35s ease-in-out;
      // &:hover {
      //   border: 3px solid #e82e00;
      //   color: #e82e00;
      // }
    }
  }
}
@media only screen and (min-width: 900px) {
  .skills {
    .skill {
      p {
        font-size: 1rem;
        padding: 12px 28px;
      }
    }
  }
}
</style>
