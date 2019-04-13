<template>
    <div>
        <h4>{{this.$store.state.title}}</h4>
    </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  store,
  methods: {}
}
</script>

<style scoped>
    h4 {
        width: 100%;
        height: 50px;
        color: white;
        background-color: #d81e06;
        text-align: center;
        position: fixed;
        top: 0;
        line-height: 50px;
        margin-top: 0;
        z-index: 2000;
    }
</style>
