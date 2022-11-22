<template>
  <div>头部</div>
</template>

<script>
import { JIN } from "@/utils/api";
export default {
  name: "HeaderView",
  data() {
    return {};
  },
  async created() {
    let res = await JIN();
    console.log("11", res.data);
  },
};
</script>
<style lang="scss" scoped></style>
