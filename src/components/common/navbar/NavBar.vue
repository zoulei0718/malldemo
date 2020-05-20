<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style>
.nav-bar {
  display: flex;
  height: 49px;
  line-height: 49px;
  text-align: center;
  box-shadow: 0 1px 3px 3px rgba(100, 100, 100, 0.5);
  background-color: tan;
}
.left, .rigth {
  flex: 1;
  height: 49px;
  background-color: silver;
}
</style>