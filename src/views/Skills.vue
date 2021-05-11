<template>
  <div id="skills" class="page-wrapper">
    <div class="content-wrapper">
      <Title
        :title="'Skills'"
        :color="'#626262'"
      />
      <span v-for="item in test" :key="item">{{item}}</span>
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
#skills {
  background-color: #303030;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  .category-container {
    margin-bottom: 20px;
  }
  .category {
    color: #466780;
    font-weight: 500;
    font-size: 2.35rem;
    margin-bottom: 20px;
  }
  .skill {
    display: inline-block;
    p {
      border: 3px solid #3481c9;
      border-radius: 50px;
      color: #3481c9;
      font-size: .75rem;
      margin: 5px 3px;
      padding: 10px 18px;
      font-weight: 600;
    }
  }
  // padding: 50px 0;
  // max-width: 1200px;
  // padding: 50px auto;
  // width: 100%;
  // .skills-content {
  //   // padding: 0 0;
  //   max-width: 1200px;
  //   margin: 0 auto;
  // }
}
@media only screen and (min-width: 900px) {
  #skills {
    .skill {
      p {
        font-size: 1rem;
        padding: 12px 28px;
      }
    }
  }
}
</style>
