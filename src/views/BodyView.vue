<template>
  <div>
    <div class="dov">
      <div class="dv1">我</div>
      <div class="dv2">是</div>
      <div class="dv3">什么</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>
<style lang="scss" scoped>
.dov {
  display: flex;
  // justify-content: space-around;
  .dv1 {
    width: 500px;
    background-color: rgb(21, 77, 182);
    height: 80px;
  }
  .dv2 {
    width: 500px;
    background-color: rgb(42, 173, 119);
    height: 80px;
  }
  .dv3 {
    width: 500px;
    background-color: rgb(179, 169, 43);
    height: 80px;
  }
}
</style>
