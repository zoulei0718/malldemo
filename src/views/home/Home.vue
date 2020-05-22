<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
  </div>
</template>

<script>
//子组件
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childrenComponents/HomeSwiper";
import HomeRecommend from "./childrenComponents/HomeRecommend"

//网络请求方法
import { getHomeMultiData } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend:[],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res.data.data)
      this.banner = res.data.data.banner.list
      this.recommend=res.data.data.recommend.list
    });
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>