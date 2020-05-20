<template>
    <div id=tab-bar>
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: "tabbar",
  component:{
    
  }
};
</script>

<style>
  #tab-bar {
    background-color: #f6f6f6;
    display: flex;
    position: fixed;
    height: 39px;
    left:0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -3px 3px rgba(200, 200, 200, 0.5);
  }
</style>