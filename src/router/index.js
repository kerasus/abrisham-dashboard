import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/schedule',
        name: 'Schedule',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(
            /* webpackChunkName: "about" */
            '../views/Schedule.vue'
            )
    },
    {
        path: '/user-abrisham-progress',
        name: 'UserAbrishamProgress',
        component: () => import(
            '../views/UserAbrishamProgress.vue'
            )
    },
    {
        path: '/consulting',
        name: 'consulting',
        component: () => import(
            '../components/comingSoon'
            )
    },
    {
        path: '/assessment',
        name: 'assessment',
        component: () => import(
            '../components/comingSoon'
            )
    },
    {
        path: '/news',
        name: 'news',
        component: () => import(
            '../components/comingSoon'
            )
    },
    {
        path: '/map',
        name: 'map',
        component: () => import(
            '../components/comingSoon'
            )
    },
    {
        path: '/my-performance',
        name: 'my-performance',
        component: () => import(
            '../components/comingSoon'
            )
    },
]

const router = new VueRouter({
    routes
})

export default router
