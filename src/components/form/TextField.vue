<template>
  <div class="form-group row">
    <label class="col-form-label col-sm-3" :for="id"><span>{{ fieldName }}</span></label>
    <div class="col-sm-9" v-if="type == 'date'">
      <input
      type="text"
      :id="id"
      placeholder="dd/MM/yyyy"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="form-control">
    </div>
    <div class="col-sm-9" v-else>
      <input
      :type="type"
      :id="id"
      :placeholder="'Enter ' + fieldName"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="form-control">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fieldName: {
      type: String,
      required: true,
      default: 'Text field'
    },
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: String
  }
}
</script>
