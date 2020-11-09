<template>
  <div>
    <input placeholder="Enter the status" v-model="newStatus" />
    <button @click="submitStatus">Submit Status</button>
  </div>
</template>
<script>
import { eventBus } from "./main";
export default {
  data() {
    return {
      newStatus: ""
    };
  },
  methods: {
    submitStatus() {
      eventBus.changeStatus(this.newStatus)
      this.newStatus = "";
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  display: block;
  flex: 1;
  height: 500px;
}
</style>
