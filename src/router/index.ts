import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home-index.vue'),
  },
  {
    path: '/pinia-test',
    name: 'pinia',
    component: () => import('@/views/pinia-test.vue'),
  },
  {
    path: '/tsx-test',
    name: 'tsx',
    component: () => import('@/views/tsx-test'),
  },
  {
    path: '/raytracer',
    name: 'raytracer',
    component: () => import('@/views/raytracer-canvas.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
