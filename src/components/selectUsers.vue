<template>
    <div class="select-wr">
        <label for="select">Кол-во пользователей на странице</label>
        <select class="form-control" v-model="elementsPerPage" id="select" @change="perPageChange(elementsPerPage)">
            <option v-for="(option, index) in options" :value="option" :key="option.index">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'select-users',
        props: {
            options: {
                type: Array,
                required: true
            }
        },
        data: () => {
            return {
                elementsPerPage: 4
            }
        },
        methods: {
            perPageChange(count) {
                this.$emit('perPageChange', count);
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