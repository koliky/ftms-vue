<template>
  <div role="group" class="form-group row">
    <label class="col-form-label col-sm-3"><span>{{ fieldName }}</span></label>
    <div class="col-sm-9">
      <select class="form-control" v-model="value" @change="selectChanged">
        <option :value="item"
        v-for="(item, index) in options"
        :key="index">{{ item }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fieldName: {
      type: String,
      required: true,
      default: 'Select'
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      value: this.options[0]
    }
  },
  methods: {
    selectChanged () {
      this.$emit('selectChanged', this.value)
    }
  }
}
</script>
