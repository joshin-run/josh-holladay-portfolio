<template>
  <div id="title">
    <p
      class="title"
      :style="{color: color}"
    >
      {{title.toUpperCase()}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: {
        title: String,
        color: String
    }
  }
</script>

<style lang="scss" scoped>
.title {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: auto;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    width: auto;
    display: inline-block
}
@media only screen and (min-width: 1200px) {
  .title {
    font-size: 4.5rem;
  }
}
</style>
