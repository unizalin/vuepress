<template>
<div class="row">
  <div class="codeinfo col-12 mb-3">
    <div id="INPUT_BOX">
      <div class="BOX_TOP">
        <a onclick="document.getElementById('INPUT_BOX').style.display='none';return false;" href="#" class="X"></a>
        <div class="BOX_BG">
          <p class="TITLE" :style="{color:title.colorPick}">{{title.text}}</p>
          <form action="" class="wq-form" id="form">
            <div class="wq-group">
              <div class="wq-datetime-group">
                <ul class="FORM">
                  <li style="width:80%;" :style="{width: hidden.isSex? '100%': '80%' , paddingRight: hidden.isSex? '0%': '1%'}">
                    <input type="text" name="NickName1" class="wq-input" placeholder="請輸入您的姓名" />
                  </li>
                  <li style="width:20%;" :style="{display: hidden.isSex? 'none':'block'}">
                    <select name="iSex1" class="wq-select" data-type="sex"></select>
                  </li>
                  <li style="width:100%;" :style="{display: hidden.isCalendar? 'none':'block'}">
                    <select name="Calendar1" class="wq-select" data-type="calendar" ></select>
                  </li>
                  <li style="width:35%; padding-right: 1%;">
                    <select name="iYear1" class="wq-select" data-type="year" data-value="1985"></select>
                  </li>
                  <li style="width:35%; padding-right: 1%;">
                    <select name="iMonth1" class="wq-select" data-type="month"></select>
                  </li>
                  <li style="width:30%;">
                    <select name="iDay1" class="wq-select" data-type="day"></select>
                  </li>
                  <li style="width:100%;">
                    <select name="iHour1" class="wq-select" data-type="hour"></select>
                  </li>
                  <li style="width:100%;" :style="{display: hidden.isEmotion? 'none':'block'}" >
                    <div class="styled-select">
                      <select class="wq-select wq-extra" id="_emotion_type" name="emotion_type">
                        <option v-for="(item,idx) in emotions" :key="idx" :value="item.value">{{item.text}}</option>
                      </select>
                    </div>
                  </li>
                  <li style="width:100%;" :style="{display: hidden.isChild? 'none':'block'}">
                    <div class="styled-select">
                      <select class="wq-select wq-extra" id="_child_type" name="child_type">
                        <option v-for="(item,idx) in childs" :key="idx" :value="item.value">{{item.text}}</option>
                      </select>
                    </div>
                  </li>
                  <li style="width:100%; margin-bottom:10px;" :style="{display: hidden.isCareer? 'none':'block'}">
                    <div class="styled-select">
                      <select class="wq-select wq-extra" id="_career_type" name="career_type">
                        <option v-for="(item,idx) in careers" :key="idx" :value="item.value">{{item.text}}</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </form>
          <div class="pq_e_BT">
            <ul class="ONE">
              <li><a id="BT_COLOUR" class="popbtn pq_BT_SROUND pq_BG_GRA_RED checkGo_free" data-href="free.php" href="#">{{buttonText}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 mb-3">
    <div class="card text">
      <h5 class="card-header"></h5>
      <div class="card-body">
        <div class="from-group">
          <div class="form-row mb-2">
            <div class="col">
              <label for="titleText">標題</label>
              <input type="text" class="form-control mt-2" id="titleText" placeholder="完整鑑定" v-model="title.text">
            </div>
            <div class="col">
              <label for="titleColor">顏色</label>
              <input type="text" class="form-control mt-2" id="titleColor" maxlength="7" placeholder="#e6e6e6" v-model.trim="title.colorPick" :style="{background:title.colorPick}">
            </div>
          </div>

          <div class="hideChosen">
            <h2>隱藏選項</h2>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <div class="btn-group-toggle" data-toggle="buttons">
                <label class="btn" for="isSex" :class="hidden.isSex? 'btn-outline-info': 'btn-info'"> {{hidden.isSex? '性別已隱藏': '性別已顯示'}}
                  <input type="checkbox" checked autocomplete="off" id="isSex" v-model="hidden.isSex">
                </label>
              </div>
              <div class="btn-group-toggle ml-2" data-toggle="buttons">
                <label class="btn" :class="hidden.isCalendar? 'btn-outline-info': 'btn-info'" for="isCalendar">{{hidden.isCalendar? '農曆已隱藏': '農曆已顯示'}}
                  <input type="checkbox" checked autocomplete="off" id="isCalendar" v-model="hidden.isCalendar">
                </label>
              </div>
            </div>
            <div class="btn-group btn-group-toggle my-1" data-toggle="buttons">
              <div class="btn-group-toggle" data-toggle="buttons">
                <label class="btn" for="hiddenEmotion" :class="hidden.isEmotion? 'btn-outline-primary': 'btn-primary'"> {{hidden.isEmotion? '感情已隱藏': '感情已顯示'}}
                  <input type="checkbox" checked autocomplete="off" id="hiddenEmotion" v-model="hidden.isEmotion">
                </label>
              </div>
              <div class="btn-group-toggle ml-2" data-toggle="buttons">
                <label class="btn" :class="hidden.isChild? 'btn-outline-secondary': 'btn-secondary'" for="hiddenChild">{{hidden.isChild? '子息已隱藏': '子息已顯示'}}
                  <input type="checkbox" checked autocomplete="off" id="hiddenChild" v-model="hidden.isChild">
                </label>
              </div>
              <div class="btn-group-toggle ml-2" data-toggle="buttons">
                <label class="btn" :class="hidden.isCareer? 'btn-outline-success': 'btn-success'" for="hiddenCareer">{{hidden.isCareer? '事業已隱藏': '事業已顯示'}}
                  <input type="checkbox" checked autocomplete="off" id="hiddenCareer" v-model="hidden.isCareer">
                </label>
              </div>
            </div>
          </div>

          <div class="editChosen mt-1">
            <h2 class="mb-1">現況編輯</h2>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <div class="btn-group-toggle" data-toggle="buttons">
                <label class="btn  item" :class="content.isEmotion? 'btn-primary': 'btn-outline-primary'" for="isEmotion">感情
                  <input type="checkbox" checked autocomplete="off" id="isEmotion" v-model="content.isEmotion" >
                </label>
              </div>
              <div class="btn-group-toggle ml-2" data-toggle="buttons">
                <label class="btn  item" :class="content.isChild? 'btn-secondary' : 'btn-outline-secondary'" for="isChild">子息
                  <input type="checkbox" checked autocomplete="off" id="isChild" v-model="content.isChild">
                </label>
              </div>
              <div class="btn-group-toggle ml-2" data-toggle="buttons">
                <label class="btn  item" :class="content.isCareer? 'btn-success' : 'btn-outline-success'" for="isCareer">事業
                  <input type="checkbox" checked autocomplete="off" id="isCareer" v-model="content.isCareer">
                </label>
              </div>
            </div>
          </div>

          <div class="emotionEdit my-1 border border-primary row "  data-index="1" id="emotion":style="{display: content.isEmotion? 'flex':'none'}">
            <div v-for="(item,idx) in emotions" :key="idx" :id="idx">
              <div class="mt-2" style="display: flex">
                <div class="col-4">
                  <input type="text" class="form-control" :placeholder="item.text" v-model.trim="item.text" >
                </div>
                <div class="col-2">
                  <input type="text" class="form-control"  :placeholder="item.value" v-model.trim="item.value">
                </div>
                <div class="col-4">
                  <button class="btn btn-danger form-control" v-on:click="emotinRemove(idx)"> 刪除 </button>
                </div>
              </div>
            </div>
            <hr/>
            <div class="form-row m-2" style="display: flex" >
              <div class="col-4">
                <input type="text" class="form-control" placeholder="新選項" v-model.trim="emotionInput.title" >
              </div>
              <div class="col-2">
                <input type="text" class="form-control"  placeholder="新值" v-model.trim="emotionInput.value">
              </div>
              <div class="col-4">
                <button class="btn btn-primary" v-on:click="emotionAdd"> + </button>
              </div>
            </div>
          </div>

          <div class="childEdit mt-1 border border-secondary row "  data-index="2" :style="{display: content.isChild? 'flex':'none'}">
            <div v-for="(item,idx) in childs" :key="idx" :id="idx">
              <div class="mt-2" style="display: flex">
                <div class="col-4">
                  <input type="text" class="form-control" :placeholder="item.text" v-model.trim="item.text" >
                </div>
                <div class="col-2">
                  <input type="text" class="form-control"  :placeholder="item.value" v-model.trim="item.value">
                </div>
                <div class="col-4">
                  <button class="btn btn-danger form-control" v-on:click="emotinRemove(idx)"> 刪除 </button>
                </div>
              </div>
            </div>
            <hr/>
            <div class="form-row m-2" style="display: flex" >
              <div class="col-4">
                <input type="text" class="form-control" placeholder="新選項" v-model.trim="childInput.title" >
              </div>
              <div class="col-2">
                <input type="text" class="form-control"  placeholder="新值" v-model.trim="childInput.value">
              </div>
              <div class="col-4">
                <button class="btn btn-primary" v-on:click="childAdd"> + </button>
              </div>
            </div>
          </div>

          <div class="careerEdit mt-1 border border-success row "  data-index="3" :style="{display: content.isCareer? 'flex':'none'}">
            <div v-for="(item,idx) in careers" :key="idx" :id="idx">
              <div class="mt-2" style="display: flex">
                <div class="col-4">
                  <input type="text" class="form-control" :placeholder="item.text" v-model.trim="item.text" >
                </div>
                <div class="col-2">
                  <input type="text" class="form-control"  :placeholder="item.value" v-model.trim="item.value">
                </div>
                <div class="col-4">
                  <button class="btn btn-danger form-control" v-on:click="careerRemove(idx)"> 刪除 </button>
                </div>
              </div>
            </div>
            <hr/>
            <div class="form-row m-2" style="display: flex" >
              <div class="col-4">
                <input type="text" class="form-control" placeholder="新選項" v-model.trim="careerInput.title" >
              </div>
              <div class="col-2">
                <input type="text" class="form-control"  placeholder="新值" v-model.trim="careerInput.value">
              </div>
              <div class="col-4">
                <button class="btn btn-primary " v-on:click="careerAdd"> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12">
    <div class="card button">
      <h5 class="card-header"></h5>
      <div class="card-body">
        <div class="mt-2 mb-2">
          <label class="form-check-label">按鈕文字</label>
          <input type="text" class="form-control" placeholder="立即加入" maxlength="22" v-model.trim="buttonText">
        </div>
            <div class="mt-2">
              <label>按鈕邊框</label>
              <div class="btns p2 mt-2">
                <div class="mt-2">
              <label>按鈕邊框</label>
              <div class="btns p2 mt-2">
                <div class="col mt-2 p-0 d-flex flex-wrap align-content-between justify-content-between">
                  <button type="button" v-on:click="changeBorder" class="btn btn-outline-primary rounded-0 mt-2" id="pq_BT_REC">直角</button>
                  <button type="button" v-on:click="changeBorder" class="btn btn-outline-secondary mt-2" style="border-radius : 5px" id="pq_BT_SROUND">小圓角</button>
                  <button type="button" v-on:click="changeBorder" class="btn btn-outline-success mt-2" style="border-radius : 10px" id="pq_BT_ROUND">圓角</button>
                  <button type="button" v-on:click="changeBorder" class="btn btn-outline-warning mt-2" style="border-radius : 40px" id="pq_BT_BROUND">大橢圓</button>
                </div>
              </div>
            </div>
              </div>
            </div>
            <div class="mt-2">
              <label>漸層按鈕</label>
              <div class="btns p2 mt-2 ">
                <div class="col mt-2 p-0 d-flex flex-wrap align-content-between justify-content-between">
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_RED mt-2" id="pq_BG_GRA_RED"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PINK01 mt-2" id="pq_BG_GRA_PINK01"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PINK02 mt-2" id="pq_BG_GRA_PINK02"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_ORANGE01 mt-2" id="pq_BG_GRA_ORANGE01"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_ORANGE02 mt-2" id="pq_BG_GRA_ORANGE02"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_GREEN mt-2" id="pq_BG_GRA_GREEN"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_BLUE01 mt-2" id="pq_BG_GRA_BLUE01"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_BLUE02 mt-2" id="pq_BG_GRA_BLUE02"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PURPLE01 mt-2" id="pq_BG_GRA_PURPLE01"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GRA_PURPLE02 mt-2" id="pq_BG_GRA_PURPLE02"></button>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <label>單色</label>
              <div class="btns p2 mt-2 ">
                <div class="col mt-2 p-0 d-flex flex-wrap align-content-between justify-content-between">
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_RED mt-2" id="pq_BG_RED"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PINK01 mt-2" id="pq_BG_PINK01"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PINK02 mt-2" id="pq_BG_PINK02"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_ORANGE01 mt-2" id="pq_BG_ORANGE01"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_ORANGE02 mt-2" id="pq_BG_ORANGE02"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_GREEN mt-2" id="pq_BG_GREEN"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_BLUE01 mt-2" id="pq_BG_BLUE01"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_BLUE02 mt-2" id="pq_BG_BLUE02"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PURPLE01 mt-2" id="pq_BG_PURPLE01"></button>
                  <button type="button" v-on:click="changeColor" class="btn btn-lg pq_BG_PURPLE02 mt-2" id="pq_BG_PURPLE02"></button>
                </div>
              </div>
            </div>
      </div>
    </div>
  </div>
</div>



</template>


<script>
import Buttonborder from './buttonStyle/button-border';
import Buttonbgcolor from './buttonStyle/button-bgcolor';

  export default {
    data() {
      return {
        title: {
          text: "標題",
          colorPick: ""
        },
        hidden: {
          isSex: false,
          isClander: false,
          isEmotion: false,
          isChild: false,
          isCareer: false,
        },
        content: {
          isEmotion: false,
          isChild: false,
          isCareer: false,
        },
        emotionInput: {
          title: "",
          value: ""
        },
        emotions: [
          {
            text: "請選擇你的感情現況",
            value: "-1"
          },
          {
            text: "單身",
            value: "8"
          },
          {
            text: "交往中",
            value: "9"
          },
          {
            text: "已婚",
            value: "11"
          }
        ],
        childInput: {
          title: "",
          value: ""
        },
        childs: [
          {
            text: "請選擇你的子息現況",
            value: "-1"
          },
          {
            text: "無子息",
            value: "0"
          },
          {
            text: "有子息",
            value: "1"
          }
        ],
        careerInput: {
          title: "",
          value: ""
        },
        careers: [
          {
            text: "請選擇你的事業現況",
            value: "-1"
          },
          {
            text: "受雇基層",
            value: "4"
          },
          {
            text: "受雇主管",
            value: "3"
          },
          {
            text: "老闆",
            value: "2"
          },
          {
            text: "待業中",
            value: "5"
          },
          {
            text: "家管",
            value: "6"
          },
          {
            text: "其他",
            value: "8"
          }
        ],
        buttonText: "免費體驗",
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
        const gradient = e.target.id;
        heading.replace(heading[2],e)
      },
      changeBorder(e){
        const heading = document.getElementById("BT_COLOUR").classList;
        heading.replace(heading[1],e)
      },
      emotionAdd(){
        this.emotions.push({
          text:  this.emotionInput.title,
          value: this.emotionInput.value
        });
        this.emotionInput.title = '';
        this.emotionInput.value = '';
      },
      emotinRemove(idx) {
        this.emotions.splice(idx,1)
      },
      childAdd(){
        this.childs.push({
          text:  this.childInput.title,
          value: this.childInput.value
        });
        this.childInput.title = '';
        this.childInput.value = '';
      },
      childRemove(idx) {
        this.childs.splice(idx,1)
      },
      careerAdd() {
        this.careers.push({
          text: this.careerInput.title,
          value: this.careerInput.value
        });
        this.careerInput.title = "";
        this.careerInput.value = "";
      },
      careerRemove(idx) {
        this.careers.splice(idx,1);
      }
    }
  };


</script>
<style scoped lang="scss">
@import "../public/css/all.scss";
*{
  border: 1px solid black;
}
ul.FORM > li {
  background: #fff;
}
ul.FORM p {
  /*反饋紅字*/
  font-size: 1em;
  color: #cc0000;
  font-weight: bold;
}

ul.FORM {
  clear: both;
  width: 100%;
  margin: 0 auto;
}
ul.FORM li {
  width: 100%;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-bottom: 8px;
}

::-webkit-input-placeholder {
  font-size: 1em;
  color: #999;
}

:-moz-placeholder {
  /* Firefox 18- */
  font-size: 1em;
  color: #999;
}
::-moz-placeholder {
  /* Firefox 19+ */
  font-size: 1em;
  color: #999;
}

:-ms-input-placeholder {
  font-size: 1em;
  color: #999;
}
#INPUT_BOX{
  // position: fixed;
  width: 500px;
  height: 100%;
  max-height: 480px;
  height: 100%;
  background-color: #fffcf2;
  border: 1px solid #ffc400;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 16px rgba($color: #000000, $alpha: 0.4);

  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);
  // z-index: 9;
}
.BOX_TOP a.X {
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  background-color: grey;
  opacity: 0.3;
  top: 0;
  right: 0;
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
  width: 95%;
  height: auto;
  margin: 0 auto;
}
.BOX_BG > .TITLE {
  width: 100%;
  height: 70px;
  padding: 15px;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
}
.pq_e_BT{
  clear: both;
  width: 90%;
  height: auto;
  margin: 0 auto;
  padding: 10px 0 18px 0;
  .ONE{
    width: 100%;
    height: auto;
    margin:0 auto;
    overflow: hidden;
    li{
      width: 50%;
      margin: 0 auto;
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

</style>


