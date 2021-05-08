<template>
    <div class="header">
        <!-- <img class="logo" src="@/assets/icons/icon-j.png" /> -->
        <Logo />
        <Nav />
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Logo from './Logo.vue'

export default {
    name: 'Header',
    components: {
        Logo,
        Nav,
    },
    computed: {
        isTrue () {
            return this.$store.getters.isTrue
        }
    },
    methods: {
        async toggleMe() {
            await this.$store.dispatch('toggle')
        }
    }
}
</script>
<style scoped>
.header {
    box-shadow: none !important;
    background-color: #83C4FF;
    height: 120px;
    /* padding: 10px 20px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
}
.logo {
    height: 60px;
}
</style>