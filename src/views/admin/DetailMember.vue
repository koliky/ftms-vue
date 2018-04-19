<template>
  <div class="hello">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <form @submit.prevent="createUser" onsubmit="return false;">
          <div class="card">
            <div class="card-header">
              <strong>Create User</strong>
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
                  placeholder="Enter First Name" class="form-control" disabled="true">
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="lastNameId"><span>Last Name</span></label>
                <div class="col-sm-9">
                  <input type="text" id="lastNameId" v-model="user.lastName"
                  placeholder="Enter Last Name" class="form-control" disabled="true">
                </div>
              </div>

              <div role="group" class="form-group row">
                <label class="col-form-label col-sm-3"><span>Sex</span></label>
                <div class="col-sm-9">
                  <div role="radiogroup" class="custom-controls-stacked">
                    <label class="custom-control custom-radio">
                      <input type="radio" name="sex" autocomplete="off" class="custom-control-input"
                      v-model="user.sex" value="Male" disabled="true">
                      <span aria-hidden="true" class="custom-control-indicator"></span>
                      <span class="custom-control-description">Male</span>
                    </label>
                    <label class="custom-control custom-radio">
                      <input type="radio" name="sex" autocomplete="off" class="custom-control-input"
                      v-model="user.sex" value="Female" disabled="true">
                      <span aria-hidden="true" class="custom-control-indicator"></span>
                      <span class="custom-control-description">Female</span>
                    </label>
                  </div>
                </div>
              </div>

              <div role="group" class="form-group row">
                <label class="col-form-label col-sm-3"><span>Department</span></label>
                <div class="col-sm-9">
                  <select class="form-control" v-model="user.department" disabled="true">
                    <option value="Please select">Please select</option>
                    <option value="MIS">MIS</option>
                    <option value="HR">HR</option>
                    <option value="Production">Production</option>
                    <option value="Engineer">Engineer</option>
                    <option value="QA">QA</option>
                    <option value="Sale">Sale</option>
                    <option value="MC">MC</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="BOI">BOI</option>
                    <option value="Account">Account</option>
                  </select>
                </div>
              </div>

              <div role="group" class="form-group row">
                <label class="col-form-label col-sm-3"><span>Shift</span></label>
                <div class="col-sm-9">
                  <div role="radiogroup" class="custom-controls-stacked">
                    <label class="custom-control custom-radio">
                      <input type="radio" name="shift" autocomplete="off" class="custom-control-input"
                      v-model="user.shift" value="A" disabled="true">
                      <span aria-hidden="true" class="custom-control-indicator"></span>
                      <span class="custom-control-description">A</span>
                    </label>
                    <label class="custom-control custom-radio">
                      <input type="radio" name="shift" autocomplete="off" class="custom-control-input"
                      v-model="user.shift" value="B" disabled="true">
                      <span aria-hidden="true" class="custom-control-indicator"></span>
                      <span class="custom-control-description">B</span>
                    </label>
                    <label class="custom-control custom-radio">
                      <input type="radio" name="shift" autocomplete="off" class="custom-control-input"
                      v-model="user.shift" value="Office" disabled="true">
                      <span aria-hidden="true" class="custom-control-indicator"></span>
                      <span class="custom-control-description">Office</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-sm-3" for="startDateId"><span>Start Work</span></label>
                <div class="col-sm-9">
                  <input type="text" id="startDateId" v-model="user.startDate"
                  placeholder="dd/MM/yyyy" class="form-control" disabled="true">
                </div>
              </div>

              <div role="group" class="form-group row">
                <label class="col-form-label col-sm-3"><span>Roles</span></label>
                <div class="col-sm-9">
                  <label class="custom-checkbox custom-control">
                    <input type="checkbox" name="roles" autocomplete="off" class="custom-control-input"
                    value="User" v-model="user.roles" disabled="true">
                    <span aria-hidden="true" class="custom-control-indicator"></span>
                    <span class="custom-control-description">User</span>
                  </label>
                  <br>
                  <label class="custom-checkbox custom-control">
                    <input type="checkbox" name="roles" autocomplete="off" class="custom-control-input"
                    value="Admin" v-model="user.roles" disabled="true">
                    <span aria-hidden="true" class="custom-control-indicator"></span>
                    <span class="custom-control-description">Admin</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="card-footer">
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
        sex: '',
        department: 'Please select',
        shift: 'A',
        startDate: '',
        roles: []
      }
    }
  },
  mounted () {
    this.setDefault()
  },
  methods: {
    setDefault () {
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      const data = {
        id: this.$route.params.id
      }
      axios.post(SERVER_URL + 'api/admin/findbyid', data, headers)
        .then(response => {
          const dataRes = response.data
          this.user.employeeId = dataRes.employeeId
          this.user.firstName = dataRes.firstName
          this.user.lastName = dataRes.lastName
          this.user.sex = dataRes.sex
          this.user.department = dataRes.department
          this.user.shift = dataRes.shift
          this.user.startDate = dataRes.startDate
          let i = 0
          for (i = 0; i < dataRes.appRoles.length; i++) {
            this.user.roles.push(dataRes.appRoles[i].roleName)
          }
        })
        .catch(error => {
          const dataErr = error.response.data
          if (dataErr.message.indexOf('JWT expired') >= 0) {
            localStorage.clear()
            this.$router.push('/pages/login')
          }
        })
    }
  }
}
</script>
