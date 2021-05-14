<template>
  <div class="media-wrapper">
    <div v-for="(icon, index) in icons" :key="index">
      <a class="icon-link" :href="icon.link" :alt="icon.type" target="_blank">
        <img
          :class="`icon-${size}`"
          :src="require(`../assets/icons/${icon.img}.png`)"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Media",
  props: {
    size: {
      type: String,
      default: "normal",
    },
  },
  data() {
    return {
      icons: [
        {
          type: "behance",
          link: "https://www.behance.net/josh-holladay",
          img: "icon-be",
        },
        {
          type: "dribble",
          link: "https://dribbble.com/joshholladay",
          img: "icon-dr",
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/joshholladay/",
          img: "icon-in",
        },
        {
          type: "github",
          link: "https://github.com/joshin-run",
          img: "icon-gh",
        },
        {
          type: "email",
          link: "mailto:iamjoshholladay@gmail.com",
          img: "icon-em",
        },
        {
          type: "medium",
          link: "https://iamjoshholladay.medium.com/",
          img: "icon-md",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.media-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 12px;
}

.media-wrapper.flex-end {
  justify-content: flex-end;
}

.media-wrapper.in-mobile-nav {
  flex-flow: wrap;
  margin-top: 3rem;
}

.icon-link {
  text-decoration: none;
  margin-right: 20px;
  color: black;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #ffffff;
  &:hover {
    opacity: 0.9;
  }
  .icon-normal {
    height: 30px;
  }
  .icon-large {
    height: 40px;
  }
}
</style>