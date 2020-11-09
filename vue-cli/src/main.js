import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-home',Home)// Using global component to make it available everywhere
export const eventBus=new Vue({
  methods:{
    changeStatus(newStatus){
      this.$emit('statusChanged',newStatus)
    }
  }
}) 
new Vue({
  el: '#app',
  render: h => h(App)
})

