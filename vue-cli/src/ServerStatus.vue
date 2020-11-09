 <template>
  <div>
    <h1>Server Status: {{ status }}</h1>
  </div>
</template>
<script>
import {eventBus} from './main'
export default {
  data() {
    return {
      status: "Critical"
    };
  },
  created(){
      eventBus.$on('statusChanged',(newStatus)=>{
          this.status=newStatus
      })
  }
};
</script>
<style lang="scss" scoped>
 div{
        display: block;
        flex:1;
        height: 500px;
    }
</style>