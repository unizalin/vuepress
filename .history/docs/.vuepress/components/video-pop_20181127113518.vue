<template>
    <div class="row">
      <div class="codeinfo col-12 pb-3">
        <div id="INPUT_BOX">
          <div class="BOX_TOP">
            <a onclick="document.getElementById('INPUT_BOX').style.display='none';return false;" href="#" class="X"></a>
          </div>
          <div class="BOX_BG">
            <div class="video">
              <iframe class="player__video" width="560" height="315" :src="isAutoPlay? viedoChange+'?autoplay=1' :viedoChange" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div class="BOX_BG_TEXT">
              <h2 class="TITLE" :style="{color: title.isColor?title.colorPick:''}">{{title.text}}</h2>
              <h2 class="CONTENT" :style="{color:content.isColor?content.colorPick: ''}">{{content.text}}</h2>
            </div>
            <div class="pq_e_BT">
              <ul class="TWO">
                <li>
                  <a href="#" id="BT_COLOUR" class="popbtn pq_BT_SROUND  pq_BG_GRA_RED"  v-if="!button.isOne"> {{button.text}}</a>
                </li>
                <li :class="{onebtn:button.isOne}">
                  <a href="#" id="BT_PRICE" class="popbtn  pq_BT_PRICE pq_BT_SROUND  pq_BG_GRA_RED"> 關閉視窗</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mb-3">
          <div class="card text">
            <h5 class="card-header"></h5>
            <div class="card-body">
              <div class="from-group">
                <h2>標題欄</h2>
                <div class="form-row mt-1 mb-2">
                  <div class="col-12">
                    <input type="text" class="form-control" id="value" placeholder="僅限二十二個字的標題。" maxlength="22" v-model.trim="title.text">
                  </div>
                  <div class="col-12 .row mt-3">
                    <div class="form-check form-check-inline btn-group-toggle" data-toggle="buttons">
                      <label class="btn" for="titleColor" :class="title.isColor? 'btn-secondary': 'btn-outline-secondary '"> 顏色
                        <input type="checkbox" checked autocomplete="off" id="titleColor" v-model.trim="title.isColor">
                      </label>
                      <input class="form-control ml-2" type="text" maxlength="7" v-if="title.isColor" v-model.trim="title.colorPick" :style="{background:title.colorPick}">
                    </div>
                  </div>
                </div>
              </div>
              <div class="from-group">
                <h2>內文</h2>
                <div class="form-row mt-1 mb-2">
                  <div class="col-12">
                    <input type="text" class="form-control" placeholder="輔助內文。" maxlength="22" v-model.trim="content.text">
                  </div>
                  <div class="col-12 .row mt-3">
                    <div class="form-check form-check-inline btn-group-toggle" data-toggle="buttons">
                      <label class="btn" for="contentColor" :class="content.isColor? 'btn-secondary': 'btn-outline-secondary '"> 顏色
                        <input  type="checkbox" checked autocomplete="off" id="contentColor" v-model.trim="content.isColor">
                      </label>
                      <input class="form-control ml-2" type="text" maxlength="7" v-if="content.isColor" v-model.trim="content.colorPick" :style="{ background :content.colorPick}">
                    </div>
                  </div>
                </div>
              </div>
              <div class="from-group">
                <h2>Youtube連結</h2>
                <div class="mt-1 mb-2">
                  <input type="text" class="form-control" v-model="src">
                </div>
                <div class="my-1">
                  <input type="checkbox" v-model="isAutoPlay" id="isAutoPlay">
                  <label for="isAutoPlay" > 自動撥放</label>
                </div>
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
                  <div class="from-group">
                    <div class="mt-1">
                      <h2>按鈕文字</h2>
                      <div>
                        <input type="text" class="form-control" placeholder="查看命盤" maxlength="22" v-model.trim="button.text">
                      </div>
                    </div>
                    <div class="btns p2 mt-1 ">
                        <button class="btn btn-outline-primary " type="checkbox" id="isbuttonOne" v-model.trim="button.isOne" @click="isButtonOn">僅留下{{button.text}}</button>
                        <button class="btn btn-outline-success " type="checkbox" id="isbuttonOnClose" v-model.trim="button.isOne" @click="isButtonOnClose">僅留下關閉視窗</button>
                    </div>
                  </div>
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
        isAutoPlay: false,
        title: {
          text: "我是一段僅限二十二個字的標題，而且是系統字。",
          isColor: false,
          colorPick: ""
        },
        content: {
          text: "我是一段內文標題，標題測試測試測試，標題測試測 試測試",
          isColor: false,
          colorPick: ""
        },
        button: {
          isOne: false,
          text: "查看命盤"
        },
        src:
          "https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164",
        buttonText: "立即加入",
        BGColor: "#eeeeee"
      };
    },
    components:{
      Buttonborder,
      Buttonbgcolor
    },
    methods: {
      changeColor(e) {
        const heading = document.getElementById("BT_COLOUR").classList;
        const price = document.getElementById("BT_PRICE").classList;
        const gradient = e.target.id;
        price.replace(price[3],gradient)
        heading.replace(heading[2],gradient)

      },
      changeBorder(e){
        const heading = document.getElementById("BT_COLOUR").classList;
        const price = document.getElementById("BT_PRICE").classList;
        const border = e.target.id;
        console.log(price)
        price.replace(price[2],border)
        heading.replace(heading[1],border)

      },
      isButtonOn(e){
        const buttonTwo = document.querySelector('.TWO')
        buttonTwo.remove()
        const buttnSet=document.querySelector('.pq_e_BT');
        var data = document.querySelector('.pq_e_BT').dataset;
        let datanum = JSON.parse(JSON.stringify(data));
        let datakey = Object.keys(datanum)[0]
        buttnSet.innerHTML=`
            <ul data-${datakey}  class="ONE">
              <li data-${datakey} >
                <a data-${datakey} href="#" id="BT_COLOUR" class="pq_BT_SROUND  pq_BG_GRA_RED" > ${this.button.text}</a>
              </li>
            </ul>
            `
      },
      isButtonOnClose(e){
        const buttonTwo = document.querySelector('.TWO')
        buttonTwo.remove()
        const buttnSet=document.querySelector('.pq_e_BT');
        var data = document.querySelector('.pq_e_BT').dataset;
        let datanum = JSON.parse(JSON.stringify(data));
        let datakey = Object.keys(datanum)[0]
        buttnSet.innerHTML=`
            <ul data-${datakey}  class="ONE">
              <li data-${datakey} >
                <a data-${datakey} href="#" id="BT_COLOUR" class="pq_BT_SROUND  pq_BG_GRA_RED" > 關閉視窗</a>
              </li>
            </ul>
            `
      }
    },
    computed: {
      viedoChange() {
        return this.src.replace(/watch\?v=/, "embed/",/&t=\w{2,}/,'  ');
      }
    }
  };
