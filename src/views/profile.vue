<template>
  <div class="profile">
    <h1 class="subheading grey--text ma-3">Profile</h1>

    <p>{{ errors }}</p>
    <p>{{ successMsg }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    errors: null,
    successMsg: null,
  }),
  created() {
    this.getProfileData();
  },
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