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
                  placeholder="Enter Empolyee ID" class="form-control"
                  @blur="checkEmpId()"
                  :class="{ 'is-invalid': validateInput.idDuplicate }">
                  <div class="invalid-feedback">
                    Empolyee ID is duplicate.
                  </div>
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

              <div role="group" class="form-group row">
                <label class="col-form-label col-sm-3"><span>Sex</span></label>
                <div class="col-sm-9">
                  <div role="radiogroup" class="custom-controls-stacked">
                    <label class="custom-control custom-radio">
                      <input type="radio" name="sex" autocomplete="off" class="custom-control-input"
                      v-model="user.sex" value="Male">
                      <span aria-hidden="true" class="custom-control-indicator"></span>
                      <span class="custom-control-description">Male</span>
                    </label>
                    <label class="custom-control custom-radio">
                      <input type="radio" name="sex" autocomplete="off" class="custom-control-input"
                      v-model="user.sex" value="Female">
                      <span aria-hidden="true" class="custom-control-indicator"></span>
                      <span class="custom-control-description">Female</span>
                    </label>
                  </div>
                </div>
              </div>

              <div role="group" class="form-group row">
                <label class="col-form-label col-sm-3"><span>Department</span></label>
                <div class="col-sm-9">
                  <select class="form-control" v-model="user.department">
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
                      v-model="user.shift" value="A">
                      <span aria-hidden="true" class="custom-control-indicator"></span>
                      <span class="custom-control-description">A</span>
                    </label>
                    <label class="custom-control custom-radio">
                      <input type="radio" name="shift" autocomplete="off" class="custom-control-input"
                      v-model="user.shift" value="B">
                      <span aria-hidden="true" class="custom-control-indicator"></span>
                      <span class="custom-control-description">B</span>
                    </label>
                    <label class="custom-control custom-radio">
                      <input type="radio" name="shift" autocomplete="off" class="custom-control-input"
                      v-model="user.shift" value="Office">
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
                  placeholder="dd/MM/yyyy" class="form-control">
                </div>
              </div>

              <div role="group" class="form-group row">
                <label class="col-form-label col-sm-3"><span>Roles</span></label>
                <div class="col-sm-9">
                  <label class="custom-checkbox custom-control">
                    <input type="checkbox" name="roles" autocomplete="off" class="custom-control-input"
                    value="User" v-model="user.roles">
                    <span aria-hidden="true" class="custom-control-indicator"></span>
                    <span class="custom-control-description">User</span>
                  </label>
                  <br>
                  <label class="custom-checkbox custom-control">
                    <input type="checkbox" name="roles" autocomplete="off" class="custom-control-input"
                    value="Admin" v-model="user.roles">
                    <span aria-hidden="true" class="custom-control-indicator"></span>
                    <span class="custom-control-description">Admin</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary btn-sm" :disabled="!validateBtn"><i class="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" class="btn btn-danger btn-sm"><i class="fa fa-ban"></i> Reset</button>
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
        sex: 'Male',
        department: 'Please select',
        shift: 'A',
        startDate: '',
        roles: []
      },
      validateInput: {
        idDuplicate: false
      }
    }
  },
  methods: {
    checkEmpId () {
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      let dataCheck = {
        employeeId: this.user.employeeId
      }
      axios.post(SERVER_URL + 'api/admin/validateempid', dataCheck, headers)
        .then(response => {
          const dataRest = response.data
          if (dataRest.EmployeeID === this.user.employeeId) {
            this.validateInput.idDuplicate = true
          } else {
            this.validateInput.idDuplicate = false
          }
        })
        .catch(error => {
          const dataErr = error.response.data
          if (dataErr.message.indexOf('JWT_invalid') >= 0) {
            localStorage.clear()
            this.$router.push('/pages/login')
          }
        })
    },
    createUser () {
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      axios.post(SERVER_URL + 'api/admin/createuser', this.user, headers)
        .then(response => {
          this.$router.push('/admin/detailmember/' + response.data.id)
        })
        .catch(error => {
          const dataErr = error.response.data
          if (dataErr.message.indexOf('JWT_invalid') >= 0) {
            localStorage.clear()
            this.$router.push('/pages/login')
          }
        })
    }
  },
  computed: {
    validateBtn () {
      return this.user.employeeId !== '' && this.user.firstName !== '' &&
      this.user.lastName !== '' && this.user.department !== 'Please select' &&
      this.user.roles.length !== 0 && this.user.startDate !== '' &&
      (this.validateInput.idDuplicate !== true)
    }
  }
}
</script>
