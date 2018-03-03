<template>
    <user-data :user="user"/>
</template>

<script>
    import axios from 'axios'
    import userData from '@/components/Edit.vue'

    export default {
        name: 'UserDataPage',
        components: {
            'user-data': userData
        },
        data: function() {
            return {
                user: {}
            };
        },
        methods: {
            loadData() {
                var self = this;

                axios.get('http://localhost:3000/users')
                    .then(function(response) {
                        self.user = response.data[0];
                    })

            }
        },
        mounted: function () {
            this.loadData();
        }
    };
</script>