(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f2b6640"],{"783c":function(t,e,a){"use strict";var n=a("f18c"),s=a.n(n);s.a},"9d92":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back"},[a("app-bar",{attrs:{"back-icon":"",title:"新闻中心",hideMessage:"",hideDemand:"",hideUserMenu:""}}),a("v-content",{staticStyle:{"min-height":"calc(100vh - 64px)"}},[a("v-container",[a("v-card",{staticClass:"mx-auto mt-12",attrs:{"min-height":"400","max-width":"1000"}},[a("p",{staticClass:"text-center pt-8 headline"},[t._v(t._s(t.title))]),a("div",{staticClass:"dotted_line mt-3 mx-5"}),a("p",{staticClass:"text-center grey--text text--darken-2 body-2 mt-5"},[a("span",{staticClass:"mr-3"},[t._v("发布者: "+t._s(t.publisher))]),a("span",{staticClass:"mx-3"},[t._v("发布时间："+t._s(t.time))]),a("span",{staticClass:"ml-3"},[t._v("点击量: "+t._s(t.click))])]),a("div",{staticClass:"mx-8"},[a("p",{domProps:{innerHTML:t._s(t.context)}},[t._v(t._s(t.context))])]),a("div",{staticClass:"dotted_line mt-3 mx-5"}),a("div",{staticClass:"ml-8 mt-2"},[a("p",[a("span",[t._v("上一条："),t.last?a("a",{on:{click:function(e){return t.lastAndNext(t.last.id)}}},[t._v(t._s(t.last.title))]):t._e()])]),a("p",[a("span",[t._v("下一条："),t.next?a("a",{on:{click:function(e){return t.lastAndNext(t.next.id)}}},[t._v(t._s(t.next.title))]):t._e()])])])])],1)],1),a("AppFooter")],1)},s=[],i=(a("96cf"),a("1da1")),c=a("cba5"),r=a("4fbe"),d={name:"New",props:["id"],components:{AppBar:c["a"],AppFooter:r["a"]},data:function(){return{title:"",publisher:"",time:"",context:"",click:"",fileURL:"",last:{},next:{}}},watch:{$route:function(){this.getNew()}},methods:{getNew:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/home/new?id="+t.id);case 2:return a=e.sent,200===a.data.code&&(t.title=a.data.data.title,t.publisher=a.data.data.publisher,t.time=a.data.data.time,t.context=a.data.data.context,t.click=a.data.data.click,t.fileURL=a.data.data.fileURL),e.next=6,t.$http.get("/api/home/newlast?id="+t.id);case 6:return n=e.sent,200===n.data.code&&(t.last=n.data.data),e.next=10,t.$http.get("/api/home/newnext?id="+t.id);case 10:s=e.sent,200===s.data.code&&(t.next=s.data.data);case 12:case"end":return e.stop()}}),e)})))()},lastAndNext:function(t){this.$router.push("/newsList/detail/"+t),this.$router.go(0)}},mounted:function(){this.getNew()}},o=d,l=(a("783c"),a("2877")),p=a("6544"),u=a.n(p),h=a("b0af"),m=a("a523"),x=a("a75b"),f=Object(l["a"])(o,n,s,!1,null,"406f027f",null);e["default"]=f.exports;u()(f,{VCard:h["a"],VContainer:m["a"],VContent:x["a"]})},f18c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3f2b6640.894806b7.js.map