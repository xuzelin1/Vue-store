<template>
    <div>
        <div class="scroll-panel" @mouseover="stop()" @mouseout="move()">
          <ul class="scroll-ul">
            <transition-group name="image">
              <li class="scroll-item" v-for="(scroll, index) in scrollList" :key="scroll.id" v-show="index == current">
                <img :src="scroll.src"/>
              </li>
            </transition-group>
          </ul>
          <div class="span-panel">
            <div v-for="(scroll, index) in scrollList" :key="scroll.id">
              <div class="currentSpan" v-if="index == current"></div>
              <div class="normalSpan" v-else></div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      timer: null,
      current: 0,
      scrollList: [
        {
          id: 1,
          src: 'https://i1.mifile.cn/a4/xmad_15532682813162_ihsHZ.jpg'
        },
        {
          id: 2,
          src: 'https://i1.mifile.cn/a4/xmad_15550780605038_ZPYHC.jpg'
        },
        {
          id: 3,
          src: 'https://i1.mifile.cn/a4/xmad_15550509336209_VAjfm.jpg'
        },
        {
          id: 4,
          src: 'https://i1.mifile.cn/a4/xmad_15548066591437_Stxlj.jpg'
        }
      ]
    }
  },
  methods: {
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    }
  },
  mounted () {
    var _this = this
    _this.timer = setInterval(function () {
      _this.current++
      if (_this.current === 4) {
        _this.current = 0
      }
    }, 4000)
  }
}
</script>

<style scoped>
  .scroll-panel {
    width: 100%;
    height: 200px;
  }
  .scroll-ul {
    display: flex;
    width: 100%;
    height: 200px;
    overflow: hidden;
    padding: 0;
    margin: 0;
    position: relative;
  }

  .scroll-item {
    list-style: none;
    height: 200px;
    position: absolute;
  }

  .scroll-item img {
    width: 100%;
    height: 200px;
  }

  transition-group {
    width: 100%;
  }

  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }

  .span-panel {
    display: flex;
    width: 20%;
    position: absolute;
    left: 40%;
    top: 230px;
    z-index: 999999;
  }

  .span-panel div {
    flex: 1;
  }

  .currentSpan {
    width: 8px;
    height: 8px;
    background-color: #fff;
    margin: auto;
    border-radius: 50%;
  }

  .normalSpan {
    width: 8px;
    height: 8px;
    background-color: gray;
    margin: auto;
    border-radius: 50%;
  }
</style>
