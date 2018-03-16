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

        <div class="form-group">
            <label >About</label>
            <vue-editor v-model="user.about"/>
        </div>

        <div class="form-group">
            <label >Register data</label>
            <datepicker v-model="user.registered"></datepicker>
        </div>

        <avatar v-model="user.picture"/>

        <div class="form-group">
            <label >Is active?</label>
            <checkbox v-model="user.active"></checkbox>
        </div>
    </form>
</template>

<script>
    import { VueEditor } from 'vue2-editor'
    import { Checkbox } from 'vue-checkbox-radio';

    export default {
        name: 'UserData',
        components: {
            Avatar: () => import('@/components/avatar'),
            Datepicker: () => import('@/components/datepicker'),
            VueEditor,
            Checkbox
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

<style>
    .checkbox-component {
        display: inline-block;
        margin-left: 10px;
    }

    .checkbox-component > input + label > .input-box {
        position: relative;
        border: 1px solid #939393 !important;
        border-radius: 1em !important;
        width: 1.6em !important;
        background: #fff;
        transition: background 0.2s ease-in;
        vertical-align: -15%;
    }

    .checkbox-component > input + label > .input-box > .input-box-tick {
        display: none;
    }
    .checkbox-component > input + label > .input-box:before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        border: 1px solid #939393;
        border-radius: 50%;
        width: 1em;
        height: 1em;
        background: #fff;
        transition: transform 0.3s ease-out;
    }
    .checkbox-component > input:checked + label > .input-box {
        background: #63b65d;
    }
    .checkbox-component > input:checked + label > .input-box:before {
        border-color: #498d47;
        transform: translateX(0.6em);
    }
</style>