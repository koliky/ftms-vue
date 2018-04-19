import Vue from 'vue'
import Router from 'vue-router'
import FoamtecTemplate from '@/containers/FoamtecTemplate'
import Home from '@/views/Home'
import CreateUser from '@/views/admin/CreateUser'
import AdminDashboard from '@/views/admin/AdminDashboard'
import MemberList from '@/views/admin/MemberList'
import DetailMember from '@/views/admin/DetailMember'
import PageTemplate from '@/containers/PageTemplate'
import Login from '@/views/pages/Login'
import Page404 from '@/views/pages/Page404'
import UpdateProfile from '@/views/profile/UpdateProfile'

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
          path: 'updateprofile',
          name: 'Update Profile',
          component: UpdateProfile
        },
        {
          path: 'admin/dashboard',
          name: 'Admin DashBoard',
          component: AdminDashboard,
          beforeEnter (to, from, next) {
            const roles = localStorage.getItem('roles')
            if (roles.indexOf('Admin') >= 0) {
              next()
            } else {
              next('/pages/404')
            }
          }
        },
        {
          path: 'admin/createuser',
          name: 'Admin CreateUser',
          component: CreateUser,
          beforeEnter (to, from, next) {
            const roles = localStorage.getItem('roles')
            if (roles.indexOf('Admin') >= 0) {
              next()
            } else {
              next('/pages/404')
            }
          }
        },
        {
          path: 'admin/memberlist',
          name: 'Member List',
          component: MemberList,
          beforeEnter (to, from, next) {
            const roles = localStorage.getItem('roles')
            if (roles.indexOf('Admin') >= 0) {
              next()
            } else {
              next('/pages/404')
            }
          }
        },
        {
          path: 'admin/detailmember/:id',
          name: 'Member Detail',
          component: DetailMember,
          beforeEnter (to, from, next) {
            const roles = localStorage.getItem('roles')
            if (roles.indexOf('Admin') >= 0) {
              next()
            } else {
              next('/pages/404')
            }
          }
        }
      ],
      beforeEnter (to, from, next) {
        const onLogin = localStorage.getItem('onLogin')
        if (onLogin) {
          next()
        } else {
          next('/pages/login')
        }
      }
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
          component: Login,
          beforeEnter (to, from, next) {
            const onLogin = localStorage.getItem('onLogin')
            if (onLogin) {
              next('/')
            } else {
              next()
            }
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/pages/404'
    }
  ]
})
