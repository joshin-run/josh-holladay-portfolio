<template>
  <div class="header">
    <Logo />
    <Nav />
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import Logo from "./Logo.vue";

export default {
  name: "Header",
  components: {
    Logo,
    Nav,
  },
};
</script>
<style scoped>
.header {
  box-shadow: none !important;
  background-color: #83c4ff;
  height: 60px;
  padding: 15px 13px 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
@media only screen and (min-width: 900px) {
  .header {
    height: 80px;
  }
}
</style>