webpackJsonp([18],{"4ysO":function(n,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("Ky/g"),t=e("jt1B"),c=e("gyMJ"),o={components:{btn:a.a},data:function(){var n=this;return{item:{name:"保存",iconName:"icon-7",fn:function(){n.saveFn()}},dataList:[{index:"1",name:"工商社区",icon:"icon-1"},{index:"2",name:"财务社区",icon:"icon-qiandai"},{index:"3",name:"金融社区",icon:"icon-19"},{index:"4",name:"文化社区",icon:"icon-jiaoyupeixun"},{index:"5",name:"保险社区",icon:"icon-baoxianxiaoshou1"},{index:"6",name:"能源社区",icon:"icon-jiayouzhan"},{index:"7",name:"健康社区",icon:"icon-2jiankangzhishi"},{index:"8",name:"电商社区",icon:"icon-shangdian"},{index:"9",name:"教育社区",icon:"icon-jiaoyu"},{index:"10",name:"工业社区",icon:"icon-qiyegongchangjianzhu2"},{index:"11",name:"物流社区",icon:"icon-wuliu2"},{index:"12",name:"银行社区",icon:"icon-yinhangqia"},{index:"13",name:"农业社区",icon:"icon-zhiwu"},{index:"14",name:"地理社区",icon:"icon-diliweizhi"},{index:"15",name:"气象社区",icon:"icon-qixiangzhan"},{index:"16",name:"房产社区",icon:"icon-ai-home"},{index:"17",name:"环境社区",icon:"icon-huanjing"}],selected:"4"}},computed:{},watch:{},methods:{saveFn:function(){Object(c.O)({str:this.selected}).then(function(n){console.log("用户保存社区",n),200==n.code?Object(t.a)({type:"success",message:"社区保存成功！"}):Object(t.a)({type:"error",message:"社区保存失败！"})}).catch(function(n){console.log(n)})}},created:function(){var n=this;Object(c.j)().then(function(i){200==i.code?(n.dataList=i.data.communityList,n.selected=i.data.communityType?i.data.communityType:"4"):Object(t.a)({type:"error",message:"获取社区失败！"})}).catch(function(n){console.log(n)})},mounted:function(){}},s={render:function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",{staticClass:"community"},[e("div",{staticClass:"content"},[e("div",{staticClass:"clearfix main_sum"},[e("div",{staticClass:"main_echarts"},[e("div",{staticClass:"main_hed"},[e("h2",[n._v("推荐社区")]),n._v(" "),e("btn",{attrs:{item:n.item},nativeOn:{click:function(i){return n.item.fn(i)}}})],1)])]),n._v(" "),e("div",{staticClass:"clearfix community_wrap"},[e("ul",n._l(n.dataList,function(i,a){return e("li",[e("span",{staticClass:"circle"},[e("i",{staticClass:"iconfont",class:i.icon})]),n._v(" "),e("span",{staticClass:"txt"},[n._v(n._s(i.name))]),n._v(" "),e("div",{staticClass:"med_checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.selected,expression:"selected"}],key:i.index,staticClass:"med_real",attrs:{type:"radio",name:"community-radio"},domProps:{value:i.index,checked:n._q(n.selected,i.index)},on:{change:function(e){n.selected=i.index}}})])])}))])])])},staticRenderFns:[]};var d=e("vSla")(o,s,!1,function(n){e("JPAZ")},"data-v-627da082",null);i.default=d.exports},JPAZ:function(n,i){}});