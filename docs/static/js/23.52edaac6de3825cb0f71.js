webpackJsonp([23],{"4ysO":function(n,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var c={components:{btn:e("Ky/g").a},data:function(){var n=this;return{item:{name:"保存",iconName:"icon-7",fn:function(){n.saveFn()}},dataList:[{index:"1",name:"工商社区",icon:"iconfont icon-1"},{index:"2",name:"财务社区",icon:"iconfont icon-qiandai"},{index:"3",name:"金融社区",icon:"iconfont icon-19"},{index:"4",name:"文化社区",icon:"iconfont icon-jiaoyupeixun"},{index:"5",name:"保险社区",icon:"iconfont icon-baoxianxiaoshou1"},{index:"6",name:"能源社区",icon:"iconfont icon-jiayouzhan"},{index:"7",name:"健康社区",icon:"iconfont icon-2jiankangzhishi"},{index:"8",name:"电商社区",icon:"iconfont icon-shangdian"},{index:"9",name:"教育社区",icon:"iconfont icon-jiaoyu"},{index:"10",name:"工业社区",icon:"iconfont icon-qiyegongchangjianzhu2"},{index:"11",name:"物流社区",icon:"iconfont icon-wuliu2"},{index:"12",name:"银行社区",icon:"iconfont icon-yinhangqia"},{index:"13",name:"农业社区",icon:"iconfont icon-zhiwu"},{index:"14",name:"地理社区",icon:"iconfont icon-diliweizhi"},{index:"15",name:"气象社区",icon:"iconfont icon-qixiangzhan"},{index:"16",name:"房产社区",icon:"iconfont icon-ai-home"},{index:"17",name:"环境社区",icon:"iconfont icon-huanjing"}],selected:"工商社区"}},computed:{},watch:{},methods:{check:function(n){},saveFn:function(){console.log("保存",this.selected)}},mounted:function(){}},o={render:function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",{staticClass:"community"},[e("div",{staticClass:"content"},[e("div",{staticClass:"clearfix main_sum"},[e("div",{staticClass:"main_echarts"},[e("div",{staticClass:"main_hed"},[e("h2",[n._v("推荐社区")]),n._v(" "),e("btn",{attrs:{item:n.item},nativeOn:{click:function(i){return n.item.fn(i)}}})],1)])]),n._v(" "),e("div",{staticClass:"clearfix community_wrap"},[e("ul",n._l(n.dataList,function(i,c){return e("li",[e("span",{staticClass:"circle"},[e("i",{class:i.icon})]),n._v(" "),e("span",{staticClass:"txt"},[n._v(n._s(i.name))]),n._v(" "),e("div",{staticClass:"med_checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.selected,expression:"selected"}],key:i.index,staticClass:"med_real",attrs:{type:"radio",name:"community-radio"},domProps:{value:i.name,checked:n._q(n.selected,i.name)},on:{click:function(i){n.check(i)},change:function(e){n.selected=i.name}}})])])}))])])])},staticRenderFns:[]};var a=e("vSla")(c,o,!1,function(n){e("xz3Z")},"data-v-2352f9ba",null);i.default=a.exports},xz3Z:function(n,i){}});