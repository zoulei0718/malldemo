<template>
  <div>
    <nav-bar>
      <img src="~assets/img/common/back.svg" alt slot="left" @click="backClick" />
      <!-- <ul slot="center" class="nav-bar">
        <li>商品</li>
        <li>参数</li>
        <li>评论</li>
        <li>推荐</li>
      </ul>-->
      <div slot="center" class="nav-bar">
        <div
          v-for="(item,index) in list"
          :key="item"
          @click="itemClick(index)"
          :class="{active:currentIndex==index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      list: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
/* .nav-bar li {
  float: left;
} */

。nav-bar {
  display: flex;
  height: 49px;
}
.nav-bar img {
  vertical-align: middle;
}
.nav-bar div {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>