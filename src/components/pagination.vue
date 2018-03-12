<template>
    <ul class="pagination justify-content-center">
        <li class="page-item" v-for="(page, index) in pages" :key="index" :class="{ active: isActive(page) }">
            <a class="page-link" @click="pageClicked(page)">{{ page }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'pagination',
        props: {
            users: {
                type: Array,
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

        data: ()=> {
            return {
                pages: [],
            }
        },

        mounted: function() {
            this.pagesArray()
        },

        methods: {
            pagesArray: function() {
                console.log(123);

                const numberPages = Math.ceil(this.users.length/this.elementsPerPage);

                this.pages = new Array(numberPages).fill(0).map((x, i) => ++i)
            },

            isActive(page) {
                const clickedPage = this.currentPage || 1;

                return clickedPage === page;
            },

            pageClicked(page) {
                this.$emit('pageChange', page);
            },
        },
    }
</script>