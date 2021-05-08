<template>
    <div class="proj-img">
        <h4>{{title}}</h4>
        <h5>{{stack}}</h5>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    name: 'ProjDescription',
    props: {
        title: String,
        stack: String,
        description: String
    }
}
</script>

<style lang="scss" scoped>
.proj-img {
    height: 500px;
}
</style>