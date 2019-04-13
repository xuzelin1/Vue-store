<template>
  <div id="app">
    <v-header></v-header>
    <v-tab :select="index"></v-tab>
    <router-view class="page-content"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tab from './components/BottomTab.vue'
export default {
  name: 'App',
  data () {
    return {
      index: 0
    }
  },
  components: {
    'v-header': Header,
    'v-tab': Tab
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  background-color: #eeeeee;
  height: 100%;
}
.v-header {
  z-index: 1000;
}
.v-tab {
  z-index: 1000;
}
.page-content {
  padding: 50px 0;
  z-index: 999
}
</style>
