import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/kanban',
    children: [
      {
        path: '/kanban',
        name: 'Kanban',
        component: () => import('@/views/KanbanView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
