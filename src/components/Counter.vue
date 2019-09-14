<template>
    <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-success" @click="asyncDecrement">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data() {
            return {
            }
        },
        methods: {
            // increment() {
            //     this.$store.commit("incrementOption", 30);
            // },
            ...mapActions(["increment", "asyncDecrement"])
        }
    }
</script>

<style scoped>

</style>
