<template>
  <i-input v-model="searchValue"
           icon="md-search"
           :placeholder="$t('global.search.placeholder.keyword')"
           @on-keyup.enter="inputSearch"
           @on-blur="inputSearch"
           class="searchInput">
  </i-input>
</template>

<script>
  export default {
    name: 'SearchInput',
    props: {
      value: {
        type: String,
        default: function () {
          return ''
        }
      }
    },
    data () {
      return {
        searchValue: ''
      }
    },
    watch: {
      value (val) {
        this.searchValue = val
      }
    },
    methods: {
      inputSearch () {
        this.$emit('input', this.searchValue)
        this.$emit('on-search')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/index';

  .searchInput {
    .ivu-input {
      border-radius: 32px;
    }

  }

</style>
