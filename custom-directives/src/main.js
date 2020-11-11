import Vue from "vue";
import App from "./App.vue";
/* Understanding the words
  Example:   v-highlight:background.delayed="'red'"
  Herem
      1) The element that is using this directive is accessed by (el) object and have access to dom object properties 
      2) v-highlight is the (custom made directive) which is globally created in below example
      3) background is called (binding argument) which is accessed by binding.arg
      4) 'red' is called (binding value) which is accessed by binding.value
      5) delayed is called modifier which can be accessed by binding.modifiers['deplayed']. Hence we can have multiple modifiers
      
*/

// Directive name without v- thing
// This is a global directive
// Directives have five hooks
/**
 * Hooks:
 *
 * bind(el,binding,vnode) => binding and vnode are read only don't change them while el is the element the directive sits on
 * inserted(el,binding,vnode) => called when inserted into the parent node
 * update(el,binding,vnode,oldVnode) => called once componenet is updated (without children)
 * componentUpdated(el,binding,vnode,oldVnode) => called once component is updated (with children)
 * unbind(el,binding,vnode) => called once directive is removed 
 *
 */
Vue.directive("highlight", {
  bind(el, binding, vnode) {
    // el.style.color="green"
    // el.style.color=binding.value   // binding.value is whatever we enter in quotation mark when using this directive. Ex: v-highlight="'red'" (red is this value)
    let delay=0
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == "background") {
        /// Ex: v-highlight:background="'red'" here the word background that comes after : is called binding.arg
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
