<template>
    <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-success" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            increment() {
                this.$store.commit("incrementOption", 30);
            },
            decrement() {
                this.$store.state.result--;
            }
        }
    }
</script>

<style scoped>

</style>
