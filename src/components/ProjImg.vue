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
  name: 'ProjImg',
  props: {
    imgSrc: String,
    name: String
  },
  data() {
    return {
      imgSrc2: '../assets/projects/portfolio-hero.png',
    }
  }
}
</script>

<style lang="scss" scoped>
.proj-img-wrapper {
    margin-bottom: 15px;
    .proj-img {
        width: 100%;
        height: auto;
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