<template>
  <div class="nav">
    <div class="nav-wrapper">
      <div class="nav-links">
        <div v-for="(link, index) in links" :key="index">
          <a
            class="nav-link"
            :href="`#${link.toLowerCase()}`"
            @click="closeSidebarPanel"
          >
            {{ link }}
          </a>
        </div>
        <Media size="large" class="nav-link in-mobile-nav" />
      </div>
    </div>
  </div>
</template>

<script>
import Media from "./Media.vue";
import { mutations } from "@/store.js";

export default {
  name: "Nav",
  components: {
    Media,
  },
  data() {
    return {
      links: ["Design", "Development", "Skills", "About", "Contact"],
    };
  },
  methods: {
    closeSidebarPanel: mutations.closeNav,
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
.nav-links {
  display: inline-block;
  line-height: 2.25;
}
.nav-link {
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.75rem;
  color: #ffffff;
  &:hover {
    color: #00f9f9;
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