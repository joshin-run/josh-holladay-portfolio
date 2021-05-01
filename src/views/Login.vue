<template>
  <div class="login">
    <get-data />
    <Form />
  </div>
</template>

<script>
import GetData from '../components/GetData.vue'
import Form from '../components/Form.vue'

export default {
  name: 'Login',
  components: {
    GetData,
    Form
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>