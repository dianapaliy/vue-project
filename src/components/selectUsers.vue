<template>
    <div class="select-wr">
        <label for="select">Кол-во пользователей на странице</label>
        <select class="form-control" :value="elementsPerPage" id="select" @input="perPageChange($event.target.value)">
            <option v-for="option in options" :value="option" :key="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'select-users',
        model: {
            prop: 'elementsPerPage',
        },
        props: {
            options: {
                type: Array,
                required: true
            },
            elementsPerPage: {
                type: Number,
                required: true
            },
        },
        methods: {
            perPageChange(count) {
                this.$emit('input', count);
            },
        }
    }
</script>

<style>
    .select-wr {
        float: right;
        margin: 20px;
    }

    label {
        display: inline-block;
        vertical-align: middle;
        padding-right: 20px;
    }

    .form-control {
        width: 200px;
        display: inline-block;
        vertical-align: middle;
    }
</style>