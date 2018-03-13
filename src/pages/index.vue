<template>
    <div>
        <users-table/>
    </div>
</template>

<script>
   export default {
        name: 'users',
        components: {
            'users-table': () => import('@/components/Table'),
        }
    }
</script>