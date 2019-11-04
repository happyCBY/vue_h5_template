import request from '@/util/request'

export default {
  // 测试一
  demo1 (data) {
    return request({
      url: '',
      method: 'get',
      params: data
    })
  },
  // 测试二
  demo2 (data) {
    return request({
      url: '',
      method: 'post',
      data: data
    })
  }
}
