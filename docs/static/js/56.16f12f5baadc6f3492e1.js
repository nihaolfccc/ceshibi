webpackJsonp([56],{"9zKA":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(a,e){var t=[];return e.forEach(function(e,o){var r={type:"bar",barMaxWidth:"60",name:e,data:[]};a.forEach(function(a,e){r.data.push(a[o])}),t.push(r)}),t};e.default=function(a){if("twoMCluster"===a.type)return{legend:{type:"scroll",left:"left",data:a.data.name},tooltip:{trigger:"axis",axisPointer:{type:"shadow",z:0},padding:15},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",name:a.data.coordinateX,axisLabel:{color:"#333"},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}},data:a.data.handleManyNameArr,splitLine:{show:!0}},yAxis:[{type:"value",name:a.data.coordinateY,axisLabel:{color:"#333",formatter:function(a){return a}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}}}],series:o(a.data.handleManyDataArr,a.data.name)};console.error("数据类型错误")}}});