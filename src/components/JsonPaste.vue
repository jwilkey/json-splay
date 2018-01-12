<template>
  <textarea class="json-paste pad" @focus="focused = true" @blur="focused = false" v-model="json" :placeholder="placeholder">
  </textarea>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'json-paste',
  data () {
    return {
      json: undefined,
      focused: false
    }
  },
  computed: {
    placeholder () {
      return this.focused ? '' : 'Click, then paste your JSON here'
    }
  },
  watch: {
    json () {
      let parsed
      try {
        parsed = JSON.parse(this.json)
      } catch (e) {
        window.alert('Invalid JSON!')
      }
      if (parsed) {
        this.setJson(parsed)
        this.$router.push('/json_view')
      }
    }
  },
  methods: {
    ...mapActions(['setJson'])
  }
}
</script>

<style lang="less" scoped>
.json-paste {
  font-size: 18px;
  text-align: center;
  padding-top: 100px;
  &:focus {
    padding-top: 10px;
    text-align: left;
  }
}
</style>
