<template>
    <div>
        <select-users :options="options" v-model.number="elementsPerPage"/>

        <table class="table">
            <thead>
            <tr>
                <th>№</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Возраст</th>
                <th>Email</th>
                <th>Телефон</th>
                <th>Активен</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in filteredUsersArray" :key="item.id">
                <td>
                    <router-link :to="'/list-of-users/edit/' + item.id">
                        {{item.id}}
                    </router-link>
                </td>
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.isActive }}</td>
            </tr>
            </tbody>
        </table>

        <pagination :usersLength="users.length"
                    :elementsPerPage="elementsPerPage"
                    v-model.number="currentPage"/>
    </div>
</template>

<script>
    export default {
        name: 'users',
        components: {
            'select-users': () => import('@/components/selectUsers'),
            'pagination': () => import('@/components/pagination'),
        },

        model: {
            prop: 'users'
        },

        props: {
            users: {
                type: Array,
                required: true
            }
        },

        data: () => ({
            filteredUsers: [],
            options: [2, 4, 6, 8, 10],
            elementsPerPage: 4,
            currentPage: 1
        }),

        computed: {
            filteredUsersArray() {
                const startNumber = (this.currentPage-1)*this.elementsPerPage;
                const startItem = startNumber < 0 ? 0 : startNumber;
                const endItem = startItem + this.elementsPerPage;

                return this.filteredUsers = this.users.slice(startItem, endItem)
            }
        },

        watch: {
            elementsPerPage() {
                this.currentPage = 1
            }
        },
    }
</script>