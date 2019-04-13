<template>
    <div>
      <div class="tab-list">
        <router-link v-for="(tab, index) in tabs" :key="tab.to" :to="tab.to" class="tab-router">
          <div class="tab-item" @click="changeTab(index)">
              <img :src="tab.fillSrc" class="tab-img" v-if="current == index"/>
              <img :src="tab.src" class="tab-img" v-else/>
              <div class="tab-title-select" v-if="current == index">{{tab.title}}</div>
              <div class="tab-title" v-else>{{tab.title}}</div>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  name: 'Header',
  data () {
    return {
      current: 0,
      tabs: [
        {
          title: '首页',
          src: require('../assets/home.png'),
          fillSrc: require('../assets/home_fill.png'),
          to: '/index'
        },
        {
          title: '商品',
          src: require('../assets/goods.png'),
          fillSrc: require('../assets/goods_fill.png'),
          to: '/goods'
        },
        {
          title: '购物车',
          src: require('../assets/cart.png'),
          fillSrc: require('../assets/cart_fill.png'),
          to: '/cart'
        },
        {
          title: '我的',
          src: require('../assets/my.png'),
          fillSrc: require('../assets/my_fill.png'),
          to: '/my'
        }
      ]
    }
  },
  store,
  methods: {
    changeTab (index) {
      var title = this.tabs[index].title
      this.current = index
      this.$store.commit('changeTitle', title)
    }
  }
}
</script>

<style scoped>
    .tab-router {
        width: 100%;
        text-decoration: none
    }
    .tab-list {
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: white;
        height: 50px;
        border-top: 1px solid #cecaca
    }
    .tab-item {
        flex: 1;
        align-items: center
    }
    .tab-img {
        display: block;
        width: 25px;
        height: 25px;
        margin: auto;
    }
    .tab-title {
        text-align: center;
        color: #666666;
        font-size: 12px;
    }
    .tab-title-select {
        text-align: center;
        color: #d81e06;
        font-size: 12px;
    }
</style>
