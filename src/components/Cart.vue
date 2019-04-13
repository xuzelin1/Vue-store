<template>
    <div>
        <div class="cart-list"  :style="{'height': contentHeight}">
            <div class="list-item" v-for="(good) in goodsList" :key="good.name">
                <label class="check-box">
                    <input type="checkbox" class="cart-checkbox">
                </label>
                <img :src="good.src" class="good-img"/>
                <div class="good-info">
                    <div class="good-name">{{good.name}}</div>
                    <div class="good-specification">{{good.specification}}</div>
                    <div class="good-price">￥{{good.price}}</div>
                </div>
            </div>
        </div>
        <div class="cart-manager">
            <label class="check-box">
                <input type="checkbox" class="cart-checkbox">
                <span>全选</span>
            </label>
            <div class="cart-total">合计：
                <label>{{total}}</label></div>
            <button class="commit">结算({{totalNum}})</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      msg: '购物车',
      total: 1000,
      totalNum: 0,
      goodsList: [
        {
          name: '小米手机9',
          specification: '6GB+128GB',
          price: '2999',
          src: 'https://i1.mifile.cn/a1/pms_1550642182.7527088!220x220.jpg'
        },
        {
          name: '小米手机6X',
          specification: '6GB+128GB',
          price: '1549',
          src: 'https://i1.mifile.cn/a1/pms_1524621350.77238418!220x220.jpg'
        }
      ]
    }
  },
  methods: {},
  created () {
    var bodyHeight = document.getElementsByTagName('body')[0].offsetHeight
    this.contentHeight = (bodyHeight - 100) + 'px'
  }
}
</script>

<style scoped>
    .cart-list {
        background-color: #fff
    }
    .list-item {
        width: 100%;
        height: 120px;
        background-color: #fff;
        display: flex
    }

    .good-img {
        width: 100px;
        height: 100px;
        display: block;
        margin: auto 0
    }

    .good-info {
        padding: 15px 10px
    }

    .good-name {
        padding-top: 6px;
    }

    .good-specification {
        padding-top: 12px;
    }

    .good-price {
        padding-top: 12px;
        color: red
    }

    .cart-manager {
        width: 100%;
        height: 50px;
        background-color: #fff;
        position: fixed;
        bottom: 51px;
        display: flex;
        border-top: 1px solid rgb(236, 231, 231)
    }

    .check-box {
        display: flex;
        align-items: center
    }

    .check-box span {
        font-size: 12px
    }

    .cart-checkbox {
        width: 20px;
        height: 20px;
        display: block;
        margin: auto 20px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
    }

    .cart-total {
        line-height: 50px;
        font-size: 15px;
        right: 120px;
        position: absolute;
    }

    .cart-total label {
        color: red
    }

    .commit {
        background-color: crimson;
        color: #fff;
        position: absolute;
        right: 0;
        border-radius: none;
        border: none;
        height: 50px;
        padding: 15px 30px
    }
</style>
