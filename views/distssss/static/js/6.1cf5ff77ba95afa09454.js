webpackJsonp([6],{nm2W:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"combo"},t._l(t.data,function(s,a){return e("div",{key:"comboItem"+a,staticClass:"item",on:{click:t.toList}},[e("img",{staticClass:"bg",attrs:{src:t.imgUrl+s.src}}),t._v(" "),e("h2",{class:{black:s.black}},[t._v(t._s(s.name))]),t._v(" "),e("ul",{staticClass:"logoList"},t._l(t.logoList,function(s,a){return e("li",{key:"logoList"+a},[e("img",{staticClass:"smallLogo",attrs:{src:t.imgUrl+(s.black?"":"dark_")+s.src}})])})),t._v(" "),e("div",{staticClass:"prize"},[t._v("\n\t\t  ￥"),e("span",[t._v(t._s(s.prize))]),t._v("/月起\n\t  ")])])}))},staticRenderFns:[]},n=e("VU/8")({name:"combo",data:function(){return{data:[{name:"美业套餐",prize:"2800",src:"beauty.png",black:!0},{name:"餐饮套餐",prize:"2800",src:"market.png",black:!1},{name:"商超套餐",prize:"2800",src:"repast.png",black:!1},{name:"水果生鲜",prize:"2800",src:"fruit.png",black:!1}],logoList:[{src:"phone.png",name:"phone"},{src:"buy.png",name:"buy"},{src:"money.png",name:"money"},{src:"safe.png",name:"safe"}]}},methods:{toList:function(){this.$router.push({path:"/combo/list"})}}},a,!1,null,null,null);s.default=n.exports}});