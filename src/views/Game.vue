<template>
    <div class="frame">
        <div class="names">
            <h1 id="player1" :class="data.player1.shape === activePlayer ? 'active' : ''">{{ data.player1.name }}</h1>
            <h1 id="player2" :class="data.player2.shape === activePlayer ? 'active' : ''">{{ data.player2.name }}</h1>
        </div>
        <div class="playarea" :style="{'grid-template-columns': cols, 'aspect-ratio': `${width} / ${height}`}">
            <div class="col" :style="{'grid-template-rows': rows}" v-for="(c, indexc) in table" :key="indexc">
                <div class="tile" v-for="(r, indexr) in c" :key="r" @click="TileClick(indexr, indexc)">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="50px"
                        height="50px"
                        viewBox="0 0 50 50"
                        enable-background="new 0 0 50 50"
                        xml:space="preserve"
                        v-if="r === true"
                    >
                        <g id="Layer_3">
                            <line
                                id="path2"
                                fill="none"
                                stroke="#000000"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                x1="8.5"
                                y1="41.5"
                                x2="41.5"
                                y2="8.5"
                            />
                            <line
                                id="path3"
                                fill="none"
                                stroke="#000000"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                x1="41.5"
                                y1="41.5"
                                x2="8.5"
                                y2="8.5"
                            />
                        </g>
                    </svg>
                    <svg
                        version="1.1"
                        id="circle"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="50px"
                        height="50px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 50 50"
                        xml:space="preserve"
                        v-if="r === false"
                    >
                        <circle
                            fill="none"
                            stroke="#000"
                            stroke-width="5"
                            stroke-mitterlimit="10"
                            cx="50"
                            cy="50"
                            r="45"
                            stroke-dasharray="360"
                            stroke-linecap="round"
                            transform="rotate(-90 ) translate(-100 0)"
                        >
                            <animate attributeName="stroke-dashoffset" values="360;0" dur="0.20s"></animate>
                        </circle>
                    </svg>
                </div>
            </div>
        </div>
        <div class="buttons">
            <button @click="Quit"><span>Kilépés</span></button>
            <button @click="Restart"><span>Újrakezdés</span></button>
        </div>
    </div>
</template>

