<template>
  <div class="json-view pad">
    <button @click="goToJsonInput" class="marginb"><i class="fas fa-arrow-left"></i> New JSON</button>
    <flat-json></flat-json>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FlatJson from '@/components/FlatJson'

export default {
  name: 'json-view',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['json'])
  },
  components: { FlatJson },
  methods: {
    goToJsonInput () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.json-view {
  .key, .value {
    display: inline-block;
  }
}
</style>
