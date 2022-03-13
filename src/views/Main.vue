<template>
  <div class="hud d-flex flex-col jc-between">
    <ConHeader/>
    <ConNav/>
    <router-view></router-view>
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
</style>
