<template>
    <div class="project-wrapper">
        <proj-img
            :imgSrc="imgSrc"
            :name="name"
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
    // computed: {
    //     direction() {
    //         $mq === 'laptop' || $mq === 'desktop' ? 'row-reverse'
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.project-wrapper {
    // display: flex;
    // flex-direction: column;
    margin-bottom: 80px;
}
</style>