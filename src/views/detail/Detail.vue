<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :imgs="imgs"></detail-swiper>
  </div>
</template>

<script>
import { getDetail } from "network/detail";

import DetailSwiper from "views/detail/DetailSwiper";
import DetailNavBar from "components/common/navbar/DetailNavBar";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      imgs: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    // console.log(this.$route);

    //
    getDetail(this.iid).then(res => {
      // console.log(res.data.result.itemInfo.topImages);
      this.imgs = res.data.result.itemInfo.topImages;
      // console.log(typeof this.imgs);
      // console.log(this.imgs);
    });
  },
  components: {
    DetailSwiper,
    DetailNavBar
  }
};
</script>

<style scoped>
</style>