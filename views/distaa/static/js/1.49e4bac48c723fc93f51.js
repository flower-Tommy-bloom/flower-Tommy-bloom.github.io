webpackJsonp([1],{"/ao8":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},KR8f:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"home",data:function(){return{active:"套餐",tabbar:[{name:"套餐",to:"/combo",act:this.imgUrl+"combo_active.png",nor:this.imgUrl+"combo_normal.png"},{name:"单品",to:"/single",act:this.imgUrl+"single_act.png",nor:this.imgUrl+"single.png"},{name:"购物车",to:"/cart",act:this.imgUrl+"shoppingCar_act.png",nor:this.imgUrl+"shoppingCar.png"}]}},created:function(){window.aaa||(this.$router.push("/combo"),window.aaa=!0),console.log(this.$route)},methods:{onClickLeft:function(){},onClickRight:function(){}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("van-nav-bar",{staticClass:"header",attrs:{title:"广东移动智慧商铺","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[e("div",{attrs:{slot:"left"},slot:"left"},[e("img",{staticClass:"close",attrs:{src:this.imgUrl+"close.png",alt:""}})])]),t._v(" "),e("router-view"),t._v(" "),e("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.tabbar,function(a,n){return e("van-tabbar-item",{key:"tabbar"+n,attrs:{name:a.name,to:a.to},scopedSlots:t._u([{key:"icon",fn:function(a){return e("img",{attrs:{src:a.active?t.tabbar[n].act:t.tabbar[n].nor}})}}])},[e("span",[t._v(t._s(a.name))])])}))],1)},staticRenderFns:[]};var o=e("VU/8")(n,i,!1,function(t){e("iNN5")},"data-v-2d2d859e",null);a.default=o.exports},iNN5:function(t,a,e){var n=e("/ao8");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("16c101aa",n,!0,{})}});