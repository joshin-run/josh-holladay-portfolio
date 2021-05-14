<template>
  <div class="proj-img-wrapper">
    <img
      class="proj-img"
      :src="require(`../assets/projects/${imgSrc}.png`)"
      :alt="name"
    />
  </div>
</template>

<script>
export default {
  name: "ProjImg",
  props: {
    imgSrc: String,
    name: String,
  },
  data() {
    return {
      imgSrc2: "../assets/projects/portfolio-hero.png",
    };
  },
};
</script>

<style lang="scss" scoped>
.proj-img-wrapper {
  margin-bottom: 15px;
  .proj-img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 18px 16px -13px rgb(0, 0, 0, 0.7);
    transition: 0.5s ease-in-out;
    &:hover {
      box-shadow: 0 12px 10px -9px rgb(0, 0, 0, 0.4);
    }
  }
}
@media only screen and (min-width: 900px) {
  .proj-img-wrapper {
    .proj-img {
      height: auto;
      max-width: 600px;
      width: 100%;
    }
  }
}
</style>