import { createApp } from "vue";
import DemoComponent from "./components/DemoComponent";
import DemoEventComponent from "./components/DemoEventComponent";
import mitt from "mitt";

let app = createApp({
  components: {
    DemoComponent,
    DemoEventComponent,
  },
});

const emitter = mitt();
app.config.globalProperties.emitter = emitter;
app.mount("#app");
