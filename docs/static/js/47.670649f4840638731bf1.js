webpackJsonp([47],{"8c5J":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(a,e){var t=[];return e.forEach(function(e,o){var r={type:"bar",stack:"总量",barMaxWidth:"60",name:e,data:[]};a.forEach(function(a,e){r.data.push(a[o])}),t.push(r)}),t};e.default=function(a){if(console.log("2维多序列横向堆积柱状图",a),"twoMbarY"===a.type)return{legend:{type:"scroll",orient:"vertical",left:"left",data:a.data.name},tooltip:{trigger:"axis",axisPointer:{type:"shadow",z:0},padding:15},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",name:a.data.coordinateY,axisLabel:{color:"#333"},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}}},yAxis:[{type:"category",name:a.data.coordinateX,axisLabel:{color:"#333",formatter:function(a){return a}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}},data:a.data.handleManyNameArr,splitLine:{show:!0}}],series:o(a.data.handleManyDataArr,a.data.name)};console.error("数据类型错误")}}});