<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt />
    <p>
      <span class="title">{{goodsItem.title}}</span>
    </p>
    <p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="fav-icon"></span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  margin-bottom: 5px;
}
.goods-item img {
  border-radius: 5px;
  width: 100%;
}
.goods-item .title {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
}
.goods-item .price {
  color: var(--color-tint);
}

.goods-item .fav-icon {
  display: inline-block;
  width: 13px;
  height: 13px;
  background: url("~assets/img/common/collect.svg") no-repeat;
  background-size: 100%;
  margin: 0 1px 0 5px;
}
</style>