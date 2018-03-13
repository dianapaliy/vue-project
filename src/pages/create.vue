<template>
    <div class="form-wr">
        <user-data v-model="user"/>

        <button type="button" class="btn btn-success" @click="save">
            Save
        </button>
    </div>
</template>

<script>
    import axios from '@/axios'

    const defaultData = {
        id: null,
        isActive: false,
        picture: 'http://placehold.it/128x128',
        age: 0,
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
    };

    export default {
        name: 'UserAdd',
        components: {
            'user-data': () => import('@/components/Edit')
        },

        data: () => ({
            user: defaultData,
            url: '/users'
        }),

        methods: {
            redirectToList() {
              this.$router.push('/list-of-users')
            },

            save() {
                axios.post(this.url, this.user)
                    .then(() => this.redirectToList())
                    .catch(error => `Error while saving: ${error}`)
            },
        }
    };
</script>

<style>
    .form-wr {
        width: 600px;
        margin: 30px;
    }
</style>