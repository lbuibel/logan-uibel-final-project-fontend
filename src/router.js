import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import GraphQlAdmin from '../views/GraphQLAdmin.vue'
// import TopRoutes from '../views/TopRoutes.vue'
import HomeRest from '../views/HomeRest.vue'
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
            path: '/graphql-admin',
            name: "graphqladmin",
            component: GraphQlAdmin
        },
        {
            path: '/home-rest',
            name: 'homerest',
            component: HomeRest
        },
        {
            path: '/rest-admin',
            name: "restadmin",
            component: RestAdmin
        }
    ],
})
