<template>
  <div>
    <finder-window v-model="isShow"
                   :multiple="multiple"
                   :from="from"
                   :where="where"
                   :distinct="distinct"
                   :sort="sort"
                   :ignoreData="ignoreData"
                   :columns="columns"
                   @on-select="handleSelect">
    </finder-window>
    <Button type="dashed" v-if="isSelected" long @click="isShow = true" icon="md-add">
      {{ $t('global.button.select') }}
    </Button>
    <div v-else>
      <slot></slot>
      <Button type="text" @click="isShow = true">{{ $t('global.button.edit') }}</Button>
      <Button type="text" @click="clear">{{ $t('global.button.clear') }}</Button>
    </div>
  </div>
</template>
<script>
  import FinderWindow from '@/components/finder/FinderWindow'
  import Emitter from '@/mixins/emitter'

  export default {
    components: {
      FinderWindow
    },
    mixins: [Emitter],
    props: {
      value: {
        type: [String, Array]
      },
      from: {
        type: [String, Function],
        default: '',
        required: true
      },
      where: {
        type: [String, Function],
        default: ''
      },
      ignoreData: {
        type: Array,
        default: () => []
      },
      sort: {
        type: String,
        default: '',
        required: true
      },
      columns: {
        type: Array,
        default: () => [],
        required: true
      },
      multiple: {
        type: Boolean,
        default: false
      },
      distinct: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isShow: false
      }
    },
    computed: {
      isSelected () {
        if (typeof (this.value) === 'string') {
          if (this.value) {
            return false
          } else {
            return true
          }
        } else {
          if (this.value) {
            let a = this.value.length
            if (a === 0) {
              return true
            } else {
              return false
            }
          }
        }
      }
    },
    methods: {
      handleSelect (data) {
        this.$emit('on-select', data)
        this.dispatch('FormItem', 'on-form-change')
      },
      clear () {
        this.$emit('on-clear')
        this.dispatch('FormItem', 'on-form-change')
      }
    }
  }
</script>
<style scoped lang="scss">
</style>
