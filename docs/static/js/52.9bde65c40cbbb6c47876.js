webpackJsonp([52],{"dw+o":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=function(e,a){var t=[];return a.forEach(function(a,o){var i={type:"line",name:a,stack:"总量",areaStyle:{normal:{}},data:[]};e.forEach(function(e,a){i.data.push(e[o])}),t.push(i)}),t};a.default=function(e){if(console.log("2维多序列面积图",e),"twoMStackAcreage"===e.type)return{legend:{type:"scroll",left:"left",textStyle:{color:"#333"},itemWidth:20,itemHeight:5,data:e.data.name},tooltip:{trigger:"axis",axisPointer:{type:"shadow",z:0},padding:15},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",axisLabel:{color:"#333"},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}},data:e.data.handleManyNameArr,splitLine:{show:!0}},yAxis:[{type:"value",name:e.data.coordinateY,axisLabel:{color:"#333",formatter:function(e){return e}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}}}],series:o(e.data.handleManyDataArr,e.data.name)};console.error("数据类型错误")}}});