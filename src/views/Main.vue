<template>
  <div class="hud d-flex flex-col jc-between">
    <ConHeader/>
    <ConNav/>
    <div class="conFooter d-flex m-4">
      <div class="container flex-1 d-flex jc-center ai-end mb-4">
        <router-view></router-view>
      </div>
      <div class="view d-flex jc-center ai-end mb-4">
        <el-switch
          v-model="value1"
          active-text="Open360"
          inactive-text="Close360"
          >
        </el-switch>
      </div>
    </div>
  </div>
</template>

<script>
import ConNav from '../components/ConNav.vue'
import ConHeader from '../components/ConHeader.vue'
export default {
  name: 'Main',
  data () {
    return {
      value1: true,
      value2: true
    }
  },
  components: {
    ConNav,
    ConHeader
  }
}
</script>

<style lang='scss' scoped>
  .hud {
    height: 100vh;
  }
  .conFooter {
    height: 120px;
  }
  .el-switch {
    ::v-deep .el-switch__core {
      width: 100px !important;
      height: 40px;
      border-radius: 20px;
      &::after {
        width: 32px;
        height: 32px;
        top: 3px;
        left: 4px;
      }
    }
  }
  .el-switch.is-checked {
    height: 40px;
    ::v-deep .el-switch__core {
      &::after {
        margin-left: -36px;
      }
    }
  }
  .container {
    margin-left: 300px;
  }
</style>
