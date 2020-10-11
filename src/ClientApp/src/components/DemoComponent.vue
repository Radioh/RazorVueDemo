<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ eventMsg }}</h2>
  </div>
</template>
<script>
import { bus } from "../main";
export default {
  name: "DemoComponent",
  props: {
    msg: String,
  },
  data: function() {
    return {
      eventMsg: "",
    };
  },
  created() {
    bus.$on("demoEvent", (clickCount) => {
      this.eventMsg = `Clickcount on button in another component: ${clickCount}`;
    });
  },
};
</script>
