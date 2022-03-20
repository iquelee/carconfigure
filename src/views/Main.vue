<template>
  <div class="hud">
    <ConHeader/>
    <div class="container d-flex mr-4 my-4">
      <ConNav class="d-flex"></ConNav>
      <div class="main flex-1 d-flex jc-center mb-4">
          <router-view></router-view>
      </div>
      <div class="view d-flex jc-center ai-end mb-5">
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
  .el-switch {
    // 隐藏插入光标
    caret-color: transparent;
    ::v-deep .el-switch__core {
      width: 64px !important;
      height: 32px;
      border-radius: 16px;
      &::after {
        width: 24px;
        height: 24px;
        top: 3px;
        left: 4px;
      }
    }
  }
  .el-switch.is-checked {
    ::v-deep .el-switch__core {
      &::after {
        margin-left: -28px;
      }
    }
  }
  .container {
    // 高度缩小，使鼠标穿透
    height: 1px;
  }
  .main {
    margin-top: 80vh;
  }
  .view {
    margin-top: 87vh;
  }
</style>
