<template>
    <div>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/login" class="nav-link">Login</router-link>
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav-link {
    text-decoration: none;
    margin: 10px;
}
</style>