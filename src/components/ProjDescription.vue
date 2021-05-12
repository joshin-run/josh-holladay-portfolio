<template>
    <div class="proj-description">
        <p class="title">{{title.toUpperCase()}}</p>
        <p class="stack">{{stack.toUpperCase()}}</p>
        <p class="description">{{description}}</p>
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
.proj-description {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    .title,
    .stack,
    .description {
        max-width: 600px;
    }
    .title {
        color: #303030;
        font-weight: 500;
        font-size: 1.35rem;
        margin-bottom: 15px;
    }
    .stack {
        font-weight: 600;
        color: #2C9BFF;
        font-size: .85rem;
        margin-bottom: 15px;
    }
    .description {
        color: #626262;
        line-height: 1.5;
        margin-bottom: 25px;
    }
}
@media only screen and (min-width: 900px) {
    .proj-description {
        .title {
            font-size: 2rem;
        }
        .stack {
            font-size: 1.15rem;
        }
        .description {
            font-size: 1.15rem;
        }
    }
}
</style>