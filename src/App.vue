<template>
  <div id="app" class="flex-column vfull theme-back">
    <router-view class="flex-one" />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '../static/less/common';
</style>
