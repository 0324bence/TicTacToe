<template>
    <div id="frame">
        <h1 class="title">Tic Tac<br />Toe</h1>
        <router-link to="/join" class="button">
            <span>Csatlakozás</span>
        </router-link>
        <router-link to="/create" class="button">
            <span>Létrehozás</span>
        </router-link>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "Menu",
        setup() {
            console.log();
        }
    });
</script>

<style lang="scss" scoped>
    $offsetcolor: darken(hsl(0, 0%, 87%), 10%);

    #frame {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15vh;
    }

    .title {
        margin: 0;
        margin-top: 2rem;
        text-align: center;
        font-size: 7rem;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: hsla(0, 0%, 90%, 1);
    }

    .button {
        position: relative;
        display: grid;
        place-items: center;
        text-align: center;
        border: none;
        outline: none;
        width: 30%;
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
