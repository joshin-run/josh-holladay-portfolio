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
            imgSrc2: '../assets/projects/portfolio-hero.png'
        }
    }
}
</script>

<style lang="scss" scoped>
.proj-img {
    height: 500px;
}
</style>