<script lang="ts">
    import {computed, defineComponent, reactive, ref} from "vue";
    import {useRoute, useRouter} from "vue-router";

    export default defineComponent({
        name: "Game",
        setup() {
            const route = useRoute();
            const router = useRouter();
            const data = reactive({
                player1: {
                    name: "Player 1",
                    shape: true
                },
                player2: {
                    name: "Player 2",
                    shape: false
                }
            });
            const activePlayer = ref(true);

            function GetPlayer(shape: boolean) {
                return shape === true ? data.player1 : data.player2;
            }

            if (route.params.id == "local") {
                console.log("local game");
            }

            const width = ref(parseInt(localStorage.getItem("table_width")!));
            const height = ref(parseInt(localStorage.getItem("table_height")!));
            const goal = ref(parseInt(localStorage.getItem("table_goal")!));
            const allowClick = ref(true);

            function TileClick(row: number, column: number) {
                if (allowClick.value) {
                    console.log(`Row: ${row}, Column: ${column}`);
                    if (table.value[column][row] === undefined) {
                        allowClick.value = false;
                        table.value[column][row] = activePlayer.value;

                        const currenttable = table.value;
                        let counter = 0;
                        let win = false;

                        if (!win) {
                            for (let i = 0; i < height.value; i++) {
                                if (counter < goal.value) {
                                    if (currenttable[column][i] === activePlayer.value) {
                                        counter++;
                                        if (counter >= goal.value) {
                                            win = true;
                                            break;
                                        }
                                    } else {
                                        counter = 0;
                                    }
                                } else {
                                    win = true;
                                    break;
                                }
                            }
                        }

                        counter = 0;

                        if (!win) {
                            for (let i = 0; i < width.value; i++) {
                                if (counter < goal.value) {
                                    if (currenttable[i][row] === activePlayer.value) {
                                        counter++;
                                        if (counter >= goal.value) {
                                            win = true;
                                            break;
                                        }
                                    } else {
                                        counter = 0;
                                    }
                                } else {
                                    win = true;
                                    break;
                                }
                            }
                        }

                        counter = 0;

                        if (!win) {
                            let startpoint: [number, number] = [0, 0];
                            for (let c = column, r = row; c >= 0 && r >= 0; c--, r--) {
                                console.log(c, r);
                                startpoint = [c, r];
                            }
                            for (let [c, r] = startpoint; c < width.value && r < height.value; c++, r++) {
                                console.log(c, r, counter, goal.value);
                                if (counter < goal.value) {
                                    if (currenttable[c][r] === activePlayer.value) {
                                        counter++;
                                        console.log(counter);
                                        if (counter >= goal.value) {
                                            win = true;
                                            break;
                                        }
                                    } else {
                                        counter = 0;
                                    }
                                } else {
                                    win = true;
                                    break;
                                }
                            }
                        }

                        counter = 0;

                        if (!win) {
                            let startpoint: [number, number] = [0, 0];
                            for (let c = column, r = row; c < width.value && r >= 0; c++, r--) {
                                startpoint = [c, r];
                            }
                            for (let [c, r] = startpoint; c >= 0 && r < height.value; c--, r++) {
                                if (counter < goal.value) {
                                    if (currenttable[c][r] === activePlayer.value) {
                                        counter++;
                                        if (counter >= goal.value) {
                                            win = true;
                                            break;
                                        }
                                    } else {
                                        counter = 0;
                                    }
                                } else {
                                    win = true;
                                    break;
                                }
                            }
                        }

                        if (!win) {
                            activePlayer.value = !activePlayer.value;
                            allowClick.value = true;
                        } else {
                            console.log(`${GetPlayer(activePlayer.value).name} nyert!`);
                        }
                    }
                }
            }

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

            function PlayArea(): Array<Array<undefined | boolean>> {
                let table = new Array(width.value);

                for (let i = 0; i < table.length; i++) {
                    table[i] = new Array(height.value);
                }
                /* let table: Array<Array<undefined | boolean>> = [];

                for (let w = 0; w < width.value; w++) {
                    for (let h = 0; h < height.value; h++) {
                        table[w][h] = undefined;
                    }
                } */

                return table;
            }

            const table = ref(PlayArea());

            function Quit() {
                router.push("/");
            }

            function Restart() {
                table.value = PlayArea();
                activePlayer.value = !activePlayer.value;
                allowClick.value = true;
            }

            return {
                data,
                width,
                height,
                cols,
                rows,
                table,
                activePlayer,
                Quit,
                Restart,
                TileClick
            };
        }
    });
</script>

<style lang="scss" scoped>
    @import "@/scss/variables.scss";
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
            color: $text-color;
            position: relative;
            overflow: hidden;
        }
        #player1 {
            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                opacity: 1;
                width: 100%;
                height: 5%;
                background-color: $text-color;
                transition: transform 0.2s;
                transform: translateX(-100%);
            }

            &.active::after {
                transform: translateX(0);
            }
        }
        #player2 {
            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                opacity: 1;
                width: 100%;
                height: 5%;
                background-color: $text-color;
                transition: transform 0.2s;
                transform: translateX(100%);
            }

            &.active::after {
                transform: translateX(0);
            }
        }
    }
    .playarea {
        width: 100%;
        display: grid;
        column-gap: 1px;
        grid-template-rows: 1fr;
        margin-bottom: 5vh;

        .col {
            display: grid;
            row-gap: 1px;
            grid-template-columns: 1fr;
            .tile {
                background-color: $main-back;
                box-sizing: border-box;
                display: grid;
                place-items: center;

                svg {
                    height: 100%;
                    width: 100%;
                }

                #path2 {
                    stroke-dasharray: 430;
                    stroke-dashoffset: 800;

                    animation: x 0.1s linear;
                    animation-fill-mode: forwards;
                }

                #path3 {
                    stroke-dasharray: 430;
                    stroke-dashoffset: 800;

                    animation: x 0.1s linear;
                    animation-fill-mode: forwards;
                    animation-delay: 0.15s;
                }

                @keyframes x {
                    from {
                        stroke-dasharray: 430;
                    }
                    to {
                        stroke-dasharray: 400;
                    }
                }
            }
        }
    }
    .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            position: relative;
            display: grid;
            place-items: center;
            text-align: center;
            border: none;
            outline: none;
            width: 40%;
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
    }
</style>
