<template>
    <div class="frame">
        <div class="names">
            <h1>{{ data.player1.name }}</h1>
            <h1>{{ data.player1.name }}</h1>
        </div>
        <div class="playarea" :style="{'grid-template-columns': cols, 'aspect-ratio': `${width} / ${height}`}">
            <div class="col" :style="{'grid-template-rows': rows}" v-for="c in width" :key="c">
                <div class="tile" v-for="r in height" :key="r" @click="TileClick(r, c)"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {computed, defineComponent, reactive, ref} from "vue";
    import {useRoute} from "vue-router";

    export default defineComponent({
        name: "Game",
        setup() {
            const route = useRoute();
            let data = reactive({
                player1: {
                    name: "Player 1",
                    shape: 0
                },
                player2: {
                    name: "Player 2",
                    shape: 1
                }
            });
            if (route.params.id == "local") {
                console.log("local game");
            }

            function TileClick(row: number, column: number) {
                console.log(`Row: ${row}, Column: ${column}`);
            }

            const width = ref(parseInt(localStorage.getItem("table_width")!));
            const height = ref(parseInt(localStorage.getItem("table_height")!));

            const rows = computed(() => {
                let value = "";
                for (let i = 0; i < height.value; i++) {
                    value += " 1fr";
                }
                return value;
            });

            const cols = computed(() => {
                let value = "";
                for (let i = 0; i < width.value; i++) {
                    value += " 1fr";
                }
                return value;
            });

            return {
                data,
                width,
                height,
                cols,
                rows,
                TileClick
            };
        }
    });
</script>

<style lang="scss" scoped>
    .frame {
        padding: 0;
        margin: 0;
        width: calc(100vw / 3);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .names {
        margin-top: 2vh;
        margin-bottom: 2vh;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            margin: 0;
            text-align: center;
            font-size: 4rem;
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            color: hsla(0, 0%, 90%, 1);
        }
    }
    .playarea {
        width: 100%;
        display: grid;
        column-gap: 1px;
        grid-template-rows: 1fr;

        .col {
            display: grid;
            row-gap: 1px;
            grid-template-columns: 1fr;
            .tile {
                background-color: hsl(0, 0%, 87%);
                box-sizing: border-box;
            }
        }
    }
</style>
