<template>
  <div class="aside bg-primary">
    <ul>
      <li v-for="item in navList" :key="item.id">
        <router-link :to="{
          path: '/nav',
          query: {
            
          }
        }" active-class="active" class="d-flex ai-center">
          <svg class="icon fs-xxl text-primary" aria-hidden="true">
            <use xlink:href="#icon-home-fill"></use>
          </svg>
          <div class="menuTitle">Doors</div>
        </router-link>
      </li>
      <li>
        <router-link to="/headlights"  active-class="active" class="d-flex ai-center">
          <svg class="icon fs-xxl text-primary" aria-hidden="true">
            <use xlink:href="#icon-home-fill"></use>
          </svg>
          <div class="menuTitle">HeadLights</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConNav',
  data () {
    return {
      navList: [
        { id:'1', navTitle: 'Doors', iconLine: '#icon-home-fill' },
        { id:'2', navTitle: 'HeadLights', iconLine: '#icon-home-fill' },
        { id:'3', navTitle: 'Colors', iconLine: '#icon-home-fill' }
      ]
    }
  }
}
</script>

<style>
  a {
    background-color: rgba(255, 255, 255, 0.5);
  }
  .router-link-active {
    background-color: none;
  }
</style>
