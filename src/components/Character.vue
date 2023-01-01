<template>
    <div style="max-width:75px;margin:10px 20px;text-align: center;">
        <el-avatar :size="70" :src="cha.face" />
        <div class="name">{{ cha.name }}</div>
        <div class="name" style="text-decoration: overline;">{{ cha.cv }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {

    },
    props: [
        'cha'
    ],
    methods: {

    }
}
</script>

<style scoped>
.name {
    overflow: hidden;
    font-size: 14px;
    white-space: nowrap;
    color:white;
}
</style>