<template>
    <div>
        <users-list :users="users"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import UserList from '@/components/Users.vue'

    export default {
        name: 'users',
        components: {
            'users-list': UserList
        },
        data: function() {
            return {
                users: []
            };
        },
        methods: {
            loadData() {
                axios.get('http://localhost:3000/users')
                    .then(response => {
                        this.users = response.data;
                    })

            }
        },
        mounted: function () {
            this.loadData();
        }
    }
</script>