<template>
    <router-view />
</template>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
    @import "@/scss/variables.scss";
    body {
        margin: 0;
        padding: 0;
        background-color: hsl(0, 0%, 24%);
    }
    * {
        font-family: "Roboto", sans-serif;
    }
    #app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
