import { createApp } from 'vue';
import App from '@/pages/first/index.vue';
import router from './router';

createApp(App).use(router).mount('#app');
