<template>
    <div class="min-h-screen" style="padding-top:80px">
        <div class="backg" style="background-color:#111319;"></div>
        <div class="backg" :class="{defaultbg: !more, mybg: more}">
            <div class="backdrop-brightness-50 backdrop-blur-sm" style="width:100%;height:100%;"></div>
        </div>
        <div class="min-h-screen p-4">
            <div class="infos flex">
                <div class="poster">
                    <img :src="imgUrl" class="poster-img">
                </div>
                <div style="max-width:50%;">
                    <h2 class="title">{{ title }}</h2>
                    <div style="font-size:14px;line-height:2rem;">
                        <span style="margin-right:10px;display:inline-block">更新至第 <b style="color:orange">{{ update }}</b> 话</span>
                        <el-switch
                            v-model="more"
                            size="large"
                            active-text="开启背景"
                        />
                    </div>

                    <div style="margin:5px 0;">
                        <!-- <span style="font-size:14px;color: orange;">类型：</span> -->
                        <el-tag
                        v-for="item in tags"
                        :key="item"
                        :type="types1[Math.floor(Math.random()*types1.length)]"
                        class="mx-1"
                        effect="dark"
                        >
                        {{ item }}
                        </el-tag>
                    </div>
                    <div style="margin-top:20px;">
                        <img src="../static/bgm.png" style="width:30px;display: inline;">
                        <span style="font-size:15px;vertical-align:bottom;color:#ff77ab;font-weight:bolder;">&nbsp;评分：</span>
                        <span style="font-size:20px;vertical-align:bottom;color:#ff77ab;font-weight:bolder;">{{ score }}</span>
                        <div style="margin-top:10px;">
                            <div style="color:#ff77ab;font-size:15px;font-weight:bolder;">大家给这部动漫的标注为：</div>
                            <div style="max-width:400px;font-weight:500;"><span v-for="cate in cates" style="font-size:13px;">{{ cate }}&nbsp;</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin:30px 5%;">
                <el-tabs>
                    <el-tab-pane label="主线" v-if="line[0]==1">
                        <el-row class="mb-4">
                            <el-button v-for='(item,index) in playlist' :type="types[Math.floor(Math.random()*types.length)]"
                            @click="play(0, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="永久线" v-if="line[1]==1">
                        <el-row class="mb-4">
                            <el-button v-for='(item,index) in playlist_yj' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                            @click="play(1, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                        </el-row></el-tab-pane>
                    <el-tab-pane label="最大线" v-if="line[2]==1">
                        <el-row class="mb-4">
                            <el-button v-for='(item,index) in playlist_zd' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                            @click="play(2, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                        </el-row></el-tab-pane>
                    <el-tab-pane label="无天线" v-if="line[3]==1">
                        <el-row class="mb-4">
                            <el-button v-for='(item,index) in playlist_wt' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                            @click="play(3, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                        </el-row></el-tab-pane>
                    <el-tab-pane label="良子线" v-if="line[4]==1">
                        <el-row class="mb-4">
                            <el-button v-for='(item,index) in playlist_lz' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                            @click="play(4, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                        </el-row></el-tab-pane>
                    <el-tab-pane label="F速线" v-if="line[5]==1">
                        <el-row class="mb-4">
                            <el-button v-for='(item,index) in playlist_fs' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                            @click="play(5, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                        </el-row></el-tab-pane>
                </el-tabs>
            </div>

            <div class="characters" style="padding:0 5%;">
                <Character v-for="cha in characters" :cha="cha" style="display:inline-block;"></Character>
            </div>

            <div class="intro" :class="{occlusion:isfold, relh:!isfold}">{{ intro }}</div>
            <div class="open" @click="open" v-show="isfold">
                <el-icon><ArrowDownBold style="" /></el-icon>&nbsp;&nbsp;展开</div>
            <div class="open" @click="open" v-show="!isfold">
                <el-icon><ArrowUpBold /></el-icon>&nbsp;&nbsp;收起</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { getDetail, loadMore } from '../utils/api'
import Character from "./Character.vue";

