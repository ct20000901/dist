(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-24908548"],{3680:function(t,e,i){"use strict";i.r(e);i("96cf");var n=i("1da1"),s={name:"List",props:["subject"],watch:{subject:function(){this.innerSubject=this.subject},$route:function(){this.getSubjectList()}},data:function(){return{page:1,pages:1,innerSubject:this.subject,articleList:[]}},methods:{handleToDetail:function(t){this.$router.push({path:this.subject+"/detail/"+t,query:{school:this.$route.query.enterprise,year:this.$route.query.year}})},isUndef:function(t){return void 0===t},getSubjectList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var i,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.$route.query.school,t.isUndef(t.$route.query.school)&&(i=""),n=t.$route.query.year,t.isUndef(t.$route.query.year)&&(n=""),"全部学科"==t.innerSubject&&(t.innerSubject=""),e.next=7,t.$http.get("/api/business/selectSci?config="+t.innerSubject+"&page="+t.page+"&school="+i+"&year="+n);case 7:if(200==(s=e.sent).data.code){e.next=11;break}return t.articleList=s.data.data,e.abrupt("return",!1);case 11:t.articleList=s.data.data.sci.list,t.pages=s.data.data.sci.pages;case 13:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getSubjectList()}},a=(i("38ec"),i("2877")),r=i("6544"),c=i.n(r),u=i("ce7e"),o=i("8860"),l=i("da13"),d=i("5d23"),p=i("891e"),b=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.articleList,(function(e){return i("v-list",{key:e.id,staticClass:"ml-5"},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticStyle:{cursor:"pointer"}},[i("b",{staticClass:"dots"}),i("span",{staticClass:"black--text",attrs:{id:"art_name"},on:{click:function(i){return t.handleToDetail(e.id)}}},[t._v(t._s(e.entryname))])])],1)],1),i("v-divider",{attrs:{light:""}})],1)})),i("div",{staticClass:"text-center"},[i("v-pagination",{staticClass:"my-4",attrs:{length:t.pages,"total-visible":7},on:{input:function(e){return t.getSubjectList()},next:function(e){return t.getSubjectList()},previous:function(e){return t.getSubjectList()}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],2)}),[],!1,null,"6538e12e",null);e.default=b.exports;c()(b,{VDivider:u.a,VList:o.a,VListItem:l.a,VListItemContent:d.b,VListItemTitle:d.d,VPagination:p.a})},"38ec":function(t,e,i){"use strict";var n=i("b3bf");i.n(n).a},b3bf:function(t,e,i){}}]);