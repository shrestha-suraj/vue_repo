import Vue from 'vue'
import App from './App.vue'


//Global filter

Vue.filter('to-lowercase',function(value){
  return value.toLowerCase()
})

Vue.mixin({
  created(){
    console.log('Global mixin that works on every component')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
