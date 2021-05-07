<template>
    <div>
        <div v-for="(link,index) in links" :key="index">
            <a :href="`#${link.toLowerCase()}`" :atr="link">{{link}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data () {
        return {
            links: [
                'Home',
                'Design',
                'Development',
                'About',
                'Contact'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-link {
    text-decoration: none;
    margin: 10px;
    color: black;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    &:hover{
        color: rgb(65, 65, 65);
    }
}
</style>