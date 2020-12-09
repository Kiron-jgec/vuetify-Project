<template>
  <v-app>
   <navBar/>

    <v-main class="mx-3">
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import navBar from "./components/navigation/navigationBar"
export default {
  name: 'App',

  components: {

    navBar
  },

  data: () => ({
    //
  }),
};
</script>
