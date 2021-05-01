<template>
    <div>
        <div v-for="(user, index) in users" :key="index">
            {{user}}
        </div>
    </div>
</template>

<script>
import {getUsers} from '@/sdk.js'
export default {
    name: 'GetData',
    data () {
        return {
            users: []
        }
    },
    created() {
        this.users = getUsers()
    }

}
</script>