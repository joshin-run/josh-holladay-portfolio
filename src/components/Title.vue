<template>
  <div id="title">
    <div
        class="title"
    >
        <!-- :style="
            `color: ${color}`,
            `border: 3px solid ${color}`
        " -->
        {{title.toUpperCase()}}
    </div>
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
    font-family: Arial, Helvetica, sans-serif;
    border: 6px solid black;
    padding: 20px;
    width: auto;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 60px;
}
// @media only screen and (min-width: 786px) {
//   .logo-kit {
//     height: 500px;
//   }
//   .quote {
//     color: #FFFFFF;
//     font-size: 2rem;
//     font-family: Arial, Helvetica, sans-serif;
//   }
// }
</style>
