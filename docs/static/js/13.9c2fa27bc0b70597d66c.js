webpackJsonp([13],{"PV/g":function(e,s){},VPSd:function(e,s,t){"use strict";var a={components:{},props:{moduleName:{type:String},progress:{type:[String,Number]}},data:function(){return{}},computed:{},watch:{},methods:{btn_cancel:function(){this.$emit("cancel-event")}},created:function(){},mounted:function(){}},n={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"re_begin"},[t("div",{staticClass:"re_percent"},[t("span",[e._v(e._s(e.progress))]),e._v(" "),t("i",{staticClass:"iconfont icon-baifenbi "})]),e._v(" "),t("span",{staticClass:"re_begin_plan"},[e._v(e._s(e.moduleName))]),e._v(" "),t("div",{staticClass:"progress_my"},[t("div",{staticClass:"progress_my_bar"},[t("div",{staticClass:"pmb_backgfound transition",style:{width:e.progress+"%"}})])]),e._v(" "),t("button",{staticClass:"begin_cancel el-btn cancel",on:{click:e.btn_cancel}},[e._v("取消")])])},staticRenderFns:[]};var r=t("vSla")(a,n,!1,function(e){t("PV/g")},"data-v-796cb804",null);s.a=r.exports},XLvs:function(e,s){},eIWA:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});t("9rMa");var a=t("Ky/g"),n=t("VPSd"),r=t("gyMJ"),o={components:{btn:a.a,progressBar:n.a},data:function(){return{showProgress:!1,progress:0,missionId:"",search:"",queryString:"",selectTables:[],tableTitle:[{prop:"tableName",label:"表名"},{prop:"comment",label:"表备注"},{prop:"dbName",label:"数据源数据库"},{prop:"host",label:"数据源服务器"}],tableContentTitle:[{prop:"columnName",label:"属性名"},{prop:"dataType",label:"类型"},{prop:"comment",label:"属性备注"},{prop:"length",label:"长度"},{prop:"decimalPoint",label:"小数点"}],tableData:[]}},computed:{filterTableData:function(){var e=this;return this.tableData.filter(function(s){return-1!=s.tableName.toLowerCase().indexOf(e.queryString.toLowerCase())})}},watch:{filterTableData:{handler:function(e,s){var t=this;setTimeout(function(){e.forEach(function(e,s){e.selected&&t.$refs.myTable.toggleRowSelection(e)})})}}},methods:{searchTableName:function(){console.log("搜索表名关键字",this.search),""==this.search&&this.$message({type:"info",duration:1e3,message:"请输入表名关键字"}),this.queryString=this.search},selectionChange:function(e){this.selectTables=e},exportFn:function(){var e=this,s=[];this.selectTables.forEach(function(e,t){s.push(e.tableId)}),console.log(s),Object(r.N)({userId:this.$root.userId,selectTableIds:s}).then(function(s){console.log("存储数据库表结构选取结果接口",s),"success"==s.message&&1==s.data.status&&e.startTask()}).catch(function(s){e.$message({type:"error",duration:1e3,message:s})})},startTask:function(){var e=this;Object(r.O)({userId:this.$root.userId}).then(function(s){console.log("启动外键识别任务接口",s),"success"==s.message?s.data.status&&(e.missionId=s.data.missionId,e.showProgress=!0,e.queryTask()):e.$message({type:"error",duration:1e3,message:s.message})}).catch(function(s){e.$message({type:"error",duration:1e3,message:s})})},queryTask:function(){var e=this;Object(r.x)({userId:this.$root.userId,missionId:this.missionId}).then(function(s){console.log("外键识别任务进度查询接口",s),"success"==s.message?-2!=s.data.process&&-1!=s.data.process?(e.progress=s.data.process,e.progress>=100?(e.progress=100,e.$message({type:"success",duration:1e3,message:"数据结构分析成功！"}),e.$router.push({name:"foreignKey"})):setTimeout(function(){e.queryTask()},2e3)):(e.$message({type:"error",duration:1e3,message:-2==s.data.process?"任务id不存在":"任务已取消"}),e.progress=0):(e.$message({type:"error",duration:1e3,message:s.message}),e.progress=0)}).catch(function(s){e.$message({type:"error",duration:1e3,message:s}),clearInterval(e.timer),e.progress=0})},endTask:function(){var e=this;Object(r.b)({userId:this.$root.userId,missionId:this.missionId}).then(function(s){console.log("终止外键识别任务接口",s),"success"==s.message?s.data.status&&(e.showProgress=!1,e.$message({type:"success",duration:1e3,message:"成功终止外键识别任务"})):e.$message({type:"error",duration:1e3,message:s.message})}).catch(function(s){e.$message({type:"error",duration:1e3,message:s})})}},created:function(){var e=this;Object(r.q)({userId:this.$root.userId}).then(function(s){console.log("获取表结构数据",s),"success"==s.message&&(e.tableData=s.data)}).catch(function(e){console.log(e)})},mounted:function(){}},l={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"data-structure-analysis"},[t("section",{directives:[{name:"show",rawName:"v-show",value:!e.showProgress,expression:"!showProgress"}]},[t("header",[t("div",{staticClass:"fl"},[t("p",{staticClass:"fl"},[e._v("请从数据源中选择导入数据库列表")]),e._v(" "),t("el-input",{staticClass:"fl",attrs:{placeholder:"输入需要搜索的表名关键字"},nativeOn:{keyup:function(s){return"button"in s||!e._k(s.keyCode,"enter",13,s.key,"Enter")?e.searchTableName(s):null}},model:{value:e.search,callback:function(s){e.search="string"==typeof s?s.trim():s},expression:"search"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:e.searchTableName},slot:"suffix"})])],1),e._v(" "),t("btn",{staticClass:"fr",attrs:{item:{name:"导入",className:"save"}},nativeOn:{click:function(s){return e.exportFn(s)}}})],1),e._v(" "),t("el-table",{ref:"myTable",staticClass:"myTable",attrs:{data:e.filterTableData,align:"left",stripe:""},on:{"selection-change":e.selectionChange},scopedSlots:e._u([{key:"empty",fn:function(s){return[t("i",{staticClass:"no_data"}),e._v(" "),t("i",{staticClass:"no_bor"}),e._v(" "),t("span",[e._v("暂无数据源，请添加...")])]}}])},[t("el-table-column",{attrs:{type:"selection",align:"center"}}),e._v(" "),e._l(e.tableTitle,function(e,s){return t("el-table-column",{key:s,attrs:{prop:e.prop,label:e.label}})}),e._v(" "),t("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-table",{staticClass:"myTableItem",attrs:{data:s.row.column,align:"left",stripe:"","header-cell-class-name":"header-cell-class-name","cell-class-name":"cell-class-name"}},[e._l(e.tableContentTitle,function(e,s){return t("el-table-column",{key:s,attrs:{prop:e.prop,label:e.label}})}),e._v(" "),t("el-table-column",{attrs:{prop:"isNull",label:"不能为null"},scopedSlots:e._u([{key:"default",fn:function(s){return[0==s.row.isNull?t("i",{staticClass:"el-icon-check"}):e._e()]}}])})],2)]}}])})],2)],1),e._v(" "),t("progress-bar",{directives:[{name:"show",rawName:"v-show",value:e.showProgress,expression:"showProgress"}],attrs:{"module-name":"外键自动识别进度",progress:e.progress},on:{"cancel-event":e.endTask}})],1)},staticRenderFns:[]};var c=t("vSla")(o,l,!1,function(e){t("XLvs")},null,null);s.default=c.exports}});