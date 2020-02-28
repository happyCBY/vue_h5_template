import axios from 'axios'

const service = axios.create()

// 响应拦截器
service.interceptors.response.use(response => {
  return response.data
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    // 设置请求头
    config.headers = {}
    return config
  },
  error => {
    return Promise.error(error)
  }
)
export default service
