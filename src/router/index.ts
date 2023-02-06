import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DrawsView from '../views/DrawView.vue'
import DrawHistoryView from '../views/DrawHistoryView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/draws',
            name: 'draws',
            component: DrawsView,
        },
        {
            path: '/draw-history',
            name: 'draw-history',
            component: DrawHistoryView,
        },
    ],
})

export default router