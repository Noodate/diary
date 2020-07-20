<template>
  <row class="buttonRow" type="flex" justify="center">
    <i-col :xs="24" :sm="12" :md="6" :lg="16" span="6">
      <Button type="primary" size="large" :loading="loading" icon="md-refresh" @click="handleLoad" v-if="existsData">
        <span v-if="!loading">{{ $t('global.button.viewAll') }}</span>
        <span v-else>{{ $t('global.message.loading') }}</span>
      </Button>
      <Alert type="warning" show-icon v-else>{{ $t('global.message.dataOver') }}</Alert>
    </i-col>
  </row>
</template>

<script>
  export default {
    components: {
    },
    props: {
      loading: {
        type: Boolean,
        required: true
      },
      existsData: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
      }
    },
    methods: {
      handleLoad () {
        this.$emit('on-load')
      }
    }
  }
</script>

<style scoped lang="scss">
  .buttonRow {
    margin-top: 15px;
  }
</style>
