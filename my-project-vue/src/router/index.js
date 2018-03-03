import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Users from '@/pages/index'
import Edit from '@/pages/edit'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/list-of-users',
            name: 'Users',
            component: Users
        },
        {
            path: '/edit',
            name: 'Edit',
            component: Edit
        }
    ]
})
