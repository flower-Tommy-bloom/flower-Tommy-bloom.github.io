webpackJsonp([9],{"/3vc":function(e,t,n){"use strict";var a=n("UVIz"),i=(n.n(a),n("Y81h")),o=n.n(i),r=n("YaEn");o.a.inc(.2),o.a.configure({easing:"ease",speed:500,showSpinner:!1}),r.a.beforeEach(function(e,t,n){var a="demo";e.meta.title&&(a=e.meta.title),document.title=a,o.a.start(),n()}),r.a.afterEach(function(e){o.a.done()})},"4ml/":function(e,t){},M93x:function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"app"},a,!1,function(e){n("ShM4")},null,null);t.a=i.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=n("fZjL"),a=n.n(t),i=n("QKTF"),o=(n.n(i),n("7+uW")),r=n("yh13"),c=(n.n(r),n("jg9f")),l=(n.n(c),n("M93x")),u=n("YaEn"),p=(n("/3vc"),n("Q0Ca")),s=n("Fd2+"),h=n("4ml/"),m=(n.n(h),n("lbHh")),f=n.n(m);o.a.prototype.Cookies=f.a,o.a.use(s.a),o.a.prototype.imgUrl="./assets/img/",o.a.prototype.first=!0,e.PARAMS={},a()(p).forEach(function(e){o.a.filter(e,p[e])}),o.a.config.productionTip=!1,new o.a({el:"#app",router:u.a,template:"<App/>",components:{App:l.a}})}.call(t,n("DuR2"))},Q0Ca:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dateFormat=function(e,t){"string"==typeof e&&(e=e.replace(/-/g,"/"));var n=new Date(e),a={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in a)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?a[i]:("00"+a[i]).substr((""+a[i]).length)));return t}},ShM4:function(e,t){},UVIz:function(e,t){},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),i=n("/ocq"),o={path:"/",name:"home",redirect:"/home",component:function(e){return n.e(1).then(function(){var t=[n("KR8f")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/home",name:"home",meta:{title:"demo"},component:function(e){return n.e(1).then(function(){var t=[n("KR8f")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/combo",name:"combo",meta:{title:"demo"},component:function(e){return n.e(6).then(function(){var t=[n("nm2W")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/single",name:"single",meta:{title:"demo"},component:function(e){return n.e(5).then(function(){var t=[n("TVsb")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/cart",name:"cart",meta:{title:"购物车"},component:function(e){return n.e(7).then(function(){var t=[n("TBuW")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},r={path:"/combo",name:"combo",component:n("M93x").a,children:[{path:"detail",name:"detail",meta:{title:"detail"},component:function(e){return n.e(3).then(function(){var t=[n("UMK0")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"list",name:"list",meta:{title:"list"},component:function(e){return n.e(4).then(function(){var t=[n("dksj")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},c={path:"/single/detail",name:"single/detail",redirect:"/single/detail",component:function(e){return n.e(0).then(function(){var t=[n("8pvJ")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/single/detail",name:"single/detail",meta:{title:"detail"},component:function(e){return n.e(0).then(function(){var t=[n("8pvJ")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},l={path:"/register",name:"register",redirect:"/register",component:function(e){return n.e(2).then(function(){var t=[n("bqOp")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/register",name:"register",meta:{title:"register"},component:function(e){return n.e(2).then(function(){var t=[n("bqOp")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]};a.a.use(i.a);t.a=new i.a({mode:"hash",routes:[{path:"/",redirect:"/home"},o,r,c,l]})},jg9f:function(e,t){},yh13:function(e,t){}},["NHnr"]);