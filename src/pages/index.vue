<template>
    <div>
        <select-users :options="options"
                      @perPageChange="perPageChange"/>

        <users-list :users="filteredUsersArray(currentPage)"/>

        <pagination :users="users"
                    :elementsPerPage="elementsPerPage"
                    :currentPage="currentPage"
                    @pageChange="pageChange"/>
    </div>
</template>

<script>
    import axios from '../axios.js'

    export default {
        name: 'users',
        components: {
            'users-list': () => import('@/components/Users.vue'),
            'select-users': () => import('@/components/selectUsers.vue'),
            'pagination': () => import('@/components/pagination.vue'),
        },
        data: function() {
            return {
                restUrl: '/users',
                users: [],
                filteredUsers: [],
                options: [2, 4, 6, 8, 10],
                elementsPerPage: 4,
                currentPage: 1
            };
        },
        mounted: function () {
            this.loadData();
        },
        methods: {
            loadData() {
                axios.get(this.restUrl).then(({data}) => {
                    this.users = data
                })
            },

            filteredUsersArray(start) {
                const startItem = (start-1)*this.elementsPerPage < 0 ? 0 : (start-1)*this.elementsPerPage;
                const endItem = startItem + this.elementsPerPage;

                return this.filteredUsers = this.users.slice(startItem, endItem)
            },

            pageChange(page) {
                return this.currentPage = page
            },

            perPageChange(count) {
                this.currentPage = 1;

                return this.elementsPerPage = count
            }
        }
    }
</script>