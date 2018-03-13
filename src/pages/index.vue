<template>
    <div>
        <div v-if="!users" class="alert alert-warning">
            <i class="fa fa-refresh fa-spin"></i>
            Загрузка
        </div>

        <div v-else>
            <users-table v-model="users"/>
        </div>
    </div>
</template>

<script>
    import axios from '@/axios.js'

    export default {
        name: 'users',
        components: {
            'users-table': () => import('@/components/Table'),
        },
        data: () => ({
            users: [],
            restUrl: '/users',
        }),

        mounted: function () {
            this.loadData();
        },

        methods: {
            loadData() {
                axios.get(this.restUrl).then(({data}) => {
                    this.users = data
                })
            },
        }
    }
</script>