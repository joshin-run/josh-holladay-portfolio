<template>
    <div
        class="project-wrapper"
    >
        <proj-img
            :imgSrc="imgSrc"
            :name="name"
            :style="{ order: direction }"
        />
        <proj-description
            :title="title"
            :stack="stack"
            :description="description"
        />
    </div>
</template>

<script>
import ProjImg from './ProjImg.vue'
import ProjDescription from './ProjDescription.vue'
export default {
    name: 'Project',
    components: {
        ProjImg,
        ProjDescription
    },
    props: {
        imgSrc: String,
        name: String,
        imgPlacement: String,
        title: String,
        stack: String,
        description: String
    },
    computed: {
        direction() {
            return this.imgPlacement == 'right' ? 1 : 0
        }
    }
}
</script>

<style lang="scss" scoped>

</style>