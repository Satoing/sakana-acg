<template>
    <div class="min-h-screen" style="padding:90px 3% 0 3%;background-color: #111319;">
        <div class="max-w-screen-xl">
            <div style="padding:0.5rem 1.5rem;">
                <b style="color:rgb(169,169,172);">地区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <el-radio-group v-model="area" border>
                    <el-radio label="japan" border style="margin-right:10px;">日本</el-radio>
                    <el-radio label="china" border style="margin-right:10px;">中国</el-radio>
                </el-radio-group>
            </div>

            <div style="padding:0.5rem 1.5rem;">
                <b style="color:rgb(169,169,172);">类型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <el-radio-group v-model="tag" border>
                    <el-radio label="0" border style="margin-right:10px;">全部</el-radio>
                    <el-radio label="71" border style="margin-right:10px;">搞笑</el-radio>
                    <el-radio label="73" border style="margin-right:10px;">热血</el-radio>
                    <el-radio label="75" border style="margin-right:10px;">治愈</el-radio>
                    <el-radio label="80" border style="margin-right:10px;">战斗</el-radio>
                    <el-radio label="84" border style="margin-right:10px;">恋爱</el-radio>
                    <el-radio label="85" border style="margin-right:10px;">百合</el-radio>
                    <el-radio label="88" border style="margin-right:10px;">奇幻</el-radio>
                    <el-radio label="90" border style="margin-right:10px;">校园</el-radio>
                    <el-radio label="108" border style="margin-right:10px;">冒险</el-radio>
                </el-radio-group>
            </div>

            <div style="padding:0.5rem 1.5rem;">
                <b style="color:rgb(169,169,172);">年份&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <el-radio-group v-model="year" border>
                    <el-radio label="0" border style="margin-right:10px;">全部</el-radio>
                    <el-radio label="2023" border style="margin-right:10px;">2023</el-radio>
                    <el-radio label="2022" border style="margin-right:10px;">2022</el-radio>
                    <el-radio label="2021" border style="margin-right:10px;">2021</el-radio>
                    <el-radio label="2020" border style="margin-right:10px;">2020</el-radio>
                    <el-radio label="2019" border style="margin-right:10px;">2019</el-radio>
                    <el-radio label="2018" border style="margin-right:10px;">2018</el-radio>
                    <el-radio label="2017" border style="margin-right:10px;">2017</el-radio>
                    <el-radio label="2016" border style="margin-right:10px;">2016</el-radio>
                    <el-radio label="2015" border style="margin-right:10px;">2015</el-radio>
                </el-radio-group>
            </div>
        </div>
        <div style="width:100%;height:0;background-color:#64748b;margin: 30px 0;"></div>
        <div class="flex justify-center" style="flex-wrap: wrap;">
            <Card :anime="anime" v-for="anime in animelist"></Card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cheerio from 'cheerio'
import Card from './Card.vue'

