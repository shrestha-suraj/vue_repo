<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Strong Text</strong>'"></p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Global Directives</h1>
        <p v-highlight:background="'red'">Color This</p>
        <p v-highlight="'red'">Color This</p>
        <p v-highlight:background.delayed="'green'">Color This</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Local Directives</h1>
        <p v-local-highlight:background="'red'">Color This</p>
        <p v-local-highlight="'red'">Color This</p>
        <p v-local-highlight:background.delayed="'green'">Color This</p>
        <p v-local-highlight:background.delayed.blink="'green'">Color This</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value;  // If we use objects as value for binding example:  v-custom-directive:xyz="{color:'red',text:'bold'}"
          let secondColor = "blue";            //We can access these values with binding.value.color and binding.value.text
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor = currentColor == secondColor ? mainColor : secondColor;
              if (binding.arg == "background") {
                el.style.backgroundColor =currentColor;
              } else {
                el.style.color = currentColor ;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style></style>
