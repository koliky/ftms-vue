<template>
  <div class="app">
    <app-header></app-header>
    <div class="app-body">
      <app-sidebar></app-sidebar>
      <main class="main">
        <app-breadcrumb :list="list"></app-breadcrumb>
        <div class="container-fluid">
          <transition name="fade" appear>
            <router-view></router-view>
          </transition>
        </div>
      </main>
      <app-aside></app-aside>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Breadcrumb from '@/components/Breadcrumb'
import Aside from '@/components/Aside'
import Footer from '@/components/Footer'

export default {
  components: {
    appHeader: Header,
    appSidebar: Sidebar,
    appBreadcrumb: Breadcrumb,
    appAside: Aside,
    appFooter: Footer
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }
</style>
