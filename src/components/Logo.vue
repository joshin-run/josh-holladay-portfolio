<template>
    <div class="logo-wrapper">
        <img class="logo" src="@/assets/icons/icon-j.png" />
    </div>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style lang="scss" scoped>
.logo-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
    padding-right: 45px;
    .logo {
        height: 30px;
    }
}
</style>