<template>
  <div>
    <h1>Socket</h1>
    <StatusSocket :status="socketStatus"></StatusSocket>
    <StatusSocket :status="badStatus"></StatusSocket>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socketStatus: {},
      badStatus: {}
    };
  },
  mounted() {
    this.goodSocket = this.$nuxtSocket({
      name: "goodSocket",
      channel: "/aframe",
      reconnection: false
    });

    this.badSocket = this.$nuxtSocket({
      name: "badSocket",
      channel: "aframe",
      reconnection: true,
      statusProp: "badStatus"
    });
  }
};
</script>

<style scoped>
.status-label {
  width: 100%;
  text-align: left;
}
.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.status-grid:hover {
  color: #212529;
  background-color: rgba(0, 0, 0, 0.075);
}
.striped:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
.col-key {
  grid-column: 1;
  font-weight: bold;
  text-align: right;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
}
.col-val {
  grid-column: 2;
  text-align: left;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
}
</style>
