import axios from 'axios'

let baseURL = 'https://acg-api.fullcomb.top'

const service = axios.create({
    baseURL,
    timeout:5000,
    // headers: {
    //     'Access-Control-Allow-Origin': '*'
    // }
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

export default service
