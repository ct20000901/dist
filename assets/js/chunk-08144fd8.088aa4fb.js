(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-08144fd8"],{5041:function(t,e,a){},"9a99":function(t,e,a){"use strict";var n=a("5041");a.n(n).a},a1a6:function(t,e,a){"use strict";a.r(e);a("96cf");var n=a("1da1"),s={name:"detail",props:["subject","id"],data:function(){return{content:{},last:{title:"",id:""},next:{title:"",id:""},dialog:!1}},watch:{$route:function(){this.getDemand()}},methods:{isUndef:function(t){return void 0===t},getDemand:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$route.query.enterprise,t.isUndef(t.$route.query.enterprise)&&(a=""),n=t.$route.query.year,t.isUndef(t.$route.query.year)&&(n=""),e.next=6,t.$http.get("/api/school/readEntry?id="+t.id+"&need="+t.subject+"&enter="+a+"&year="+n);case 6:if(200==(s=e.sent).status){e.next=9;break}return e.abrupt("return",!1);case 9:if(200==s.data.code){e.next=11;break}return e.abrupt("return",!1);case 11:t.content=s.data.data.Enterpriseneeds,s.data.data.Enterlast&&(t.last.title=s.data.data.Enterlast.title,t.last.id=s.data.data.Enterlast.id),s.data.data.Enternext&&(t.next.title=s.data.data.Enternext.title,t.next.id=s.data.data.Enternext.id);case 14:case"end":return e.stop()}}),e)})))()},handleToDetail:function(t){this.$router.push({path:"/university/demand/list/"+this.subject+"/detail/"+t,query:{enterprise:this.$route.query.enterprise,year:this.$route.query.year}})}},mounted:function(){this.getDemand()}},i=(a("9a99"),a("2877")),r=a("6544"),c=a.n(r),l=a("8336"),o=a("b0af"),d=a("99d9"),u=a("169a"),p=a("ce7e"),v=a("2fa4"),f=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"text-center font-weight-bold mt-8"},[t._v(t._s(t.content.title))]),a("p",{staticClass:"text-center grey--text .body-2 mt-1"},[a("span",{staticClass:"mr-3"},[t._v("发布企业: "+t._s(t.content.publisher))]),a("span",{staticClass:"mx-3"},[t._v("发布时间："+t._s(t.content.time))]),a("span",{staticClass:"ml-3"},[t._v("点击量: "+t._s(t.content.click))])]),a("div",{staticClass:"dotted_line mt-3 mx-5"}),a("p",{staticClass:"text-left mx-12 mt-12"},[a("span",{staticClass:"text-left font-weight-bold"},[t._v("项目简介：")]),a("span",[t._v(" "+t._s(t.content.intro)+" ")])]),a("p",{staticClass:"text-left mx-12 mt-2"},[a("span",{staticClass:"text-left font-weight-bold"},[t._v("项目预算：")]),a("span",[t._v(t._s(t.content.budget)+"元")])]),t.content.fileurl?a("p",{staticClass:"text-left mx-12 mt-2"},[a("span",{staticClass:"text-left font-weight-bold"},[t._v("需求文档：")]),a("a",{attrs:{href:t.content.fileurl}},[t._v("附件下载："+t._s(t.content.filename))])]):t._e(),a("div",{staticClass:"text-center mt-3"},[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{color:"indigo",dark:"","min-width":"300"}},n),[t._v("企业联系方式")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"grey lighten-2",attrs:{"primary-title":""}},[t._v("联系方式")]),a("v-card-text",{staticClass:"mt-4 body-1"},[a("p",[a("span",[t._v("联系电话：")]),t._v(" "+t._s(t.content.tel)+" ")]),a("p",[a("span",[t._v("联系邮箱：")]),t._v(" "+t._s(t.content.mail)+" ")])]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("确认")])],1)],1)],1)],1)]),a("div",{staticClass:"dotted_line mt-3 mx-5"}),a("div",{staticClass:"ml-8 mt-8"},[a("p",{staticClass:"lastAndNext",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.handleToDetail(t.last.id||"")}}},[a("span",{staticClass:"grey--text"},[t._v("上一条：")]),t._v(" "+t._s(t.last.title||"")+" ")]),a("p",{staticClass:"lastAndNext",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.handleToDetail(t.next.id||"")}}},[a("span",{staticClass:"grey--text"},[t._v("下一条：")]),t._v(" "+t._s(t.next.title||"")+" ")])])])}),[],!1,null,"b48e37a6",null);e.default=f.exports;c()(f,{VBtn:l.a,VCard:o.a,VCardActions:d.a,VCardText:d.b,VCardTitle:d.c,VDialog:u.a,VDivider:p.a,VSpacer:v.a})}}]);
//# sourceMappingURL=chunk-08144fd8.088aa4fb.js.map