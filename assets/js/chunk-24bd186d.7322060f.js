(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-24bd186d"],{"258e":function(t,e,i){"use strict";i.r(e);i("96cf");var n=i("1da1"),a=i("cba5"),s=i("4fbe"),o={name:"noticeList",components:{AppBar:a.a,AppFooter:s.a},data:function(){return{noticeList:[]}},methods:{getNoticeList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/home/announces");case 2:i=e.sent,t.noticeList=i.data.data.list;case 4:case"end":return e.stop()}}),e)})))()},handleToDetail:function(t){this.$router.push("/noticeList/detail/"+t)}},mounted:function(){this.getNoticeList()}},c=(i("bd88"),i("2877")),r=i("6544"),l=i.n(r),d=i("8336"),u=i("b0af"),m=i("99d9"),v=i("a523"),h=i("a75b"),p=i("132d"),b=i("8860"),f=i("da13"),L=i("1800"),V=i("8270"),g=i("5d23"),w=Object(c.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"back"},[i("app-bar",{attrs:{"back-icon":"",title:"公告栏",hideMessage:"",hideDemand:"",hideUserMenu:""}}),i("v-content",{staticStyle:{"min-height":"calc(100vh - 64px)"}},[i("v-container",[i("v-card",{staticClass:"mx-auto mt-5",attrs:{"min-height":"400","max-width":"800"}},[i("v-card-title",[i("v-icon",[t._v("mdi-card-bulleted-settings-outline")]),t._v("公告栏")],1),i("v-list",t._l(t.noticeList,(function(e){return i("v-list-item",{key:e.id,staticStyle:{cursor:"pointer"}},[i("v-list-item-avatar",[i("v-icon",{staticClass:"yellow darken-3 white--text"},[t._v("mdi-bullhorn")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"announce",domProps:{textContent:t._s(e.title)},on:{click:function(i){return t.handleToDetail(e.id)}}}),i("v-list-item-subtitle",{domProps:{textContent:t._s(e.time)}})],1),i("v-list-item-action",[i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1)],1)})),1)],1)],1)],1),i("AppFooter")],1)])}),[],!1,null,"4a7b77c4",null);e.default=w.exports;l()(w,{VBtn:d.a,VCard:u.a,VCardTitle:m.c,VContainer:v.a,VContent:h.a,VIcon:p.a,VList:b.a,VListItem:f.a,VListItemAction:L.a,VListItemAvatar:V.a,VListItemContent:g.b,VListItemSubtitle:g.c,VListItemTitle:g.d})},bd88:function(t,e,i){"use strict";var n=i("dc6e");i.n(n).a},dc6e:function(t,e,i){}}]);
//# sourceMappingURL=chunk-24bd186d.7322060f.js.map