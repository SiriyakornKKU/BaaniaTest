<template>
  <div id="app">
    <ConnectApi />
    <HouseList />
    <SelectPostCode />
  </div>
</template>

<script>
import HouseList from './components/HouseList.vue'
import ConnectApi from "./components/ConnectApi.vue"
import SelectPostCode from "./components/SelectPostCode.vue"

export default {
  name: 'App',
  components: {
    HouseList,
    ConnectApi,
    SelectPostCode
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
