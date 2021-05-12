<template>
  <div id="home">
    <img class="logo-kit" src="@/assets/j-shadow-name-2.png" />
    <p class="quote">{{quote}}</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      quote: 'Where IMAGINATION & CREATIVITY know no bounds.'
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  background-color: #83C4FF;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;

}
.logo-kit {
  height: 300px;
}
.quote {
  color: #FFFFFF;
  font-size: 1.25rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
}
@media only screen and (min-width: 900px) {
  .logo-kit {
    height: 350px;
  }
  .quote {
    font-size: 1.5rem;
  }
}
</style>
