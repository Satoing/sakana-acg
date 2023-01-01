import request from './request'

export function getDetail(id){
    return request({
        url:`/acg/${id}`,
        method:'get',
    })
}

export function loadMore(q) {
    return request({
        url:`/bangumi?q=${q}`,
        method:'get',
    })
}

export function getList(url) {
    return request({
        url: `/proxy?url=${url}`,
        method: 'get'
    })
}