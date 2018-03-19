<template>
    <div>
        <h1>{{message}}</h1>

        <div class="form-group">
            <label>Change message</label>

            <input v-model="vuexMessage" class="form-control">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'main',
        computed: {
            message() {
                return this.$store.state.mainMessage
            },
            vuexMessage: {
                get() {
                    return this.$store.state.mainMessage
                },
                set(value) {
                    return this.$store.commit('changeMessage', value)
                }
            }
        }
    }
</script>