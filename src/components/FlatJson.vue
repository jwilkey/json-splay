<template>
  <div class="flat-json">
    <input placeholder="filter" v-model="filter" />
    <div v-for="key in keys">
      <span class="key">{{key}}</span> <span class="value">{{flat[key]}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'flat-json',
  data () {
    return {
      flat: {},
      filter: ''
    }
  },
  computed: {
    ...mapGetters(['json']),
    keys () {
      const keys = Object.keys(this.flat)
      const self = this
      return this.filter ? keys.filter(k => k.toLowerCase().indexOf(self.filter.toLowerCase()) > -1) : keys
    }
  },
  methods: {
    log () {
      console.log(this.flat)
    },
    process (value) {
      try {
        if (Array.isArray(value)) {
          this.processArray(value)
        } else if (typeof value === 'object') {
          this.processObject(value)
        }
      } catch (e) {
        debugger
      }
    },
    processArray (array, inputKey) {
      if (!array) {
        return
      }
      const self = this
      array.forEach((item, i) => {
        var arrayKey = inputKey ? `${inputKey}.${i}` : `${i}`
        if (Array.isArray(item)) {
          self.processArray(item, inputKey + '.' + i)
        } else if (typeof item === 'object') {
          self.processObject(item, arrayKey)
        } else {
          self.$set(self.flat, arrayKey, item)
        }
      })
    },
    processObject (object, inputKey) {
      if (!object) {
        return
      }
      const self = this
      Object.keys(object).forEach(k => {
        var key = inputKey ? `${inputKey}.${k}` : k
        if (Array.isArray(object[k])) {
          self.processArray(object[k], key)
        } else if (typeof object[k] === 'object') {
          self.processObject(object[k], key)
        } else {
          self.$set(self.flat, key, object[k])
        }
      })
    }
  },
  mounted () {
    this.process(this.json)
  }
}
</script>

<style lang="less" scoped>
.flat-json {
  .key {
    color: #ccccff;
  }
}
</style>
