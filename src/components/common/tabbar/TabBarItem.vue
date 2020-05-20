<template>
  <div class="tab-bar-item" @click="TabBarClick">
    <div>
      <slot name="item-icon-active"></slot>
    </div>
    <div v-if="false">
      <slot name="item-icon"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  components: {},
  data(){
    return {
      isActive:false
    }
  },
  props: {
    path: {
      type: String,
      default: "/home"
    }
  },
  methods: {
    TabBarClick() {
      // console.log('TabBarClick...');
      // console.log(this.path);
      // console.log(this.$router);
      console.log(this.path);
      console.log(this.$props.path);
      
      this.isActive=this.$route.path.indexOf()
      
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  height: 20px;
  width: 20px;
}
</style>