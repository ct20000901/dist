(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-443bf28d"],{"1f47":function(t,e,i){},"258e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"back"},[i("app-bar",{attrs:{"back-icon":"",title:"公告栏",hideMessage:"",hideDemand:"",hideUserMenu:""}}),i("v-content",{staticStyle:{"min-height":"calc(100vh - 64px)"}},[i("v-container",[i("v-card",{staticClass:"mx-auto mt-5",attrs:{"min-height":"400","max-width":"800"}},[i("v-card-title",[i("v-icon",[t._v("mdi-card-bulleted-settings-outline")]),t._v("公告栏")],1),i("v-list",t._l(t.noticeList,(function(e){return i("v-list-item",{key:e.id,staticStyle:{cursor:"pointer"}},[i("v-list-item-avatar",[i("v-icon",{staticClass:"yellow darken-3 white--text"},[t._v("mdi-bullhorn")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"announce",domProps:{textContent:t._s(e.title)},on:{click:function(i){return t.handleToDetail(e.id)}}}),i("v-list-item-subtitle",{domProps:{textContent:t._s(e.time)}})],1),i("v-list-item-action",[i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1)],1)})),1)],1)],1)],1),i("AppFooter")],1)])},a=[],s=(i("96cf"),i("1da1")),o=i("cba5"),c=i("4fbe"),r={name:"noticeList",components:{AppBar:o["a"],AppFooter:c["a"]},data:function(){return{noticeList:[]}},methods:{getNoticeList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/home/announces");case 2:i=e.sent,t.noticeList=i.data.data;case 4:case"end":return e.stop()}}),e)})))()},handleToDetail:function(t){this.$router.push("/noticeList/detail/"+t)}},mounted:function(){this.getNoticeList()}},l=r,d=(i("a8d9"),i("2877")),u=i("6544"),m=i.n(u),v=i("8336"),h=i("b0af"),p=i("99d9"),f=i("a523"),b=i("a75b"),L=i("132d"),V=i("8860"),w=i("da13"),g=i("1800"),C=i("8270"),k=i("5d23"),x=Object(d["a"])(l,n,a,!1,null,"51e88318",null);e["default"]=x.exports;m()(x,{VBtn:v["a"],VCard:h["a"],VCardTitle:p["c"],VContainer:f["a"],VContent:b["a"],VIcon:L["a"],VList:V["a"],VListItem:w["a"],VListItemAction:g["a"],VListItemAvatar:C["a"],VListItemContent:k["b"],VListItemSubtitle:k["c"],VListItemTitle:k["d"]})},a8d9:function(t,e,i){"use strict";var n=i("1f47"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-443bf28d.df7ea104.js.map