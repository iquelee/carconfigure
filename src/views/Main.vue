<template>
  <div class="hud d-flex flex-col jc-between">
    <div class="conHeader d-flex">
      <div class="carInfo flex-1">
        <p class="text-dark fs-xxl">PORSCHE</p>
        <p class="text-grey fs-m">Porsche Carrera GT | Michael Mauer</p>
      </div>
      <div class="homeIcon">
        <a href="www.baidu.com">
          <svg class="icon fs-xxl text-primary" aria-hidden="true">
            <use xlink:href="#icon-home-fill"></use>
          </svg>
        </a>
      </div>
    </div>
    <!-- end of header -->
    <div class="conNav bg-grey">
      <ConNav/>
    </div>
    <div class="conContainer bg-dark-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ConNav from '../components/ConNav.vue'
export default {
  name: 'Main',
  components: {
    ConNav
  }
}
</script>

<style>
  .hud {
    height: 100vh;
  }
</style>
