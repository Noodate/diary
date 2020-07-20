<template>
  <Card>
    <row type="flex" justify="center">
      <i-col span="24">
        <slot name="icon"></slot>
      </i-col>
      <i-col span="24">
        <slot name="title"></slot>
      </i-col>
      <i-col span="24">
        <slot name="content"></slot>
      </i-col>
      <i-col span="24">
        <slot name="button"></slot>
      </i-col>
    </row>
  </Card>
</template>

<script>

  export default {
    name: 'FeatureDisplayCard',
    components: {
    },
    props: {
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/index';
</style>
