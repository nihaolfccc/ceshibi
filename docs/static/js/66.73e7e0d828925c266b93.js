webpackJsonp([66],{cWns:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){if("barYCategory"===e.type)return{grid:{left:"5%",right:"5%",top:"5%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{show:!0,type:"value",axisLabel:{color:"#333"},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}}},yAxis:{show:!0,type:"category",inverse:!0,data:e.data.xAxis,nameTextStyle:{color:"#505050"},splitLine:{show:!0},axisTick:{show:!1},axisLabel:{color:"#333"},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}}},series:[{name:e.data.yAxisName,type:"bar",barWidth:5,itemStyle:{normal:{color:function(t){return e.color[t.dataIndex]}}},silent:!0,data:e.data.series.data}]};console.error("数据类型错误")}}});