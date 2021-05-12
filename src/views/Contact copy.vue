<template>
  <div id="contact" class="page-wrapper">
    <div class="content-wrapper">
      <Title
        :title="'Contact'"
        :color="'#FFFFFF'"
      />
        <h1>Stuff</h1>
    </div>
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
#contact {
  background-color: #83C4FF;
  height: 100vh;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  // .content {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  // }
}
// .contact-wrapper {
//   background-color: #83C4FF;
//   height: 600px;
// }
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
