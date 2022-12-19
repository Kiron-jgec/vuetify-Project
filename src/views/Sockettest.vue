<template>
  <div>
    <div class="header text-h4">Test</div>

    <v-btn @click="sendDataInServer()">Send Data</v-btn>

    {{ randomData }}
  </div>
</template>

<script>
export default {
  name: "Test",
  sockets: {
    connect: function() {
      console.log("socket to notification channel connected");
    },

    // get data from server
    fromServer: function(data) {
      //   console.log("data", data);
      this.randomData = data;
    },
  },

  data() {
    return {
      something: [
        // ... something here for the data if you need.
      ],
      randomData: "",
    };
  },

  methods: {
    sendDataInServer() {
      console.log("send data in server");
      this.$socket.emit("sendData", {
        channel: "notification",
        user_id: "Inamamul Hoque",
      });
    },
  },

  // get data from server
  mounted() {
    this.$socket.on("getData", (data) => {
      console.log("data", data);
      this.randomData = data;
    });
  },

  created() {
    this.$socket.emit("from-clients", {
      channel: "notification",
      user_id: "Nice",
    });
  },
};
</script>
