<template>
<div class="row">
  <div class="codeinfo col-lg-6 col-md-12 mb-3">
    <div id="INPUT_BOX">
          <div class="BOX_TOP" :style="{backgroundImage: `url(${Picture})` }">
            <img id="cvs" src="" alt="" style="width:250px;height:127px;">
            <a onclick="document.getElementById('INPUT_BOX').style.display='none';return false;" href="#" class="X"></a>
          </div>
          <div class="BOX_BG" :style="{borderColor:borderColor}">
            <div class="pq_e_BT">
              <ul class="TWO">
                <li>
                  <a href="#" id="BT_COLOUR" class="floatbtn pq_BT_SROUND  pq_BG_GRA_RED" >{{left.text}}<p>({{left.price}})</p></a>
                </li>
                <li>
                  <a href="#" id="BT_PRICE" class="floatbtn pq_BT_PRICE pq_BT_SROUND  pq_BG_GRA_RED" >{{right.text}}<p>({{right.price}})</p></a>
                </li>
              </ul>
            </div>
            <p class="TPAY"><span>付款</span>點數、信用卡、手機小額、PayPal</p>
          </div>
        </div>
  </div>
  <div class="col-lg-6 col-md-6 mb-3">
    <div class="card text">
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
          <div class="text-left">
            <div class="form-row mb-2">
              <div class="col">
                <label for="text">文字(Left)</label>
                <input type="text" class="form-control mt-2" id="text" placeholder="完整鑑定" v-model="left.text">
              </div>
              <div class="col">
                <label for="price">價錢(Left)</label>
                <input type="text" class="form-control mt-2" id="price" placeholder="800" v-model="left.price">
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col">
              <label for="text">文字(Right)</label>
              <input type="text" class="form-control mt-2" id="text" placeholder="升級白金" v-model="right.text">
            </div>
            <div class="col">
              <label for="price">價錢(Right)</label>
              <input type="text" class="form-control mt-2" id="price" placeholder="3,600" v-model="right.price">
            </div>
          </div>
          <div class="mt-2">
            <label for="border">邊框顏色</label>
            <input type="text" class="form-control mt-2" id="border" placeholder="#e6e6e6" v-model.trim="borderColor" maxlength="7" v-model="borderColor" :style="{background:borderColor}">
          </div>
      </div>
  </div>
  </div>
  <div class="col-12">
    <div class="card button">
    <h5 class="card-header"></h5>
    <div class="card-body">
      <Buttonborder v-on:borderchange="changeBorder"></Buttonborder>
      <Buttonbgcolor v-on:bgchange="changeColor"></Buttonbgcolor>
    </div>

  </div>
  </div>



</div>



</template>
<script>
import Buttonborder from './floatbutton/button-border';
import Buttonbgcolor from './floatbutton/button-bgcolor';
export default {
    data() {
      return {
        left: [{ text: "完整鑑定" }, { price: "800" }],
        right: [{ text: "升級白金" }, { price: "3,600" }],
        borderColor: "#e6e6e6",
        Picture: ''
      };
    },
    components:{
      Buttonbgcolor,
      Buttonborder
    },
    methods: {
      changeColor(e) {
        const heading = document.getElementById("BT_COLOUR").classList;
        const price = document.getElementById("BT_PRICE").classList;
        heading.replace(heading[2],e)
        price.replace(price[3],e)
      },
      changeBorder(e){
        const heading = document.getElementById("BT_COLOUR").classList;
        const price = document.getElementById("BT_PRICE").classList;
        heading.replace(heading[1],e)
        // console.log(price)
        price.replace(price[2],e)
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
  width: 250px;
  height: 240px;
  box-shadow: 0px 0px 16px rgba($color: #000000, $alpha: 0.4);
}

.BOX_TOP {
  width: 100%;
  height: 127px;
  background-color: #e6e6e6;
  position: relative;
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
  width: 250px;
  height: 113px;
  border: 7px solid #e6e6e6;
  border-top: none;
  clear: both;
}

.BOX_BG .pq_e_BT .TWO li a p {
  font-weight: normal;
}

.BOX_BG .TPAY {
  display: block;
  text-align: center;
  font-size: 12px;
  line-height: 1.5em;
  padding-top: 12px;
  color: #000;
}
.BOX_BG .TPAY span {
  background-color: #ffff99;
  border: 1px solid #666;
  padding: 0 2px;
  margin-right: 5px;
}

.pq_e_BT{
  clear: both;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding-top: 15px;
  .TWO{
    width: 80%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    li{
      width: 50%;
      float: left;
    }
    .floatbtn{
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
    }
    .pq_BT_SROUND{
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
    }
  }
}
</style>

