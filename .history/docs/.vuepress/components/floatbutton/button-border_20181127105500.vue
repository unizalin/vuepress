<template>
    <div class="mt-1">
        <label>按鈕邊框</label>
        <div class="btns p2 mt-1">
            <div class="col mt-2 p-0 d-flex flex-wrap align-content-between justify-content-between">
                <button type="button" v-on:click="change" class="btn btn-outline-primary rounded-0 mt-2" id="pq_BT_REC">直角</button>
                <button type="button" v-on:click="change" class="btn btn-outline-secondary mt-2" style="border-radius : 5px" id="pq_BT_SROUND">小圓角</button>
                <button type="button" v-on:click="change" class="btn btn-outline-success mt-2" style="border-radius : 10px" id="pq_BT_ROUND">圓角</button>
                <button type="button" v-on:click="change" class="btn btn-outline-warning mt-2" style="border-radius : 40px" id="pq_BT_BROUND">大橢圓</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
    methods:{
        change(e){
            const border = e.target.id;
            this.$emit('borderchange',border)
        }
    },
};
</script>
<style scoped lang="scss">
    @import "../../public/css/all.scss";
</style>