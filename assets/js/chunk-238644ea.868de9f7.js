(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-238644ea"],{"2c6a":function(t,e,s){"use strict";var a=s("eec2"),c=s.n(a);c.a},"4c95":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"back"},[s("v-row",{staticClass:"d-flex justify-end back2"},[s("v-col",{attrs:{cols:"12",sm:"4"}},[s("v-select",{attrs:{items:t.schoolList,label:"选择高校",outlined:""},model:{value:t.selectSchool,callback:function(e){t.selectSchool=e},expression:"selectSchool"}})],1),s("v-col",{attrs:{cols:"12",sm:"4"}},[s("v-select",{attrs:{items:t.yearList,label:"选择年份",outlined:""},model:{value:t.selectYear,callback:function(e){t.selectYear=e},expression:"selectYear"}})],1),s("v-col",{staticClass:"mt-3",attrs:{cols:"12",sm:"2"}},[s("v-btn",{attrs:{color:"light-blue accent-3 white--text"},on:{click:function(e){return t.searchSci()}}},[s("v-icon",[t._v("mdi-magnify")]),t._v("查询 ")],1),s("v-btn",{staticClass:"ml-3",attrs:{color:"amber darken-3"},on:{click:function(e){return t.reset()}}},[s("v-icon",[t._v("mdi-cached")]),t._v("重置 ")],1)],1)],1),s("div",{staticClass:"d-flex space-between in justify back"},[s("v-col",{attrs:{cols:"2"}},[s("v-card",{staticClass:"d-flex flex-row mr-5 mb-12 mt-12",attrs:{outlined:"","max-height":"520","max-width":"152"}},[s("v-list",[s("v-list-item-group",{attrs:{color:"indigo"},model:{value:t.selectSubject,callback:function(e){t.selectSubject=e},expression:"selectSubject"}},t._l(t.menuLists,(function(e){return s("v-list-item",{key:e.id,on:{click:function(s){return t.handleToList(e.catename,e.id)}}},[t.hasIcon?s("v-list-item-icon",[s("v-icon",[t._v("mdi-format-list-checkbox")])],1):t._e(),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.catename)}})],1)],1)})),1)],1)],1)],1),s("v-col",{attrs:{cols:"22"}},[s("v-card",{staticClass:"flex-row-reverse ml-5 mb-12 pt-2",attrs:{outlined:"",elevation:"0"}},[s("div",{staticClass:"list-right flex-row ml-5 mt-3"},[s("h4",[t._v(t._s(t.catename))]),s("span",{staticClass:"float-right pr-5 grey--text"},[t._v("您的位置: 首页 > 科研成果")])]),s("router-view",{attrs:{name:"list"}}),s("router-view",{attrs:{name:"detail"}})],1)],1)],1)],1)},c=[],i=(s("96cf"),s("1da1")),n={inject:["reload"],name:"Research",data:function(){return{catename:"机械",hasIcon:!0,selectSchool:"",selectYear:"",menuLists:[{id:0,catename:"机械"},{id:1,catename:"电气"},{id:2,catename:"能源动力"},{id:3,catename:"电子信息"},{id:4,catename:"新材料"},{id:5,catename:"化工"},{id:6,catename:"生物医疗"},{id:7,catename:"航空航天"},{id:8,catename:"其他"}],schoolList:[],yearList:[{text:"2005"},{text:"2006"},{text:"2007"},{text:"2008"},{text:"2009"},{text:"2010"},{text:"2011"},{text:"2012"},{text:"2013"},{text:"2014"},{text:"2015"},{text:"2016"},{text:"2017"},{text:"2018"},{text:"2019"},{text:"2020"}],selectSubject:0}},methods:{hasNoIcon:function(){document.body.clientWidth<600&&(this.hasIcon=!1)},handleToList:function(t,e){this.catename=t,this.$store.commit("handleSubject",t),this.$store.commit("handleSelectSubject",e),this.$router.push({path:"/company/research/list/"+this.catename,query:{school:this.selectSchool,year:this.selectYear}})},reset:function(){this.selectSchool="",this.selectYear="",this.$router.push(this.catename),this.reload()},getList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/business/alluser");case 2:for(s=e.sent,a=s.data.data.users,c=0;c<a.length;c++)t.schoolList.push(a[c].username);case 5:case"end":return e.stop()}}),e)})))()},searchSci:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$router.push({path:t.catename,query:{school:t.selectSchool,year:t.selectYear}});case 1:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.hasNoIcon(),this.getList();var t=sessionStorage.getItem("subject"),e=sessionStorage.getItem("selectSubject");null==t&&null==e&&(t="机械",e=0),this.catename=t,this.selectSubject=e,this.handleToList(this.catename,this.selectSubject)}},o=n,r=(s("2c6a"),s("2877")),l=s("6544"),u=s.n(l),m=s("8336"),h=s("b0af"),d=s("62ad"),v=s("132d"),f=s("8860"),b=s("da13"),x=s("5d23"),p=s("1baa"),w=s("34c3"),S=s("0fd9"),g=s("b974"),L=Object(r["a"])(o,a,c,!1,null,"df1cb18c",null);e["default"]=L.exports;u()(L,{VBtn:m["a"],VCard:h["a"],VCol:d["a"],VIcon:v["a"],VList:f["a"],VListItem:b["a"],VListItemContent:x["b"],VListItemGroup:p["a"],VListItemIcon:w["a"],VListItemTitle:x["d"],VRow:S["a"],VSelect:g["a"]})},eec2:function(t,e,s){}}]);
//# sourceMappingURL=chunk-238644ea.868de9f7.js.map