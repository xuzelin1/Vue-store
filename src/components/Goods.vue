<template>
    <div>
        <div class="content" :style="{'height': contentHeight}">
          <div class="left-content">
            <div v-for="(type, index) in typeList" :key="type" class="type-selector" @click="changeType(index)">
              <div class="current-typelist" v-if="index == currentType">{{type}}</div>
              <div class="type-list" v-else>{{type}}</div>
            </div>
          </div>
          <div class="goods-list">
            <div v-for="(goods, index) in goodsList" :key="goods.title">
              <div v-if="index == currentType">
                <div class="type-title">{{goods.title}}</div>
                <div v-for="good in goods.list" :key="good.name" class="good-info">
                  <img :src="good.src">
                  <div class="good-name">{{good.name}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      contentHeight: 0,
      currentType: 0,
      typeList: ['新品', '推荐', '手机', '电视', '电脑', '家电', '电源'],
      goodsList: [
        {
          title: '新品',
          list: [
            {
              name: '小米9',
              src: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80'
            },
            {
              name: '小米9',
              src: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80'
            },
            {
              name: '小米9',
              src: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80'
            },
            {
              name: '小米9',
              src: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80'
            },
            {
              name: '小米9',
              src: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80'
            }
          ]
        },
        {
          title: '推荐',
          list: [
            {
              name: '小米9',
              src: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80'
            },
            {
              name: '小米9',
              src: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80'
            }
          ]
        },
        {
          title: '手机',
          list: [
            {
              name: '小米9',
              src: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80'
            },
            {
              name: '小米9',
              src: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80'
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeType (index) {
      this.currentType = index
    }
  },
  created () {
    var bodyHeight = document.getElementsByTagName('body')[0].offsetHeight
    this.contentHeight = (bodyHeight - 100) + 'px'
  }
}
</script>

<style scoped>
  .content {
    display: flex;
    height: 100%;
  }

  .left-content {
    width: 20%;
    height: 100%;
    border-right: 1px solid #e7e0e0;
    background-color: #fff
  }

  .type-selector {
    width: 100%;
    border-right: 1px solid #e7e0e0
  }

  .type-list {
    padding: 20px 0;
    background-color: #fff;
    text-align: center;
    font-size: 15px
  }

  .goods-list {
    width: 80%;
    background-color: #fff
  }

  .current-typelist {
    padding: 20px 0;
    background-color: #fff;
    color: #d81e06;
    text-align: center;
    font-size: 15px
  }

  .type-title {
    padding: 10px 0;
    text-align: center
  }

  .good-info {
    float: left;
    width: 30%;
    padding: 15px 1.5%;
    align-content: center
  }

  .good-info img{
    float: left;
    width: 40%;
    height: 40%;
    padding: 10% 30%
  }

  .good-name {
    text-align: center;
    font-size: 12px
  }
</style>
