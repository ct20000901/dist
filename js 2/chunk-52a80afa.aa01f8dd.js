(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52a80afa"],{"38e5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back"},[a("app-bar",{attrs:{"back-icon":"",title:"公告栏",hideMessage:"",hideDemand:"",hideUserMenu:""}}),a("v-content",{staticStyle:{"min-height":"calc(100vh - 64px)"}},[a("v-container",[a("v-card",{staticClass:"mx-auto mt-12",attrs:{"min-height":"400","max-width":"1000"}},[a("p",{staticClass:"text-center pt-8 headline"},[t._v(t._s(t.title))]),a("div",{staticClass:"dotted_line mt-3 mx-5"}),a("p",{staticClass:"text-center grey--text text--darken-2 body-2 mt-5"},[a("span",{staticClass:"mr-3"},[t._v("发布者: "+t._s(t.publisher))]),a("span",{staticClass:"mx-3"},[t._v("发布时间："+t._s(t.time))]),a("span",{staticClass:"ml-3"},[t._v("点击量: "+t._s(t.click))])]),a("div",{staticClass:"mx-8"},[a("p",{domProps:{innerHTML:t._s(t.content)}},[t._v(t._s(t.content))])])])],1)],1),a("AppFooter")],1)},i=[],s=(a("96cf"),a("1da1")),c=a("cba5"),r=a("4fbe"),o={name:"New",props:["id"],components:{AppBar:c["a"],AppFooter:r["a"]},watch:{$route:function(){this.getNew()}},data:function(){return{title:"",publisher:"",time:"",content:"",click:"",fileURL:"",last:{},next:{}}},methods:{getNew:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/home/announce?id="+t.id);case 2:a=e.sent,200===a.data.code&&(t.title=a.data.data.title,t.publisher=a.data.data.publisher,t.time=a.data.data.time,t.content=a.data.data.content,t.click=a.data.data.click,t.fileURL=a.data.data.fileURL);case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getNew()}},d=o,l=(a("3906"),a("2877")),p=a("6544"),u=a.n(p),m=a("b0af"),h=a("a523"),b=a("a75b"),f=Object(l["a"])(d,n,i,!1,null,"ea38b378",null);e["default"]=f.exports;u()(f,{VCard:m["a"],VContainer:h["a"],VContent:b["a"]})},3906:function(t,e,a){"use strict";var n=a("6b4e"),i=a.n(n);i.a},"6b4e":function(t,e,a){}}]);
//# sourceMappingURL=chunk-52a80afa.aa01f8dd.js.map