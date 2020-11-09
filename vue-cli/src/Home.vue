<template>
  <div>
      <app-server-status></app-server-status>
      <app-change-status></app-change-status>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus";
import ChangeServerVue from './ChangeServer.vue';
export default {
  data() {
    return {
      name: "Suraj"
    };
  },
  components: {
    "app-server-status": ServerStatus, //Importing local component such that it is only available locally
    "app-change-status":ChangeServerVue
  },
  methods: {
    resetName() {
      this.name = "Suraj";
    }
  },
  created(){
      
  }
};
</script>
<style lang="scss" scoped>
    div{
        display: flex;
        width:100%;
        height:500px;
    }
</style>
