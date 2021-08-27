import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import about from "../views/About.vue";

import projects from "../views/projects.vue";
import team from "../views/team.vue";
import login from "../views/login.vue";
import signup from "../views/signup.vue";
import profile from "../views/profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: about,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/team",
    name: "team",
    component: team,
  },
  {
    path: "/projects",
    name: "projects",
    component: projects,
  },

  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/signup",
    name: "login",
    component: signup,
  },

  {
    path: "/profile",
    name: "profile",
    component: profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
