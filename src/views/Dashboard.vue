<template>
  <div class="dashboard">
    <!-- Welcom to your Dashboard, {{user}} -->
    <appt-create />
    <div v-for="(appt, index) in apptTypes" :key="index">
      <p>{{appt}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ApptCreate from '../components/ApptCreate.vue'

export default {
  name: 'Dashboard',
  components: {
    ApptCreate
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  data () {
    return {
      apptTypes: [
        'pending',
        'declined',
        'accepted',
        ''
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 1rem;
}
</style>