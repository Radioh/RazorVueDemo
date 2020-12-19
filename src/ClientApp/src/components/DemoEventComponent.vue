<template>
  <button v-on:click="click">Click me to send event</button>
</template>
<script>
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
      this.emitter.emit("demoEvent", this.timesClicked);
    },
  },
};
</script>
