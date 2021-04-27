<template>
    <div>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/login" class="nav-link">{{loggedInLink}}</router-link>
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Nav',
    computed: {
        ...mapState(['loggedInLink'])
    }
}
</script>

<style lang="scss" scoped>
.nav-link {
    text-decoration: none;
    margin: 10px;
    color: black;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    &:hover{
        color: rgb(65, 65, 65);
    }
}
</style>