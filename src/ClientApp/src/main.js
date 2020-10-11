import Vue from "vue";

Vue.config.productionTip = false;

Vue.component(
  "demo-component",
  require("./components/DemoComponent.vue").default
);
Vue.component(
  "demo-event-component",
  require("./components/DemoEventComponent.vue").default
);

window.Vue = Vue;

export const bus = new Vue();
