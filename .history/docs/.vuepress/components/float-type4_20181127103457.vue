<template>
<div class="row">
  <div class="codeinfo col-12 mb-3">
    <div id="INPUT_BOX">
          <div class="BOX_TOP" :style="{backgroundImage: `url(${Picture})` }">
                <img id="cvs" src="" alt="" style="width:200px;height:240px;">
            <a onclick="document.getElementById('INPUT_BOX').style.display='none';return false;" href="#" class="X"></a>
          </div>
          <div class="BOX_BG">
            <div class="pq_e_BT">
              <ul class="ONE">
                <li><a id="BT_COLOUR" class="pq_BT_SROUND pq_BG_GRA_RED " href="#">{{buttonText}}</a></li>
              </ul>
            </div>
          </div>
        </div>
  </div>
  <div class="col-12 mb-3">
    <div class="card button">
      <h5 class="card-header"></h5>
      <div class="card-body">
        <div class="pcrUrl">
              <label for="Picture">圖片預覽</label>
              <input type="text" class="form-control " id="Picture" placeholder="圖片網址" v-model.trim="Picture">
          </div>
          <div class="picFile mt-1">
            <button class="btn "@click="openPicker()">本地端上傳</button>
            <input id="file" type="file" @change="openFile(this)" style="display: none">
          </div>
        <div class="form mt-1">
          <label for="text">按鈕文字</label>
          <input type="text" class="form-control " id="text" placeholder="立即加入" v-model.trim="buttonText">
        </div>
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
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PURPLE02 mt-1" id="pq_BG_PURPLE02"></button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>



</template>
<script>
  export default {
    data() {
      return {
        buttonText: "立即加入",
        Picture: ''
      };
    },
    methods: {
      changeColor(e) {
        const heading = document.getElementById("BT_COLOUR").classList;
        const gradient = e.target.id;
        const gr = e.target.classList;
        heading.replace(heading[1],gradient)
      },
      changeBorder(e){
        const heading = document.getElementById("BT_COLOUR").classList;
        const border = e.target.id;
        console.log(typeof(heading[0]))
        console.log(typeof(border));
        heading.replace(heading[0],border)
      },
      openPicker() {
      var input = document.getElementById('file');
      input.click();
    },
    openFile(input) {
      var input = document.getElementById('file');
      let file = input.files[0];
      // console.log(file);
      //URL.createObjectURL (檔案物件貨blob物件)
      let src = URL.createObjectURL(file);
      // console.log(src);
      var cvs = document.getElementById('cvs')
      let img = new Image();
      img.src = src;
      // var ctx = cvs.getContext('2d')
      img.addEventListener('load', () =>{
      //根據仔入的圖片尺寸來調整cancas 的尺寸
        cvs.style.width = img.width
        cvs.style.height = img.height
        cvs.src=img.src
      })
    }
    }
  };
</script>
<style scoped lang="scss">
@import "../public/css/all.scss";


#INPUT_BOX{
  width: 200px;
  height: 240px;
  /* position: fixed;
    right: 0.8%;
    top: 15%; */
  z-index: 9;
}

.BOX_TOP {
  width: 200px;
  height: 240px;
  background-color: #e6e6e6;
  /* background-image: url(../images/input_box/in_top2.png); */
  position: relative;
  box-shadow: 0px 0px 16px rgba($color: #000000, $alpha: 0.4);
}
.BOX_TOP a.X {
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  background-color: grey;
  top: 0;
  right: 0;
  opacity: 0.3;
  &:hover {
    opacity: 1;
    z-index: 999;
  }
}
a.X::before,
a.X::after {
  content: "";
  position: absolute;
  height: 40px;
  width: 3px;
  left: 50%;
  top: 50%;
  background-color: #fff;
}
a.X::before {
  transform: translate(0%, -50%) rotate(45deg);
}
a.X::after {
  transform: translate(0%, -50%) rotate(-45deg);
}

.BOX_BG {
  /* background-image: url(../images/input_box/in_bg.png); */
  width: 200px;
  /* height: 118px; */
  position: relative;
  /* border-right: 7px solid #e6e6e6; */
  /* border-left: 7px solid #e6e6e6; */
  clear: both;
}
.BOX_BG > p:first-child {
  padding: 15px 15px 0 15px;
  font-size: 15px;
  text-align: center;
}
.RED {
  font-size: 16px;
  text-align: center;
  color: #cc0000;
  line-height: 16px;
  font-weight: bold;
}
.pq_e_BT{
  position: absolute;
  bottom: 40px;
  clear: both;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 5px;
  .ONE{
    width: 100%;
    height: auto;
    margin:0 auto;
    overflow: hidden;
    li{
      width: 80%;
      margin: 0 auto;
    }
    .pq_BT_SROUND{
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
  }
}

</style>
