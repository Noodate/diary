<template>
  <Button @click="$router.go(-1)" :size="size">{{ $t('global.button.close') }}</Button>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'default'
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
