import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoListView from "@/views/TodoListView";
import TodoListPaginationView from "@/views/TodoListPaginationView";
import SignUpView from "@/views/SignUpView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: TodoListView
  },
  {
    path: '/todolist/:page',
    name: 'todolistPagination',
    component: TodoListPaginationView
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUpView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
