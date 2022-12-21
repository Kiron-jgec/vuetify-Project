<template>
  <div>
    <div class="header text-h4">Webhook Test</div>

    <v-btn @click="triggerWebhook()">Get Data</v-btn>
        <v-btn @click="rerstAsDefault()">Reset Data</v-btn>

    {{ serverStatus }}

    <v-stepper  vertical dark v-if="serverStatus"  color="green"  >


      <v-stepper-step
        step="1"
        :complete="serverStatus.serverCreateStatus.complete"
          :rules="[() => serverStatus.serverCreateStatus.errMsg == '']"
          color="green"

      >
       
       <div class="d-flex justify-center align-center "> 

        <div>{{ serverStatus.serverCreateStatus.statusMsg }} </div>
            <v-progress-circular
      indeterminate
      color="green"
      size="20"
      :width="3"
      class="ml-2"
      v-if="serverStatus.serverCreateStatus.complete != true"
    ></v-progress-circular>
       </div>

     
         <small>     {{ serverStatus.serverCreateStatus.errMsg }} </small>
      </v-stepper-step>

      <v-stepper-content step="1"> </v-stepper-content>

      <v-stepper-step
        step="2"
       :complete="serverStatus.installbbbOnserver.complete"
          :rules="[() => serverStatus.installbbbOnserver.errMsg == '']"
          color="green"
      >
      
           <div class="d-flex justify-center align-center "> 

        <div>{{ serverStatus.installbbbOnserver.statusMsg }} </div>
            <v-progress-circular
      indeterminate
      color="green"
      size="20"
      :width="3"
      class="ml-2"
      v-if="serverStatus.installbbbOnserver.complete != true"
    ></v-progress-circular>
       </div>
         <small>     {{ serverStatus.installbbbOnserver.errMsg }} </small>
      </v-stepper-step>

      <v-stepper-content step="2"> </v-stepper-content>
      <v-stepper-step
       color="green"
        :rules="[() => serverStatus.restarintingServer.errMsg == '']"
        step="3"
        :complete="serverStatus.restarintingServer.complete"
      >
             <div class="d-flex justify-center align-center "> 

        <div>{{ serverStatus.restarintingServer.statusMsg }} </div>
            <v-progress-circular
      indeterminate
      color="green"
      size="20"
      :width="3"
      class="ml-2"
      v-if="serverStatus.restarintingServer.complete != true"
    ></v-progress-circular>
       </div>
        <small>     {{ serverStatus.restarintingServer.errMsg }} </small>
      </v-stepper-step>
      <v-stepper-content step="3"> </v-stepper-content>

      <v-stepper-step  color="green" step="4" :complete="serverStatus.finishedSetup.complete"  :rules="[() => serverStatus.finishedSetup.errMsg == '']"    >
              <div class="d-flex justify-center align-center "> 

        <div>{{ serverStatus.finishedSetup.statusMsg }} </div>
            <v-progress-circular
      indeterminate
      color="green"
      size="20"
      :width="3"
      class="ml-2"
      v-if="serverStatus.finishedSetup.complete != true"
    ></v-progress-circular>
       </div>
        
          <small>    {{serverStatus.finishedSetup.errMsg }} </small>
      </v-stepper-step>
      <v-stepper-content step="4"
  rules="[() => serverStatus.finishedSetup.statusMsg]"

        > </v-stepper-content>
    </v-stepper>
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
      this.serverStatus = data;
    },
  },
  data() {
    return {
      values: null,
      serverStatus: null,
      e13: null,
    };
  },
  methods: {
    createAxiosRequest(hooktype, statusmsg, success, error,complete) {
      axios
        .post(
          "http://localhost:5000/webhook/trigger-webhook/W4MqkOAlkwWpq4ugRLtX",
          {
            instanceId: "test",
            hooktype: hooktype,
            statusMsg: statusmsg,
            success: success,
            errorMsg: error,
            complete:complete
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


    



      this.createAxiosRequest("serverCreateStatus", "Server Create Initilized", false, "",false);

       setTimeout(() => {
        this.createAxiosRequest(
          "serverCreateStatus",
          "Server Created",
          true,
          "",
          true
        );
      }, 10000);

      setTimeout(() => {
        this.createAxiosRequest(
          "installbbbOnserver",
          "Biblubutton installed on server",
          true,
          "",
          true
        );
      }, 20000);

      setTimeout(() => {
        this.createAxiosRequest(
          "restarintingServer",
          "Server Restarted",
          true,
          "",
          true
        );
      }, 30000);

      setTimeout(() => {
        this.createAxiosRequest("finishedSetup", "Setup Finished", true, "",true);
      }, 40000);
    },

  
  rerstAsDefault()
  {

      this.createAxiosRequest("serverCreateStatus", "Server Create Initilized", false, "",false);
      this.createAxiosRequest("installbbbOnserver", "Biblubutton intalling on server", false, "",false);
      this.createAxiosRequest("restarintingServer", "Restarting Server", false, "",false);
      this.createAxiosRequest("finishedSetup", "Finishing Setup", false, "",false);
  }
 
 



  },
};
</script>

<style></style>
