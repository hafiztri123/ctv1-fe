import type { Component } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/component',
    component: (): Promise<Component> => import('@/layout/ComponentLayout.vue'),
    children: [
      {
        path: 'button',
        name: 'button',
        component: (): Promise<Component> => import('@/views/ButtonView.vue')
      }

    ]
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
