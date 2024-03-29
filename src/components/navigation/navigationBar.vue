<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span v-if="successMsg">
        {{ successMsg.data.msg || successMsg.data.err.message }}
      </span>
      <span v-else> Awesome! You added a new project !</span>

      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-app-bar app color="primary" dark>
      <v-icon @click="drawer = !drawer">mdi-menu</v-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text>
            <span>Menu</span>
            <v-icon right>mdi-chevron-down </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(menu, idx) in links"
            :key="idx"
            link
            :to="menu.linkData"
          >
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text @click="logout">
        <span class="mr-2">Log Out</span>
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app class="indigo pa-4" v-model="drawer">
      <v-layout column align-center>
        <v-flex class="mt-5" text-center>
          <v-avatar size="60">
            <img src="/images/a3.jpeg" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1">Alina Gomaze</p>
        </v-flex>

        <v-flex class="mt-4 mb-3">
          <popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item
          v-for="(item, idx) in links"
          :key="idx"
          class="mt-2"
          :to="item.linkData"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="mx-0">
            <v-list-item-title class="white--text mx-0 px-0">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import popup from "../popups/newProject";
import axios from "axios";

export default {
  data() {
    return {
      drawer: false,
      snackbar: false,
      links: [
        { name: "Dahboard", icon: "mdi-view-dashboard-outline", linkData: "/" },
        {
          name: "My Projects",
          icon: "mdi-folder",
          linkData: "/projects",
        },
        { name: "Team", icon: "mdi-account-group ", linkData: "/team" },

        { name: "About", icon: "mdi-information", linkData: "/about" },
        { name: "Profile", icon: "mdi-account-circle", linkData: "/profile" },
        {
          name: "Notification",
          icon: "mdi-bell-badge-outline",
          linkData: "/notifications",
        },
        {
          name: "Webhook test",
          icon: "mdi-webhook",
          linkData: "/webhook-test",
        },
        { name: "Login", icon: "mdi-login", linkData: "/login" },
        { name: "Sign Up", icon: "mdi-account-plus", linkData: "/signup" },
      ],
      successMsg: null,
      errors: null,
    };
  },

  components: {
    popup,
  },

  methods: {
    async logout() {
      try {
        const userData = await axios.post("/user/log-out");
        this.snackbar = true;
        this.successMsg = userData;
        console.log(userData);
        this.$router.push("/login");
      } catch (error) {
        this.errors = error;
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px !important;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
