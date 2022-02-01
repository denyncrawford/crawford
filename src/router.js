import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import("./views/Home.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/blog",
    meta: { title: "Blog" },
    component: () => import("./views/Blog.vue"),
  },
  { path: "/:path(.*)", component: () => import("./views/NotFound.vue") },
];

export default createRouter({
  history: createWebHistory(),
  routes,
})
