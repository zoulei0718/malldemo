<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scrollPosition="scrollPosition"
      :probe-type="3"
      :pull-up-load="true"
      @loadMore="loadMore"
    >
      <home-swiper :banner="banner" @homeSwiperImgLoad="homeSwiperImgLoad"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabcontrol"
      ></tab-control>
      <goods-list :goodsList="goods[currenType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="scrollPositionXY.y<-1000"></back-top>
  </div>
</template>

<script>
//子组件
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childrenComponents/HomeSwiper";
import HomeRecommend from "./childrenComponents/HomeRecommend";
import HomeFeature from "./childrenComponents/HomeFeature";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import { debounce } from "common/utils";

//网络请求方法
import { getHomeMultiData, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currenType: "pop",
      scrollPositionXY: {},
      tabControlOffsetTop: 0,
      scrollXY: {}
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    this.getHomeMultiData();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // this.$bus.$on("goodsItemLoad", () => {
    //   this.$refs.scroll.refresh();
    //   // debounce(this.$refs.scroll.refresh, 300);
    // });
  },
  mounted() {
    let refreshFun = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("goodsItemLoad", () => {
      refreshFun();
    });
    // console.log(this.$refs.tabcontrol.$el.offsetTop);
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        // console.log(res.data.data);
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(currenType) {
      const page = this.goods[currenType].page + 1;
      getHomeGoods(currenType, page).then(res => {
        // console.log(res.data.data);
        this.goods[currenType].list.push(...res.data.data.list);
        this.goods[currenType].page = page;
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currenType = "pop";
          break;
        case 1:
          this.currenType = "new";
          break;
        default:
          this.currenType = "sell";
          break;
      }
      // console.log(this.goods[this.currenType].list);
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //此时你应该在图片加载完成后，比如 onload 事件回调中，调用 bs.refresh 方法，它会重新计算最新的滚动距离。
    finishLoad() {
      console.log("goods-list finishLoad");
      // this.$refs.scroll.refresh();
    },
    scrollPosition(pos) {
      // console.log(`home 滚动位置 X:${pos.x},Y:${pos.y}`);
      this.scrollPositionXY = pos;
    },
    loadMore() {
      // debugger;
      // console.log("home loadMore");
      this.getHomeGoods(this.currenType);
      this.$refs.scroll.finishPullUp();
      // this.$refs.scroll.refresh();  会重复触发 pullingUp
    },
    homeSwiperImgLoad() {
      // console.log("home homeSwiperImgLoad");
      this.tabControlOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
    }
  },
  activated() {
    // console.log("home activated");
    // console.log(this.$refs.scroll.scrollTo, this.scrollXY);
    this.scrollXY.x && this.$refs.scroll.scrollTo(0, -1000, 100);
  },
  deactivated() {
    // console.log("home deactivated");
    this.scrollXY.x = this.$refs.scroll.scroll.x;
    this.scrollXY.y = this.$refs.scroll.scroll.y;
    // console.log(this.scrollXY);
  },
  destroyed() {
    console.log("home destroyed");
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
}

#home {
  height: 100vh;
  position: relative;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>