(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a2a1ab1"],{"0522":function(t,e,a){},1148:function(t,e,a){"use strict";var i=a("a691"),s=a("1d80");t.exports="".repeat||function(t){var e=String(s(this)),a="",o=i(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}},"34c3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"order-wrapper"},[a("card",{attrs:{title:"订单管理"}},[a("el-table",{attrs:{data:t.orderList,border:""}},[a("el-table-column",{attrs:{label:"订单号",prop:"oid",align:"center"}}),a("el-table-column",{attrs:{label:"用户手机号",prop:"tel",align:"center",width:"140"}}),a("el-table-column",{attrs:{label:"商品",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.opLinks,(function(e,i){return a("span",{key:i},[t._v(t._s(i+1)+". "+t._s(e.pName)),a("br")])}))}}])}),a("el-table-column",{attrs:{label:"金额",prop:"money",align:"center",width:"110",formatter:t.priceFormatter}}),a("el-table-column",{attrs:{label:"订单状态",prop:"status",align:"center",width:"110"}}),a("el-table-column",{attrs:{label:"物流公司",prop:"type",align:"center"}}),a("el-table-column",{attrs:{label:"运单号",prop:"waybill",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.addDetails(e.$index,e.row)}}},[t._v("添加物流信息")]),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.viewDetails(e.$index,e.row)}}},[t._v("查看")])]}}])})],1),a("el-pagination",{staticStyle:{margin:"20px 0 0 30px"},attrs:{"current-page":t.currentPage,"page-size":t.PageSize,layout:"total, prev, pager, next,jumper",total:t.totalCount},on:{"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"运单信息",visible:t.dialogFormVisible,width:"50%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",staticClass:"logistics-form",attrs:{model:t.logistics,"label-position":"left"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"商品名称:","label-width":"90px"}},[a("el-input",{staticClass:"form-input",attrs:{autocomplete:"off"},model:{value:t.logistics.cargo.detail_list[0].name,callback:function(e){t.$set(t.logistics.cargo.detail_list[0],"name",e)},expression:"logistics.cargo.detail_list[0].name"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"商品数量:","label-width":"90px"}},[a("el-input",{staticClass:"form-input",attrs:{autocomplete:"off",type:"number"},model:{value:t.logistics.cargo.detail_list[0].count,callback:function(e){t.$set(t.logistics.cargo.detail_list[0],"count",e)},expression:"logistics.cargo.detail_list[0].count"}})],1)],1)],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"包裹数量:","label-width":"90px"}},[a("el-input",{staticClass:"form-input",attrs:{autocomplete:"off",type:"number"},model:{value:t.logistics.cargo.count,callback:function(e){t.$set(t.logistics.cargo,"count",e)},expression:"logistics.cargo.count"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"包裹重量:","label-width":"90px"}},[a("el-input",{staticClass:"form-input",attrs:{autocomplete:"off",type:"number"},model:{value:t.logistics.cargo.weight,callback:function(e){t.$set(t.logistics.cargo,"weight",e)},expression:"logistics.cargo.weight"}})],1)],1)],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"包裹长度:","label-width":"90px"}},[a("el-input",{staticClass:"form-input",attrs:{autocomplete:"off",type:"number"},model:{value:t.logistics.cargo.space_x,callback:function(e){t.$set(t.logistics.cargo,"space_x",e)},expression:"logistics.cargo.space_x"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"包裹宽度:","label-width":"90px"}},[a("el-input",{staticClass:"form-input",attrs:{autocomplete:"off",type:"number"},model:{value:t.logistics.cargo.space_y,callback:function(e){t.$set(t.logistics.cargo,"space_y",e)},expression:"logistics.cargo.space_y"}})],1)],1)],1),a("el-row",{staticClass:"row-bg"},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"包裹高度:","label-width":"90px"}},[a("el-input",{staticClass:"form-input",attrs:{autocomplete:"off",type:"number"},model:{value:t.logistics.cargo.space_z,callback:function(e){t.$set(t.logistics.cargo,"space_z",e)},expression:"logistics.cargo.space_z"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitLogistics()}}},[t._v("确 定")])],1)],1)],1)},s=[],o=(a("a9e3"),a("b680"),a("ff86")),r={components:{card:o["a"]},data:function(){return{orderList:[],currentPage:1,PageSize:10,totalCount:0,logistics:{cargo:{detail_list:[{count:0,name:""}],count:0,space_x:0,space_y:0,space_z:0,weight:0},insured:{insured_value:0,use_insured:0},orderId:"",service:{service_name:"标准快件",service_type:0}},dialogFormVisible:!1}},methods:{viewDetails:function(t,e){this.$router.push({name:"checkorder",query:{uid:e.uid,oid:e.oid}})},addDetails:function(t,e){this.dialogFormVisible=!0,this.logistics=this.$options.data().logistics,this.logistics.orderId=e.oid},submitLogistics:function(){var t=this;this.$axios({url:"/back/order/addLogistics",method:"post",transformRequest:[function(t){return JSON.stringify(t)}],data:this.logistics,headers:{"Content-Type":"application/json"}}).then((function(e){200==e.data.code?(t.$message({type:"success",message:t.type?"修改机构信息成功":"添加机构成功"}),t.getHospital()):t.$message({type:"error",message:t.type?"修改机构信息失败":"添加机构失败"}),t.dialogFormVisible=!1})).catch((function(e){t.$message({type:"error",message:e})}))},priceFormatter:function(t,e){return Number(t[e.property])?"￥"+Number(t[e.property]).toFixed(1):"/"},handleCurrentChange:function(t){this.currentPage=t,this.getOrder()},getOrder:function(){var t=this;this.$axios({url:"/back/order/order/getAllOrder",params:{page:this.currentPage}}).then((function(e){200==e.data.code?(t.PageSize=e.data.data.pageSize,t.totalCount=e.data.data.total,t.orderList=e.data.data.list):t.$message({type:"error",message:"订单信息获取失败"}),setTimeout((function(){t.$openLoading().close()}),200)})).catch((function(e){t.$message({type:"error",message:"订单信息获取失败"}),setTimeout((function(){t.$openLoading().close()}),200)}))}},created:function(){this.$openLoading(),this.getOrder()}},l=r,n=(a("a017"),a("2877")),c=Object(n["a"])(l,i,s,!1,null,null,null);e["default"]=c.exports},"408a":function(t,e,a){var i=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"74a7":function(t,e,a){},9889:function(t,e,a){"use strict";var i=a("0522"),s=a.n(i);s.a},a017:function(t,e,a){"use strict";var i=a("74a7"),s=a.n(i);s.a},b680:function(t,e,a){"use strict";var i=a("23e7"),s=a("a691"),o=a("408a"),r=a("1148"),l=a("d039"),n=1..toFixed,c=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},p=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},g=n&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){n.call({})}));i({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,a,i,l,n=o(this),g=s(t),d=[0,0,0,0,0,0],f="",m="0",b=function(t,e){var a=-1,i=e;while(++a<6)i+=t*d[a],d[a]=i%1e7,i=c(i/1e7)},h=function(t){var e=6,a=0;while(--e>=0)a+=d[e],d[e]=c(a/t),a=a%t*1e7},w=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==d[t]){var a=String(d[t]);e=""===e?a:e+r.call("0",7-a.length)+a}return e};if(g<0||g>20)throw RangeError("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return String(n);if(n<0&&(f="-",n=-n),n>1e-21)if(e=p(n*u(2,69,1))-69,a=e<0?n*u(2,-e,1):n/u(2,e,1),a*=4503599627370496,e=52-e,e>0){b(0,a),i=g;while(i>=7)b(1e7,0),i-=7;b(u(10,i,1),0),i=e-1;while(i>=23)h(1<<23),i-=23;h(1<<i),b(1,1),h(2),m=w()}else b(0,a),b(1<<-e,0),m=w()+r.call("0",g);return g>0?(l=m.length,m=f+(l<=g?"0."+r.call("0",g-l)+m:m.slice(0,l-g)+"."+m.slice(l-g))):m=f+m,m}})},ff86:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"card-warpper"},[a("header",{staticClass:"card-header"},[a("span",{staticClass:"title"},[t._v(t._s(t.title))])]),a("div",{staticClass:"card-content"},[t._t("default")],2)])},s=[],o={props:{title:{type:String}}},r=o,l=(a("9889"),a("2877")),n=Object(l["a"])(r,i,s,!1,null,null,null);e["a"]=n.exports}}]);
//# sourceMappingURL=chunk-6a2a1ab1.6ffebe72.js.map