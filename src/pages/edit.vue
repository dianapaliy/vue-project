<template>
    <div class="form-wr">
        <user-data :user="user"/>
        <button type="button" class="btn btn-success" @click="save">
            Save
        </button>
        <button type="button" class="btn btn-success" @click="remove">
            Delete
        </button>
    </div>
</template>

<script>
    import axios from '../axios'

    export default {
        name: 'UserDataPage',
        components: {
            'user-data': () => import('@/components/Edit.vue')
        },
        data: () => ({
            user: {},
            restUrl: '/users'
        }),
        computed: {
            id() {
                return this.$route.params.id;
            },
            url() {
                return `${this.restUrl}/${this.id}`;
            }
        },
        mounted: function () {
            this.loadData();
        },
        methods: {
            loadData() {
                axios.get(this.url)
                    .then(response => response.data)
                    .then(response => (this.user = response));
            },
            redirectToList() {
              this.$router.push('/list-of-users')
            },
            save() {
                axios.patch(this.url, this.user)
                    .then(() => this.redirectToList())
                    .catch(error => `Error while saving: ${error}`)
            },
            remove() {
                axios.delete(this.url)
                    .then(() => this.redirectToList())
                    .catch(error => `Error while deleting: ${error}`)
            }
        }
    };
</script>

<style>
    .form-wr {
        width: 600px;
        margin: 30px;
    }
</style>