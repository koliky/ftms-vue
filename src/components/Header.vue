<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <router-link to="/" class="navbar-brand"></router-link>
    <button class="navbar-toggler sidebar-toggler d-md-down-none mr-auto" type="button" @click="sidebarMinimize">&#9776;</button>
    <ul class="ml-auto nav navbar-nav">
      <li class="nav-item d-md-down-none">
        <a href="#" class="nav-link">
          <i class="icon-bell"></i>
          <span class="badge badge-pill badge-danger">5</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a href="#" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false" class="nav-link dropdown-toggle">
          <img src="../assets/img/avatars/5.jpg" alt="admin@bootstrapmaster.com" class="img-avatar">
          <span class="d-md-down-none">Jesica</span>
        </a>
        <div role="menu" class="dropdown-menu dropdown-menu-right">
          <div class="dropdown-header text-center">
            <strong>Settings</strong>
          </div>
          <a href="#" class="dropdown-item">
            <i class="fa fa-user"></i> Profile
          </a>
          <a href="#" class="dropdown-item">
            <i class="fa fa-wrench"></i> Settings
          </a>
          <a href="#" class="dropdown-item">
            <i class="fa fa-file"></i> Projects<span class="badge badge-primary">42</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fa fa-shield"></i> Lock Account
          </a>
          <router-link to="/pages/login" class="dropdown-item">
            <i class="fa fa-lock"></i> Logout
          </router-link>
        </div>
      </li>
    </ul>
    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">&#9776;</button>
  </header>
</template>

<script>
export default {
  methods: {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>

<style scoped>
</style>
