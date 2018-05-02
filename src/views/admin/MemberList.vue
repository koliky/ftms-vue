<template>
  <div class="hello">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <div><i class="fa fa-align-justify"></i> Member</div>
          </div>
          <div class="card-body">
            <div class="table-responsive-sm">
              <table class="table b-table table-striped table-hover table-bordered table-sm b-table-fixed">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Friderik Dávid</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td><span class="badge badge-success">Active</span></td>
                  </tr>
                </tbody>
              </table>
              <nav>
                <paginate
                  :page-count="20"
                  :click-handler="clickCallback"
                  :prev-text="'Prev'"
                  :next-text="'Next'"
                  :container-class="'pagination'">
                </paginate>
              </nav>
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
      items: [],
      totalItems: 0,
      start: 1,
      row: 10
    }
  },
  methods: {
    clickCallback (pageNum) {
      console.log(pageNum)
    }
  }
}
</script>
