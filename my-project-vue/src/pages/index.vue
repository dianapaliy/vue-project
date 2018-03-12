<template>
    <div>
        <paginate name="users" :list="users" :per="4">
            <users-list :users="users"/>
        </paginate>

        <paginate-links for="users" :show-step-links="true"/>
        <paginate-links for="users" :limit="2" :show-step-links="true"/>
        <paginate-links for="users" :simple="{ next: 'Next »', prev: '« Back' }"/>
    </div>
</template>

<script>
    import axios from '../axios.js'
    import VuePaginate from 'vue-paginate'
    import Vue from 'vue'

    Vue.use(VuePaginate)

    // Vue.prototype.$http = axios

    export default {
        name: 'users',
        components: {
            'users-list': () => import('@/components/Users.vue')
        },
        data: function() {
            return {
                restUrl: '/users',
                users: [],
                paginate: ['users']
            };
        },
        methods: {
            loadData() {
                axios.get(this.restUrl).then(({data}) => {
                        this.users = data;
                    })
            }
        },
        mounted: function () {
            this.loadData();
        }
    }
</script>