<template>
  <div class="hello">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <form @submit.prevent="updateUser" onsubmit="return false;">
          <div class="card">
            <div class="card-header">
              <strong>Update User</strong>
            </div>
            <div class="card-block">
              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="employeeId"><span>Empolyee ID</span></label>
                <div class="col-sm-9">
                  <input type="text" id="employeeId" v-model="user.employeeId"
                  placeholder="Enter Empolyee ID" class="form-control" disabled="true">
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="firstNameId"><span>First Name</span></label>
                <div class="col-sm-9">
                  <input type="text" id="firstNameId" v-model="user.firstName"
                  placeholder="Enter First Name" class="form-control">
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="lastNameId"><span>Last Name</span></label>
                <div class="col-sm-9">
                  <input type="text" id="lastNameId" v-model="user.lastName"
                  placeholder="Enter Last Name" class="form-control">
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="passwordId"><span>Password</span></label>
                <div class="col-sm-9">
                  <input type="password" id="passwordId" v-model="user.password"
                  placeholder="Enter Password" class="form-control">
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="confirmPasswordId"><span>Confirm Password</span></label>
                <div class="col-sm-9">
                  <input type="password" id="confirmPasswordId" v-model="user.confirmPassword"
                  placeholder="Confirm Password" class="form-control">
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="emailId"><span>E-mail</span></label>
                <div class="col-sm-9">
                  <input type="email" id="emailId" v-model="user.email"
                  placeholder="Enter E-mail (aaaa@bbbb.com)" class="form-control">
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="addressId"><span>Address</span></label>
                <div class="col-sm-9">
                  <input type="text" id="addressId" v-model="user.address"
                  placeholder="Enter Address" class="form-control">
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="telephoneId"><span>Telephone No.</span></label>
                <div class="col-sm-9">
                  <input type="text" id="telephoneId" v-model="user.phone"
                  placeholder="Enter Telephone No. (0812345678)" class="form-control">
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="fileInput"><span>Image Profile</span></label>
                <div class="col-sm-9">
                  <input type="file" id="fileInput" class="form-control-file"
                  @change="processFile($event)">
                </div>
              </div>
            </div>
            <div class="card-footer">
              <button type="submit" class="btn btn-primary btn-sm" :disabled="!validateBtn"><i class="fa fa-dot-circle-o"></i> Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { SERVER_URL } from '../../config.js'
import axios from 'axios'

export default {
  data () {
    return {
      user: {
        employeeId: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        address: ''
      },
      imaageFile: []
    }
  },
  mounted () {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
    const data = {}
    axios.post(SERVER_URL + 'api/user/getdatauser', data, headers)
      .then(response => {
        const resData = response.data
        this.user.employeeId = resData.EmployeeID
        this.user.firstName = resData.FirstName
        this.user.lastName = resData.LastName
      })
      .catch(error => {
        const dataErr = error.response.data
        console.log(dataErr)
        if (dataErr.message.indexOf('JWT_invalid') >= 0) {
          localStorage.clear()
          this.$router.push('/pages/login')
        }
      })
  },
  methods: {
    processFile (event) {
      this.imaageFile = event.target.files[0]
    },
    updateUser () {
      console.log('update')
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      let data = new FormData()
      data.append('employeeId', this.user.employeeId)
      data.append('firstName', this.user.firstName)
      data.append('lastName', this.user.lastName)
      data.append('password', this.user.password)
      data.append('email', this.user.email)
      data.append('address', this.user.address)
      data.append('phone', this.user.phone)
      data.append('fileImage', this.imaageFile)
      axios.post(SERVER_URL + 'api/user/updateprofile', data, headers)
        .then(response => {
          this.$router.push('/')
        })
        .catch(error => {
          const dataErr = error.response.data
          console.log(dataErr)
          if (dataErr.message.indexOf('JWT_invalid') >= 0) {
            localStorage.clear()
            this.$router.push('/pages/login')
          }
        })
    }
  },
  computed: {
    validateBtn () {
      return this.user.firstName !== '' && this.user.lastName !== '' &&
      this.user.password !== '' && this.user.confirmPassword !== '' &&
      (this.user.password === this.user.confirmPassword)
    }
  }
}
</script>
