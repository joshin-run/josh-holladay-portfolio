<template>
  <div class="proj-description">
    <p class="title">{{ title.toUpperCase() }}</p>
    <p class="stack">{{ stack.toUpperCase() }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjDescription",
  props: {
    title: String,
    stack: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.proj-description {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  .title,
  .stack,
  .description {
    max-width: 600px;
  }
  .title {
    color: #2d3142;
    font-weight: 500;
    font-size: 1.35rem;
    margin-bottom: 15px;
  }
  .stack {
    font-weight: 600;
    color: #2c9bff;
    font-size: 0.85rem;
    margin-bottom: 15px;
  }
  .description {
    color: #2e576f;
    line-height: 1.5;
    margin-bottom: 25px;
  }
}
@media only screen and (min-width: 1000px) {
  .proj-description {
    .title {
      font-size: 2rem;
    }
    .stack {
      font-size: 1.15rem;
    }
    .description {
      font-size: 1.15rem;
    }
  }
}
</style>