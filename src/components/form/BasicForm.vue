<template>
  <form @submit.prevent="submit" onsubmit="return false;">
    <div class="card">
      <div class="card-header">
        <strong>{{ formName }}</strong>
      </div>
      <div class="card-block">
        <slot></slot>
      </div>
      <div class="card-footer">
        <div>
          <button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-dot-circle-o"></i> Submit</button>
          <button type="reset" class="btn btn-danger btn-sm"><i class="fa fa-ban"></i> Reset</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    formName: {
      type: String,
      required: true,
      default: 'Form Basic'
    }
  },
  methods: {
    submit () {
      this.$emit('submitForm')
    }
  }
}
</script>
