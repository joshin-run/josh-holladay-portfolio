<template>
  <div id="contact" class="contact-wrapper">
    <Title
      :title="'Contact'"
    />
  </div>
</template>

<script>
import Title from '../components/Title.vue'

  export default {
    name: 'Contact',
    components: {
      Title,
    },
  }
</script>

<style lang="scss" scoped>
.contact-wrapper {
  background-color: #83C4FF;
  height: 600px;
}
// #hero {
//   background-color: #83C4FF;
//   height: calc(100vh - 120px);
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// }
// .logo-kit {
//   height: 400px;
// }
// @media only screen and (min-width: 900px) {
//   .logo-kit {
//     height: 500px;
//   }
// }
</style>
