import type { Component } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/component',
    component: (): Promise<Component> => import('@/layout/ComponentLayout.vue'),
    redirect: '/component/button',
    children: [
      {
        path: 'button',
        name: 'button',
        component: (): Promise<Component> => import('@/views/ButtonView.vue')
      },
      {
        path: 'dialog',
        name: 'dialog',
        component: (): Promise<Component> => import('@/views/DialogView.vue')
      },
      {
        path: 'card',
        name: 'card',
        component: (): Promise<Component> => import('@/views/CardView.vue')
      }


    ]
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
