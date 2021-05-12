<template>
  <div class="project-wrapper">
    <proj-img :imgSrc="imgSrc" :name="name" />
    <proj-description
      :title="title"
      :stack="stack"
      :description="description"
    />
    <a :href="btnLink" target="_blank">
      <button class="btn">{{btnText.toUpperCase()}}</button>
    </a>
  </div>
</template>

<script>
import ProjImg from "./ProjImg.vue";
import ProjDescription from "./ProjDescription.vue";
export default {
  name: "Project",
  components: {
    ProjImg,
    ProjDescription,
  },
  props: {
    imgSrc: String,
    name: String,
    imgPlacement: String,
    title: String,
    stack: String,
    description: String,
    btnLink: String,
    btnText: {
      type: String,
      default: 'View More'
    }
  },
};
</script>

<style lang="scss" scoped>
.project-wrapper {
  margin-bottom: 80px;
  proj-description {
    margin-bottom: 20px;
  }
}
</style>