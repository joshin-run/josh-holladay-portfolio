<template>
  <div id="hero">
    <img class="logo-kit" src="@/assets/j-shadow-name.png" />
  </div>
</template>

<script>

  export default {
    name: 'Home',
  }
</script>

<style lang="scss" scoped>
#hero {
  background-color: #83C4FF;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo-kit {
  height: 400px;
}
@media only screen and (min-width: 900px) {
  .logo-kit {
    height: 500px;
  }
}
</style>
