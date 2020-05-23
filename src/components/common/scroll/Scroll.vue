<template>
  <div class="Wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: {}
    };
  },
  mounted() {
    this.scroll = new BScroll(".Wrapper", {
      pullUpLoad: true,
      probeType: 3,
      click: true
    });

    this.scrollTo(0, 0);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style scoped>
</style>

