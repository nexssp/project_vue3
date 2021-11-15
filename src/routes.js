import { createWebHistory, createRouter } from "vue-router";

let routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./components/Home.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./components/Register.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("./components/NotFound.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
