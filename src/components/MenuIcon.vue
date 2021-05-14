<template>
  <div
    id="menu-icon"
    :class="{ active: isMenuIconActive }"
    @click.prevent="toggle"
  >
    <button type="button" class="menu-icon-button" title="Menu">
      <span class="menu-icon-bar menu-icon-bar--1"></span>
      <span class="menu-icon-bar menu-icon-bar--2"></span>
      <span class="menu-icon-bar menu-icon-bar--3"></span>
    </button>
  </div>
</template>

<script>
import { store, mutations } from "@/store.js";

export default {
  computed: {
    isMenuIconActive() {
      return store.isNavOpen;
    },
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    },
  },
};
</script>
<style>
.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

button:focus {
  outline: 0;
}

.menu-icon-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.menu-icon-bar {
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 3px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.menu-icon-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-8px);
}

.menu-icon-bar--2 {
  transform-origin: 100% 50%;
}

.menu-icon-button:hover .menu-icon-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .menu-icon-bar--2:hover {
  transform: scaleX(1);
}

.menu-icon-bar--3 {
  transform: translateY(8px);
}

#menu-icon.active .menu-icon-button {
  transform: rotate(-180deg);
}

#menu-icon.active .menu-icon-bar {
  background-color: #fff;
}

#menu-icon.active .menu-icon-bar--1 {
  transform: rotate(45deg);
}

#menu-icon.active .menu-icon-bar--2 {
  opacity: 0;
}

#menu-icon.active .menu-icon-bar--3 {
  transform: rotate(-45deg);
}
</style>