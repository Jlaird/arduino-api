<template>
  <div id="app">
    <Temp />
    <Humidity />
  </div>
</template>

<script>
import Temp from './components/Temp.vue'
import Humidity from './components/Humidity.vue'

export default {
  name: 'app',
  components: {
    Temp,
    Humidity
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