</script>
<style scoped lang="scss">
@import "../public/css/all.scss";
#INPUT_BOX{
  width: 580px;
  height: 460px;
  position: relative;
  background-color: #fffcf2;
  border: 1px solid #ffc400;
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
  opacity: 0.5;
  z-index: 3;
  &:hover {
    opacity: 1;
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
  width: 100%;
  overflow: hidden;
  padding-top: 10px;
}
.video {
  width: 560px;
  height: 310px;
  margin: 0 auto;
  .player__video {
    position: absolute;
  }
}
.BOX_BG_TEXT {
  height: 80px;
  .TITLE{
    width: 100%;
    padding: 8px 0px;
    height: 50px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  .CONTENT{
    width: 100%;
    font-size: 16px;
    margin-left: 8px;
    font-weight: bold;
  }
}

.pq_e_BT{
  clear: both;
  width: 100%;
  height: auto;
  margin: 0 auto;
  .TWO{
    width: 80%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    li{
      width: 50%;
      float: left;
    }
    .popbtn{
      display: block;
      width: 160px;
      height: 45px;
      font-size: 23px;
      padding: 5px 0;
      color: #ffffff;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      margin: 0 auto;
    }
    .pq_BT_SROUND{
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
    }
  }
}
.BOX_BG .pq_e_BT ul.TWO li.onebtn {
  float: none;
  width: 100%;
}

</style>


