<template>
    <div class="btn-bgcolor">
        <div class="mt-1">
            <label>漸層按鈕</label>
            <div class="btns p2 mt-1 ">
                <div class="col mt-1 p-0 d-flex flex-wrap  justify-content-between">
                    <button type="button"  class="btn btn-lg pq_BG_GRA_RED mt-1"      id="pq_BG_GRA_RED"></button>
                    <button type="button"  class="btn btn-lg pq_BG_GRA_PINK01 mt-1"   id="pq_BG_GRA_PINK01"></button>
                    <button type="button"  class="btn btn-lg pq_BG_GRA_PINK02 mt-1"   id="pq_BG_GRA_PINK02"></button>
                    <button type="button"  class="btn btn-lg pq_BG_GRA_ORANGE01 mt-1" id="pq_BG_GRA_ORANGE01"></button>
                    <button type="button"  class="btn btn-lg pq_BG_GRA_ORANGE02 mt-1" id="pq_BG_GRA_ORANGE02"></button>
                    <button type="button"  class="btn btn-lg pq_BG_GRA_GREEN mt-1"    id="pq_BG_GRA_GREEN"></button>
                    <button type="button"  class="btn btn-lg pq_BG_GRA_BLUE01 mt-1"   id="pq_BG_GRA_BLUE01"></button>
                    <button type="button"  class="btn btn-lg pq_BG_GRA_BLUE02 mt-1"   id="pq_BG_GRA_BLUE02"></button>
                    <button type="button"  class="btn btn-lg pq_BG_GRA_PURPLE01 mt-1" id="pq_BG_GRA_PURPLE01"></button>
                    <button type="button"  class="btn btn-lg pq_BG_GRA_PURPLE02 mt-1" id="pq_BG_GRA_PURPLE02"></button>
                </div>
            </div>
        </div>
        <div class="mt-1">
            <label>單色</label>
            <div class="btns p2 mt-1 ">
                <div class="col mt-1 p-0 d-flex flex-wrap  justify-content-between">
                    <button type="button"  class="btn btn-lg pq_BG_RED mt-1" id="pq_BG_RED"></button>
                    <button type="button"  class="btn btn-lg pq_BG_PINK01 mt-1" id="pq_BG_PINK01"></button>
                    <button type="button"  class="btn btn-lg pq_BG_PINK02 mt-1" id="pq_BG_PINK02"></button>
                    <button type="button"  class="btn btn-lg pq_BG_ORANGE01 mt-1" id="pq_BG_ORANGE01"></button>
                    <button type="button"  class="btn btn-lg pq_BG_ORANGE02 mt-1" id="pq_BG_ORANGE02"></button>
                    <button type="button"  class="btn btn-lg pq_BG_GREEN mt-1" id="pq_BG_GREEN"></button>
                    <button type="button"  class="btn btn-lg pq_BG_BLUE01 mt-1" id="pq_BG_BLUE01"></button>
                    <button type="button"  class="btn btn-lg pq_BG_BLUE02 mt-1" id="pq_BG_BLUE02"></button>
                    <button type="button"  class="btn btn-lg pq_BG_PURPLE01 mt-1" id="pq_BG_PURPLE01"></button>
                    <button type="button"  class="btn btn-lg pq_BG_PURPLE02 mt-1" id="pq_BG_PURPLE02"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style scoped lang="scss">
@import "../public/css/all.scss";

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