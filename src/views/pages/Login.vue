<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group mb-0">
            <div class="card p-4">
              <form @submit.prevent="login" onsubmit="return false;">
                <div class="card-body">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <p class="alert alert-danger" align="center" v-if="errorMessage">Invalid Username or Password</p>
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="icon-user"></i></span>
                    <input type="text" v-model="username" class="form-control" placeholder="Username">
                  </div>
                  <div class="input-group mb-4">
                    <span class="input-group-addon"><i class="icon-lock"></i></span>
                    <input type="password" v-model="password" class="form-control" placeholder="Password">
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <button type="submit" class="btn btn-primary px-4" :disabled="!validate">Login</button>
                    </div>
                    <div class="col-6 text-right">
                      <button type="button" class="btn btn-link px-0">Forgot password?</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="card text-white bg-default py-5 d-md-down-none" style="width:44%">
              <div class="card-body text-center">
                <div class="col-12">
                  <img src="../../assets/img/foamtec-login.png" class="responsive" alt="logo-login" width="260">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      errorMessage: false
    }
  },
  methods: {
    login () {
      if (this.username === 'apichat' && this.password === 'password') {
        this.$router.push('/')
      }
      this.errorMessage = true
      this.username = ''
      this.password = ''
    }
  },
  computed: {
    validate () {
      return this.username !== '' && this.password !== ''
    }
  }
}
</script>

<style>
.responsive {
  width: 100%;
  height: auto;
}
</style>
