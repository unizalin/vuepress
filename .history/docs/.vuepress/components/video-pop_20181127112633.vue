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
                  <a href="#" id="BT_PRICE" class="popbtn pq_BT_PRICE pq_BT_SROUND  pq_BG_GRA_RED"> 關閉視窗</a>
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
    methods: {
      changeColor(e) {
        const heading = document.getElementById("BT_COLOUR").classList;
        const price = document.getElementById("BT_PRICE").classList;
        const gradient = e.target.id;
        price.replace(price[2],gradient)
        heading.replace(heading[1],gradient)

      },
      changeBorder(e){
        const heading = document.getElementById("BT_COLOUR").classList;
        const price = document.getElementById("BT_PRICE").classList;
        const border = e.target.id;
        price.replace(price[1],border)
        heading.replace(heading[0],border)

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
/*直角*/
.pq_BT_REC{
  display: block;
  width: 160px;
  height: 45px;
  display: block;
  color: #ffffff;
  cursor: pointer;
  margin: 0 auto;
  font-size: 23px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 0px;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
}
/*小圓角 */
.pq_BT_SROUND{
  display: block;
  width: 160px;
  height: 45px;
  display: block;
  color: #ffffff;
  cursor: pointer;
  margin: 0 auto;
  font-size: 23px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
/*圓角 */
.pq_BT_ROUND{
  display: block;
  width: 160px;
  height: 45px;
  display: block;
  color: #ffffff;
  cursor: pointer;
  margin: 0 auto;
  font-size: 23px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}
/*大園角*/
.pq_BT_BROUND{
  display: block;
  width: 160px;
  height: 45px;
  display: block;
  color: #ffffff;
  cursor: pointer;
  margin: 0 auto;
  font-size: 23px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 40px;
  -moz-border-radius: 40px;
  -webkit-border-radius: 40px;
}

.pq_BG_GRA_RED{
  color: #ffffff;
	border:1px solid #a30000;
	background: #ff0000; /* Old browsers */
	background: -webkit-linear-gradient(#ff0000 0%, #b90000 100%);
	background: -o-linear-gradient(#ff0000 0%, #b90000 100%);
	background: linear-gradient(#ff0000 0%, #b90000 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0000', endColorstr='#b90000',GradientType=0 ); /* IE6-9 */
	-moz-box-shadow:inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
    color:#fff9bc;
    background: #b90000; /* Old browsers */
    background: -moz-linear-gradient(top, #b90000 0%, #ff0000 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #b90000 0%,#ff0000 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #b90000 0%,#ff0000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b90000', endColorstr='#ff0000',GradientType=0 ); /* IE6-9 */
  }
}


.pq_BG_GRA_PINK01{
  color: #ffffff;
  border:1px solid #e2005a;
	background: #ff0090; /* Old browsers */
	background: -webkit-linear-gradient(#ff0090 0%, #e2005a 100%);
	background: -o-linear-gradient(#ff0090 0%, #e2005a 100%);
	background: linear-gradient(#ff0090 0%, #e2005a 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0090', endColorstr='#e2005a',GradientType=0 ); /* IE6-9 */
	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover {
	color:#fff9bc;
	background: #e2005a; /* Old browsers */
	background: -moz-linear-gradient(top, #e2005a 0%, #ff0090 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #e2005a 0%,#ff0090 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #e2005a 0%,#ff0090 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2005a', endColorstr='#ff0090',GradientType=0 ); /* IE6-9 */
  }
}

/*粉色02  */
.pq_BG_GRA_PINK02{
  color: #ffffff;
	border:1px solid #da0061;
	background: #ff8dc0; /* Old browsers */
	background: -webkit-linear-gradient(#ff8dc0 0%, #ff4f9e 100%);
	background: -o-linear-gradient(#ff8dc0 0%, #ff4f9e 100%);
	background: linear-gradient(#ff8dc0 0%, #ff4f9e 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8dc0', endColorstr='#ff4f9e',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #ff4f9e; /* Old browsers */
	background: -moz-linear-gradient(top, #ff4f9e 0%, #ff8dc0 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #ff4f9e 0%,#ff8dc0 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #ff4f9e 0%,#ff8dc0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff4f9e', endColorstr='#ff8dc0',GradientType=0 ); /* IE6-9 */
  }
}
/*粉色02*/

/*橘黃色01  */
.pq_BG_GRA_ORANGE01{
  color: #ffffff;
	border:1px solid #fe6600;
	background: #ff7200; /* Old browsers */
	background: -webkit-linear-gradient(#ff7200 0%, #e93700 100%);
	background: -o-linear-gradient(#ff7200 0%, #e93700 100%);
	background: linear-gradient(#ff7200 0%, #e93700 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff7200', endColorstr='#e93700',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #e93700; /* Old browsers */
	background: -moz-linear-gradient(top, #e93700 0%, #ff7200 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #e93700 0%,#ff7200 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #e93700 0%,#ff7200 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e93700', endColorstr='#ff7200',GradientType=0 ); /* IE6-9 */
  }
}
/*橘黃色01*/

/*橘黃色02  */
.pq_BG_GRA_ORANGE02{
  color: #ffffff;
	border:1px solid #ff8800;
	background: #ffa946; /* Old browsers */
	background: -webkit-linear-gradient(#ffa946 0%, #ff8800 100%);
	background: -o-linear-gradient(#ffa946 0%, #ff8800 100%);
	background: linear-gradient(#ffa946 0%, #ff8800 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffa946', endColorstr='#ff8800',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #ff8800; /* Old browsers */
	background: -moz-linear-gradient(top, #ff8800 0%, #ffa946 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #ff8800 0%,#ffa946 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #ff8800 0%,#ffa946 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8800', endColorstr='#ffa946',GradientType=0 ); /* IE6-9 */
}
}
/*橘黃色02*/

/*綠色01*/
.pq_BG_GRA_GREEN{
  color: #ffffff;
	background: #81b907; /* Old browsers */
	background: -webkit-linear-gradient(#81b907 0%, #347f0b 100%);
	background: -o-linear-gradient(#81b907 0%, #347f0b 100%);
	background: linear-gradient(#81b907 0%, #347f0b 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#81b907', endColorstr='#347f0b',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #347f0b; /* Old browsers */
	background: -moz-linear-gradient(top, #347f0b 0%, #81b907 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #347f0b 0%,#81b907 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #347f0b 0%,#81b907 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#347f0b', endColorstr='#81b907',GradientType=0 ); /* IE6-9 */
  }
}
/*綠色01*/

/*藍色01*/
.pq_BG_GRA_BLUE01{
  color: #ffffff;
	border:1px solid #013c9b;
	background: #009bf9; /* Old browsers */
	background: -webkit-linear-gradient(#009bf9 0%, #013796 100%);
	background: -o-linear-gradient(#009bf9 0%, #013796 100%);
	background: linear-gradient(#009bf9 0%, #013796 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#009bf9', endColorstr='#013796',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #013796; /* Old browsers */
	background: -moz-linear-gradient(top, #013796 0%, #009bf9 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #013796 0%,#009bf9 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #013796 0%,#009bf9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#013796', endColorstr='#009bf9',GradientType=0 ); /* IE6-9 */
  }
}
/*藍色01*/

/*藍色02*/
.pq_BG_GRA_BLUE02{
  color: #ffffff;
	border:1px solid #0061b3;
	background: #4badff; /* Old browsers */
	background: -webkit-linear-gradient(#4badff 0%, #3a8ed5 100%);
	background: -o-linear-gradient(#4badff 0%, #3a8ed5 100%);
	background: linear-gradient(#4badff 0%, #3a8ed5 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4badff', endColorstr='#3a8ed5',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #3a8ed5; /* Old browsers */
	background: -moz-linear-gradient(top, #3a8ed5 0%, #4badff 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #3a8ed5 0%,#4badff 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #3a8ed5 0%,#4badff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3a8ed5', endColorstr='#4badff',GradientType=0 ); /* IE6-9 */
  }
}
/*藍色02*/

/*紫色01*/
.pq_BG_GRA_PURPLE01{
  color: #ffffff;
	border:1px solid #760b6a;
	background: #b34fa8; /* Old browsers */
	background: -webkit-linear-gradient(#b34fa8 0%, #760b6a 100%);
	background: -o-linear-gradient(#b34fa8 0%, #760b6a 100%);
	background: linear-gradient(#b34fa8 0%, #760b6a 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b34fa8', endColorstr='#760b6a',GradientType=0 ); /* IE6-9 */

	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #760b6a; /* Old browsers */
	background: -moz-linear-gradient(top, #760b6a 0%, #b34fa8 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #760b6a 0%,#b34fa8 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #760b6a 0%,#b34fa8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#760b6a', endColorstr='#b34fa8',GradientType=0 ); /* IE6-9 */
  }
}
/*紫色01*/

/*紫色02*/
.pq_BG_GRA_PURPLE02{
  color: #ffffff;
	border:1px solid #a027fe;
	background: #cc66ff; /* Old browsers */
	background: -webkit-linear-gradient(#cc66ff 0%, #a027fe 100%);
	background: -o-linear-gradient(#cc66ff 0%, #a027fe 100%);
	background: linear-gradient(#cc66ff 0%, #a027fe 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc66ff', endColorstr='#a027fe',GradientType=0 ); /* IE6-9 */
	-moz-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	-webkit-box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
	box-shadow:
		inset 0px 0px 2px rgba(255,255,255,1);
  &:hover{
	color:#fff9bc;
	background: #a027fe; /* Old browsers */
	background: -moz-linear-gradient(top, #a027fe 0%, #cc66ff 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #a027fe 0%,#cc66ff 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #a027fe 0%,#cc66ff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a027fe', endColorstr='#cc66ff',GradientType=0 ); /* IE6-9 */
  }
}
//////////////單色//////////////

/*紅色01*/
.pq_BG_RED{
  color: #ffffff;
	border:1px solid #a30000;
	background: #ff0000;
  &:hover{
	color:#fff9bc;
	background: #b90000; /* Old browsers */}}
/*紅色01*/
/*粉色01*/
.pq_BG_PINK01{
	color:  #ffffff;
  border:1px solid #e2005a;
	background: #ff0090; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #e2005a; /* Old browsers */
}
}

/*粉色01*/

/*粉色02*/
.pq_BG_PINK02{
  color:  #ffffff;
	border:1px solid #da0061;
	background: #ff8dc0; /* Old browsers */
  color: #ffffff;
  &:hover{
	color:#fff9bc;
	background: #ff4f9e; /* Old browsers */
}
}
/*粉色02*/

/*橘黃色01*/
.pq_BG_ORANGE01{
  color: #ffffff;
	border:1px solid #fe6600;
	background: #ff7200; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #e93700; /* Old browsers */
}
}
/*橘黃色01*/

/*橘黃色02*/
.pq_BG_ORANGE02{
  color:  #ffffff;
	border:1px solid #ff8800;
	background: #ffa946; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #ff8800; /* Old browsers */
}
}
/*橘黃色02*/

/*綠色01*/
.pq_BG_GREEN{
  color:  #ffffff;
	border:1px solid #347f0b;
	background: #81b907; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #347f0b; /* Old browsers */
}
}
/*綠色01*/

/*藍色01*/
.pq_BG_BLUE01{
  color:  #ffffff;
	border:1px solid #013c9b;
	background: #009bf9; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #013796; /* Old browsers */
}
}
/*藍色01*/

/*藍色02*/
.pq_BG_BLUE02{
  color:  #ffffff;
	border:1px solid #0061b3;
	background: #4badff; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #3a8ed5; /* Old browsers */
}
}
/*藍色02*/

/*紫色01*/
.pq_BG_PURPLE01{
	color: #ffffff;
  border:1px solid #760b6a;
	background: #b34fa8; /* Old browsers */
  &:hover{
	color:#fff9bc;
	background: #760b6a; /* Old browsers */
}
}
/*紫色01*/

/*紫色02*/
.pq_BG_PURPLE02{
	color:#ffffff;
  border:1px solid #a027fe;
	background: #cc66ff; /* Old browsers */
  &:hover{
  color:#fff9bc;
	background: #a027fe; /* Old browsers */
  }
}
/*紫色02*/
</style>


