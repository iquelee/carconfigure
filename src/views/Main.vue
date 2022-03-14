<template>
  <div class="hud d-flex flex-col jc-between">
    <ConHeader/>
    <ConNav/>
    <div class="conFooter d-flex m-4">
      <div class="container flex-1">
        <router-view></router-view>
      </div>
      <div class="view bg-grey d-flex ai-center">
        <div class="circle">
          <i class="iconfont text-primary icon-home-fill fs-xxl"></i>
        </div>
        <p>Close 360</p>
        <i class="iconfont text-primary icon-home-fill fs-xxl"></i>
      </div>
    </div>
  </div>
</template>

<script>
import ConNav from '../components/ConNav.vue'
import ConHeader from '../components/ConHeader.vue'
export default {
  name: 'Main',
  components: {
    ConNav,
    ConHeader
  }
}
</script>

<style>
  .hud {
    height: 100vh;
  }
  .conFooter {
    height: 80px;
  }
  .view {
    display: block;
    border-radius: 20px;
    margin: 20px 0;
  }
</style>
