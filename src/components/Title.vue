<template>
  <div id="title">
    <h1>
        <!-- :style="
            `color: ${color}`,
            `border: 3px solid ${color}`
        " -->
        <span class="title">
          {{title.toUpperCase()}}
        </span>

    </h1>
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
    border: 3px solid black;
    padding: 6px 13px;
    width: auto;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    width: auto;
    display: inline-block
}
// @media only screen and (min-width: 900px) {
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
