<template>
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
            <tr v-for="item in users" :key="item.id">
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
</template>

<script>
    export default {
        name: 'Users',
        props: {
            users: {
                type: Array,
                required: true
            }
        }
    }
</script>