<template>
    <div class="proj-img-wrapper">
        <img
            class="proj-img"
            :src="require(`../assets/projects/${imgSrc}.png`)"
            :alt="name"
        />
        {{imgSrc}}
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
.proj-img {
    width: 100%;
    // max-width: 90vw;
    height: auto;
}
@media only screen and (min-width: 900px) {
  .proj-img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }
}
</style>