import Vue from 'vue'
import Router from 'vue-router'
import FoamtecTemplate from '@/containers/FoamtecTemplate'
import Home from '@/views/Home'
import CreateUser from '@/views/admin/CreateUser'
import AdminDashboard from '@/views/admin/AdminDashboard'
import PageTemplate from '@/containers/PageTemplate'
import Login from '@/views/pages/Login'
import Page404 from '@/views/pages/Page404'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: FoamtecTemplate,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Home
        },
        {
          path: 'admin/dashboard',
          name: 'Admin DashBoard',
          component: AdminDashboard
        },
        {
          path: 'admin/createuser',
          name: 'Admin CreateUser',
          component: CreateUser
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: PageTemplate,
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    }
  ]
})
