import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

function load (component) {
  return () => import('@/components/' + component + '.vue')
}

export default new Router({
  routes: [
    {
      path: '/',
      component: load('index')
    },
    {
      path: '/filter-page',
      component: load('filter-page')
    },
    {
      path: '/project-detail',
      component: load('project-detail')
    }
  ]
})
