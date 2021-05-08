<template>
  <div id="title">
    <p
        class="title">{{title}}</p>
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
