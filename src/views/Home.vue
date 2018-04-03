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
                <img src="../assets/img/avatars/5.jpg" alt="Profile" class="rounded-circle img-thumbnail">
                <h5>Jesica Addison [ID: 90616]</h5>
                <p>MIS Department, System Engineer position</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> New Jersey, USA.</p>
                <p>Email: jesicaa@foamtecintl.com</p>
                <p>Tel: 0123456789</p>
                <hr>
                <a href="#" class="btn btn-success btn-sm">Edit Profile</a>
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
export default {
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