export default {
    data() {
        return {
            intro: '',
            imgurl: '',
            title: '',
            tags: [],
            isfold: true,
            url: '',
            dir: [],
            writters: [],
            more: false,
            update: 0,
            playlist: [],
            playlist_yj: [],
            playlist_zd: [],
            playlist_wt: [],
            playlist_lz: [],
            playlist_fs: [],
            line: [0, 0, 0, 0, 0, 0],
            types1: ["success", "warning", "danger",],
            types: ['primary', 'success', 'warning', 'danger'],
            imgUrl: '',
            characters: [],
            cover: '',
            cates: [],
            score: '',
        }
    },
    components: {
        Character
    },
    beforeMount() {
        this.load_info()
    },
    watch: {
        title: function() {
            this.load_more()
        },
        more() {
            this.text = "开启背景"
            if(this.more) this.$store.state.htrans = true
            else this.$store.state.htrans = false
        }
    },
    computed: {
        mycover(){
            return `url("https://acg-api.fullcomb.top/proxy?type=3&url=${this.cover}")`
        }
    },
    beforeRouteLeave(to, from, next) {
      console.log("离开详情页面");
      this.$store.state.htrans = false
      next()
    },
    methods: {
        play(line, epi) {
            localStorage.title = this.title
            localStorage.epi = epi
            localStorage.url = this.url
            localStorage.line = line
            this.$router.push('/play')
        },
        load_info() {
            const id = this.$route.params.id
            getDetail(id).then(res => {
                this.intro = res.data.intro
                this.url = res.data.playlist
                this.title = res.data.title
                this.imgurl = `url(${res.data.img})`
                this.imgUrl = res.data.img
                this.tags = res.data.tags.slice(0,3)
                axios.get(`https://acg-api.fullcomb.top/proxy?url=${this.url}`).then(resp=>{
                    if(typeof(playarr)!="undefined") {playarr = undefined}
                    if(typeof(playarr_2)!="undefined") {playarr_2 = undefined}
                    if(typeof(playarr_1)!="undefined") {playarr_1 = undefined}
                    if(typeof(playarr_wj)!="undefined") {playarr_wj = undefined}
                    if(typeof(playarr_lz)!="undefined") {playarr_lz = undefined}
                    if(typeof(playarr_fs)!="undefined") {playarr_fs = undefined}
                    let renamed = eval
                    renamed(resp.data)
                    // this.update = unescape(playarr[playarr.length-1].split(",")[2])
                    // this.update = lianzaijs_lz
                    if(typeof(playarr)!="undefined")
                        {playarr.shift();this.playlist=playarr;this.line[0]=1}
                    if(typeof(playarr_2)!="undefined")
                        {playarr_2.shift();this.playlist_yj=playarr_2;this.line[1]=1}
                    if(typeof(playarr_1)!="undefined")
                        {playarr_1.shift();this.playlist_zd=playarr_1;this.line[2]=1}
                    if(typeof(playarr_wj)!="undefined")
                        {playarr_wj.shift();this.playlist_wt=playarr_wj;this.line[3]=1}
                    if(typeof(playarr_lz)!="undefined")
                        {playarr_lz.shift();this.playlist_lz=playarr_lz;this.line[4]=1}
                    if(typeof(playarr_fs)!="undefined")
                        {playarr_fs.shift();this.playlist_fs=playarr_fs;this.line[5]=1}
                })
            })
        },
        open() {
            this.isfold = !this.isfold
        },
        load_more() {
            console.log(this.title);
            loadMore(this.title).then(res=>{
                this.cover = res.data.cover[0]
                this.characters = res.data.characters
                this.cates = res.data.tags
                this.score = res.data.score
                console.log(this.cates);
            })
        }
    }
}
</script>

<style scoped>
.backg {
    background-color: #3f4245;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;
}
.mybg {
    background-image: v-bind(mycover);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
}
.curtain {
    backdrop-filter:saturate(150%) blur(8px);
	-webkit-backdrop-filter:saturate(150%) blur(8px);
	background-color:rgba(0,0,0,.3);
    padding: 1rem 1rem 0 1rem;
    padding-bottom:80px;
    backdrop-filter: brightness(.1);
    backdrop-filter: blur(4px);
}
.defaultbg {
    background-image: url(https://npm.elemecdn.com/cycjs1@1.0.7/static/img/0ba3bf5.png);
    Background-position: top right;
    background-repeat:no-repeat;
    background-color:rgba(0,0,0,0.2) !important; 
}
.poster {
    max-width: 280px;
    width: 50%;
    height: var(--width)*0.73;
    margin-right: 5%;
}
.poster-img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}
.infos {
   margin: 2% 3% 0 5%; 
   color: #e0e2e3;
}
.title {
    font-size:25px;
    font-weight:bold !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
.intro {
    color: hsla(0,0%,100%,.6);
    font-size: 15px;
    text-indent: 2em;
    margin: 3% 5% 0 5%;
    font-weight:lighter;
}
.occlusion {
    -webkit-mask-image: -webkit-gradient(linear,left top,left bottom,from(#121212),to(transparent));
    max-height: 80px;
    transition: max-height .2s ease-in-out;
}
.open {
    display: block;
    height: 27px;
    line-height: 27px;
    font-size: 14px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: white;
}
/* .relh {
    max-height: 96px !important;
    transition: max-height .2s ease-in-out;
} */
.tag {
    display: inline-block;
    margin: 0 8px;
    /* line-height: 28px; */
    font-size: 14px;
}
</style>