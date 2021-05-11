<template>
  <div id="about" class="page-wrapper">
    <div class="content-wrapper">
      <Title
        :title="'About'"
      />
      <img src="@/assets/avatar-portfolio.png" />
      <p class="quote">{{quote}}</p>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'

export default {
  name: 'Home',
  components: {
    Title,
  },
}
</script>

<style lang="scss" scoped>
#about {
  background-color: #00F9F9;
}
// #hero {
//   background-color: #83C4FF;
//   height: calc(100vh - 120px);
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// }
img {
  height: 200px;
}
@media only screen and (min-width: 900px) {
  img {
    height: 300px;
  }
}
</style>
