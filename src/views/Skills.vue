<template>
  <div id="skills">
    <Title
      :title="'Skills'"
    />
    <div v-for="(category, index) in categories" :key="index" >
      <div>

      </div>
      {{category}}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Skills',
    date() {
      return {
        categories: [
          {
            design: [
              'Graphic',
              'UI',
            ]
          },
          {
            development: [
              'Graphic',
              'UI',
            ]
          },
          {
            professional: [
              'Graphic',
              'UI',
            ]
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
// @media only screen and (min-width: 900px) {
//   .logo-kit {
//     height: 500px;
//   }
// }
</style>
