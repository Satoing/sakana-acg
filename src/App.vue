<template>
    <div class="banner flex flex-row-reverse" :class="{istrans: $store.state.htrans}">
        <router-link to="/" style="margin-right:3%">
            <img src="./static/sakana.png" class="avatar">
        </router-link>
        <router-link to="/">
            <h2 class="title">Sakana!</h2>
        </router-link>
        <div class="input-box">
            <el-input placeholder="搜索动漫" v-model="searchValue" prefix-icon="search" clearable
            @focuse="clearvalue" @keyup.enter="submit"/>
        </div>
        <div class="btns">
            <el-icon class="myicon" @click="$router.push('/')"><House /></el-icon>
            <el-icon class="myicon" @click="$router.go(-1)"><ArrowLeft /></el-icon>    
            <el-icon class="myicon" @click="$router.go(1)"><ArrowRight /></el-icon>
            <el-icon class="myicon" @click="$router.go(0)"><RefreshLeft /></el-icon>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    data() {
        return {
            searchValue: ''
        }
    },
    methods: {
        clearvalue() {
            console.log("触发");
            this.searchValue = ''
        },
        submit() {
            this.$router.push(`/search?q=${this.searchValue}`)
        }
    }
}
</script>

<style scoped>
@media (max-width:820px){
    .title {
        display: none;
    }
}
.istrans {
    background-color: transparent !important;
}
.banner {
    background-color: #0a0c0f;
    height: 80px;
    width: 100%;
    position: fixed;
    z-index: 9998;
}
.avatar {
    width: 80px;
    height: 80px;
    display: block;
}
.title {
    margin-left: 10px;
    color: white;
    font-size: 30px;
    line-height: 60px;
}
.btns {
    margin: 25px 0 10px 20px;
}
.sakana-box{
  position: fixed;
  right: 0;
  bottom: 0;
  transform-origin: 100% 100%; /* 从右下开始变换 */
}
</style>
