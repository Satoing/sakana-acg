<template>
    <div style="height:30px;"></div>
    <div class="min-h-screen" style="padding:90px 3% 0 3%;background-color: #111319;">
        <div class="flex justify-center" style="flex-wrap: wrap;">
            <Card :anime="anime" v-for="anime in animelist"></Card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Card from './Card.vue'

export default {
    data() {
        return {
            animelist: [],
        }
    },
    beforeMount() {
        this.search()
    },
    components: {
        Card
    },
    watch: {
        '$route.query.q'() {
            this.search()
        }
    },
    methods: {
        search() {
            this.animelist =  []
            const baseURL = `https://acg-api.fullcomb.top`
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
            service({
                url: `/acg/search?q=${this.$route.query.q}`,
                method: 'get'
            }).then(resp=>{
                const reslist = resp.data
                const reg = new RegExp(/^\/acg\/.*/) 
                for(let res of reslist){
                    if(reg.test(res.url)) {
                        this.animelist.push(res)
                    }
                }
            })
        }
    }
}
</script>

<style>
</style>