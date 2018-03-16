<template>
    <div>
        <div v-if="!users" class="alert alert-warning">
            <i class="fa fa-refresh fa-spin"></i>
            Загрузка
        </div>

        <div v-else>
            <users-table v-model="users">
                <tr slot="head">
                    <th>№</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Телефон</th>
                </tr>

                <template slot="body" slot-scope="props">
                    <td>
                        <router-link :to="'/list-of-users/edit/' + props.id">
                            {{props.id}}
                        </router-link>
                    </td>
                    <td>{{ props.firstName }}</td>
                    <td>{{ props.lastName }}</td>
                    <td>{{ props.phone }}</td>
                </template>
            </users-table>
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