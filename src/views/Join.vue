<template>
    <h1 class="title">Csatlakozás</h1>
    <p class="info">Kérd el a létrehozó féltől a kódot, majd add meg azt.</p>
    <input type="text" />
    <button><span>Csatlakozás</span></button>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "Join",
        setup() {
            console.log();
        }
    });
</script>

<style lang="scss" scoped>
    .title {
        margin: 0;
        margin-top: 2rem;
        margin-bottom: 1vh;
        text-align: center;
        font-size: 7rem;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: hsla(0, 0%, 90%, 1);
    }
    .info {
        margin: 0;
        margin-bottom: 5vh;
        text-align: center;
        font-size: 2rem;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: hsla(0, 0%, 90%, 1);
    }
    input {
        margin-bottom: 5vh;
        font-size: 3rem;
        text-align: center;
        width: 35%;
        font-weight: 500;
        background-color: hsl(0, 0%, 87%);
        color: hsl(0, 0%, 24%);
        border: none;
        outline: none;
    }
    button {
        position: relative;
        display: grid;
        place-items: center;
        text-align: center;
        border: none;
        outline: none;
        width: 25%;
        height: 5vh;
        border-radius: 10px;
        background-color: hsl(0, 0%, 87%);
        color: hsl(0, 0%, 24%);
        font-size: 2rem;
        font-weight: 500;
        font-family: "Roboto", sans-serif;
        transition: background-color 0.3s;
        overflow: hidden;
        box-shadow: none;
        text-decoration: none;

        span {
            position: relative;
            z-index: 10;
            transition: color 0.3s;
        }

        &:hover {
            background-color: darken(hsl(0, 0%, 87%), 50%);
        }

        &:hover span {
            color: lighten(hsl(0, 0%, 24%), 50%);
        }

        &:active {
            transform: translateY(3px);
        }
    }
</style>
