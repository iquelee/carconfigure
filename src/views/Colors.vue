<template>
  <div>
    <ul class="d-flex">
      <li v-for="item in colorsList" :key="item.id">
        <router-link
          :to="{
            name: 'colorsTitle',
            query: {
              colorsTitle: item.colorsTitle,
            }
          }"
        >
          <div :style="{ background: item.color }" class="circle"></div>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Colors',
  data () {
    return {
      colorsList: [
        { id: '1', colorsTitle: 'Red', color: '#524783' },
        { id: '2', colorsTitle: 'Green', color: '#524585' },
        { id: '3', colorsTitle: 'Blue', color: '#985632' },
        { id: '4', colorsTitle: 'Yellow', color: '#ff9838' },
        { id: '5', colorsTitle: 'Cyan', color: '#18bcbc' }
      ]
    }
  }
}
</script>

<style>
.circle {
  display: block;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: 0;
}
</style>
