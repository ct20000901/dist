(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c508773"],{"28b2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"head"},[a("ul",{staticClass:"notice"},[a("li",[a("svg",{staticClass:"icon icon3",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-dengpao"}})]),a("span",{staticClass:"notice_text"},[e._v("企业需求")])]),a("li",{staticClass:"line"},[a("svg",{staticClass:"icon icon2",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-xiantiao"}})])])]),a("van-dropdown-menu",{staticStyle:{"border-top":"1px solid #f2f2f2","border-bottom":"1px solid #f2f2f2"},attrs:{"active-color":"#ee0a24"}},[a("van-dropdown-item",{attrs:{options:e.companyList},on:{change:e.getSubjectList},model:{value:e.selectEnterprise,callback:function(t){e.selectEnterprise=t},expression:"selectEnterprise"}}),a("van-dropdown-item",{attrs:{options:e.yearList},on:{change:e.getSubjectList},model:{value:e.selectYear,callback:function(t){e.selectYear=t},expression:"selectYear"}})],1)],1),a("van-row",{attrs:{type:"flex",justify:"space-between"}},[a("div",{attrs:{span:"6"}},[a("van-sidebar",{staticClass:"navbar",on:{change:e.getSubjectList},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},e._l(e.menuLists,(function(e){return a("van-sidebar-item",{key:e.id,attrs:{title:e.catename}})})),1)],1),a("div",{staticClass:"artlist",attrs:{cols:"18"}},[a("van-pull-refresh",{on:{refresh:e.getSubjectList},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[a("van-list",{staticClass:"list",attrs:{finished:e.finished},on:{load:e.getSubjectList},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[e._l(e.articleList,(function(t,n){return a("van-cell",{key:n,staticClass:"van-multi-ellipsis--l3",attrs:{"is-link":"",label:t.time},on:{click:function(a){return e.handleToDetail(t.id)}},scopedSlots:e._u([{key:"title",fn:function(){return[a("span",{staticClass:"custom-title"},[e._v(e._s(t.title))])]},proxy:!0}],null,!0)})})),this.articleList&&0==this.articleList.length?a("van-cell",[a("span",{staticClass:"nodata"},[e._v(" 暂时没有文章哦~ ")])]):e._e(),null==this.articleList?a("van-cell",[a("span",{staticClass:"nodata"},[e._v(" 暂时没有文章哦~ ")])]):e._e()],2),a("van-pagination",{staticClass:"pagination",attrs:{"page-count":e.pageNum,mode:"simple"},on:{change:e.getPageSubjectList},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)])],1)},s=[],i=(a("96cf"),a("1da1")),r=(a("1aa1"),{name:"DemandList",data:function(){return{activeKey:0,menuLists:[{id:0,catename:"船舶产业"},{id:1,catename:"金属材料"},{id:2,catename:"能源石化"},{id:3,catename:"汽车配件"},{id:4,catename:"电机电器"},{id:5,catename:"通（专）用设备"},{id:6,catename:"工程机械"},{id:7,catename:"高端装备"},{id:8,catename:"新材料"},{id:9,catename:"生物医药"},{id:10,catename:"电子信息"},{id:11,catename:"节能环保"},{id:12,catename:"其他"}],selectEnterprise:0,selectYear:0,companyList:[{text:"全部企业",value:0}],yearList:[{text:"全部年份",value:0},{text:"2020",value:1},{text:"2019",value:2},{text:"2018",value:3},{text:"2017",value:4},{text:"2016",value:5},{text:"2015",value:6},{text:"2014",value:7},{text:"2013",value:8},{text:"2012",value:9},{text:"2011",value:10},{text:"2010",value:11},{text:"2009",value:12},{text:"2008",value:13},{text:"2007",value:14},{text:"2006",value:15},{text:"2005",value:16}],enterprise:"",year:"",subject:"",articleList:[],loading:!1,isLoading:!1,finished:!1,currentPage:1,pageNum:1}},methods:{getSelectList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/api/home/allcompany");case 2:for(a=t.sent,n=a.data.data.users,s=1;s<=n.length;s++)i={value:s,text:""},i.text=n[s-1].username,e.companyList.push(i);case 5:case"end":return t.stop()}}),t)})))()},getSubjectList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.subject=e.menuLists[e.activeKey].catename,0!==e.selectEnterprise?e.enterprise=e.companyList[e.selectEnterprise].text:e.enterprise="",0!==e.selectYear?e.year=e.yearList[e.selectYear].text:e.year="",t.next=5,e.$http.get("/api/home/select?need="+e.subject+"&page="+e.currentPage+"&enterprise="+e.enterprise+"&year="+e.year);case 5:if(a=t.sent,200==a.status){t.next=8;break}return t.abrupt("return",!1);case 8:if(200==a.data.code){t.next=10;break}return t.abrupt("return",!1);case 10:e.articleList=a.data.data.enterpriseneeds.list,e.pageNum=a.data.data.enterpriseneeds.pages,e.loading=!1,e.isLoading=!1,e.finished=!0;case 15:case"end":return t.stop()}}),t)})))()},getPageSubjectList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.currentPage=1,e.pageNum=1,e.subject=e.menuLists[e.activeKey].catename,0!==e.selectEnterprise?e.enterprise=e.companyList[e.selectEnterprise].text:e.enterprise="",0!==e.selectYear?e.year=e.yearList[e.selectYear].text:e.year="",t.next=7,e.$http.get("/api/home/select?need="+e.subject+"&page="+e.currentPage+"&enterprise="+e.enterprise+"&year="+e.year);case 7:if(a=t.sent,200==a.status){t.next=10;break}return t.abrupt("return",!1);case 10:if(200==a.data.code){t.next=12;break}return t.abrupt("return",!1);case 12:e.articleList=a.data.data.enterpriseneeds.list,e.pageNum=a.data.data.enterpriseneeds.pages,e.loading=!1,e.isLoading=!1,e.finished=!0;case 17:case"end":return t.stop()}}),t)})))()},handleToDetail:function(e){this.$router.push({path:"/demandList/detail/"+e,query:{subject:this.subject,enterprise:this.enterprise,year:this.year}})}},mounted:function(){this.getSelectList()}}),c=r,l=(a("6252"),a("2877")),u=Object(l["a"])(c,n,s,!1,null,"5adb0e03",null);t["default"]=u.exports},6252:function(e,t,a){"use strict";var n=a("d959"),s=a.n(n);s.a},d959:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1c508773.afc1bb6b.js.map