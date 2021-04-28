<template>
  <div class="appt-create">
    <v-btn 
      color="primary"
      @click="popup"
    >
      Create Appointment
    </v-btn>
    <div class="create-appt-form">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApptCreate',
  data () {
    return {
      apptTypes: [
        'pending',
        'declined',
        'accepted',
        ''
      ]
    }
  },
  methods: {
    popup() {

    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 1rem;
}
</style>