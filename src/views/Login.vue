<template>
  <div class="login">
    <Form />
  </div>
</template>

<script>
import Form from '../components/Form.vue'

export default {
  name: 'Login',
  components: {
    Form
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
</style>