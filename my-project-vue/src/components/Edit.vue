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
    </form>
</template>

<script>
    export default {
        name: 'UserData',
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>
    form {
        width: 600px;
        margin: 30px;
    }
</style>