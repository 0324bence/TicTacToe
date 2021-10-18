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
    @import "@/scss/variables.scss";
    .title {
        margin: 0;
        margin-top: 2vh;
        margin-bottom: 1vh;
        text-align: center;
        font-size: 7rem;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: $text-color;
    }
    .info {
        margin: 0;
        margin-bottom: 5vh;
        text-align: center;
        font-size: 2rem;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: $text-color;
    }
    input {
        margin-bottom: 5vh;
        font-size: 3rem;
        text-align: center;
        width: 35%;
        font-weight: 500;
        background-color: $main-back;
        color: $main-color;
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
        background-color: $main-back;
        color: $main-color;
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
            background-color: darken($main-back, 50%);
        }

        &:hover span {
            color: lighten($main-color, 50%);
        }

        &:active {
            transform: translateY(3px);
        }
    }

    @media screen and (max-width: 768px) {
        .title {
            margin-top: 4vh;
            font-size: 4.25rem;
        }
        .info {
            font-size: 1.25rem;
            margin-bottom: 10vh;
        }
        input {
            width: 65%;
            margin-bottom: 10vh;
        }

        button {
            width: 55%;
            height: 6vh;
        }
    }
</style>
