import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import GraphQlAdmin from '../views/GraphQLAdmin.vue'
import TopRoutes from '../views/TopRoutes.vue'
import Chart from '../views/Chart.vue'
import RestAdmin from '../views/RestAdmin.vue'

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
            name: "graphqladmin",
            component: GraphQlAdmin
        },
        {
            path: '/top-routes',
            name: 'topRoutes',
            component: TopRoutes
        },
        {
            path: '/elevation',
            name: 'elevation',
            component: Chart
        },
        {
            path: '/add-route-rest',
            name: "restadmin",
            component: RestAdmin
        }
    ],
})
