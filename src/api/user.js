import request from '../utils/request'

export function doctorLoginApi(query) {
  return request({
    url: '/doctor/login',
    method: 'post',
    params: query,
  })
}

export function getInfoApi(token) {
  return request({
    url: '/info',
    method: 'get',
    params: { token },
  })
}

export function logoutApi() {
  return request({
    url: '/logout',
    method: 'post',
  })
}
