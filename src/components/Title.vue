<template>
  <div id="title">
    <!-- <h1> -->
        <!-- :style="
            `color: ${color}`,
            `border: 3px solid ${color}`
          :style="`{color: #${color}}`"
        " -->
        <p
          class="title"
          :style="{color: color}"
        >
          {{title.toUpperCase()}}
        </p>

    <!-- </h1> -->
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
    // border: 3px solid black;
    // padding: 6px 13px;
    width: auto;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    width: auto;
    display: inline-block
}
// @media only screen and (min-width: 900px) {
//   .title {
//     font-size: 3rem;
//   }
// }
@media only screen and (min-width: 1200px) {
  .title {
    font-size: 4.5rem;
  }
}
</style>
