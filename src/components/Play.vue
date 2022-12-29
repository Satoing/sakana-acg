<template>
    <div class="player">
        <div class="box" style="background-color: #111319;">
            <div class="MacPlayer">
                <div class="left">
                    <iframe :src="videourl" width="100%" height="100%" frameborder="0" 
                    border="0" marginwidth="0" marginheight="0" scrolling="no" 
                    allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen" security="restricted" 
                    sandbox="allow-same-origin allow-forms allow-scripts"></iframe>
                </div>
                <div class="right">
                    <h2 class="title">{{ title }}</h2>
                    <div style="margin:30px 0;">
                        <el-tabs v-model="myline">
                            <el-tab-pane label="主线" v-if="line[0]==1" name="0">
                                <el-row class="mb-4">
                                    <el-button v-for='(item,index) in playlist' :type="types[Math.floor(Math.random()*types.length)]"
                                    @click="play(0, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                                </el-row>
                            </el-tab-pane>
                            <el-tab-pane label="永久线" v-if="line[1]==1" name="1">
                                <el-row class="mb-4">
                                    <el-button v-for='(item,index) in playlist_yj' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                                    @click="play(1, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                                </el-row></el-tab-pane>
                            <el-tab-pane label="最大线" v-if="line[2]==1" name="2">
                                <el-row class="mb-4">
                                    <el-button v-for='(item,index) in playlist_zd' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                                    @click="play(2, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                                </el-row></el-tab-pane>
                            <el-tab-pane label="无天线" v-if="line[3]==1" name="3">
                                <el-row class="mb-4">
                                    <el-button v-for='(item,index) in playlist_wt' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                                    @click="play(3, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                                </el-row></el-tab-pane>
                            <el-tab-pane label="良子线" v-if="line[4]==1" name="4">
                                <el-row class="mb-4">
                                    <el-button v-for='(item,index) in playlist_lz' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                                    @click="play(4, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                                </el-row></el-tab-pane>
                            <el-tab-pane label="F速线" v-if="line[5]==1" name="5">
                                <el-row class="mb-4">
                                    <el-button v-for='(item,index) in playlist_fs' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                                    @click="play(5, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                                </el-row></el-tab-pane>
                        </el-tabs>
                        <p style="color:#e0e2e3;">推荐使用最大线播放~</p>
                    </div>
                </div>

                <div style="margin:30px 50px;" class="tail">
                    <h2 class="title">{{ title }}</h2>
                    <el-tabs v-model="myline">
                        <el-tab-pane label="主线" v-if="line[0]==1" name="0">
                            <el-row class="mb-4">
                                <el-button v-for='(item,index) in playlist' :type="types[Math.floor(Math.random()*types.length)]"
                                @click="play(0, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="永久线" v-if="line[1]==1" name="1">
                            <el-row class="mb-4">
                                <el-button v-for='(item,index) in playlist_yj' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                                @click="play(1, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                            </el-row></el-tab-pane>
                        <el-tab-pane label="最大线" v-if="line[2]==1" name="2">
                            <el-row class="mb-4">
                                <el-button v-for='(item,index) in playlist_zd' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                                @click="play(2, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                            </el-row></el-tab-pane>
                        <el-tab-pane label="无天线" v-if="line[3]==1" name="3">
                            <el-row class="mb-4">
                                <el-button v-for='(item,index) in playlist_wt' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                                @click="play(3, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                            </el-row></el-tab-pane>
                        <el-tab-pane label="良子线" v-if="line[4]==1" name="4">
                            <el-row class="mb-4">
                                <el-button v-for='(item,index) in playlist_lz' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                                @click="play(4, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                            </el-row></el-tab-pane>
                        <el-tab-pane label="F速线" v-if="line[5]==1" name="5">
                            <el-row class="mb-4">
                                <el-button v-for='(item,index) in playlist_fs' :key="item" :type="types[Math.floor(Math.random()*types.length)]"
                                @click="play(5, index)" style="margin-button:5px !important;">{{ item.split(',')[2] }}</el-button>
                            </el-row></el-tab-pane>
                    </el-tabs>
                    <p style="color:#e0e2e3;">推荐使用最大线播放~</p>
                </div>
                                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            line: [0, 0, 0, 0, 0, 0],
            playlist: [],
            playlist_yj: [],
            playlist_zd: [],
            playlist_wt: [],
            playlist_lz: [],
            playlist_fs: [],
            videoUrl: '',
            types: ['primary', 'success', 'warning', 'danger'],
            myline: 0
        }
    },
    computed: {
        videourl() {
            return `https://player.cycdm01.top/?url=${this.videoUrl}`
        },
        height() {
            return `${document.documentElement.clientHeight-80}px`
        },
        title() {
            return localStorage.title
        }
    },
    beforeMount() {
        this.load_info()
    },
    methods: {
        play(line, epi) {
            localStorage.epi = epi
            localStorage.line = line
            this.$router.go(0)
        },
        load_info() {
            axios.get(`https://acg-api.fullcomb.top/proxy?url=${localStorage.url}`).then(resp=>{
                let renamed = eval
                renamed(resp.data)
                this.update = unescape(playarr[playarr.length-1].split(",")[2])
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
                
                const line = localStorage.line
                const epi = localStorage.epi
                this.myline = localStorage.line
                if(line=='0') this.videoUrl = playarr[epi].split(',')[0]
                if(line=='1') this.videoUrl = playarr_2[epi].split(',')[0]
                if(line=='2') this.videoUrl = playarr_1[epi].split(',')[0]
                if(line=='3') this.videoUrl = playarr_wj[epi].split(',')[0]
                if(line=='4') this.videoUrl = playarr_lz[epi].split(',')[0]
                if(line=='5') this.videoUrl = playarr_fs[epi].split(',')[0]
            })
            
        }
    }
}
</script>

<style>
@media (max-width:850px){
    .left {margin-right: 0 !important;height: 300px !important;} 
    .right {display: none !important;}
    .tail {display: block !important;}
}
.player {
    position: absolute;
    top: 80px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}
.box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: left,right .2s ease;
    overflow: hidden;
}
.left {
    background: #000;
    z-index: 999;
    position: relative;
    box-sizing: border-box;
    height: 100%;
    margin-right: 30%;
    transition: margin .2s ease;
}
.MacPlayer {
    background: #000000;
    font-size: 14px;
    color: #F6F6F6;
    margin: 0px;
    padding: 0px;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 100px;
    padding: 10px 0!important;
}
.right {
    z-index: 9;
    height: 100%;
    float: right;
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;    
    padding: 30px 50px;
}
.title {
    font-size:25px;
    font-weight:bold !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
.tail {
    display: none;
    margin: 30px 30px;
}
</style>