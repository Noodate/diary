<template>
  <CheckboxGroup v-model="currentValue">
    <Checkbox size="large" v-for="item in data" :label="item.id" :key="item.id">
      {{ item.name }}
    </Checkbox>
  </CheckboxGroup>
</template>
<script>
  export default {
    components: {
    },
    props: {
      value: {
        type: Array,
        default: () => []
      },
      data: {
        type: Array,
        default: () => [],
        required: true
      }
    },
    watch: {
      currentValue (val) {
        this.$emit('input', val)
      },
      value (val) {
        this.currentValue = val
      }
    },
    data () {
      return {
        currentValue: []
      }
    },
    methods: {
    }
  }
</script>
