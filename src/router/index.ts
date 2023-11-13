import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
  [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:
      [
        {
        path:"foryourPosts",
        name:"foryourPosts",
        meta:{
          isShow:true,
          title:"ForYou"
        },
        component: () => import('../views/ForYouView.vue')
      },
      {
        path:"FollowingPosts",
        name:"FollowingPosts",
        meta:{
          isShow:true,
          title:"FollowingPosts"
        },
        component: () => import('../views/FollowingPostsView.vue')
      },{
        path:"YourStories",
        name:"YourStories",
        meta:{
          isShow:true,
          title:"YourStories"
        },
        component: () => import('../views/YourStoriesView.vue')
      }
     ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
