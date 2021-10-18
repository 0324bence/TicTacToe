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
            localStorage.clear();
        }
    });
</script>

<style lang="scss" scoped>
    @import "@/scss/variables.scss";
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
        margin-top: 2vh;
        text-align: center;
        font-size: 8rem;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: $text-color;
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
        #frame {
            gap: 10vh;
        }
        .button {
            width: 65%;
            height: 6vh;
        }
        .title {
            font-size: 6rem;
        }
    }
</style>
