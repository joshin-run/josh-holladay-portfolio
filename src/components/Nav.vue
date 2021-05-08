<template>
    <div class="nav">
        <div class="nav-wrapper">
            <div class="nav-links" v-if="$mq === 'laptop' || $mq === 'desktop'">
                <div v-for="(link,index) in links" :key="index">
                    <a class="nav-link" :href="`#${link.toLowerCase()}`" :atr="link">{{link}}</a>
                </div>
            </div>
            <Media />
        </div>
        <div class="img-wrapper">
            <img
                v-if="$mq === 'mobile' || $mq === 'tablet'"
                class="menu-icon"
                src="@/assets/icons/menu.png"
                @click="overlay"
            />
        </div>
    </div>

</template>

<script>
import Media from '../components/Media.vue'

export default {
    name: 'Nav',
    components: {
        Media
    },
    data () {
        return {
            links: [
                'Design',
                'Development',
                'About',
                'Contact'
            ]
        }
    },
    methods: {
        overlay() {
            console.log('overlay')
        }
    }
}
</script>

<style lang="scss" scoped>
.nav {
    width: 100%;
}
.nav-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.img-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.nav-links {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}
.nav-link {
    text-decoration: none;
    margin-right: 30px;
    color: black;
    text-transform: uppercase;
    // font-family: Montserrat;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: #FFFFFF;
    &:hover{
        color: #00F9F9;
    }
}
.menu-icon {
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}
</style>