(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-46225504"],{2786:function(t,e,n){},4769:function(t,e,n){"use strict";n.r(e);n("96cf");var i=n("1da1"),r={name:"List",props:["subject"],watch:{subject:function(){this.innerSubject=this.subject},$route:function(){this.getSubjectList()}},data:function(){return{page:1,pages:1,innerSubject:this.subject,articleList:[]}},methods:{handleToDetail:function(t){this.$router.push({path:this.innerSubject+"/detail/"+t,query:{enterprise:this.$route.query.enterprise,year:this.$route.query.year}})},isUndef:function(t){return void 0===t},getSubjectList:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n,i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.query.enterprise,t.isUndef(t.$route.query.enterprise)&&(n=""),i=t.$route.query.year,t.isUndef(t.$route.query.year)&&(i=""),t.innerSubject||(t.innerSubject="机械"),e.next=7,t.$http.get("/api/school/select?need="+t.innerSubject+"&page="+t.page+"&enterprise="+n+"&year="+i);case 7:if(200==(r=e.sent).status){e.next=10;break}return e.abrupt("return",!1);case 10:if(200==r.data.code){e.next=13;break}return t.articleList=r.data.data,e.abrupt("return",!1);case 13:t.articleList=r.data.data.enterpriseneeds.list,t.pages=r.data.data.enterpriseneeds.pages;case 15:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getSubjectList()}},a=(n("7863"),n("2877")),s=n("6544"),u=n.n(s),c=n("ce7e"),o=n("8860"),l=n("da13"),p=n("5d23"),d=n("891e"),b=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.articleList,(function(e){return n("v-list",{key:e.id,staticClass:"ml-5"},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticStyle:{cursor:"pointer"}},[n("b",{staticClass:"dots"}),n("span",{staticClass:"black--text",attrs:{id:"art_name"},on:{click:function(n){return t.handleToDetail(e.id)}}},[t._v(t._s(e.title))])])],1)],1),n("v-divider",{attrs:{light:""}})],1)})),n("div",{staticClass:"text-center"},[n("v-pagination",{staticClass:"my-4",attrs:{length:t.pages,"total-visible":7},on:{input:function(e){return t.getSubjectList()},next:function(e){return t.getSubjectList()},previous:function(e){return t.getSubjectList()}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],2)}),[],!1,null,"62326829",null);e.default=b.exports;u()(b,{VDivider:c.a,VList:o.a,VListItem:l.a,VListItemContent:p.b,VListItemTitle:p.d,VPagination:d.a})},7863:function(t,e,n){"use strict";var i=n("2786");n.n(i).a}}]);
//# sourceMappingURL=chunk-46225504.718a65df.js.map