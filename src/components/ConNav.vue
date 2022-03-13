<template>
  <div class="aside bg-primary">
    <ul class="my-4">
      <li v-for="item in navList" :key="item.id">
        <router-link :to="'/' + item.navTitle" class="d-flex ai-center">
          <i class="iconfont fs-xxl mx-3 my-3" :class="item.iconName"></i>
          <div class="menuTitle">{{ item.navTitle }}</div>
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
        { id: '1', navTitle: 'Doors', iconName: 'icon-home-fill' },
        { id: '2', navTitle: 'HeadLights', iconName: 'icon-home-fill' },
        { id: '3', navTitle: 'Colors', iconName: 'icon-home-fill' },
        { id: '4', navTitle: 'VisualPacks', iconName: 'icon-home-fill' },
        { id: '5', navTitle: 'Wheels', iconName: 'icon-home-fill' }
      ]
    }
  }
}
</script>

<style lang='scss'>
  .aside {
    width: 48px;
    border-radius: 0 36px 36px 0;
  }
  .iconfont {
    z-index: 999;
  }
  .menuTitle {
    display: none;
  }
  .router-link-active {
    .menuTitle {
      display: block;
      border-radius: 0 36px 36px 0;
      background-color: rgba(255, 255, 255, 0.8);
      margin-left: -50px;
      padding: 13px;
      padding-left: 64px;
    }
  }
</style>
