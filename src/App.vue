<template>
  <div id="app">
    <Body></Body>
    <router-view />
  </div>
</template>
<script>
import Body from "@/views/BodyView.vue";

export default {
  components: {
    Body,
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
