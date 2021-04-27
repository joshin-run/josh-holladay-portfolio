<template>
  <div class="header">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/login">Login</router-link>
    

  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
    height: 70px;
    background: linear-gradient(to right, #5a99ff, #e4eeff) no-repeat;
    /* background: linear-gradient(to right, #5a99ff, #BBD5FF) no-repeat; */
    /* background: linear-gradient(to bottom, #BBD5FF, #FFFFFF) no-repeat; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
    padding: 10px;
}
.link {
    margin: 8px;
}
</style>