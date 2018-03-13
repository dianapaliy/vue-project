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
            <input type="number" class="form-control" v-model="user.age"/>
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

        <avatar v-model="user.picture"/>
    </form>
</template>

<script>
    import axios from '@/axios'

    export default {
        name: 'UserData',
        components: {
            Avatar: () => import('@/components/avatar')
        },
        model: {
            prop: 'user',
        },
        props: {
            user: {
                type: Object,
                required: true
            }
        },
    }
</script>