import axios from 'axios'

const service = axios.create()

// 响应拦截器
service.interceptors.response.use(response => {
  return response.data
})
// 请求拦截器
service.interceptors.request.use(config => {
  return config
})
export default service
