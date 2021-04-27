<template>
  <div class="dashboard">
    Welcom to your Dashboard, {{user}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapState([
      'user'
    ])
  }
}
</script>