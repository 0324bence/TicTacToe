<template>
    <h1 class="title">Létrehozás</h1>
    <div class="inputfield">
        <input type="number" class="numi" name="width" min="3" :max="data.max" v-model="data.width" />
        &nbsp; X &nbsp;
        <input type="number" class="numi" name="height" min="3" :max="data.max" v-model="data.height" />
        <div class="target">
            <label for="goal">Cél:&nbsp;</label>
            <input
                type="number"
                class="numi"
                name="goal"
                min="3"
                :max="data.height >= data.width ? data.height : data.width"
                v-model="data.goal"
            />
        </div>
    </div>
    <h2 class="title2">Előnézet</h2>
    <div class="preview" :style="{'grid-template-rows': rows, 'grid-template-columns': cols}">
        <div class="tile" v-for="n in data.width * data.height" :key="n"></div>
    </div>
    <div class="checki">
        <input type="checkbox" name="local" v-model="data.isLocal" />
        <label for="local">Lokális játék</label>
    </div>
    <button class="button" @click="CreateGame"><span>Létrehoz</span></button>
</template>

<script lang="ts">
    import {computed, defineComponent, reactive, watch} from "vue";
    import {useRouter} from "vue-router";

    export default defineComponent({
        name: "Create",
        setup() {
            const data = reactive({
                height: 3,
                width: 3,
                goal: 3,
                isLocal: true,
                max: 12
            });

            watch(
                () => data.height,
                height => {
                    if (height > data.max) {
                        data.height = data.max;
                    }
                }
            );

            watch(
                () => data.width,
                width => {
                    if (width > data.max) {
                        data.width = data.max;
                    }
                }
            );

            watch(
                () => data.goal,
                goal => {
                    const max = data.height >= data.width ? data.height : data.width;
                    if (goal > max) {
                        data.goal = max;
                    }
                }
            );

            const link = computed(() => {
                let url = "/game";
                if (data.isLocal) {
                    url = "/game/local";
                }
                return url;
            });

            const rows = computed(() => {
                let value = "";
                for (let i = 0; i < data.height; i++) {
                    value += " 1fr";
                }
                return value;
            });

            const cols = computed(() => {
                let value = "";
                for (let i = 0; i < data.width; i++) {
                    value += " 1fr";
                }
                return value;
            });
            const router = useRouter();

            function CreateGame() {
                localStorage.setItem("table_width", data.width.toString());
                localStorage.setItem("table_height", data.height.toString());
                localStorage.setItem("table_goal", data.goal.toString());
                router.push(link.value);
            }

            return {
                data,
                rows,
                cols,
                CreateGame
            };
        }
    });
</script>

<style lang="scss" scoped>
    @import "@/scss/variables.scss";
    .title {
        margin: 0;
        margin-top: 2rem;
        margin-bottom: 10vh;
        text-align: center;
        font-size: 7rem;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: $text-color;
    }
    .title2 {
        margin: 0;
        text-align: center;
        font-size: 3rem;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: $text-color;
    }
    .inputfield {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        row-gap: 1rem;
        font-size: 2rem;
        font-weight: 500;
        color: $text-color;
        margin-bottom: 5vh;
    }
    .checki {
        width: 100%;
        margin-top: 2vh;
        margin-bottom: 1vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-size: 1.5rem;
        color: $text-color;

        input {
            transform: scale(200%);
        }
    }
    .numi {
        font-size: 2rem;
        text-align: center;
        width: 25%;
        font-weight: 500;
        background-color: $main-back;
        color: $main-color;
        border: none;
        outline: none;
        -moz-appearance: textfield;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    .target input {
        width: 30%;
    }

    .preview {
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr; */
        row-gap: 1px;
        column-gap: 1px;
        margin-bottom: 2vh;

        .tile {
            width: 2rem;
            height: 2rem;
            background-color: $main-back;
            box-sizing: border-box;
        }
    }

    .button {
        position: relative;
        display: grid;
        place-items: center;
        text-align: center;
        border: none;
        outline: none;
        width: 15%;
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
</style>
