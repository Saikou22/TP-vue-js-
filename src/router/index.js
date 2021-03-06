import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import TodoView from '../views/TodoView.vue'
import PhotoView from '../views/PhotoView.vue'
import AlbumView from '../views/AlbumView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },

  {
    path: '/todo',
    name: 'todo',
    component: TodoView
  },

  {
    path: '/photo',
    name: 'photo',
    component: PhotoView
  },

  {
    path: '/album',
    name: 'album',
    component: AlbumView
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
