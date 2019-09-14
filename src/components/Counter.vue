<template>
    <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-success" @click="asyncDecrement">Decrement</button>
        <hr>
        <br>
        <input type="text" v-model="value">
        <p>Text test: {{value}}</p>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {}
        },
        computed: {
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set(value) {
                    this.$store.dispatch('updateValue', value);
                }
            }
        },
        methods: {
            // increment() {
            //     this.$store.commit("incrementOption", 30);
            // },
            ...
                mapActions(["increment", "asyncDecrement"]),
            updateValue(event) {
                this.$store.dispatch('updateValue', event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>
