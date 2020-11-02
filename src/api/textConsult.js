import request from '../utils/request'

export function fetchTextConsults(query) {
  return request({
    url: '/doctor/getMorders',
    method: 'get',
    params: query,
  })
}
