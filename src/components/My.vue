<template>
    <div class="content">
        <div class="user-panel">
            <img src="../assets/head.png" class="header"/>
            <div class="user-name">{{name}}</div>
            <div class="user-background"></div>
        </div>
        <div class="list-panel">
            <div v-for="(item, index) in list" :key="item.id">
                <div class="list-item" v-if="index != list.length - 1">
                    <img :src="item.src" class="icon"/>
                    <div class="item-title">{{item.title}}</div>
                    <img src="../assets/right.png" class="icon right-icon"/>
                </div>
                <div class="list-item-end" v-else>
                    <img :src="item.src" class="icon"/>
                    <div class="item-title">{{item.title}}</div>
                    <img src="../assets/right.png" class="icon right-icon"/>
                </div>
            </div>
        </div>
        <div class="list-panel">
            <div v-for="(item, index) in list2" :key="item.id">
                <div class="list-item" v-if="index != list2.length - 1">
                    <img :src="item.src" class="icon"/>
                    <div class="item-title">{{item.title}}</div>
                    <img src="../assets/right.png" class="icon right-icon"/>
                </div>
                <div class="list-item-end" v-else>
                    <img :src="item.src" class="icon"/>
                    <div class="item-title">{{item.title}}</div>
                    <img src="../assets/right.png" class="icon right-icon"/>
                </div>
            </div>
        </div>

        <button class="login-out">退出登录</button>
    </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
      name: '马华腾',
      list: [
        {
          id: 1,
          title: '我的订单',
          src: require('../assets/list.png')
        },
        {
          id: 2,
          title: '我的订单',
          src: require('../assets/list.png')
        },
        {
          id: 3,
          title: '我的订单',
          src: require('../assets/list.png')
        },
        {
          id: 4,
          title: '我的订单',
          src: require('../assets/list.png')
        }
      ],
      list2: [
        {
          id: 5,
          title: '我的订单',
          src: require('../assets/list.png')
        },
        {
          id: 6,
          title: '我的订单',
          src: require('../assets/list.png')
        },
        {
          id: 7,
          title: '设置',
          src: require('../assets/list.png')
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
    .content {
        padding-bottom: 80px
    }

    .user-panel {
        height: 170px;
        background-color: #d81e06;
        overflow: hidden;
        position: relative;
    }

    .header {
        width: 70px;
        height: 70px;
        display: block;
        margin: auto;
        padding: 30px;
        z-index: 1000;
        position: relative
    }

    .user-name {
        z-index: 1000;
        font-size: 16px;
        margin: auto;
        display: block;
        text-align: center;
        position: absolute;
        top: 115px;
        width: 100%;
    }

    .user-background {
        width: 150%;
        height: 500px;
        margin: auto;
        background-color: #fff;
        border-radius: 1200px;
        top: 70px;
        position: absolute;
        z-index: 999;
        left: -25%;
    }

    .list-item {
        display: flex;
        padding: 12px 0;
        width: 95%;
        border-bottom: 1px solid #ccc8c8;
        margin: auto;
        position: relative;
    }

    .list-item-end {
        display: flex;
        padding: 12px 0;
        width: 95%;
        margin: auto;
        position: relative;
    }

    .list-item-end {
        border: none
    }

    .icon {
        width: 22px;
        height: 22px;
    }

    .right-icon {
        position: absolute;
        right: 10px;
    }

    .list-panel {
        background-color: #fff;
        width: 100%;
        margin-top: 10px;
    }

    .item-title {
        font-size: 15px;
        padding-left: 10px;
    }

    .login-out {
        width: 100%;
        font-size: 12px;
        padding: 15px;
        background-color: #fff;
        border: none;
        margin-top: 15px;
    }
</style>
