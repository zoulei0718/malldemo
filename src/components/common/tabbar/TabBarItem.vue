<template>
  <div class="tab-bar-item" @click="TabBarClick">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "tabbaritem",
  components: {},
  data() {
    return {
      // isActive: true
    };
  },
  props: {
    path: {
      type: String,
      // default: "/home"
    }
  },
  methods: {
    TabBarClick() {
      // console.log('TabBarClick...');
      // console.log(this.path);
      // console.log(this.$router);
      // console.log('this.path:'+this.path);
      // console.log('this.$route.path:'+this.$route.path);
      // console.log(this.$route.path.indexOf(this.path));

      // this.isActive=this.$route.path.indexOf()

      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      // return true;
      return this.$route.path.indexOf(this.path) != -1;
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  padding: 5px 0 0 0;
}
.tab-bar-item img {
  height: 20px;
  width: 20px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>