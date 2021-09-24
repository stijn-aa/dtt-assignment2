import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Random from '../views/Random.vue'
import Amhes from '../views/Amhes.vue'
import Details from '../views/Details.vue'

const routes = [
    {
        path: '/',
        name: 'Anhet',
        component: Home
    },
    {
        path: '/random',
        name: 'Random',
        component: Random
    },
    {
        path: '/amhes',
        name: 'Amhes',
        component: Amhes
    },
    {
        path: '/:id',
        name: 'Details',
        component: Details,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
