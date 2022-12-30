<template>
    <div class="min-h-screen" style="background-color:#111319;padding-top:80px">
        <div class="min-h-screen p-4" :class="{defaultbg: !flag, mybg: flag}">
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
                            active-text="刮削器"
                            :disabled="more"
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
                    <div style="margin:5px 0;">
                        <span style="font-size:14px;color: orange;">导演：</span>
                        <span v-for="tag in dir" class="tag">{{ tag }}</span>
                    </div>
                    <div style="margin:5px 0;">
                        <span style="font-size:14px;color: orange;">脚本：</span>
                        <span v-for="tag in writters" class="tag">{{ tag }}</span>
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
import { getDetail } from '../utils/api'

export default {
    data() {
        return {
            intro: '',
            imgurl: '',
            title: '',
            tags: [],
            flag: false,
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
            imgUrl: ''
        }
    },
    beforeMount() {
        this.load_info()
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
                    if(typeof(playarr)!="undefined")
                        {playarr = undefined}
                    if(typeof(playarr_2)!="undefined")
                        {playarr_2 = undefined}
                    if(typeof(playarr_1)!="undefined")
                        {playarr_1 = undefined}
                    if(typeof(playarr_wj)!="undefined")
                        {playarr_wj = undefined}
                    if(typeof(playarr_lz)!="undefined")
                        {playarr_lz = undefined}
                    if(typeof(playarr_fs)!="undefined")
                        {playarr_fs = undefined}
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
        }
    }
}
</script>

<style scoped>
.defaultbg {
    background-image: url(https://npm.elemecdn.com/cycjs1@1.0.7/static/img/0ba3bf5.png);
    Background-position: top right;
    background-repeat:no-repeat;
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