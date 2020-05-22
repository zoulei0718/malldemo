<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goodsList" :key="item.link" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {}
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>