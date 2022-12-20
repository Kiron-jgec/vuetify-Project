<template>
  <div>
    <div class="header text-h4">Webhook Test- {{ serverStatus.length }}</div>

    <v-btn @click="triggerWebhook()">Send Data</v-btn>

    {{ serverStatus }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  sockets: {
    connection: function() {
      console.log("socket to notification channel connected");
    },

    // get data from server
    serverStatus: function(data) {
      console.log("data", data);
      this.serverStatus = this.serverStatus.concat(data);
    },
  },
  data() {
    return {
      values: null,
      serverStatus: [],
    };
  },
  methods: {
    createAxiosRequest(hooktype, statusmsg, success, error) {
      axios
        .post(
          "http://localhost:5000/webhook/trigger-webhook/W4MqkOAlkwWpq4ugRLtX",
          {
            instanceId: "test",
            hooktype: hooktype,
            statusMsg: statusmsg,
            success: success,
            errorMsg: error,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          //   console.log(response.data);
          this.values = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    triggerWebhook() {
      this.createAxiosRequest("serverCreateStatus", "Server Created", true, "");

      setTimeout(() => {
        this.createAxiosRequest(
          "installbbbOnserver",
          "Biblubutton installed on server",
          true,
          ""
        );
      }, 5000);

      setTimeout(() => {
        this.createAxiosRequest(
          "restarintingServer",
          "Server Restarted",
          true,
          ""
        );
      }, 10000);

      setTimeout(() => {
        this.createAxiosRequest("finishedSetup", "Setup Finished", true, "");
      }, 15000);
    },
  },
};
</script>

<style></style>
