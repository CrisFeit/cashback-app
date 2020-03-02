import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/vue/views/Home";
import Signup from "@/vue/views/Signup";
import { auth } from '@/database';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cadastro",
    name: "Signup",
    component: Signup
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      requiresAuth : true
    },
    component: () => import("../views/Dashboard.vue"),
    children : [
      {
        path: "/loja",
        name: "Shop",
        component: () => import("../views/Shop.vue")
      },
      {
        path: "/sacola",
        name: "Bag",
        component: () => import("../views/Bag.vue"),
      },
      {
        path: "/compras",
        name: "Orders",
        component: () => import("../views/Orders.vue")
      },
      {
        path: "/perfil",
        name: "Profile",
        component: () => import("../views/Profile.vue")
      },
      {
        path: "/informacoes",
        name: "Info",
        component: () => import("../views/Info.vue")
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// Router Guard
router.beforeEach((to, from , next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    auth.currentUser ? next() : next({ name : 'Home'})
  }else{
    auth.currentUser && to.name === 'Home' ? next({ name : 'Shop'}) : next()
  }
})

export default router;