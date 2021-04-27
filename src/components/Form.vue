<template>
  <div>
    <h1>Login</h1>
    <form>
      <v-select
        v-model="select"
        :items="user"
        :error-messages="selectErrors"
        label="Username"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Hint: try password"
        hint="At least 8 characters"
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-btn 
        class="mr-4 submit-btn" 
        :disabled="submitDisabled"
        @click="submit"
      >
        submit
      </v-btn>
    </form>
  </div>  
</template>


<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
    },

    data: () => ({
      name: '',
      select: null,
      user: [
        'User 1',
        'User 2',
        'User 3'
      ],
      checkbox: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
      submitDisabled: true
    }),
    watch: {
      password () {
        this.submitDisabled = this.select != '' && this.password == 'password' ? false : true
      },
      select () {
        this.submitDisabled = this.select != '' && this.password == 'password' ? false : true
      }
    },
    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      submitDisabled () {
        return this.select != '' && this.password.length > 7 ? false : true
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
        this.$store.commit('updateUser', this.select)
        this.$store.commit('loggedInLink', 'Logout')
        this.$router.push('/dashboard')
      },
    },
  }
</script>
<style lang="scss" scoped>
.submit-btn {
  margin-top: 20px;
}
</style>


