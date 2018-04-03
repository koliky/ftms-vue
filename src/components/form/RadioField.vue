<template>
  <div role="group" class="form-group row">
    <label class="col-form-label col-sm-3"><span>{{ fieldName }}</span></label>
    <div class="col-sm-9">
      <div role="radiogroup" class="custom-controls-stacked">
        <label class="custom-control custom-radio" v-for="(item, index) in items" :key="index">
          <input type="radio"
          :name="name" autocomplete="off" class="custom-control-input"
          :value="item"
          @change="selectionChanged"
          v-model="valueChecked"
          :checked="index == 0">
          <span aria-hidden="true" class="custom-control-indicator"></span>
          <span class="custom-control-description">{{ item }}</span>
        </label>
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
      required: true,
      default: 'redio'
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      valueChecked: this.items[0]
    }
  },
  methods: {
    selectionChanged () {
      this.$emit('optionSelected', this.valueChecked)
    }
  }
}
</script>
