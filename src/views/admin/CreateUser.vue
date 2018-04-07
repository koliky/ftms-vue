<template>
  <div class="hello">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <basic-form formName="Create User" @submitForm="createUser">
          <text-field fieldName="Empolyee ID" id="empId" v-model="user.employeeId"></text-field>
          <text-field fieldName="First Name" id="firstNameId" v-model="user.firstName"></text-field>
          <text-field fieldName="Last Name" id="lastNameId" v-model="user.lastName"></text-field>
          <radio-field fieldName="Sex" name="sex" :items="sexItems" @optionSelected="setDataSex"></radio-field>
          <select-field fieldName="Department" :options="departments" @selectChanged="setDepartment"></select-field>
          <radio-field fieldName="Shift" name="shift" :items="shiftItems" @optionSelected="setShift"></radio-field>
          <text-field type="date" fieldName="Start Work" id="startWorkDateId" v-model="user.startDate"></text-field>
          <checkbox fieldName="Roles" name="roles" :items="checkBoxItems" @checkboxChecked="setRoles"></checkbox>
        </basic-form>
      </div>
    </div>
  </div>
</template>

<script>
import BasicForm from '@/components/form/BasicForm'
import TextField from '@/components/form/TextField'
import RadioField from '@/components/form/RadioField'
import SelectField from '@/components/form/SelectField'
import Checkbox from '@/components/form/Checkbox'
import { SERVER_URL } from '../../config.js'
import axios from 'axios'

export default {
  components: {
    BasicForm,
    TextField,
    RadioField,
    SelectField,
    Checkbox
  },
  data () {
    return {
      sexItems: [
        'Male',
        'Female'
      ],
      departments: [
        'Please select',
        'MIS',
        'HR',
        'Production',
        'Engineer',
        'QA',
        'Sale',
        'MC',
        'Purchase',
        'Maintenance',
        'BOI',
        'Account'
      ],
      shiftItems: [
        'A',
        'B',
        'Office'
      ],
      checkBoxItems: [
        'User',
        'Admin'
      ],
      user: {
        employeeId: '',
        firstName: '',
        lastName: '',
        sex: 'Male',
        department: 'Please select',
        shift: 'A',
        startDate: '',
        roles: []
      }
    }
  },
  methods: {
    setDataSex (val) {
      this.user.sex = val
    },
    setShift (val) {
      this.user.shift = val
    },
    setDepartment (val) {
      this.user.department = val
    },
    setRoles (val) {
      this.user.roles = val
    },
    createUser () {
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      console.log(JSON.stringify(this.user))
      axios.post(SERVER_URL + 'api/admin/createuser', this.user, headers)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error.data)
        })
    }
  }
}
</script>
