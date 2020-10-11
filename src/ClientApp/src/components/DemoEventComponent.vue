<template>
  <button v-on:click="click">Click me to send event</button>
</template>
<script>
import { bus } from "../main";
export default {
  name: "DemoEventComponent",
  data: function() {
    return {
      timesClicked: 0,
    };
  },
  methods: {
    click: function() {
      this.timesClicked++;
      bus.$emit("demoEvent", this.timesClicked);
    },
  },
};
</script>
