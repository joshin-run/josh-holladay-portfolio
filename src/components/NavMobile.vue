<template>
    <div class="nav">
        <div class="nav-wrapper">
            <div class="nav-links">
                <div v-for="(link,index) in links" :key="index">
                    <a
                        class="nav-link"
                        :href="`#${link.toLowerCase()}`"
                        @click="closeSidebarPanel"
                    >
                        {{link}}
                    </a>
                </div>
            </div>
            <Media />
        </div>
    </div>

</template>

<script>
import Media from './Media.vue'
import { mutations } from '@/store.js'

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
                'Skills',
                'About',
                'Contact'
            ]
        }
    },
    methods: {
        closeSidebarPanel: mutations.closeNav
    },
    // computed: {
    //     isPanelOpen() {
    //         return store.isNavOpen
    //     }
    // }
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
// .img-wrapper {
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
//     align-items: center;
// }
.nav-links {
    display: inline-block;
    line-height: 2.5;
}
.nav-link {
    text-decoration: none;
    margin-right: 30px;
    text-transform: uppercase;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2rem;
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