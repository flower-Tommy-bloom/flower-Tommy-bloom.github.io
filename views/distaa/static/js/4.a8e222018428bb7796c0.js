webpackJsonp([4],{Y5cr:function(t,e,i){var n=i("wfTP");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("7aca0c46",n,!0,{})},dksj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comboist"},[i("van-nav-bar",{staticClass:"header",attrs:{title:"选择套餐","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}},[i("div",{attrs:{slot:"left"},slot:"left"},[i("img",{staticClass:"close",attrs:{src:this.imgUrl+"back_arrow.png",alt:""}})])]),t._v(" "),i("ul",[i("li",{on:{click:function(e){t.detail(0)}}},[t._v("低级套餐")]),t._v(" "),i("li",{on:{click:function(e){t.detail(1)}}},[t._v("中级套餐")]),t._v(" "),i("li",{on:{click:function(e){t.detail(2)}}},[t._v("高级套餐")])])],1)},staticRenderFns:[]};var c=i("VU/8")({data:function(){return{}},methods:{detail:function(t){this.$router.push({path:"/combo/detail",query:{type:t}})},onClickLeft:function(){this.$router.go(-1)}}},n,!1,function(t){i("Y5cr")},null,null);e.default=c.exports},wfTP:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.comboist ul li {\n  padding: 1.86666667rem 1.06666667rem;\n  text-align: center;\n  border-bottom: 0.026667rem solid #ccc;\n}",""])}});