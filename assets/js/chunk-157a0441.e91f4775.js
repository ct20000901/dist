(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-157a0441"],{b8e2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back"},[a("v-row",{staticClass:"d-flex justify-end back2"},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-select",{attrs:{items:t.companyList,label:"选择企业",outlined:""},model:{value:t.selectCompany,callback:function(e){t.selectCompany=e},expression:"selectCompany"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-select",{attrs:{items:t.yearList,label:"选择年份",outlined:""},model:{value:t.selectYear,callback:function(e){t.selectYear=e},expression:"selectYear"}})],1),a("v-col",{staticClass:"mt-3",attrs:{cols:"12",sm:"2"}},[a("v-btn",{attrs:{color:"light-blue accent-3 white--text"},on:{click:function(e){return t.searchSci()}}},[a("v-icon",[t._v("mdi-magnify")]),t._v("查询 ")],1),a("v-btn",{staticClass:"ml-3",attrs:{color:"amber darken-3"},on:{click:function(e){return t.reset()}}},[a("v-icon",[t._v("mdi-cached")]),t._v("重置 ")],1)],1)],1),a("div",{staticClass:"d-flex space-between in justify"},[a("v-col",{attrs:{cols:"2"}},[a("v-card",{staticClass:"d-flex flex-row mr-5 mb-12 mt-12",attrs:{outlined:"","max-height":"520","max-width":"152"}},[a("v-list",[a("v-list-item-group",{attrs:{color:"indigo"},model:{value:t.selectSubject,callback:function(e){t.selectSubject=e},expression:"selectSubject"}},t._l(t.menuLists,(function(e){return a("v-list-item",{key:e.id,on:{click:function(a){return t.handleToList(e.catename,e.id)}}},[t.hasIcon?a("v-list-item-icon",[a("v-icon",[t._v("mdi-format-list-checkbox")])],1):t._e(),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.catename)}})],1)],1)})),1)],1)],1)],1),a("v-col",{attrs:{cols:"22"}},[a("v-card",{staticClass:"flex-row-reverse ml-5 mb-12 pt-2",attrs:{outlined:"",elevation:"0"}},[a("div",{staticClass:"list-right flex-row ml-5 mt-3"},[a("h4",[t._v(t._s(t.catename))]),a("span",{staticClass:"float-right pr-5 grey--text"},[t._v("您的位置: 首页 > 企业需求")])]),a("router-view",{attrs:{name:"list"}}),a("router-view",{attrs:{name:"detail"}})],1)],1)],1)],1)},c=[],n=(a("96cf"),a("1da1")),i={inject:["reload"],name:"Demand",data:function(){return{hasIcon:!0,selectCompany:"",selectYear:"",menuLists:[{id:0,catename:"机械"},{id:1,catename:"电气"},{id:2,catename:"能源动力"},{id:3,catename:"电子信息"},{id:4,catename:"新材料"},{id:5,catename:"化工"},{id:6,catename:"生物医疗"},{id:7,catename:"航空航天"},{id:8,catename:"其他"}],companyList:[],yearList:[{text:"2005"},{text:"2006"},{text:"2007"},{text:"2008"},{text:"2009"},{text:"2010"},{text:"2011"},{text:"2012"},{text:"2013"},{text:"2014"},{text:"2015"},{text:"2016"},{text:"2017"},{text:"2018"},{text:"2019"},{text:"2020"}],selectSubject:0,catename:"机械"}},methods:{getSelectList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.body.clientWidth<600&&(t.hasIcon=!1),e.next=3,t.$http.get("/api/school/alluser");case 3:for(a=e.sent,s=a.data.data.users,c=0;c<s.length;c++)t.companyList.push(s[c].username);case 6:case"end":return e.stop()}}),e)})))()},handleToList:function(t,e){this.catename=t,this.$store.commit("handleSubject",t),this.$store.commit("handleSelectSubject",e),this.$router.push({path:"/university/demand/list/"+t,query:{enterprise:this.selectCompany,year:this.selectYear}})},searchSci:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$router.push({path:t.catename,query:{enterprise:t.selectCompany,year:t.selectYear}});case 1:case"end":return e.stop()}}),e)})))()},reset:function(){this.selectCompany="",this.selectYear="",this.$router.push(this.catename),this.reload()}},mounted:function(){this.getSelectList(),this.catename=sessionStorage.getItem("subject"),this.selectSubject=sessionStorage.getItem("selectSubject");var t=sessionStorage.getItem("subject"),e=sessionStorage.getItem("selectSubject");null==t&&null==e&&(t="机械",e=0),this.catename=t,this.selectSubject=e,this.handleToList(this.catename,this.selectSubject)}},r=i,l=(a("bf59"),a("2877")),o=a("6544"),m=a.n(o),u=a("8336"),d=a("b0af"),h=a("62ad"),v=a("132d"),b=a("8860"),f=a("da13"),p=a("5d23"),x=a("1baa"),g=a("34c3"),y=a("0fd9"),w=a("b974"),S=Object(l["a"])(r,s,c,!1,null,"0ffc3025",null);e["default"]=S.exports;m()(S,{VBtn:u["a"],VCard:d["a"],VCol:h["a"],VIcon:v["a"],VList:b["a"],VListItem:f["a"],VListItemContent:p["b"],VListItemGroup:x["a"],VListItemIcon:g["a"],VListItemTitle:p["d"],VRow:y["a"],VSelect:w["a"]})},bf59:function(t,e,a){"use strict";var s=a("ecb1"),c=a.n(s);c.a},ecb1:function(t,e,a){}}]);
//# sourceMappingURL=chunk-157a0441.e91f4775.js.map