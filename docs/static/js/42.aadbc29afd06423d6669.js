webpackJsonp([42],{uK6K:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){if("twoSacreage"===e.type)return{legend:{data:e.data.name,right:"2%",textStyle:{color:"#333"},itemWidth:20,itemHeight:5,icon:"bar"},grid:{left:"3%",right:"10%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow",z:0}},xAxis:{type:"category",name:e.data.coordinateX,boundaryGap:!1,axisLabel:{color:"#333",formatter:function(e){return e.substring(0,6)}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"},splitLine:{show:!0,color:"#9f9f9f"}},data:e.data.handleNameArr},yAxis:{type:"value",name:e.data.coordinateY,axisLabel:{color:"#333"},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}},splitLine:{show:!0,color:"#9f9f9f"}},series:[{data:e.data.handleDataArr,type:"line",areaStyle:{}}]};console.error("数据类型错误")}}});