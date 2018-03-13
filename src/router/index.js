import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: () => import('@/components/Main')
        },
        {
            path: '/list-of-users',
            name: 'Users',
            component: () => import('@/pages/index')
        },
        {
            path: '/list-of-users/edit/:id',
            name: 'Edit',
            component: () => import('@/pages/edit')
        },
        {
            path: '/list-of-users/create',
            name: 'Create',
            component: () => import('@/pages/create')
        }
    ]
})
