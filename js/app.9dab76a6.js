(function(){"use strict";var l={9508:function(l,e,t){var a=t(9242),r=(t(7658),t(3396)),i=t.p+"img/sakana.64116a6b.png";const s=l=>((0,r.dD)("data-v-32ae5ab3"),l=l(),(0,r.Cn)(),l),n={class:"banner flex flex-row-reverse"},o=s((()=>(0,r._)("img",{src:i,class:"avatar"},null,-1))),p=s((()=>(0,r._)("h2",{class:"title"},"Sakana!",-1))),u={class:"input-box"},d={class:"btns"},c=s((()=>(0,r._)("div",{class:""},null,-1)));function y(l,e,t,i,s,y){const m=(0,r.up)("router-link"),f=(0,r.up)("el-input"),g=(0,r.up)("House"),h=(0,r.up)("el-icon"),w=(0,r.up)("ArrowLeft"),_=(0,r.up)("ArrowRight"),b=(0,r.up)("RefreshLeft"),k=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",n,[(0,r.Wm)(m,{to:"/",style:{"margin-right":"3%"}},{default:(0,r.w5)((()=>[o])),_:1}),(0,r.Wm)(m,{to:"/"},{default:(0,r.w5)((()=>[p])),_:1}),(0,r._)("div",u,[(0,r.Wm)(f,{placeholder:"搜索动漫",modelValue:s.searchValue,"onUpdate:modelValue":e[0]||(e[0]=l=>s.searchValue=l),"prefix-icon":"search",clearable:"",onFocuse:y.clearvalue,onKeyup:(0,a.D2)(y.submit,["enter"])},null,8,["modelValue","onFocuse","onKeyup"])]),(0,r._)("div",d,[(0,r.Wm)(h,{class:"myicon",onClick:e[1]||(e[1]=e=>l.$router.push("/"))},{default:(0,r.w5)((()=>[(0,r.Wm)(g)])),_:1}),(0,r.Wm)(h,{class:"myicon",onClick:e[2]||(e[2]=e=>l.$router.go(-1))},{default:(0,r.w5)((()=>[(0,r.Wm)(w)])),_:1}),(0,r.Wm)(h,{class:"myicon",onClick:e[3]||(e[3]=e=>l.$router.go(1))},{default:(0,r.w5)((()=>[(0,r.Wm)(_)])),_:1}),(0,r.Wm)(h,{class:"myicon",onClick:e[4]||(e[4]=e=>l.$router.go(0))},{default:(0,r.w5)((()=>[(0,r.Wm)(b)])),_:1})])]),(0,r.Wm)(k),c],64)}var m={data(){return{searchValue:""}},methods:{clearvalue(){console.log("触发"),this.searchValue=""},submit(){this.$router.push(`/search?q=${this.searchValue}`)}}},f=t(89);const g=(0,f.Z)(m,[["render",y],["__scopeId","data-v-32ae5ab3"]]);var h=g,w=t(2483);const _={class:"min-h-screen",style:{padding:"90px 3% 0 3%","background-color":"#111319"}},b={class:"max-w-screen-xl"},k={style:{padding:"0.5rem 1.5rem"}},v=(0,r._)("b",{style:{color:"rgb(169,169,172)"}},"地区     ",-1),x={style:{padding:"0.5rem 1.5rem"}},j=(0,r._)("b",{style:{color:"rgb(169,169,172)"}},"类型     ",-1),U={style:{padding:"0.5rem 1.5rem"}},W=(0,r._)("b",{style:{color:"rgb(169,169,172)"}},"年份     ",-1),z=(0,r._)("div",{style:{width:"100%",height:"0","background-color":"#64748b",margin:"30px 0"}},null,-1),C={class:"flex justify-center",style:{"flex-wrap":"wrap"}};function M(l,e,t,a,i,s){const n=(0,r.up)("el-radio"),o=(0,r.up)("el-radio-group"),p=(0,r.up)("Card");return(0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("div",b,[(0,r._)("div",k,[v,(0,r.Wm)(o,{modelValue:i.area,"onUpdate:modelValue":e[0]||(e[0]=l=>i.area=l),border:""},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{label:"japan",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("日本")])),_:1}),(0,r.Wm)(n,{label:"china",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("中国")])),_:1})])),_:1},8,["modelValue"])]),(0,r._)("div",x,[j,(0,r.Wm)(o,{modelValue:i.tag,"onUpdate:modelValue":e[1]||(e[1]=l=>i.tag=l),border:""},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{label:"0",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("全部")])),_:1}),(0,r.Wm)(n,{label:"71",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("搞笑")])),_:1}),(0,r.Wm)(n,{label:"73",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("热血")])),_:1}),(0,r.Wm)(n,{label:"75",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("治愈")])),_:1}),(0,r.Wm)(n,{label:"80",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("战斗")])),_:1}),(0,r.Wm)(n,{label:"84",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("恋爱")])),_:1}),(0,r.Wm)(n,{label:"85",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("百合")])),_:1}),(0,r.Wm)(n,{label:"88",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("奇幻")])),_:1}),(0,r.Wm)(n,{label:"90",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("校园")])),_:1}),(0,r.Wm)(n,{label:"108",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("冒险")])),_:1})])),_:1},8,["modelValue"])]),(0,r._)("div",U,[W,(0,r.Wm)(o,{modelValue:i.year,"onUpdate:modelValue":e[2]||(e[2]=l=>i.year=l),border:""},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{label:"0",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("全部")])),_:1}),(0,r.Wm)(n,{label:"2023",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("2023")])),_:1}),(0,r.Wm)(n,{label:"2022",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("2022")])),_:1}),(0,r.Wm)(n,{label:"2021",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("2021")])),_:1}),(0,r.Wm)(n,{label:"2020",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("2020")])),_:1}),(0,r.Wm)(n,{label:"2019",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("2019")])),_:1}),(0,r.Wm)(n,{label:"2018",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("2018")])),_:1}),(0,r.Wm)(n,{label:"2017",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("2017")])),_:1}),(0,r.Wm)(n,{label:"2016",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("2016")])),_:1}),(0,r.Wm)(n,{label:"2015",border:"",style:{"margin-right":"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("2015")])),_:1})])),_:1},8,["modelValue"])])]),z,(0,r._)("div",C,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.animelist,(l=>((0,r.wg)(),(0,r.j4)(p,{anime:l},null,8,["anime"])))),256))])])}var D=t(6943),$=t(6854),H=t(7139);const q={class:"title"};function V(l,e,t,i,s,n){const o=(0,r.up)("VideoPlay"),p=(0,r.up)("el-icon"),u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(u,{class:"card",to:t.anime.url},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,H.C_)(["img-wrap bg-center",{"bg-scale-110":!s.flag}]),onMouseover:e[0]||(e[0]=(...l)=>n.trans1&&n.trans1(...l)),onMouseout:e[1]||(e[1]=(...l)=>n.trans2&&n.trans2(...l))},[(0,r._)("div",{class:(0,H.C_)({wrap:!s.flag}),style:{"text-align":"center"}},[(0,r.wy)((0,r.Wm)(p,{size:60,class:"icon"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"play"})])),_:1},512),[[a.F8,!s.flag]])],2)],34),(0,r._)("span",q,(0,H.zw)(t.anime.title),1)])),_:1},8,["to"])}const K={data(){return{flag:!0}},computed:{imgurl(){return`url('${this.anime.thumb}')`},cardh(){const l=document.getElementsByClassName("card")[0];let e=l.clientWidth,t=e/.66;return`${t}px`},imgh(){const l=document.getElementsByClassName("img-wrap")[0];let e=l.clientWidth,t=e/.77;return`${t}px`}},props:["anime"],methods:{trans1(){this.flag=!this.flag},trans2(){this.flag=!this.flag}}},Y=()=>{(0,a.sj)((l=>({ae4a5626:l.cardh,"582e2660":l.imgh,"7d6137d7":l.imgurl})))},S=K.setup;K.setup=S?(l,e)=>(Y(),S(l,e)):Y;var P=K;const Z=(0,f.Z)(P,[["render",V],["__scopeId","data-v-c36c6b5a"]]);var O=Z,E={data(){return{area:"japan",tag:"0",year:"0",animelist:[],html:"",count:0,page:1}},components:{Card:O},beforeMount(){this.get_anime_list()},created(){window.addEventListener("scroll",this.lazyLoading)},watch:{area:function(){this.get_anime_list()},tag:function(){this.get_anime_list()},year:function(){this.get_anime_list()},page:function(){this.add_anime_list()}},methods:{lazyLoading(){let l=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight,t=document.documentElement.scrollHeight;l+e+.5>=t&&30==this.count&&(this.page+=1,console.log("触发"))},get_anime_list(){const l="http://121.4.190.96:9991",e=D.Z.create({baseURL:l,timeout:5e3});e.interceptors.response.use((l=>200==l.status?Promise.resolve(l):Promise.reject(l)));const t=[];let a=0;e({url:`/getsortdata_all_a.php?action=acg&year=${this.year}&area=${this.area}&class=${this.tag}&page=${this.page}`,method:"get"}).then((l=>{this.html=l.data;const e=$.ZP.load(l.data),r=e("li > a");r.each((function(l,e){const r=e.attribs.href;if("http"!=r.substring(0,4)){const l=e.childNodes[1].attribs.src,a=e.childNodes[1].attribs.title;t.push({url:r,thumb:l,title:a})}a++})),this.animelist=t,this.count=a}))},add_anime_list(){const l="https://acg-api.fullcomb.top",e=D.Z.create({baseURL:l,timeout:5e3});e.interceptors.response.use((l=>200==l.status?Promise.resolve(l):Promise.reject(l)));const t=[];let a=0;url=encodeURIComponent(`/getsortdata_all_a.php?action=acg&year=${this.year}&area=${this.area}&class=${this.tag}&page=${this.page}`),e({url:`/proxy?type=1&url=${url}`,method:"get"}).then((l=>{this.html=l.data;const e=$.ZP.load(l.data),r=e("li > a");r.each((function(l,e){const r=e.attribs.href;if("http"!=r.substring(0,4)){const l=e.childNodes[1].attribs.src,a=e.childNodes[1].attribs.title;t.push({url:r,thumb:l,title:a})}a++})),console.log(t);for(const a of t)this.animelist.push(a);this.count=a,console.log(a)}))}},destroyed(){window.removeEventListener("scroll",this.lazyLoading)}};const L=(0,f.Z)(E,[["render",M]]);var R=L;const F=l=>((0,r.dD)("data-v-42551b29"),l=l(),(0,r.Cn)(),l),T={class:"min-h-screen",style:{"background-color":"#111319","padding-top":"80px"}},N={class:"infos flex"},A={class:"poster"},B=["src"],I={style:{"max-width":"50%"}},G={class:"title"},J={style:{"font-size":"14px","line-height":"2rem"}},Q={style:{"margin-right":"10px",display:"inline-block"}},X={style:{color:"orange"}},ll={style:{margin:"5px 0"}},el={style:{margin:"5px 0"}},tl=F((()=>(0,r._)("span",{style:{"font-size":"14px",color:"orange"}},"导演：",-1))),al={class:"tag"},rl={style:{margin:"5px 0"}},il=F((()=>(0,r._)("span",{style:{"font-size":"14px",color:"orange"}},"脚本：",-1))),sl={class:"tag"},nl={style:{margin:"30px 5%"}};function ol(l,e,t,i,s,n){const o=(0,r.up)("el-switch"),p=(0,r.up)("el-tag"),u=(0,r.up)("el-button"),d=(0,r.up)("el-row"),c=(0,r.up)("el-tab-pane"),y=(0,r.up)("el-tabs"),m=(0,r.up)("ArrowDownBold"),f=(0,r.up)("el-icon"),g=(0,r.up)("ArrowUpBold");return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("div",{class:(0,H.C_)(["min-h-screen p-4",{defaultbg:!s.flag,mybg:s.flag}])},[(0,r._)("div",N,[(0,r._)("div",A,[(0,r._)("img",{src:s.imgUrl,class:"poster-img"},null,8,B)]),(0,r._)("div",I,[(0,r._)("h2",G,(0,H.zw)(s.title),1),(0,r._)("div",J,[(0,r._)("span",Q,[(0,r.Uk)("更新至第 "),(0,r._)("b",X,(0,H.zw)(s.update),1),(0,r.Uk)(" 话")]),(0,r.Wm)(o,{modelValue:s.more,"onUpdate:modelValue":e[0]||(e[0]=l=>s.more=l),size:"large","active-text":"刮削器",disabled:s.more},null,8,["modelValue","disabled"])]),(0,r._)("div",ll,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.tags,(l=>((0,r.wg)(),(0,r.j4)(p,{key:l,type:s.types1[Math.floor(Math.random()*s.types1.length)],class:"mx-1",effect:"dark"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l),1)])),_:2},1032,["type"])))),128))]),(0,r._)("div",el,[tl,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.dir,(l=>((0,r.wg)(),(0,r.iD)("span",al,(0,H.zw)(l),1)))),256))]),(0,r._)("div",rl,[il,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.writters,(l=>((0,r.wg)(),(0,r.iD)("span",sl,(0,H.zw)(l),1)))),256))])])]),(0,r._)("div",nl,[(0,r.Wm)(y,null,{default:(0,r.w5)((()=>[1==s.line[0]?((0,r.wg)(),(0,r.j4)(c,{key:0,label:"主线"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.playlist,((l,e)=>((0,r.wg)(),(0,r.j4)(u,{type:s.types[Math.floor(Math.random()*s.types.length)],onClick:l=>n.play(0,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),256))])),_:1})])),_:1})):(0,r.kq)("",!0),1==s.line[1]?((0,r.wg)(),(0,r.j4)(c,{key:1,label:"永久线"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.playlist_yj,((l,e)=>((0,r.wg)(),(0,r.j4)(u,{key:l,type:s.types[Math.floor(Math.random()*s.types.length)],onClick:l=>n.play(1,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==s.line[2]?((0,r.wg)(),(0,r.j4)(c,{key:2,label:"最大线"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.playlist_zd,((l,e)=>((0,r.wg)(),(0,r.j4)(u,{key:l,type:s.types[Math.floor(Math.random()*s.types.length)],onClick:l=>n.play(2,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==s.line[3]?((0,r.wg)(),(0,r.j4)(c,{key:3,label:"无天线"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.playlist_wt,((l,e)=>((0,r.wg)(),(0,r.j4)(u,{key:l,type:s.types[Math.floor(Math.random()*s.types.length)],onClick:l=>n.play(3,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==s.line[4]?((0,r.wg)(),(0,r.j4)(c,{key:4,label:"良子线"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.playlist_lz,((l,e)=>((0,r.wg)(),(0,r.j4)(u,{key:l,type:s.types[Math.floor(Math.random()*s.types.length)],onClick:l=>n.play(4,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==s.line[5]?((0,r.wg)(),(0,r.j4)(c,{key:5,label:"F速线"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.playlist_fs,((l,e)=>((0,r.wg)(),(0,r.j4)(u,{key:l,type:s.types[Math.floor(Math.random()*s.types.length)],onClick:l=>n.play(5,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0)])),_:1})]),(0,r._)("div",{class:(0,H.C_)(["intro",{occlusion:s.isfold,relh:!s.isfold}])},(0,H.zw)(s.intro),3),(0,r.wy)((0,r._)("div",{class:"open",onClick:e[1]||(e[1]=(...l)=>n.open&&n.open(...l))},[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,{style:{}})])),_:1}),(0,r.Uk)("  展开")],512),[[a.F8,s.isfold]]),(0,r.wy)((0,r._)("div",{class:"open",onClick:e[2]||(e[2]=(...l)=>n.open&&n.open(...l))},[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g)])),_:1}),(0,r.Uk)("  收起")],512),[[a.F8,!s.isfold]])],2)])}let pl="https://acg-api.fullcomb.top";const ul=D.Z.create({baseURL:pl,timeout:5e3});ul.interceptors.response.use((l=>200==l.status?Promise.resolve(l):Promise.reject(l)));var dl=ul;function cl(l){return dl({url:`/acg/${l}`,method:"get"})}var yl={data(){return{intro:"",imgurl:"",title:"",tags:[],flag:!1,isfold:!0,url:"",dir:[],writters:[],more:!1,update:0,playlist:[],playlist_yj:[],playlist_zd:[],playlist_wt:[],playlist_lz:[],playlist_fs:[],line:[0,0,0,0,0,0],types1:["success","warning","danger"],types:["primary","success","warning","danger"],imgUrl:""}},beforeMount(){this.load_info()},methods:{play(l,e){localStorage.title=this.title,localStorage.epi=e,localStorage.url=this.url,localStorage.line=l,this.$router.push("/play")},load_info(){const l=this.$route.params.id;cl(l).then((l=>{this.intro=l.data.intro,this.url=l.data.playlist,this.title=l.data.title,this.imgurl=`url(${l.data.img})`,this.imgUrl=l.data.img,this.tags=l.data.tags.slice(0,3),D.Z.get(`https://acg-api.fullcomb.top/proxy?url=${this.url}`).then((l=>{"undefined"!=typeof playarr&&(playarr=void 0),"undefined"!=typeof playarr_2&&(playarr_2=void 0),"undefined"!=typeof playarr_1&&(playarr_1=void 0),"undefined"!=typeof playarr_wj&&(playarr_wj=void 0),"undefined"!=typeof playarr_lz&&(playarr_lz=void 0),"undefined"!=typeof playarr_fs&&(playarr_fs=void 0);let e=eval;e(l.data),"undefined"!=typeof playarr&&(playarr.shift(),this.playlist=playarr,this.line[0]=1),"undefined"!=typeof playarr_2&&(playarr_2.shift(),this.playlist_yj=playarr_2,this.line[1]=1),"undefined"!=typeof playarr_1&&(playarr_1.shift(),this.playlist_zd=playarr_1,this.line[2]=1),"undefined"!=typeof playarr_wj&&(playarr_wj.shift(),this.playlist_wt=playarr_wj,this.line[3]=1),"undefined"!=typeof playarr_lz&&(playarr_lz.shift(),this.playlist_lz=playarr_lz,this.line[4]=1),"undefined"!=typeof playarr_fs&&(playarr_fs.shift(),this.playlist_fs=playarr_fs,this.line[5]=1)}))}))},open(){this.isfold=!this.isfold}}};const ml=(0,f.Z)(yl,[["render",ol],["__scopeId","data-v-42551b29"]]);var fl=ml;const gl={class:"player"},hl={class:"box",style:{"background-color":"#111319"}},wl={class:"MacPlayer"},_l={key:0,class:"left"},bl=["src"],kl={key:1,class:"left"},vl=["src"],xl={key:2,class:"left"},jl=["src"],Ul={class:"right"},Wl={class:"title"},zl={style:{margin:"30px 0"}},Cl=(0,r._)("p",{style:{color:"#e0e2e3"}},"如不能播放，请切换线路",-1),Ml={style:{margin:"30px 50px"},class:"tail"},Dl={class:"title"},$l=(0,r._)("p",{style:{color:"#e0e2e3"}},"如不能播放，请切换线路",-1);function Hl(l,e,t,a,i,s){const n=(0,r.up)("el-button"),o=(0,r.up)("el-row"),p=(0,r.up)("el-tab-pane"),u=(0,r.up)("el-tabs");return(0,r.wg)(),(0,r.iD)("div",gl,[(0,r._)("div",hl,[(0,r._)("div",wl,[0==i.flag?((0,r.wg)(),(0,r.iD)("div",_l,[(0,r._)("iframe",{src:s.videourl,width:"100%",height:"100%",frameborder:"0",border:"0",marginwidth:"0",marginheight:"0",scrolling:"no",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",security:"restricted",sandbox:"allow-same-origin allow-forms allow-scripts"},null,8,bl)])):(0,r.kq)("",!0),1==i.flag?((0,r.wg)(),(0,r.iD)("div",kl,[(0,r._)("iframe",{src:s.videourl1,width:"100%",height:"100%",frameborder:"0",border:"0",marginwidth:"0",marginheight:"0",scrolling:"no",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",security:"restricted",sandbox:"allow-same-origin allow-forms allow-scripts"},null,8,vl)])):(0,r.kq)("",!0),2==i.flag?((0,r.wg)(),(0,r.iD)("div",xl,[(0,r._)("iframe",{src:s.videourl2,width:"100%",height:"100%",frameborder:"0",border:"0",marginwidth:"0",marginheight:"0",scrolling:"no",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",security:"restricted",sandbox:"allow-same-origin allow-forms allow-scripts"},null,8,jl)])):(0,r.kq)("",!0),(0,r._)("div",Ul,[(0,r._)("h2",Wl,(0,H.zw)(s.title),1),(0,r._)("div",zl,[(0,r.Wm)(u,{modelValue:i.myline,"onUpdate:modelValue":e[0]||(e[0]=l=>i.myline=l)},{default:(0,r.w5)((()=>[1==i.line[0]?((0,r.wg)(),(0,r.j4)(p,{key:0,label:"主线",name:"0"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(0,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),256))])),_:1})])),_:1})):(0,r.kq)("",!0),1==i.line[1]?((0,r.wg)(),(0,r.j4)(p,{key:1,label:"永久线",name:"1"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist_yj,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{key:l,type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(1,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==i.line[2]?((0,r.wg)(),(0,r.j4)(p,{key:2,label:"最大线",name:"2"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist_zd,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{key:l,type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(2,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==i.line[3]?((0,r.wg)(),(0,r.j4)(p,{key:3,label:"无天线",name:"3"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist_wt,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{key:l,type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(3,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==i.line[4]?((0,r.wg)(),(0,r.j4)(p,{key:4,label:"良子线",name:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist_lz,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{key:l,type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(4,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==i.line[5]?((0,r.wg)(),(0,r.j4)(p,{key:5,label:"F速线",name:"5"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist_fs,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{key:l,type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(5,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0)])),_:1},8,["modelValue"]),Cl])]),(0,r._)("div",Ml,[(0,r._)("h2",Dl,(0,H.zw)(s.title),1),(0,r.Wm)(u,{modelValue:i.myline,"onUpdate:modelValue":e[1]||(e[1]=l=>i.myline=l)},{default:(0,r.w5)((()=>[1==i.line[0]?((0,r.wg)(),(0,r.j4)(p,{key:0,label:"主线",name:"0"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(0,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),256))])),_:1})])),_:1})):(0,r.kq)("",!0),1==i.line[1]?((0,r.wg)(),(0,r.j4)(p,{key:1,label:"永久线",name:"1"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist_yj,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{key:l,type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(1,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==i.line[2]?((0,r.wg)(),(0,r.j4)(p,{key:2,label:"最大线",name:"2"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist_zd,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{key:l,type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(2,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==i.line[3]?((0,r.wg)(),(0,r.j4)(p,{key:3,label:"无天线",name:"3"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist_wt,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{key:l,type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(3,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==i.line[4]?((0,r.wg)(),(0,r.j4)(p,{key:4,label:"良子线",name:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist_lz,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{key:l,type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(4,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0),1==i.line[5]?((0,r.wg)(),(0,r.j4)(p,{key:5,label:"F速线",name:"5"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"mb-4"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.playlist_fs,((l,e)=>((0,r.wg)(),(0,r.j4)(n,{key:l,type:i.types[Math.floor(Math.random()*i.types.length)],onClick:l=>s.play(5,e),style:{"margin-button":"5px !important"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,H.zw)(l.split(",")[2]),1)])),_:2},1032,["type","onClick"])))),128))])),_:1})])),_:1})):(0,r.kq)("",!0)])),_:1},8,["modelValue"]),$l])])])])}var ql={data(){return{line:[0,0,0,0,0,0],playlist:[],playlist_yj:[],playlist_zd:[],playlist_wt:[],playlist_lz:[],playlist_fs:[],videoUrl:"",types:["primary","success","warning","danger"],myline:0,flag:0}},computed:{videourl(){return`https://player.cycdm01.top/?url=${this.videoUrl}`},videourl1(){return`http://v2.shenjw.com:8022/wap.php?url=${this.videoUrl}`},videourl2(){return`http://ss3.quelingfei.com:8080/wap.php?url=${this.videoUrl}`},height(){return document.documentElement.clientHeight-80+"px"},title(){return localStorage.title}},beforeMount(){this.load_info()},methods:{play(l,e){localStorage.epi=e,localStorage.line=l,this.$router.go(0)},load_info(){D.Z.get(`https://acg-api.fullcomb.top/proxy?url=${localStorage.url}`).then((l=>{let e=eval;e(l.data),"undefined"!=typeof playarr&&(playarr.shift(),this.playlist=playarr,this.line[0]=1),"undefined"!=typeof playarr_2&&(playarr_2.shift(),this.playlist_yj=playarr_2,this.line[1]=1),"undefined"!=typeof playarr_1&&(playarr_1.shift(),this.playlist_zd=playarr_1,this.line[2]=1),"undefined"!=typeof playarr_wj&&(playarr_wj.shift(),this.playlist_wt=playarr_wj,this.line[3]=1),"undefined"!=typeof playarr_lz&&(playarr_lz.shift(),this.playlist_lz=playarr_lz,this.line[4]=1),"undefined"!=typeof playarr_fs&&(playarr_fs.shift(),this.playlist_fs=playarr_fs,this.line[5]=1);const t=localStorage.line,a=localStorage.epi;this.myline=localStorage.line,"0"==t&&(this.videoUrl=playarr[a].split(",")[0]),"1"==t&&(this.videoUrl=playarr_2[a].split(",")[0]),"2"==t&&(this.videoUrl=playarr_1[a].split(",")[0]),"3"==t&&(this.videoUrl=playarr_wj[a].split(",")[0]),"4"==t&&(this.videoUrl=playarr_lz[a].split(",")[0]),"5"==t&&(this.videoUrl=playarr_fs[a].split(",")[0]);const r=new RegExp(/^http.*/),i=new RegExp(/.*\.m3u8$/);r.test(this.videoUrl)?i.test(this.videoUrl)||(this.flag=1):this.flag=2}))}}};const Vl=(0,f.Z)(ql,[["render",Hl]]);var Kl=Vl;const Yl=(0,r._)("div",{style:{height:"30px"}},null,-1),Sl={class:"min-h-screen",style:{padding:"90px 3% 0 3%","background-color":"#111319"}},Pl={class:"flex justify-center",style:{"flex-wrap":"wrap"}};function Zl(l,e,t,a,i,s){const n=(0,r.up)("Card");return(0,r.wg)(),(0,r.iD)(r.HY,null,[Yl,(0,r._)("div",Sl,[(0,r._)("div",Pl,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.animelist,(l=>((0,r.wg)(),(0,r.j4)(n,{anime:l},null,8,["anime"])))),256))])])],64)}var Ol={data(){return{animelist:[]}},beforeMount(){this.search()},components:{Card:O},watch:{"$route.query.q"(){this.search()}},methods:{search(){this.animelist=[];const l="https://acg-api.fullcomb.top",e=D.Z.create({baseURL:l,timeout:5e3});e.interceptors.response.use((l=>200==l.status?Promise.resolve(l):Promise.reject(l)));e({url:`/acg/search?q=${this.$route.query.q}`,method:"get"}).then((l=>{const e=l.data,t=new RegExp(/^\/acg\/.*/);for(let a of e)t.test(a.url)&&this.animelist.push(a)}))}}};const El=(0,f.Z)(Ol,[["render",Zl]]);var Ll=El;const Rl=[{path:"/",component:R},{path:"/acg/:id",component:fl},{path:"/play",component:Kl},{path:"/search",component:Ll}],Fl=(0,w.p7)({history:(0,w.r5)(),routes:Rl});var Tl=Fl,Nl=t(6919),Al=(t(4415),t(2748)),Bl=t(65);const Il=(0,Bl.MT)({state:{playing:"",line:""}}),Gl=(0,a.ri)(h);Gl.use(Il);for(const[Jl,Ql]of Object.entries(Al))Gl.component(Jl,Ql);Gl.use(Tl),Gl.use(Nl.Z),Gl.mount("#app")}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return l[a].call(i.exports,i,i.exports,t),i.exports}t.m=l,function(){var l=[];t.O=function(e,a,r,i){if(!a){var s=1/0;for(u=0;u<l.length;u++){a=l[u][0],r=l[u][1],i=l[u][2];for(var n=!0,o=0;o<a.length;o++)(!1&i||s>=i)&&Object.keys(t.O).every((function(l){return t.O[l](a[o])}))?a.splice(o--,1):(n=!1,i<s&&(s=i));if(n){l.splice(u--,1);var p=r();void 0!==p&&(e=p)}}return e}i=i||0;for(var u=l.length;u>0&&l[u-1][2]>i;u--)l[u]=l[u-1];l[u]=[a,r,i]}}(),function(){t.n=function(l){var e=l&&l.__esModule?function(){return l["default"]}:function(){return l};return t.d(e,{a:e}),e}}(),function(){t.d=function(l,e){for(var a in e)t.o(e,a)&&!t.o(l,a)&&Object.defineProperty(l,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(l){if("object"===typeof window)return window}}()}(),function(){t.o=function(l,e){return Object.prototype.hasOwnProperty.call(l,e)}}(),function(){t.r=function(l){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})}}(),function(){t.p="/sakana-acg/"}(),function(){var l={143:0};t.O.j=function(e){return 0===l[e]};var e=function(e,a){var r,i,s=a[0],n=a[1],o=a[2],p=0;if(s.some((function(e){return 0!==l[e]}))){for(r in n)t.o(n,r)&&(t.m[r]=n[r]);if(o)var u=o(t)}for(e&&e(a);p<s.length;p++)i=s[p],t.o(l,i)&&l[i]&&l[i][0](),l[i]=0;return t.O(u)},a=self["webpackChunksakana"]=self["webpackChunksakana"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(9508)}));a=t.O(a)})();
//# sourceMappingURL=app.9dab76a6.js.map