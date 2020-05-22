<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-feature></home-feature>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goodsList="goods[type].list"></goods-list>
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
      type: "pop"
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        // console.log(res.data.data);
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.data.list);
        this.goods[type].list = res.data.data.list;
        this.goods[type].page++;
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        default:
          this.type = "sell";
          break;
      }
      // console.log(this.goods[this.type].list);
    }
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* padding-bottom: 44px; */

  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
}

#home {
  margin-top: 44px;
}
</style>