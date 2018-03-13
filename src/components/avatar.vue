<template>
    <div class="form-group">
        <label >Image</label>
        <div>
            <img class="img-thumbnail" :src="picture" alt="">
        </div>

        <input type="file" class="hidden" ref="imageInput" @change="upload">
        <button type="button" class="btn btn-primary" @click="selectNewFile">
            Load image
        </button>
    </div>
</template>

<script>
    import axios from '@/axios'

    export default {
        name: 'Avatar',
        model: {
            prop: 'picture',
        },
        props: {
            picture: {
                type: String,
                required: true
            }
        },
        methods: {
            selectNewFile() {
                this.$refs.imageInput.click()
            },

            setNewImage(picture) {
                this.$emit('input', picture);
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
                        this.setNewImage(response.data.link);

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