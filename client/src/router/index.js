import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
