(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7ae010f0"],{"039f":function(t,e,n){},1503:function(t,e,n){"use strict";var a=n("039f");n.n(a).a},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("d3b7"),n("e6cf");function a(t,e,n,a,s,i,r){try{var c=t[i](r),o=c.value}catch(t){return void n(t)}c.done?e(o):Promise.resolve(o).then(a,s)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(s,i){var r=t.apply(e,n);function c(t){a(r,s,i,c,o,"next",t)}function o(t){a(r,s,i,c,o,"throw",t)}c(void 0)}))}}},6241:function(t,e,n){"use strict";n.r(e);n("96cf");var a=n("1da1"),s={name:"demandDetail",props:["id"],watch:{$route:function(){this.getDemand()}},data:function(){return{content:{title:"",publisher:"",time:"",context:"",click:"",fileURL:""},filename:"",enterprise:"",year:"",subject:"",last:{},next:{}}},methods:{goback:function(){this.$router.push("/demandList")},getDemand:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.enterprise=t.$route.query.enterprise,t.year=t.$route.query.year,t.subject=t.$route.query.subject,e.next=5,t.$http.get("/api/home/readEntry?id="+t.id+"&need="+t.subject+"&enter="+t.enterprise+"&year="+t.year);case 5:if(200==(n=e.sent).status){e.next=8;break}return e.abrupt("return",!1);case 8:if(200==n.data.code){e.next=10;break}return e.abrupt("return",!1);case 10:t.content=n.data.data.Enterpriseneeds,console.log(t.content),n.data.data.Enterlast&&(t.last.title=n.data.data.Enterlast.title,t.last.id=n.data.data.Enterlast.id),n.data.data.Enternext&&(t.next.title=n.data.data.Enternext.title,t.next.id=n.data.data.Enternext.id);case 14:case"end":return e.stop()}}),e)})))()},lastAndNext:function(t){this.$router.push({path:"/demandList/detail/"+t,query:{subject:this.subject,enterprise:this.enterprise,year:this.year}})}},mounted:function(){this.getDemand()}},i=(n("a6db"),n("1503"),n("2877")),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new"},[n("van-nav-bar",{staticClass:"nav",attrs:{title:"需求详情","left-arrow":""},on:{"click-left":t.goback}}),n("p",{staticClass:"headline"},[t._v(t._s(t.content.title))]),n("span",{staticClass:"time"},[t._v("发布时间："+t._s(t.content.time))]),n("van-divider",{attrs:{dashed:""}}),n("div",{staticClass:"context"},[n("p",[n("span",{staticClass:"font-weight-bold"},[t._v("发布企业：")]),t._v(t._s(t.content.publisher)+" ")]),n("p",{staticClass:"mt-8"},[n("span",{staticClass:"font-weight-bold"},[t._v("项目简介：")]),n("span",[t._v(" "+t._s(t.content.intro)+" ")])]),n("p",{staticClass:"mt-8"},[n("span",{staticClass:"font-weight-bold"},[t._v("项目预算：")]),n("span",[t._v(t._s(t.content.budget)+"元")])]),n("div",{staticClass:"mt-8"},[n("span",{staticClass:"font-weight-bold"},[t._v("联系方式：")]),n("br"),t.content.tel?n("div",[n("span",[t._v("联系电话："+t._s(t.content.tel))]),n("br")]):t._e(),t.content.mail?n("span",[t._v("联系邮箱："+t._s(t.content.mail))]):t._e()])]),n("van-divider",{attrs:{dashed:""}}),n("div",{staticClass:"up"},[n("p",[n("span",{staticClass:"lastNext"},[t._v("上一条：")]),t.last?n("a",{on:{click:function(e){return t.lastAndNext(t.last.id)}}},[t._v(t._s(t.last.title))]):t._e()]),n("p",{staticClass:"next"},[n("span",{staticClass:"lastNext"},[t._v("下一条：")]),t.next?n("a",{on:{click:function(e){return t.lastAndNext(t.next.id)}}},[t._v(t._s(t.next.title))]):t._e()])])],1)}),[],!1,null,"62264d79",null);e.default=r.exports},"67c1":function(t,e,n){},a6db:function(t,e,n){"use strict";var a=n("67c1");n.n(a).a}}]);