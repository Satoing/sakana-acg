<template>
    <div class="banner flex">
        <router-link to="/">
            <h2 class="title">Sakana!</h2>
        </router-link>
        <router-link to="/">
            <img src="./static/sakana.png" class="avatar">
        </router-link>
    </div>
    <router-view></router-view>
    <div class=""></div>
</template>

<script setup>

</script>

<style scoped>
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
    margin-left: 30px;
    color: white;
    font-size: 30px;
    line-height: 60px;
}
</style>
