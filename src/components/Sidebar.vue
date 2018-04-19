<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <div slot="header"></div>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link">
            <i class="icon-speedometer"></i> Dashboard
            <span class="badge badge-pill badge-primary">NEW</span>
          </router-link>
        </li>
        <li class="nav-item nav-dropdown" v-if="admin">
          <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-wrench"></i> Admin only</div>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link to="/admin/dashboard" class="nav-link">
                <i class="icon-plus"></i> Admin Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/createuser" class="nav-link">
                <i class="icon-plus"></i> Create User
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/memberlist" class="nav-link">
                <i class="icon-plus"></i> Member List
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rolse: localStorage.getItem('roles'),
      admin: false,
      user: false
    }
  },
  mounted () {
    if (this.rolse.indexOf('User') >= 0) {
      this.user = true
    }
    if (this.rolse.indexOf('Admin') >= 0) {
      this.admin = true
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
