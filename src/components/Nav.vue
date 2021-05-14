<template>
  <div class="nav">
    <div class="nav-wrapper">
      <div class="nav-links" v-if="$mq === 'laptop' || $mq === 'desktop'">
        <div v-for="(link, index) in links" :key="index">
          <a class="nav-link" :href="`#${link.toLowerCase()}`" :atr="link">{{
            link
          }}</a>
        </div>
      </div>
      <Media v-if="$mq === 'laptop' || $mq === 'desktop'" class="flex-end" />
    </div>
    <div class="img-wrapper">
      <menu-icon
        v-if="$mq === 'mobile' || $mq === 'tablet'"
        class="menu-icon"
      />
    </div>
  </div>
</template>

<script>
import Media from "../components/Media.vue";
import MenuIcon from "../components/MenuIcon.vue";

export default {
  name: "Nav",
  components: {
    Media,
    MenuIcon,
  },
  data() {
    return {
      links: ["Design", "Development", "Skills", "About", "Contact"],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
}
.nav-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.img-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
}
.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.nav-link {
  text-decoration: none;
  margin-right: 30px;
  text-transform: uppercase;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 0.95rem;
  color: #ffffff;
  transition: 0.1s ease-in-out;
  letter-spacing: 1px;
  &:hover {
    opacity: 0.9;
  }
}
.menu-icon {
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 12px;
}
@media only screen and (min-width: 900px) {
  .menu-icon {
    height: 45px;
    margin-right: 30px;
  }
}
</style>