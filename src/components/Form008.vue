<template>
    <div class="form-wrapper">

      <h1>Login</h1>
      
      <label for="username">Username</label><br />
      <select v-model="selected" id="username">
        <option disabled value=""></option>
        <option>user 1</option>
        <option>user 2</option>
        <option>user 3</option>
      </select>

      <label for="password">Password</label><br />
      <input :type="visible" id="password" v-model="password">

      <input type="checkbox" id="show" v-model="showPassword">
      <label for="show">Show Password</label>

      <button type="submit" @click="hey">Login</button>
    
    </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      selected: '',
      password: null,
      showPassword: null
    }
  },
  computed: {
    visible() {
      return this.showPassword ? "text" : "password"
    }
  },
  methods: {
    hey() {
      alert('what')
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  width: 10rem;
  height: 15rem;
  /* display: flex; */
  /* flex-direction: column;
  justify-content: flex-start; */

}
input, 
select {
  margin-bottom: 1rem;
}
</style>