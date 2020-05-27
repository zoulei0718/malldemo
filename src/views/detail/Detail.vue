<template>
  <div>
    <detail-swiper :imgs="imgs" class="detail-swiper"></detail-swiper>
  </div>
</template>

<script>
import { getDetail } from "network/detail";

import DetailSwiper from "views/detail/DetailSwiper";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      imgs: []
    };
  },
  created() {
    this.iid = this.$route.query.iid;
    // console.log(this.$route);

    //
    getDetail(this.iid).then(res => {
      // console.log(res.data.result.detailInfo.detailImage[0].list);
      this.imgs = res.data.result.detailInfo.detailImage[0].list;
      console.log(typeof this.imgs);
      console.log(this.imgs);
    });
  },
  components: {
    DetailSwiper
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>