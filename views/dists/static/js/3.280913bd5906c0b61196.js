webpackJsonp([3],{"8A9D":function(t,a,e){var s=e("LIWY");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("2a5b00be",s,!0,{})},LIWY:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},UMK0:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={name:"home",data:function(){return{value:"1",buyCarNum:"0",imgData:[{img:"detail_1.png"},{img:"detail_1.png"},{img:"detail_1.png"}],goodsDetail:{},data:[{prize:2800,decs:"适合于个人工作室",content:["博卡白色一体机 (原价¥1500)","智慧收银台软件 (原价¥600)","三年年费赠送 (原价¥1800)","靓丽微店 (原价¥999)","摄像头","专业级组网（含路由器）","电视-IPTV电视","固话","100宽带"]},{prize:3800,decs:"适合于创业型小店或夫妻老婆店",content:["博卡黑色一体机 (原价¥2299)","智慧收银台软件 (原价¥600)","三年年费赠送 (原价¥1800)","靓丽微店 (原价¥999)","摄像头","专业级组网（含路由器）","电视-IPTV电视","固话","100宽带"]},{prize:3800,decs:"适合于连锁门店，经营规范，管理细致",content:["博卡黑色一体机 (原价¥2299)","智慧收银台软件 (原价¥600)","三年年费赠送 (原价¥1800)","扫码盒(原价¥199)＋手牌读卡器(原价¥199)+50个手牌 (带有博 卡logo，黄底黑字，直径35毫米正圆形)  ","摄像头","专业级组网（含路由器）","电视-IPTV电视","固话","100宽带"]}]}},created:function(){try{this.buyCarNum=JSON.parse(this.Cookies.get("buyCar")).length}catch(t){console.log("err")}var t=this.$route.query.type;this.goodsDetail=this.data[t]},methods:{onClickLeft:function(){this.$router.go(-1)},joinShopCar:function(){var t=this.Cookies.get("buyCar"),a=void 0;a=t?JSON.parse(t):[];var e={name:"美业套餐",prize:this.goodsDetail.prize};a.push(e),this.buyCarNum=a.length,this.Cookies.set("buyCar",a)},jumpToCart:function(){this.$router.push({path:"/cart"})}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"comboDetail"},[e("van-nav-bar",{staticClass:"header",attrs:{title:["低级套餐","中级套餐","高级套餐"][t.$route.query.type],"left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}},[e("div",{attrs:{slot:"left"},slot:"left"},[e("img",{staticClass:"close",attrs:{src:this.imgUrl+"back_arrow.png",alt:""}})])]),t._v(" "),e("div",{staticStyle:{height:"44px"}}),t._v(" "),e("van-swipe",{staticClass:"swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.imgData,function(a,s){return e("van-swipe-item",{key:"swipe"+s},[e("img",{attrs:{src:t.imgUrl+a.img}})])})),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"top"},[e("div",{staticClass:"prize"},[t._v("\n        ￥"),e("span",[t._v(t._s(t.goodsDetail.prize))]),t._v("/月\n      ")]),t._v(" "),e("div",{staticClass:"docs"},[t._v("\n        "+t._s(t.goodsDetail.decs)+"\n      ")])]),t._v(" "),e("ul",{staticClass:"goodsContent"},t._l(t.goodsDetail.content,function(a,s){return e("li",{key:"content"+s},[t._v(t._s(a))])})),t._v(" "),e("div",{staticClass:"amount"},[e("div",{staticClass:"text"},[t._v("购买数量")]),t._v(" "),e("van-stepper",{attrs:{integer:""},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),t._v(" "),e("div",{staticClass:"buy_car",on:{click:t.jumpToCart}},[e("img",{attrs:{src:t.imgUrl+"float_car.png",alt:""}}),t._v(" "),e("div",{staticClass:"num"},[e("span",[t._v(t._s(t.buyCarNum))])])]),t._v(" "),e("div",{staticClass:"buy_part"},[e("van-button",{attrs:{type:"default"},on:{click:function(a){t.joinShopCar()}}},[t._v("加入购物车")]),t._v(" "),e("van-button",{attrs:{to:"/register",type:"info"}},[t._v("预约网格经理")])],1)])],1)},staticRenderFns:[]};var o=e("VU/8")(s,i,!1,function(t){e("8A9D")},"data-v-30c2ebea",null);a.default=o.exports}});