export default {
    data() {
        return {
            area: "japan",
            tag: "0",
            year: "0",
            animelist: [],
            html: '',
            count: 0,
            page: 1
        }
    },
    components: {
        Card
    },
    beforeMount() {
        this.get_anime_list()
    },
    created() {
        window.addEventListener('scroll', this.lazyLoading); // 滚动到底部，再加载的处理事件
    },
    watch: {
        area: function() { this.get_anime_list() },
        tag: function() { this.get_anime_list() },
        year: function() { this.get_anime_list() },
        page: function() { this.add_anime_list() }
    },
    methods: {
        lazyLoading () { 
            // 滚动到底部，再加载的处理事件
            // 获取 可视区高度`、`滚动高度`、`页面高度`
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let clientHeight = document.documentElement.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight;
            if (scrollTop + clientHeight + 0.5 >= scrollHeight) { // 滚动到底部，逻辑代码
                //事件处理
                if(this.count==30) {
                    this.page+=1
                    console.log("触发");
                }
            }
        },
        get_anime_list() {
            const baseURL = `http://121.4.190.96:9991`
            const service = axios.create({
                baseURL,
                timeout:5000
            })
            service.interceptors.response.use(
                response => {
                    if(response.status == 200) {
                        return Promise.resolve(response)
                    }else{
                        return Promise.reject(response)
                    }
                }
            )
            const animelist = []
            let count = 0
            service({
                url: `/getsortdata_all_a.php?action=acg&year=${this.year}&area=${this.area}&class=${this.tag}&page=${this.page}`,
                method: 'get'
            }).then(res=>{
                this.html = res.data
                const $ = cheerio.load(res.data)
                const infos = $('li > a')
                infos.each(function (idx, el) {
                    const url = el.attribs.href
                    // console.log(url.substring(0, 3));
                    if(url.substring(0, 4)!='http') {
                        const thumb = el.childNodes[1].attribs.src
                        const title = el.childNodes[1].attribs.title
                        // const update = el.childNodes[3].children[0].data
                        animelist.push({ url, thumb, title })
                    }
                    count++
                })
                this.animelist = animelist
                this.count = count
                // console.log(count);
            })
        },
        add_anime_list() {
            const baseURL = `http://121.4.190.96:9991`
            const service = axios.create({
                baseURL,
                timeout:5000
            })
            service.interceptors.response.use(
                response => {
                    if(response.status == 200) {
                        return Promise.resolve(response)
                    }else{
                        return Promise.reject(response)
                    }
                }
            )
            const animelist = []
            let count = 0
            service({
                url: `/getsortdata_all_a.php?action=acg&year=${this.year}&area=${this.area}&class=${this.tag}&page=${this.page}`,
                method: 'get'
            }).then(res=>{
                this.html = res.data
                const $ = cheerio.load(res.data)
                const infos = $('li > a')
                infos.each(function (idx, el) {
                    const url = el.attribs.href
                    // console.log(url.substring(0, 3));
                    if(url.substring(0, 4)!='http') {
                        const thumb = el.childNodes[1].attribs.src
                        const title = el.childNodes[1].attribs.title
                        // const update = el.childNodes[3].children[0].data
                        animelist.push({ url, thumb, title })
                    }
                    count++
                })
                console.log(animelist);
                for(const anime of animelist) {
                    this.animelist.push(anime)
                }
                this.count = count
                console.log(count);
            })
        }
    },
    destroyed() { 
    	window.removeEventListener('scroll', this.lazyLoading)
    }
}
</script>
<style>
@media (max-width:1020px){
    .input-box {width: 400px !important;}
}
@media (max-width:820px){
    .input-box {width: 35% !important;}
}
.el-radio__label {
    color: hsla(0,0%,100%,.9);
}
.is-checked.el-radio {
    border-color: #e50916 !important;
    background-color: #0a0c0f !important;
}
.is-checked > span {
    color: orange !important;
    font-weight: bold !important;
    font-size: 16px;
}
.el-radio > .el-radio__input {
    display: none !important;
}
.el-radio {
    border: 0 !important;
    margin-right: 0;
}
.el-switch.is-checked .el-switch__core {
    background-color: orange !important;
    border-color: orange !important;
}
/* .el-tag.el-tag--warning {
    background-color: #fdf6ec !important;
} */
.el-tabs__nav-wrap::after {
    background-color: #0a0c0f !important;
    height: 1px !important;
}
.el-tabs__item {
    color: #e0e2e3 !important;
}
.el-tabs__item.is-active {
    color: orange !important;
    font-size: 16px;
    font-weight: bold;
}
.el-tabs__active-bar {
    background-color: orange !important;
}
.el-button {
    margin: 4px 5px 0 5px !important;
    display: inline-block !important;
}
.input-box {
    width: 600px;
    margin: 0 auto;
}
.el-input__wrapper {
    background-color: #e5e5e9 !important;
    border-radius: 20px !important;
}
.el-input {
    font-size: 14px;
    color: #6b6b6c;
    margin-top: 20px;
}

.el-input__icon {
    color: #818185dc !important;
}
.el-input__wrapper.is-focuse {
    box-shadow: 0 0 0 1px 
    orange inset !important;
}
.myicon {
    color:white !important;
    font-size: 20px !important;
    font-weight: bolder !important;
    margin-left: 15px !important;
    background-color: #1b1d22;
    border-radius: 25%;
    width: 25px !important;
    height: 25px !important;
}
</style>