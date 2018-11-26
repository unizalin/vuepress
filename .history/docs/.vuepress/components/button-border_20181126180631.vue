<template>
    <div class="mt-1">
        <label>按鈕邊框</label>
        <div class="btns p2 mt-1">
            <div class="col mt-2 p-0 d-flex flex-wrap align-content-between justify-content-between">
                <button type="button" v-on:click="changeborder" class="btn btn-outline-primary rounded-0 mt-2" id="pq_BT_REC">直角</button>
                <button type="button" v-on:click="changeborder" class="btn btn-outline-secondary mt-2" style="border-radius : 5px" id="pq_BT_SROUND">小圓角</button>
                <button type="button" v-on:click="changeborder" class="btn btn-outline-success mt-2" style="border-radius : 10px" id="pq_BT_ROUND">圓角</button>
                <button type="button" v-on:click="changeborder" class="btn btn-outline-warning mt-2" style="border-radius : 40px" id="pq_BT_BROUND">大橢圓</button>
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
        changeborder(){
            this.$emit('border-change')
        }
    },
};
</script>
<style scoped lang="scss">
    @import "../public/css/all.scss";

/*直角*/
.pq_BT_REC {
    display: block;
    width: 80%;
    padding: 8px 0;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1em;
    line-height: 1.2em;
    border-radius: 0px;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
}
/*小圓角 */
.pq_BT_SROUND {
    display: block;
    width: 80%;
    padding: 8px 0;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1em;
    line-height: 1.2em;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
/*圓角 */
.pq_BT_ROUND {
    display: block;
    width: 80%;
    padding: 8px 0;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1em;
    line-height: 1.2em;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
/*大園角*/
.pq_BT_BROUND {
    display: block;
    width: 80%;
    padding: 8px 0;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1em;
    line-height: 1.2em;
    -moz-border-radius: 40px;
    -webkit-border-radius: 40px;
    border-radius: 40px;
}
</style>