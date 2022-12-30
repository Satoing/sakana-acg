<template>
    <router-link class="card" :to="anime.url">
        <div class="img-wrap bg-center" :class="{'bg-scale-110': !flag}" @mouseover="trans1" @mouseout="trans2">
            <div :class="{'wrap': !flag}" style="text-align: center;">
                <el-icon :size="60" v-show="!flag" class="icon"><VideoPlay class="play"/></el-icon>
            </div>
        </div>
        <span class="title">
            {{ anime.title }}
        </span>
    </router-link>
</template>

<script>
export default {
    data() {
        return {
            flag: true,
        }
    },
    computed: {
        imgurl() {
            return `url('${this.anime.thumb}')`;
        },
        cardh() {
            const ele = document.getElementsByClassName('card')[0]
            let w = ele.clientWidth
            let h = w/0.66
            return `${h}px`
        },
        imgh() {
            const ele = document.getElementsByClassName('img-wrap')[0]
            let w = ele.clientWidth
            let h = w/0.77
            return `${h}px`
        }
    },
    props: [
        'anime'
    ],
    methods: {
        trans1() {
            this.flag = !this.flag
        },
        trans2() {
            this.flag = !this.flag
        }
    }
}
</script>

<style scoped>
.card {
    display: inline-block;
    max-width: 229.325px;
    width: 33.33%;
    height: v-bind(cardh);
    /* aspect-ratio: 0.66; */
    padding-right: 1.5%;
}
.img-wrap {
    background-color: #bfdbfe;
    border-radius: 6px;
    height: v-bind(imgh);
    /* aspect-ratio: 0.73; */
    background-image: v-bind(imgurl);
    background-size: 100%;
}
.bg-scale-110 {
    transition-property: background;
    transition-duration: .75s;
    background-size: 125%;
    box-sizing: border-box;
}
.wrap {
    border: 3px solid orange;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    background-color: #0b101766;
}
.title {
    overflow: hidden;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    color: white;
    font-weight: 100;
}
.play {
    color: white;
    background-color: orange;
    border-radius: 50% !important;
}
.icon {
    text-align: center;
    margin-top: 50%;
}
</style>