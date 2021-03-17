import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "CreatePost",
    component: function() {
      return import("../views/CreatePost.vue");
    }
  },
  {
    path: "/posts/:id",
    name: "ThePost",
    component: function() {
      return import("../views/ThePost.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
