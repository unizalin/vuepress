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
                <li><a id="BT_COLOUR" class="pq_BT_SROUND pq_BG_GRA_RED " href="#">{{buttonText}}</a></li>
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
          <Buttonborder></Buttonborder>
          <Buttoncolor></Buttoncolor>
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
import Buttonborder from './button-border';
import Buttoncolor from './button-color';
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
    Buttoncolor,
    Buttonborder,
  },
  methods: {
    changeColor(e) {
      const heading = document.getElementById("BT_COLOUR").classList;
      const gradient = e.target.id;
      const gr = e.target.classList;
      heading.replace(heading[1], gradient);
    },
    changeBorder(e) {
      const heading = document.getElementById("BT_COLOUR").classList;
      const border = e.target.id;
      heading.replace(heading[0], border);
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
  }
}
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

.pq_BG_GRA_RED {
  color: #ffffff;
  border: 1px solid #a30000;
  background: #ff0000; /* Old browsers */
  background: -webkit-linear-gradient(#ff0000 0%, #b90000 100%);
  background: -o-linear-gradient(#ff0000 0%, #b90000 100%);
  background: linear-gradient(
    #ff0000 0%,
    #b90000 100%
  ); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0000', endColorstr='#b90000',GradientType=0 ); /* IE6-9 */
  -moz-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  -webkit-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  &:hover {
    color: #fff9bc;
    background: #b90000; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #b90000 0%,
      #ff0000 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #b90000 0%,
      #ff0000 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #b90000 0%, #ff0000 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b90000', endColorstr='#ff0000',GradientType=0 );
    /* IE6-9 */
  }
}
.pq_BG_GRA_PINK01 {
  color: #ffffff;
  border: 1px solid #e2005a;
  background: #ff0090;
  /* Old browsers */
  background: -webkit-linear-gradient(#ff0090 0%, #e2005a 100%);
  background: -o-linear-gradient(#ff0090 0%, #e2005a 100%);
  background: linear-gradient(#ff0090 0%, #e2005a 100%);
  /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0090', endColorstr='#e2005a',GradientType=0 );
  /* IE6-9 */
  -moz-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  -webkit-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  &:hover {
    color: #fff9bc;
    background: #e2005a; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #e2005a 0%,
      #ff0090 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #e2005a 0%,
      #ff0090 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #e2005a 0%,
      #ff0090 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2005a', endColorstr='#ff0090',GradientType=0 ); /* IE6-9 */
  }
}
/* 粉色02 */
.pq_BG_GRA_PINK02 {
  color: #ffffff;
  border: 1px solid #da0061;
  background: #ff8dc0;
  /* Old browsers */
  background: -webkit-linear-gradient(#ff8dc0 0%, #ff4f9e 100%);
  background: -o-linear-gradient(#ff8dc0 0%, #ff4f9e 100%);
  background: linear-gradient(#ff8dc0 0%, #ff4f9e 100%);
  /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8dc0', endColorstr='#ff4f9e',GradientType=0 );
  /* IE6-9 */
  -moz-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  -webkit-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  &:hover {
    color: #fff9bc;
    background: #ff4f9e;
    /* Old browsers */
    background: -moz-linear-gradient(top, #ff4f9e 0%, #ff8dc0 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #ff4f9e 0%,
      #ff8dc0 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #ff4f9e 0%,
      #ff8dc0 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff4f9e', endColorstr='#ff8dc0',GradientType=0 ); /* IE6-9 */
  }
}
/* 粉色02 */
/* 橘黃色01 */
.pq_BG_GRA_ORANGE01 {
  color: #ffffff;
  border: 1px solid #fe6600;
  background: #ff7200; /* Old browsers */
  background: -webkit-linear-gradient(#ff7200 0%, #e93700 100%);
  background: -o-linear-gradient(#ff7200 0%, #e93700 100%);
  background: linear-gradient(#ff7200 0%, #e93700 100%);
  /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff7200', endColorstr='#e93700',GradientType=0 ); /* IE6-9 */
  -moz-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  -webkit-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  &:hover {
    color: #fff9bc;
    background: #e93700; /* Old browsers */
    background: -moz-linear-gradient(top, #e93700 0%, #ff7200 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #e93700 0%,
      #ff7200 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #e93700 0%,
      #ff7200 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e93700', endColorstr='#ff7200',GradientType=0 ); /* IE6-9 */
  }
}
/* 橘黃色01 */
/* 橘黃色02 */
.pq_BG_GRA_ORANGE02 {
  color: #ffffff;
  border: 1px solid #ff8800;
  background: #ffa946;
  /* Old browsers */
  background: -webkit-linear-gradient(#ffa946 0%, #ff8800 100%);
  background: -o-linear-gradient(#ffa946 0%, #ff8800 100%);
  background: linear-gradient(#ffa946 0%, #ff8800 100%); /* FF3.6-15 */
  /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffa946', endColorstr='#ff8800',GradientType=0 ); /* IE6-9 */
  -moz-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  -webkit-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  &:hover {
    color: #fff9bc;
    background: #ff8800; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #ff8800 0%,
      #ffa946 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #ff8800 0%,
      #ffa946 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #ff8800 0%,
      #ffa946 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8800', endColorstr='#ffa946',GradientType=0 );
    /* IE6-9 */
  }
}
/* 橘黃色02 */
/* 綠色01 */
.pq_BG_GRA_GREEN {
  color: #ffffff;
  background: #81b907;
  /* Old browsers */
  background: -webkit-linear-gradient(#81b907 0%, #347f0b 100%);
  background: -o-linear-gradient(#81b907 0%, #347f0b 100%);
  background: linear-gradient(#81b907 0%, #347f0b 100%);
  /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#81b907', endColorstr='#347f0b',GradientType=0 ); /* IE6-9 */
  -moz-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  -webkit-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  &:hover {
    color: #fff9bc;
    background: #347f0b;
    /* Old browsers */
    background: -moz-linear-gradient(top, #347f0b 0%, #81b907 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #347f0b 0%,
      #81b907 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #347f0b 0%,
      #81b907 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#347f0b', endColorstr='#81b907',GradientType=0 ); /* IE6-9 */
  }
}
/* 綠色01 */
/* 藍色01 */
.pq_BG_GRA_BLUE01 {
  color: #ffffff;
  border: 1px solid #013c9b;
  background: #009bf9;
  /* Old browsers */
  background: -webkit-linear-gradient(#009bf9 0%, #013796 100%);
  background: -o-linear-gradient(#009bf9 0%, #013796 100%);
  background: linear-gradient(
    #009bf9 0%,
    #013796 100%
  ); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#009bf9', endColorstr='#013796',GradientType=0 ); /* IE6-9
  -moz-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  -webkit-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  &:hover {
    color: #fff9bc;
    background: #013796; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #013796 0%,
    #009bf9 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #013796 0%,
    #009bf9 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #013796 0%, #009bf9 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#013796', endColorstr='#009bf9',GradientType=0 ); /* IE6-9 */
}
/* 藍色01 */
/* 藍色02 */
.pq_BG_GRA_BLUE02 {
  color: #ffffff;
  border: 1px solid #0061b3;
  background: #4badff;
  /* Old browsers */
  background: -webkit-linear-gradient(#4badff 0%, #3a8ed5 100%);
  background: -o-linear-gradient(#4badff 0%, #3a8ed5 100%);
  background: linear-gradient(#4badff 0%, #3a8ed5 100%); /* FF3.6-15 */
  /* Chrome10-25,Safari5.1-6 */
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4badff', endColorstr='#3a8ed5',GradientType=0 ); /* IE6-9 */
  -moz-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  -webkit-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  &:hover {
    color: #fff9bc;
    background: #3a8ed5; /* Old browsers */
    background: -moz-linear-gradient(top, #3a8ed5 0%, #4badff 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #3a8ed5 0%,
      #4badff 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #3a8ed5 0%,
      #4badff 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3a8ed5', endColorstr='#4badff',GradientType=0 ); /* IE6-9 */
  }
}
/* 藍色02 */
/* 紫色01 */
.pq_BG_GRA_PURPLE01 {
  color: #ffffff;
  border: 1px solid #760b6a;
  background: #b34fa8; /* Old browsers */
  background: -webkit-linear-gradient(#b34fa8 0%, #760b6a 100%);
  background: -o-linear-gradient(#b34fa8 0%, #760b6a 100%);
  background: linear-gradient(
    #b34fa8 0%,
    #760b6a 100%
  ); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b34fa8', endColorstr='#760b6a',GradientType=0 ); /* IE6-9 */
  -moz-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  -webkit-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  &:hover {
    color: #fff9bc;
    background: #760b6a; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #760b6a 0%,
      #b34fa8 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #760b6a 0%,
      #b34fa8 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #760b6a 0%, #b34fa8 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#760b6a', endColorstr='#b34fa8',GradientType=0 ); /* IE6-9 */
  }
}
/* 紫色01 */
/* 紫色02 */
.pq_BG_GRA_PURPLE02 {
  color: #ffffff;
  border: 1px solid #a027fe;
  background: #cc66ff; /* Old browsers */
  background: -webkit-linear-gradient(#cc66ff 0%, #a027fe 100%);
  background: -o-linear-gradient(#cc66ff 0%, #a027fe 100%);
  background: linear-gradient(#cc66ff 0%, #a027fe 100%);
  /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc66ff', endColorstr='#a027fe',GradientType=0 ); /* IE6-9 */
  -moz-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  -webkit-box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 1);
  &:hover {
    color: #fff9bc;
    background: #a027fe; /* Old browsers */
    background: -moz-linear-gradient(top, #a027fe 0%, #cc66ff 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #a027fe 0%, #cc66ff 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #a027fe 0%, #cc66ff 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a027fe', endColorstr='#cc66ff',GradientType=0 ); /* IE6-9 */
  }
}
// ////////////單色//////////////
/* 紅色01 */
.pq_BG_RED {
  color: #ffffff;
  border: 1px solid #a30000;
  background: #ff0000;
  &:hover {
    color: #fff9bc;
    background: #b90000; /* Old browsers */
  }
}
/* 紅色01 */
/* 粉色01 */
.pq_BG_PINK01 {
  color: #ffffff;
  border: 1px solid #e2005a;
  background: #ff0090; /* Old browsers */
  &:hover {
    color: #fff9bc;
    background: #e2005a; /* Old browsers */
  }
}
/* 粉色01 */
/* 粉色02 */
.pq_BG_PINK02 {
  color: #ffffff;
  border: 1px solid #da0061;
  background: #ff8dc0; /* Old browsers */
  color: #ffffff;
  &:hover {
    color: #fff9bc;
    background: #ff4f9e;
    /* Old browsers */
  }
}
/* 粉色02 */
/* 橘黃色01 */
.pq_BG_ORANGE01 {
  color: #ffffff;
  border: 1px solid #fe6600;
  background: #ff7200; /* Old browsers */
  &:hover {
    color: #fff9bc;
    background: #e93700; /* Old browsers */
  }
}
/* 橘黃色01 */
/* 橘黃色02 */
.pq_BG_ORANGE02 {
  color: #ffffff;
  border: 1px solid #ff8800;
  background: #ffa946; /* Old browsers */
  &:hover {
    color: #fff9bc;
    background: #ff8800; /* Old browsers */
  }
}
/* 橘黃色02 */
/* 綠色01 */
.pq_BG_GREEN {
  color: #ffffff;
  border: 1px solid #347f0b;
  background: #81b907;
  /* Old browsers */
  &:hover {
    color: #fff9bc;
    background: #347f0b;
    /* Old browsers */
  }
}
/* 綠色01 */
/* 藍色01 */
.pq_BG_BLUE01 {
  color: #ffffff;
  border: 1px solid #013c9b;
  background: #009bf9;
  /* Old browsers */
  &:hover {
    color: #fff9bc;
    background: #013796; /* Old browsers */
  }
}
/* 藍色01 */
/* 藍色02 */
.pq_BG_BLUE02 {
  color: #ffffff;
  border: 1px solid #0061b3;
  background: #4badff; /* Old browsers */
  &:hover {
    color: #fff9bc;
    background: #3a8ed5; /* Old browsers */
  }
}
/* 藍色02 */
/* 紫色01 */
.pq_BG_PURPLE01 {
  color: #ffffff;
  border: 1px solid #760b6a;
  background: #b34fa8; /* Old browsers */
  &:hover {
    color: #fff9bc;
    background: #760b6a;
    /* Old browsers */
  }
}
/* 紫色01 */
/* 紫色02 */
.pq_BG_PURPLE02 {
  color: #ffffff;
  border: 1px solid #a027fe;
  background: #cc66ff;
  /* Old browsers */
  &:hover {
    color: #fff9bc;
    background: #a027fe; /* Old browsers */
  }
}
/* 紫色02 */
</style>
