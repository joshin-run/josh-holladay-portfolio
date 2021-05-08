<template>
    <div class="media-wrapper" v-if="$mq === 'laptop' || $mq === 'desktop'">
        <div v-for="(icon,index) in icons" :key="index">
            <a class="icon-link" :href="icon.link" :alt="icon.type" target="_blank">
                <img class="icon" :src="require(`../assets/icons/${icon.img}.png`)" />
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Media',
    data () {
        return {
            icons: [
                {
                    type: 'behance',
                    link: 'https://www.behance.net/josh852a',
                    img: 'icon-be'
                },
                {
                    type: 'dribble',
                    link: 'https://dribbble.com/joshholladay',
                    img: 'icon-dr'
                },
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/joshholladay/',
                    img: 'icon-in'
                },
                {
                    type: 'github',
                    link: 'https://github.com/joshin-run',
                    img: 'icon-gh'
                },
                {
                    type: 'medium',
                    link: 'https://iamjoshholladay.medium.com/',
                    img: 'icon-md'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.media-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    // width: 100%;
    margin-right: 20px;
}
.icon-link {
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
    .icon {
        height: 50px;
    }
}
</style>