<template>
  <div class="profile">
    <h1 class="subheading grey--text ma-3">Profile</h1>

    <p>{{ errors }}</p>
    <!-- <p>{{ successMsg }}</p>
     -->
    <v-btn @click="getProfileData()">
      Get Data
    </v-btn>
    {{ randomData }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  sockets: {
    connnection: function() {
      console.log("socket to notification channel connected");
    },

    // get data from server
    user: function(data) {
      console.log("data", data);
      this.randomData = data;
    },
  },

  data: () => ({
    errors: null,
    successMsg: null,
    randomData: [],
  }),
  // created() {
  //   this.getProfileData();
  // },
  methods: {
    async getProfileData() {
      try {
        const userData = await axios.get("/user/profile");
        this.successMsg = userData;
      } catch (error) {
        this.errors = error;
      }
    },
  },
};
</script>
