<template>
    <form>
        <div class="form-group">
            <label >First name</label>
            <input type="text" class="form-control" v-model="user.firstName"/>
        </div>
        <div class="form-group">
            <label >Last name</label>
            <input type="text" class="form-control" v-model="user.lastName"/>
        </div>
        <div class="form-group">
            <label >Age</label>
            <input type="text" class="form-control" v-model="user.age"/>
        </div>
        <div class="form-group">
            <label >Email</label>
            <input type="email" class="form-control" v-model="user.email"/>
        </div>
        <div class="form-group">
            <label >Phone</label>
            <input type="text" class="form-control" v-model="user.phone"/>
        </div>
        <div class="form-group">
            <label >Company</label>
            <input type="text" class="form-control" v-model="user.company"/>
        </div>
        <div class="form-group">
            <label >Image</label>
            <div>
                <img class="img-thumbnail" :src="user.picture" alt="">
            </div>

            <input type="file" class="hidden" ref="imageInput" @change="upload">
            <button type="button" class="btn btn-primary" @click="selectNewFile">
                Load image
            </button>
        </div>
    </form>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'UserData',
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        methods: {
            selectNewFile() {
                this.$refs.imageInput.click()
            },
            upload() {
                const url = 'https://api.imgur.com/3/image';
                const data = new FormData();

                data.append('image', this.$refs.imageInput.files[0]);

                const config = {
                    headers: {
                        'Authorization': 'Client-ID 3bef0b8892d4b04'
                    }
                };

                axios.post(url, data, config)
                    .then(response => response.data)
                    .then(response => {
                        this.user.picture = response.data.link;
                        this.$refs.imageInput.value = '';
                    })
            }
        }
    }
</script>

<style>
    .hidden {
        display: none;
    }
</style>