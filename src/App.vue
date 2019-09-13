<template>
    <div class="container">
        <h1>VueX Section</h1>
        <hr>
        <app-result></app-result>
        <br>
        <app-counter></app-counter>
    </div>
</template>

<script>
    import AppCounter from "@/components/Counter";
    import AppResult from "@/components/Result";

    export default {
        components: {
            AppCounter,
            AppResult
        }
    }
</script>

<style>
</style>
