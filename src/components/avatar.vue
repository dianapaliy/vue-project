<template>
    <div class="form-group" ref="imagezone">
        <label >Image</label>

        <div>
            <img class="img-thumbnail" :src="picture" alt="">
        </div>

        <div class="row">
            <input type="file" class="hidden" ref="imageInput" @change="upload">
            <button type="button" class="btn btn-primary" @click="selectNewFile">
                Load image
            </button>
        </div>
    </div>
</template>

<script>
    import axios from '@/axios'
    import Dropzone from 'dropzone';
    import 'dropzone/dist/dropzone.css';

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
        mounted() {
            this.initDropzone();
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
                        this._updateImageData(response.data.link)
                    })
            },

            initDropzone() {
                new Dropzone(this.$refs.imagezone, {
                    url: 'https://api.imgur.com/3/image',
                    paramName: 'image',
                    acceptedFiles: 'image/*',
                    method: 'post',
                    headers: {
                        'Cache-Control': null,
                        'X-Requested-With': null,
                        'Authorization': 'Client-ID 3bef0b8892d4b04'
                    },
                    createImageThumbnails: false,
                    previewTemplate: '<div style="display:none"></div>',
                    success: (file, response) => {
                        this._updateImageData(response.data.link)
                    }
                });
            },

            _updateImageData(data) {
                this.setNewImage(data);
                this.$refs.imageInput.value = '';
            }
        }
    }
</script>

<style>
    .hidden {
        display: none;
    }
</style>