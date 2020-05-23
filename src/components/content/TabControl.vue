<template>
  <div class="TabControl">
    <div
      v-for="(item,index) in titles"
      :key="item"
      @click="itemClick(index)"
      :class="{active:currentIndex==index}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
      // console.log(index);
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  }
};
</script>

<style scoped>
.active {
  color: var(--color-tint);
}
.TabControl {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.TabControl div {
  flex: 1;
}
.active span {
  border-bottom: 3px solid var(--color-tint);
  padding-bottom: 3px;
}
</style>