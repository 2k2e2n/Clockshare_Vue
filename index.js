import { createRouter, createWebHistory } from 'vue-router';
import App from '@/pages/first/index.vue';
import TimerTest from '@/pages/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/timer',
    name: 'TimerTest',
    component: TimerTest,
    props: route => ({ task: route.params.task })
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
