import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义变量
var state = {
  title: '首页'
}

// 定义方法
var mutations = {
  changeTitle (state, msg) {
    state.title = msg
  }
}

var store = new Vuex.Store({
  state,
  mutations
})

export default store
