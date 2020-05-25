<template>
  <div class="Wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: {}
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(".Wrapper", {
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType,
      click: true
    });
    //监听当前实例上的钩子函数
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scrollPosition", position);
      });
    }

    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log("scroll 拉到底部了");
        this.$emit("loadMore");
      });
    }

    //回到顶部
    // this.scrollTo(0, 0);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      //重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
      this.scroll.refresh();
      console.log("scroll refresh() 被调用...");
    },
    // onScroll() {
    //   console.log(`Now position is x: ${pos.x}, y: ${pos.y}`);
    // },
    scrollPosition(pos) {
      this.$emit("scrollPosition", pos);
    },
    finishPullUp() {
      //标识一次上拉加载动作结束。每次触发上拉事件后，在回调函数的最后，都应该调用 finishPullUp() 方法。在 finishPullUp() 方法调用前不会触发下一次的 pullingUp 事件。
      this.scroll.finishPullUp();
    }
  }
};
</script>

<style scoped>
</style>

