<template>
    <v-app-bar
        app
        color="blue lighten-3"
        dark
    >
        <Logo />
        <v-spacer></v-spacer>
        <Nav />
    </v-app-bar>
</template>

<script>
import Nav from './Nav.vue'
import Logo from './Logo.vue'

export default {
    name: 'Header',
    components: {
        Nav,
        Logo
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
header {
    box-shadow: none !important;
}
</style>