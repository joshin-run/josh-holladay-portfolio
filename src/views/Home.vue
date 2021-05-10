<template>
  <div id="hero">
    <img class="logo-kit" src="@/assets/j-shadow-name.png" />
    <p class="quote">“Where IMAGINATION & CREATIVITY know no bounds.”</p>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}
.logo-kit {
  height: 200px;
}
.quote {
  color: #FFFFFF;
  font-size: 1.25rem;
  font-family: Arial, Helvetica, sans-serif;
}
// Tablet and Above
@media only screen and (min-width: 786px) {
  .logo-kit {
    height: 350px;
  }
  .quote {
    font-size: 1.5rem;
  }
}
</style>
