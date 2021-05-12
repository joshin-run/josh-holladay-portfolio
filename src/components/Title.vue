<template>
  <div id="title">
    <h2 class="title" :style="{ color: color }">
      {{ title.toUpperCase() }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    color: String,
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: inline-block;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: auto;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 30px;
  width: auto;
}
@media only screen and (min-width: 1200px) {
  .title {
    font-size: 4.5rem;
  }
}
</style>
