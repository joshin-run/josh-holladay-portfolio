<template>
  <div>
    <h2 :id="id" class="title" :style="{ color: color }">
      {{ title.toUpperCase() }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    color: {
      type: String,
      default: "#000000",
    },
    id: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: inline-block;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: auto;
  font-size: 2.75rem;
  font-weight: 600;
  margin-bottom: 30px;
  width: auto;
}
h2 {
  padding: 0;
  margin: 0;
}
@media only screen and (min-width: 1000px) {
  .title {
    font-size: 4.5rem;
  }
}
</style>
