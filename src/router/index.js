import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  console.log(to)
  console.log(from)
  console.log(next)
  next()
})

export default router
