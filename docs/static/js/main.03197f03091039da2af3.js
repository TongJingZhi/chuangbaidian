webpackJsonp([11],{0:function(t,n,e){e("briU"),t.exports=e("NHnr")},GI30:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={};e.d(i,"test1",function(){return g}),e.d(i,"test2",function(){return _});var r=e("ZLEe"),s=e.n(r),a=e("xd7I"),c=e("glag"),o=e.n(c),l=(e("xlLU"),e("GI30"),{render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header"},[t._m(0),t._v(" "),e("div",{staticClass:"menu"},[e("div",{staticClass:"center"},t._l(t.menuLists,function(n,i){return e("router-link",{key:i,class:{active:t.activeIndex===i},attrs:{to:n.link},nativeOn:{click:function(n){return t.changeIndex(i)}}},[t._v(t._s(n.title))])}),1)])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"top"},[n("div",{staticClass:"logo fl"},[n("span",{staticStyle:{color:"white"}},[this._v("湖北创百点电子商务有限公司")])]),this._v(" "),n("div",{staticClass:"tel fr"},[this._v("咨询热线：18120491933")])])}]});var u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"banner"},[n("el-carousel",{attrs:{trigger:"click",height:"650px","indicator-position":this.indicatorStatus,interval:5e3}},this._l(this.bannerLists,function(t,e){return n("el-carousel-item",{key:e,style:"background: url("+t+") no-repeat center"})}),1)],1)},staticRenderFns:[]};var d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"w"},[n("div",{staticClass:"info fl"},[n("div",{staticClass:"msg"},[n("p",[this._v("\n          地址：咸宁市劲风·财智领域-b座-2702\n          "),n("br"),this._v("\n          电话：18120491933\n          "),n("br"),this._v("\n          邮箱：CBD9917@163.com\n          ")])])]),this._v(" "),n("div",{staticClass:"icons fr"},[n("img",{staticClass:"code",attrs:{src:e("nqaP"),alt:""}})])])])}]};var f={name:"App",components:{"v-header":e("C7Lr")({data:function(){return{menuLists:[{title:"首页",link:"/"},{title:"创百点电子商务简介",link:"index"},{title:"联系我们",link:"contact"}],activeIndex:0}},methods:{changeIndex:function(t){this.activeIndex=t}},watch:{$route:function(t){var n=this;this.menuLists.map(function(e,i){-1!==t.path.indexOf(e.link)&&(n.activeIndex=i)})}}},l,!1,function(t){e("jjKY")},"data-v-1e12a242",null).exports,"v-banner":e("C7Lr")({data:function(){return{bannerLists:["./static/images/banner.png","./static/images/banner.png","./static/images/banner.png","./static/images/banner.png"],indicatorStatus:"inside"}},created:function(){this.indicatorStatus=this.bannerLists.length>1?"inside":"none"}},u,!1,function(t){e("eteD")},null,null).exports,"v-footer":e("C7Lr")({data:function(){return{menuLists:[{title:"学院简介",link:"Introduction"},{title:"学院新闻",link:"News"},{title:"教学与课程",link:"Teaching"},{title:"教授与智库",link:"Professors"},{title:"内训定制",link:"Customization"},{title:"分院建设",link:"/"},{title:"校友总会",link:"/"},{title:"学院招聘",link:"/"},{title:"联系我们",link:"Contact"}]}}},d,!1,function(t){e("zVLi")},"data-v-48c829fd",null).exports}},h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-header"),this._v(" "),n("v-banner"),this._v(" "),n("router-view"),this._v(" "),n("v-footer")],1)},staticRenderFns:[]},p=e("C7Lr")(f,h,!1,null,null,null).exports,m=e("KGCO");a.default.use(m.a);var v=new m.a({routes:[{path:"*",redirect:"/"},{path:"/",name:"home",component:function(){return e.e(0).then(e.bind(null,"lyB/"))}},{path:"/index",name:"index",component:function(){return e.e(1).then(e.bind(null,"8/c5"))}},{path:"/news",name:"news",component:function(){return e.e(6).then(e.bind(null,"+hdV"))}},{path:"/newsdetail",name:"newsdetail",component:function(){return e.e(8).then(e.bind(null,"iwTH"))}},{path:"/teaching",name:"teaching",component:function(){return e.e(3).then(e.bind(null,"zQwN"))}},{path:"/professors",name:"professors",component:function(){return e.e(5).then(e.bind(null,"3LBO"))}},{path:"/professorsdetail",name:"professorsdetail",component:function(){return e.e(7).then(e.bind(null,"jwfd"))}},{path:"/customization",name:"customization",component:function(){return e.e(4).then(e.bind(null,"92I+"))}},{path:"/contact",name:"contact",component:function(){return e.e(2).then(e.bind(null,"THSP"))}},{path:"/test",name:"test",component:function(){return e.e(9).then(e.bind(null,"kq+U"))}}]}),g=function(t){return 2*t},_=function(t){return t*(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)};s()(i).forEach(function(t){return a.default.filter(t,i[t])}),a.default.config.productionTip=!1,a.default.use(o.a),a.default.prototype.common={getNumArr:function(t,n){for(var e=t.length,i=[],r=0;r<e/n;r++)i.push(t.slice(r*n,(r+1)*n));return i}},v.afterEach(function(t,n,e){window.scrollTo(0,0)}),e("txPn"),new a.default({el:"#app",router:v,components:{App:p},template:"<App/>"})},eteD:function(t,n){},jjKY:function(t,n){},nqaP:function(t,n,e){t.exports=e.p+"static/img/he.a36489e.jpg"},txPn:function(t,n,e){var i=e("cLQA"),r=i.Random;i.mock("/getNews","get",function(){for(var t=[],n=0;n<6;n++){var e={id:n,time:r.date("yyyy-MM-dd"),title:r.ctitle(),poster:r.dataImage("336x280","mock的图片"),brief:r.csentence(20,50)};t.push(e)}return{newsList:t}}),i.mock("/getBrief","get",{brief:r.csentence(100,500)})},xlLU:function(t,n){},zVLi:function(t,n){}},[0]);