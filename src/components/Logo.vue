<template>
  <div class="logo-wrapper">
    <a href="#home"><img class="logo" src="@/assets/icons/icon-j.png" /></a>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
.logo-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4px 0 0 20px;
  padding-right: 45px;
  .logo {
    height: 30px;
  }
}
</style>