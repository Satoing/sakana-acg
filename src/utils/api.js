import request from './request'

export function getDetail(id){
    return request({
        url:`/acg/${id}`,
        method:'get',
    })
}

