<template>
  <div class="aside bg-primary">
    <ul>
      <li>
        <router-link to="/doors" active-class="active" class="d-flex ai-center">
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
  name: 'ConNav'
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
