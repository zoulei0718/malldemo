<template>
  <swiper>
    <swiper-item v-for="(item) in banner" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt @load="homeSwiperImgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    homeSwiperImgLoad() {
      // console.log("homeSwiperImgLoad...");
      this.$emit("homeSwiperImgLoad");
    }
  }
};
</script>

<style scoped>
</style>