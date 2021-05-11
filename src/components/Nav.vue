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
            <menu-icon
                v-if="$mq === 'mobile' || $mq === 'tablet'"
                class="menu-icon"
            />
            <!-- <img
                v-if="$mq === 'mobile' || $mq === 'tablet'"
                src="@/assets/icons/hamburger-menu.png"
                @click="overlay"
            /> -->
        </div>
    </div>

</template>

<script>
import Media from '../components/Media.vue'
import MenuIcon from '../components/MenuIcon.vue'

export default {
    name: 'Nav',
    components: {
        Media,
        MenuIcon,
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
    justify-content: flex-end;
    // justify-content: space-between;
    align-items: center;
    // width: 100%;
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    // font-family: Arial, Helvetica, sans-serif;
    // font-weight: 400;
    font-size: .85rem;
    color: #FFFFFF;
    &:hover{
        color: #00F9F9;
    }
}
.menu-icon {
    height: 34px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 12px;
}
@media only screen and (min-width: 900px) {
    .menu-icon {
        height: 45px;
        margin-right: 30px;
    }
}
</style>