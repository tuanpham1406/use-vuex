<template>
    <p>This is result: {{ result }}</p>
</template>

<script>
    export default {
        computed: {
            result() {
                return this.$store.state.result
            }
        }
    }
</script>

<style scoped>

</style>
