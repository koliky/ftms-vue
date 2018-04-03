<template>
<div role="group" class="form-group row">
  <label class="col-form-label col-sm-3"><span>{{ fieldName }}</span></label>
  <div class="col-sm-9">
    <div v-for="(item, index) in items" :key="index">
      <label class="custom-checkbox custom-control">
        <input type="checkbox"
        :name="name" autocomplete="off" class="custom-control-input"
        v-on:change="onChange"
        v-model="values"
        :value="item">
        <span aria-hidden="true" class="custom-control-indicator"></span>
        <span class="custom-control-description">{{ item }}</span>
      </label>
      <br>
    </div>
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
    name: {
      type: String,
      default: 'checkbox'
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      values: []
    }
  },
  methods: {
    onChange () {
      this.$emit('checkboxChecked', this.values)
    }
  }
}
</script>
