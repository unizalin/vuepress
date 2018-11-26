<template>
    <div class="mt-1">
        <label>按鈕邊框</label>
        <div class="btns p2 mt-1">
            <div class="col mt-1 p-0 d-flex flex-wrap align-content-between justify-content-between">
                <button type="button" v-on:click="changeBorder" class="btn btn-outline-primary rounded-0 mt-1" id="pq_BT_REC">直角</button>
                <button type="button" v-on:click="changeBorder" class="btn btn-outline-secondary mt-1" style="border-radius : 5px" id="pq_BT_SROUND">小圓角</button>
                <button type="button" v-on:click="changeBorder" class="btn btn-outline-success mt-1" style="border-radius : 10px" id="pq_BT_ROUND">圓角</button>
                <button type="button" v-on:click="changeBorder" class="btn btn-outline-warning mt-1" style="border-radius : 40px" id="pq_BT_BROUND">大橢圓</button>
            </div>
        </div>
    </div>
    <div class="mt-1">
        <label>漸層按鈕</label>
        <div class="btns p2 mt-1 ">
            <div class="col mt-1 p-0 d-flex flex-wrap align-content-between justify-content-between">
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_RED mt-1" id="pq_BG_GRA_RED"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PINK01 mt-1" id="pq_BG_GRA_PINK01"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PINK02 mt-1" id="pq_BG_GRA_PINK02"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_ORANGE01 mt-1" id="pq_BG_GRA_ORANGE01"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_ORANGE02 mt-1" id="pq_BG_GRA_ORANGE02"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_GREEN mt-1" id="pq_BG_GRA_GREEN"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_BLUE01 mt-1" id="pq_BG_GRA_BLUE01"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_BLUE02 mt-1" id="pq_BG_GRA_BLUE02"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PURPLE01 mt-1" id="pq_BG_GRA_PURPLE01"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PURPLE02 mt-1" id="pq_BG_GRA_PURPLE02"></button>
            </div>
        </div>
    </div>
    <div class="mt-1">
        <label>單色</label>
        <div class="btns p2 mt-1 ">
            <div class="col mt-1 p-0 d-flex flex-wrap align-content-between justify-content-between">
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_RED mt-1" id="pq_BG_RED"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PINK01 mt-1" id="pq_BG_PINK01"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PINK02 mt-1" id="pq_BG_PINK02"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_ORANGE01 mt-1" id="pq_BG_ORANGE01"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_ORANGE02 mt-1" id="pq_BG_ORANGE02"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GREEN mt-1" id="pq_BG_GREEN"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_BLUE01 mt-1" id="pq_BG_BLUE01"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_BLUE02 mt-1" id="pq_BG_BLUE02"></button>
                <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PURPLE01 mt-1" id="pq_BG_PURPLE01"></button>
                <button type="button" @click="changeColor" class="btn btn-lg pq_BG_PURPLE02 mt-1" id="pq_BG_PURPLE02"></button>
            </div>
        </div>
    </div>
</template>