(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-89a13c78"],{1751:function(t,e,i){},3680:function(t,e,i){"use strict";i.r(e);i("96cf");var n=i("1da1"),a={name:"List",props:["subject"],watch:{subject:function(){this.innerSubject=this.subject},$route:function(){null!=this.subject&&this.getSubjectList()}},data:function(){return{page:1,pages:1,innerSubject:this.subject,articleList:[]}},methods:{handleToDetail:function(t){this.$router.push({path:this.subject+"/detail/"+t,query:{school:this.$route.query.enterprise,year:this.$route.query.year}})},isUndef:function(t){return void 0===t},getSubjectList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var i,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.total=0,i=t.$route.query.school,t.isUndef(t.$route.query.school)&&(i=""),n=t.$route.query.year,t.isUndef(t.$route.query.year)&&(n=""),"全部类别"==t.innerSubject&&(t.innerSubject=""),e.next=8,t.$http.get("/api/business/selectSci?config="+t.innerSubject+"&page="+t.page+"&school="+i+"&year="+n);case 8:if(200==(a=e.sent).data.code){e.next=12;break}return t.articleList=a.data.data,e.abrupt("return",!1);case 12:t.articleList=a.data.data.sci.list,t.pages=a.data.data.sci.pages,t.total=a.data.data.sci.total;case 15:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getSubjectList()}},s=(i("8c5b"),i("2877")),r=i("6544"),c=i.n(r),u=i("ce7e"),o=i("8860"),l=i("da13"),d=i("5d23"),b=i("891e"),p=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.articleList,(function(e){return i("v-list",{key:e.id,staticClass:"ml-5"},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticStyle:{cursor:"pointer"}},[i("b",{staticClass:"dots"}),i("span",{staticClass:"black--text body-1",attrs:{id:"art_name"},on:{click:function(i){return t.handleToDetail(e.id)}}},[t._v(t._s(e.entryname))])])],1)],1),i("v-divider",{attrs:{light:""}})],1)})),i("p",{staticClass:"grey--text text--darken-2 text-center body-2"},[t._v("共"+t._s(t.total)+"条")]),i("div",{staticClass:"text-center"},[i("v-pagination",{staticClass:"my-4",attrs:{length:t.pages,"total-visible":7},on:{input:function(e){return t.getSubjectList()},next:function(e){return t.getSubjectList()},previous:function(e){return t.getSubjectList()}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],2)}),[],!1,null,"44b3bedd",null);e.default=p.exports;c()(p,{VDivider:u.a,VList:o.a,VListItem:l.a,VListItemContent:d.b,VListItemTitle:d.d,VPagination:b.a})},"8c5b":function(t,e,i){"use strict";var n=i("1751");i.n(n).a}}]);