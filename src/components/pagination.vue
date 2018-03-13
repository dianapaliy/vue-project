<template>
    <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" type="button" @click="preventPage">
                &laquo;
            </button>
        </li>

        <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
            <span v-if="currentPage === page" class="page-link">{{ page }}</span>
            <button v-else type="button" class="page-link" @click="pageClicked(page)">{{ page }}</button>
        </li>

        <li class="page-item" :class="{ disabled: currentPage === pages }">
            <button class="page-link" type="button" @click="nextPage">
                &raquo;
            </button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'pagination',
        model: {
            prop: 'currentPage',
        },
        props: {
            usersLength: {
                type: Number,
                required: true
            },
            elementsPerPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            },
        },

        computed: {
            pages() {
                return Math.ceil(this.usersLength/this.elementsPerPage)
            },
        },

        methods: {
            pageClicked(page) {
                this.$emit('input', page);
            },

            preventPage() {
                this.pageClicked(this.currentPage - 1)
            },

            nextPage() {
                this.pageClicked(this.currentPage + 1)
            }
        },
    }
</script>