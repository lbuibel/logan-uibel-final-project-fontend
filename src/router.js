import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import TopRoutes from '../views/TopRoutes.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { 
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/add-route',
            name: "admin",
            component: Admin
        },
        {
            path: '/top-routes',
            name: 'topRoutes',
            component: TopRoutes
        }
    ],
})
