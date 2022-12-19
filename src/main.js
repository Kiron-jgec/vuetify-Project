import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// socket io
import io from "socket.io-client";
import VueSocketIO from "vue-socket.io";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: io("http://localhost:5000"),
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
