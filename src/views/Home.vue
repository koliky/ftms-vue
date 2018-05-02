<template>
  <div class="hello">
    <div class="row">
      <div class="col-sm-6 col-md-7">
        <div class="border-default card">
          <div class="card-block">
            <div id='calendar'></div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-5">
        <div class="row">

          <div class="col-sm-12 col-md-12 main-section text-center">
            <div class="row">
              <div class="col-lg-12 col-sm-12 col-12 profile-header"></div>
            </div>
            <div class="row user-detail">
              <div class="col-lg-12 col-sm-12 col-12">
                <img :src="profile" alt="Profile" class="rounded-circle img-thumbnail">
                <h5>{{ firstName }} {{ lastName }} [ID: {{ username }}]</h5>
                <p>{{ department }} Department</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> {{ address }}</p>
                <p>Email: {{ email }}</p>
                <p>Tel: {{ telephone }}</p>
                <hr>
                <router-link to="/updateprofile" class="btn btn-success btn-sm">Update Profile</router-link>
                <a href="#" class="btn btn-info btn-sm">Detail Profile</a>
                <hr>
                <span>Foamtec international factory</span>
              </div>
            </div>
            <div class="row user-social-detail">
              <div class="col-lg-12 col-sm-12 col-12">
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SERVER_URL } from '../config'
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      firstName: '',
      lastName: '',
      department: '',
      address: '',
      email: '',
      telephone: '',
      profile: SERVER_URL + 'api/user/imageprofile/' + localStorage.getItem('username')
    }
  },
  mounted () {
    $('#calendar').fullCalendar({
      firstDay: 1,
      lang: 'ro',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      height: 'auto',
      allDaySlot: false,
      slotEventOverlap: false,
      timeFormat: 'HH:mm'
    })
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
        if (resData.Status === 'ADMIN_CREATE') {
          this.$router.push('/updateprofile')
        } else {
          this.username = resData.Username
          this.firstName = resData.FirstName
          this.lastName = resData.LastName
          this.department = resData.Department
          this.address = resData.Address
          this.email = resData.Email
          this.telephone = resData.PhoneNumber
        }
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-section{
  border: 1px solid #138496;
  background-color: #fff;
}
.profile-header{
  background-color: #17a2b8;
  height: 80px;
}
.user-detail{
  margin: -50px 0px 30px 0px;
}
.user-detail img{
  height: 100px;
  width: 100px;
}
.user-detail h5{
  margin: 15px 0px 5px 0px;
}
.user-social-detail{
  padding: 15px 0px;
  background-color: #17a2b8;
}
.user-social-detail a i{
  color:#fff;
  font-size: 23px;
  padding: 0px 5px;
}
</style>
