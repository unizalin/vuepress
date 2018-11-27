<template>
<div class="row">
  <div class="codeinfo col-lg-6 col-md-12 mb-3">
    <div id="INPUT_BOX">
        <div class="BOX_TOP" :style="{backgroundImage: `url(${Picture})` }">
            <img id="cvs" src="" alt="" style="width:250px;height:127px;">
            <a onclick="document.getElementById('INPUT_BOX').style.display='none';return false;" href="#" class="X"></a>
        </div>
        <div class="BOX_BG" :style="{'border-color': borderColor}">
            <p class="RED">
            <span class="text" :class="{isBlack: text.isBlack,isNormal:text.isNormal}">{{text.info}}</span>
            <span class="price" :class="{isBlack: price.isBlack,isNormal:price.isNormal}">NT{{price.info }}</span>
            </p>
            <div class="pq_e_BT">
            <ul class="ONE">
                <li><a id="BT_COLOUR" class="floatbtn pq_BT_SROUND pq_BG_GRA_RED " href="#">{{buttonText}}</a></li>
            </ul>
            </div>
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
          <div class="form-group mt-1">
          <label for="text">文字</label>
          <input type="text" class="form-control mt-1" id="text" placeholder="鐵定價" v-model.trim="text.info">
          <div class="form-check form-check-inline mt-1">
              <input class="form-check-input" type="checkbox" id="textcolor" v-model.trim="text.isBlack">
              <label class="form-check-label" for="textcolor">
              黑色
              </label>
          </div>
          <div class="form-check form-check-inline mt-1">
              <input class="form-check-input" type="checkbox" id="fontweight" v-model.trim="text.isNormal">
              <label class="form-check-label" for="fontweight">
              一般體
              </label>
          </div>
          </div>
          <div class="form-group mt-1 ">
            <label for="price">價錢</label>
            <input type="text" class="form-control mt-1" id="price" placeholder="360" v-model.trim="price.info">
            <div class="form-check form-check-inline mt-1">
                <input class="form-check-input" type="checkbox" id="pricetextcolor" v-model.trim="price.isBlack">
                <label class="form-check-label" for="pricetextcolor">
                黑色
                </label>
            </div>
            <div class="form-check form-check-inline mt-1">
                <input class="form-check-input" type="checkbox" id="pricefontweight" v-model.trim="price.isNormal">
                <label class="form-check-label" for="pricefontweight">
                一般體
                </label>
            </div>
            <div class="mt-1">
                <label for="border">邊框顏色</label>
                <input type="text" class="form-control " id="border" placeholder="#e6e6e6" maxlength="7" v-model.trim="borderColor" :style="{background:borderColor}">
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="col-12">
    <div class="card button">
      <h5 class="card-header"></h5>
      <div class="card-body">
        <div class="form mt-1">
          <label for="text">按鈕文字</label>
          <input type="text" class="form-control " id="text" placeholder="立即加入" v-model.trim="buttonText">
        </div>
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
      text: [
        {
          info: "",
          isBlack: false,
          isNormal: false
        }
      ],
      price: [
        {
          info: "",
          isBlack: false,
          isNormal: false
        }
      ],
      buttonText: "馬上算",
      borderColor: "#e6e6e6",
      Picture: ""
    };
  },
  components:{
    Buttonbgcolor,
    Buttonborder
  },
  methods: {
    changeColor(e) {
      const heading = document.getElementById("BT_COLOUR").classList;
      console.log(heading)
      heading.replace(heading[2], e);
    },
    changeBorder(e) {
      const heading = document.getElementById("BT_COLOUR").classList;
      console.log(heading)
      heading.replace(heading[1], e);
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

#INPUT_BOX {
  width: 250px;
  height: 240px;
  /* position: fixed;
                right: 0.8%;
                top: 35%; */
  z-index: 999;
  box-shadow: 0px 0px 16px rgba($color: #000000, $alpha: 0.4);
}

.BOX_TOP {
  width: 100%;
  height: 127px;
  position: relative;
  background-size: cover;
  background-position: center center;
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
  background-color: #fff;
}
.RED {
  padding-top: 20px;
  font-size: 16px;
  text-align: center;
  color: #cc0000;
  line-height: 16px;
  font-weight: bold;
}
.RED span.text.isBlack,
.RED span.price.isBlack {
  color: black;
}
.RED span.text.isNormal,
.RED span.price.isNormal {
  font-weight: normal;
}

.pq_e_BT {
  clear: both;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 5px;
  .ONE {
    width: 100%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    li {
      width: 80%;
      margin: 0 auto;
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
    .pq_BT_SROUND {
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
    }
  }
}



</style>
