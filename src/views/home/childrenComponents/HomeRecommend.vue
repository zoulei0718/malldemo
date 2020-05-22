<template>
  <div class="recommend-bar">
    <ul>
      <li v-for="item in recommend" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt />
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default: []
    }
  }
};
</script>

<style>
.recommend-bar {
  /* height: 80px; */
  display: flex;
  overflow: hidden;
  text-align: center;
  padding: 10px 0;
}
.recommend-bar li {
  flex: 1;
  float: left;
  padding: 0px 10px;
}
.recommend-bar li img {
  width: 80px;
  height: 80px;
}
</style>