(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"05fe":function(e,t,n){"use strict";var r=n("242f");n.n(r).a},"242f":function(e,t,n){},3674:function(e,t,n){"use strict";var r=n("f0e3");n.n(r).a},"4fbe":function(e,t,n){"use strict";var r={name:"AppFooter"},a=(n("05fe"),n("2877")),s=n("6544"),o=n.n(s),i=n("62ad"),c=n("553a"),l=n("132d"),u=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{padless:"",color:"white"}},[n("v-col",{staticClass:"text-center black--text"},[n("div",{staticClass:"links mb-2"},[n("v-icon",[e._v("mdi-link")]),n("strong",{staticClass:"mr-3"},[e._v("友情链接：")]),n("a",{staticClass:"black--text mr-2",attrs:{href:"http://std.jiangsu.gov.cn/"}},[e._v("江苏省科技厅")]),n("span",[e._v("|")]),n("a",{staticClass:"black--text ml-2",attrs:{href:"http://kjj.taizhou.gov.cn/"}},[e._v("泰州市科技局")])],1),n("p",[n("span",{staticClass:"mr-3"},[e._v("地址：XXXXXXXXXXXXX")]),n("span",{staticClass:"ml-3"},[e._v("邮编：6XXXXX")])]),n("p",[e._v("联系方式：1323874XXXX")]),n("p",[e._v("蜀ICP备 xxxxxxxxxxx 号 | 川公网安备 xxxxxxx 号")])])],1)}),[],!1,null,"a7af8682",null),m=u.exports;o()(u,{VCol:i.a,VFooter:c.a,VIcon:l.a});t.a=m},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a={name:"App",created:function(){},provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},methods:{reload:function(){var e=this;this.isRouterAlive=!1,this.$nextTick((function(){e.isRouterAlive=!0}))}}},s=n("2877"),o=n("6544"),i=n.n(o),c=n("7496"),l=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("keep-alive",[t("router-view")],1)],1)}),[],!1,null,null,null),u=l.exports;i()(l,{VApp:c.a});var m=n("8c4f"),p=(n("96cf"),n("1da1")),d=n("4fbe"),f={name:"Home",data:function(){return{search:"",newslist:[],noticeList:[],screenWidth:document.body.clientWidth}},components:{AppFooter:d.a},methods:{getNewsList:function(){var e=this;return Object(p.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/api/home/news");case 2:n=t.sent,e.newslist=n.data.data.list;case 4:case"end":return t.stop()}}),t)})))()},getNoticeList:function(){var e=this;return Object(p.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/api/home/announces");case 2:n=t.sent,e.noticeList=n.data.data.list;case 4:case"end":return t.stop()}}),t)})))()},Login:function(){this.$router.push("/login")},handleNew:function(e){this.$router.push("/newsList/detail/"+e)},handleNote:function(e){this.$router.push("/noticeList/detail/"+e)}},mounted:function(){var e=this;window.onresize=function(){return window.screenWidth=document.body.clientWidth,void(e.screenWidth=window.screenWidth)},this.screenWidth<926?this.isshow=!1:this.isshow=!0,this.getNewsList(),this.getNoticeList()},watch:{screenWidth:function(e){this.screenWidth=e,this.screenWidth<926?this.isshow=!1:this.isshow=!0}}},h=(n("b76c"),n("40dc")),v=n("b0af"),b=n("62ad"),g=n("a523"),k=n("132d"),x=n("adda"),y=n("0fd9"),w=n("2fa4"),_=n("2a7f"),C=Object(s.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("v-app-bar",{attrs:{absolute:"",color:"white","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[r("v-toolbar-title",{staticClass:"ml-3"},[e._v("首页")]),r("router-link",{staticClass:"subtitle-1 ml-6 light-blue--text text--darken-2",attrs:{to:"/login"}},[e._v("靖江市科技镇长团")]),r("router-link",{staticClass:"subtitle-1 ml-6 grey--text text--darken-3",attrs:{to:"/about"}},[r("v-icon",[e._v("mdi-information-outline")]),e._v("关于我们")],1),r("v-spacer")],1),r("div",{staticClass:"main"},[r("div",[r("v-img",{staticStyle:{opacity:"0.85"},attrs:{src:n("88f8")}})],1),r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-card",{staticClass:"attention-logo white--text"},[e._v("新闻列表 "),r("div",{staticClass:"more right"},[r("router-link",{staticClass:"subtitle-1",attrs:{to:"/newsList"}},[e._v("更多>>")])],1)]),r("div",{staticClass:"news"},[r("ul",e._l(e.newslist.slice(0,10),(function(t){return r("li",{key:t.id},[r("a",{staticClass:"link subtitle-1",on:{click:function(n){return e.handleNew(t.id)}}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-weimingmingwenjianjia_jiantou"}})]),e._v(e._s(t.title)+" ")])])})),0)])],1),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-card",{staticClass:"attention-logo white--text"},[e._v("公告列表 "),r("div",{staticClass:"more right"},[r("router-link",{staticClass:"subtitle-1",attrs:{to:"/noticeList"}},[e._v("更多>>")])],1)]),r("div",{staticClass:"attention"},[r("ul",e._l(e.noticeList.slice(0,10),(function(t){return r("li",{key:t.id},[r("a",{staticClass:"link subtitle-1",on:{click:function(n){return e.handleNote(t.id)}}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-weimingmingwenjianjia_jiantou"}})]),e._v(e._s(t.title)+" ")])])})),0)])],1)],1)],1)],1),r("AppFooter")],1)}),[],!1,null,null,null),$=C.exports;i()(C,{VAppBar:h.a,VCard:v.a,VCol:b.a,VContainer:g.a,VIcon:k.a,VImg:x.a,VRow:y.a,VSpacer:w.a,VToolbarTitle:_.b});var V=$,S=n("4328"),I=n.n(S),j={name:"Login",components:{AppFooter:d.a},data:function(){return{form:{username:"",password:""},isLoading:!1,msg:"",valid:!0}},methods:{login:function(){var e=this;return Object(p.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.form.validate()){t.next=3;break}return t.abrupt("return");case 3:return e.isLoading=!0,t.next=6,e.$http.post("/api/user/login",I.a.stringify(e.form),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 6:if(200===(n=t.sent).status){t.next=11;break}return e.isLoading=!1,e.$message.error("登录失败"),t.abrupt("return",!1);case 11:if(200==n.data.code){t.next=15;break}return e.isLoading=!1,e.msg=n.data.msg,t.abrupt("return",!1);case 15:e.$store.commit("handleUserName",n.data.data.userInfo.username),e.$store.commit("handleAccount",n.data.data.userInfo.account),sessionStorage.setItem("userToken",n.data.data.token),sessionStorage.setItem("role",n.data.data.userInfo.role),e.clearInput(),e.isLoading=!1,e.goNameRouter(n.data.data.userInfo.role);case 22:case"end":return t.stop()}}),t)})))()},clearInput:function(){this.form={loginId:"",password:""}},goNameRouter:function(e){"manager"===e&&(window.location.href="http://212.64.87.193/"+e+"/manager/userlist"),this.$router.push(e+"/")},register:function(){this.clearInput(),this.$router.push("/register")}}},q=(n("5ef3"),n("8336")),A=n("99d9"),F=n("a75b"),L=n("4bd4"),T=n("8654"),R=Object(s.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"back"},[n("v-app-bar",{attrs:{app:"",elevation:"2",color:"#333744",dark:""}},[n("v-toolbar-title",{staticStyle:{cursor:"pointer"}},[n("span",[e._v("靖江市科技镇长团")])]),n("router-link",{staticClass:"ml-5 subtitle-1 white--text",attrs:{to:"/"}},[e._v("首页")]),n("v-spacer")],1),n("v-content",{staticStyle:{"min-height":"calc(100vh - 64px)"}},[n("v-container",{attrs:{"fill-height":""}},[n("v-card",{staticClass:"ma-auto",attrs:{flat:"",elevation:"4","min-width":"350"}},[n("v-card-title",[e._v("登录")]),n("v-card-text",{staticClass:"mx-auto"},[n("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{"prepend-icon":"mdi-account",label:"账号",placeholder:"请输入账号",name:"login",type:"text",rules:[function(e){return!!e||"请输入账号或者手机号"}]},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),n("v-text-field",{attrs:{"prepend-icon":"mdi-lock",type:"password",label:"密码",placeholder:"密码",name:"password",rules:[function(e){return!!e||"请输入密码"}]},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),n("div",{staticClass:"error--text ml-8"},[e._v(e._s(e.msg))])],1)],1),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.register()}}},[e._v("企业注册")]),n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary",loading:e.isLoading},on:{click:function(t){return e.login("formLogin")}}},[e._v("登录")])],1)],1)],1)],1),n("app-footer")],1)}),[],!1,null,"69302565",null),P=R.exports;i()(R,{VAppBar:h.a,VBtn:q.a,VCard:v.a,VCardActions:A.a,VCardText:A.b,VCardTitle:A.c,VContainer:g.a,VContent:F.a,VForm:L.a,VSpacer:w.a,VTextField:T.a,VToolbarTitle:_.b});var N=P,X=n("cba5"),E={name:"Register",components:{AppFooter:d.a,AppBar:X.a},data:function(){var e=this;return{checkPass:"",form:{username:"",role:"company",account:"",password:"",paragraph:"",contact:"",mail:"",tel:"",address:""},formRef:"",rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],username:[{required:!0,message:"请输入公司名称",trigger:"blur"}],mail:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:function(e,t,n){if(/^\w+@\w+(\.\w+)+$/.test(t))return n();n(new Error("请输入合法邮箱"))},trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:function(t,n,r){""===n?r(new Error("请输入密码")):(""!==e.checkPass&&e.$refs.ruleForm.validateField("checkPass"),r())},trigger:"blur"}],checkPass:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:function(t,n,r){""===n?r(new Error("请再次输入密码")):n!==e.form.password?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}],paragraph:[{required:!0,message:"请输入公司税号",trigger:"blur"}],contact:[{required:!0,message:"请输入联系人",trigger:"blur"}],tel:[{required:!0,message:"请输入联系电话",trigger:"blur"},{validator:function(e,t,n){if(/^1[34578]\d{9}$/.test(t))return n();n(new Error("请输入合法的手机号码"))},trigger:"blur"}],address:[{required:!0,message:"请输入公司地址",trigger:"blur"}]}}},methods:{cancel:function(){this.form="",this.$router.push("/login")},clearInput:function(){this.form={username:"",account:"",password:"",paragraph:"",contact:"",mail:"",tel:"",address:""}},register:function(){var e=this;return Object(p.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.formRef.validate()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.$http.post("/api/user/register",e.form,{headers:{"Content-Type":"application/json"}});case 5:200===t.sent.data.code?(e.clearInput(),e.$message.success("用户注册成功！")):(e.clearInput(),e.$message.error("用户注册失败！"));case 7:case"end":return t.stop()}}),t)})))()}}},B=(n("3674"),n("ce7e")),O=Object(s.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"back"},[n("app-bar",{attrs:{"back-icon":"",title:"账号注册","hide-user-menu":"",hideMessage:"",hideDemand:""}}),n("v-content",{staticStyle:{"min-height":"calc(100vh - 64px)"}},[n("v-container",[n("v-card",{staticClass:"mx-auto mt-12 mb-12",attrs:{"min-height":"400","max-width":"800"}},[n("p",{staticClass:"text-center headline pt-5 pb-3"},[e._v("注册新账号")]),n("v-divider"),n("v-col",{staticClass:"mx-auto mt-5",attrs:{cols:"12",sm:"6"}},[n("el-form",{ref:"formRef",attrs:{"label-position":"left","label-width":"80px",model:e.form,rules:e.rules}},[n("el-form-item",{attrs:{label:"账号",prop:"account"}},[n("el-input",{attrs:{placeholder:"6~18位字符，只能包含英文字母、数字、下划线"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[n("el-input",{attrs:{type:"password"},model:{value:e.form.checkPass,callback:function(t){e.$set(e.form,"checkPass",t)},expression:"form.checkPass"}})],1),n("el-form-item",{attrs:{label:"公司名称",prop:"username"}},[n("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("el-form-item",{attrs:{label:"税号",prop:"paragraph"}},[n("el-input",{model:{value:e.form.paragraph,callback:function(t){e.$set(e.form,"paragraph",t)},expression:"form.paragraph"}})],1),n("el-form-item",{attrs:{label:"联系人",prop:"contact"}},[n("el-input",{model:{value:e.form.contact,callback:function(t){e.$set(e.form,"contact",t)},expression:"form.contact"}})],1),n("el-form-item",{attrs:{label:"联系电话",prop:"tel"}},[n("el-input",{model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),n("el-form-item",{attrs:{label:"联系邮箱",prop:"mail"}},[n("el-input",{model:{value:e.form.mail,callback:function(t){e.$set(e.form,"mail",t)},expression:"form.mail"}})],1),n("el-form-item",{attrs:{label:"公司地址",prop:"address"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),n("div",{staticClass:"pt-5"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.register()}}},[e._v("注册")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){return e.cancel()}}},[e._v("取消")])],1)],1)],1)],1)],1),n("AppFooter")],1)}),[],!1,null,"3cffc368",null),M=O.exports;i()(O,{VCard:v.a,VCol:b.a,VContainer:g.a,VContent:F.a,VDivider:B.a});var W={path:"/university",component:function(){return n.e("chunk-2a2465a7").then(n.bind(null,"2a48"))},meta:{requireAuth:!0,roles:["university"]},children:[{path:"demand",component:function(){return Promise.all([n.e("npm.vuetify"),n.e("chunk-50db2df0")]).then(n.bind(null,"b8e2"))},meta:{requireAuth:!0,roles:["university"]},children:[{path:"list/:subject",components:{list:function(){return Promise.all([n.e("npm.vuetify"),n.e("chunk-46225504")]).then(n.bind(null,"4769"))}},props:{list:!0},meta:{requireAuth:!0,roles:["university"]}},{path:"list/:subject/detail/:id",components:{detail:function(){return Promise.all([n.e("npm.vuetify"),n.e("chunk-08144fd8")]).then(n.bind(null,"a1a6"))}},props:{detail:!0},meta:{requireAuth:!0,roles:["university"]}}]},{path:"realeaseScience",component:function(){return Promise.all([n.e("npm.vuetify"),n.e("npm.quill"),n.e("npm.buffer"),n.e("chunk-14857016")]).then(n.bind(null,"712e"))},meta:{requireAuth:!0,roles:["university"]}}],redirect:"/university/demand/list/机械"},D={path:"/company",meta:{requireAuth:!0,roles:["company"]},component:function(){return n.e("chunk-31784db9").then(n.bind(null,"f75a"))},children:[{path:"research",component:function(){return Promise.all([n.e("npm.vuetify"),n.e("chunk-6772c046")]).then(n.bind(null,"4c95"))},meta:{requireAuth:!0,roles:["company"]},children:[{path:"list/:subject",components:{list:function(){return Promise.all([n.e("npm.vuetify"),n.e("chunk-7221682a")]).then(n.bind(null,"3680"))}},props:{list:!0},meta:{requireAuth:!0,roles:["company"]}},{path:"list/:subject/detail/:id",components:{detail:function(){return Promise.all([n.e("npm.vuetify"),n.e("chunk-6d45ff02")]).then(n.bind(null,"5a13"))}},props:{detail:!0},meta:{requireAuth:!0,roles:["company"]}}]},{path:"realeaseDemand",component:function(){return Promise.all([n.e("npm.vuetify"),n.e("chunk-712348de")]).then(n.bind(null,"174c"))},meta:{requireAuth:!0,roles:["company"]}}],redirect:"/company/research/list/????�械"};r.default.use(m.a);var z=[W,D,{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:V},{path:"/login",name:"Login",component:N},{path:"/register",name:"Register",component:M},{path:"/about",name:"About",component:function(){return n.e("chunk-27f981ce").then(n.bind(null,"0737"))}},{path:"/newsList",name:"NewsList",component:function(){return Promise.all([n.e("npm.swiper"),n.e("chunk-03c8222d")]).then(n.bind(null,"10a0"))}},{path:"/newsList/detail/:id",component:function(){return n.e("chunk-671b394e").then(n.bind(null,"9d92"))},props:!0},{path:"/noticeList",name:"NoticeList",component:function(){return n.e("chunk-24bd186d").then(n.bind(null,"258e"))}},{path:"/noticeList/detail/:id",component:function(){return n.e("chunk-54ad9866").then(n.bind(null,"38e5"))},props:!0},{path:"/message",name:"Message",component:function(){return n.e("chunk-32f84ff2").then(n.bind(null,"8fc4"))},meta:{requireAuth:!0,roles:["university","company"]}},{path:"/accountSetting",name:"AccountSetting",component:function(){return Promise.all([n.e("npm.vuetify"),n.e("chunk-1f880508")]).then(n.bind(null,"1aaf"))},meta:{roles:["university","company"]}},{path:"/company/history",component:function(){return Promise.all([n.e("npm.core-js"),n.e("chunk-29535153")]).then(n.bind(null,"7e02"))},meta:{requireAuth:!0,roles:["company"]}},{path:"/company/history/detail/:id",component:function(){return Promise.all([n.e("npm.vuetify"),n.e("chunk-41df6d26")]).then(n.bind(null,"ba2b"))},props:!0,meta:{requireAuth:!0,roles:["company"]}},{path:"/university/history",component:function(){return Promise.all([n.e("npm.core-js"),n.e("chunk-6b66496e")]).then(n.bind(null,"8dea"))},meta:{requireAuth:!0,roles:["university"]}},{path:"/university/history/detail/:id",component:function(){return Promise.all([n.e("npm.vuetify"),n.e("npm.quill"),n.e("npm.buffer"),n.e("chunk-21dc253b")]).then(n.bind(null,"a393"))},props:!0,meta:{requireAuth:!0,roles:["university"]}},{path:"/company/personalInfo",component:function(){return n.e("chunk-cbce1416").then(n.bind(null,"60d4"))},meta:{requireAuth:!0,roles:["company"]}},{path:"/university/personalInfo",component:function(){return n.e("chunk-7f787d22").then(n.bind(null,"242b"))},meta:{requireAuth:!0,roles:["university"]}},{path:"/manager",name:"manager",component:function(){return n.e("chunk-2d21f876").then(n.bind(null,"d9e0"))}},{path:"*",name:"NotFound",component:function(){return n.e("chunk-5122fb2c").then(n.bind(null,"bcec"))}}],U=new m.a({mode:"history",base:"/",routes:z}),H=n("2f62");r.default.use(H.a);var J=new H.a.Store({state:{username:"",account:"",subject:""},mutations:{handleUserName:function(e,t){e.username=t,sessionStorage.setItem("username",t)},handleAccount:function(e,t){e.account=t,sessionStorage.setItem("account",t)},handleSubject:function(e,t){e.subject=t,sessionStorage.setItem("subject",t)},handleSelectSubject:function(e,t){e.selectSubject=t,sessionStorage.setItem("selectSubject",t)},logout:function(e){sessionStorage.clear(),e.username="",e.account=""}},actions:{},modules:{}}),G=n("5c96"),K=n.n(G),Q=(n("0fae"),n("5363"),n("bc3a")),Y=n.n(Q),Z=n("f309");r.default.use(Z.a);var ee=new Z.a({});r.default.config.productionTip=!1,r.default.prototype.$http=Y.a,r.default.use(K.a),Y.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),Y.a.interceptors.response.use((function(e){return 200===e.status?Promise.resolve(e):Promise.reject(e)}),(function(e){if(e.response.status)switch(e.response.status){case 150:sessionStorage.clear(),U.push("/login")}})),U.beforeEach((function(e,t,n){var r=sessionStorage.getItem("userToken"),a=sessionStorage.getItem("role");if(e.meta.requireAuth)if(r)if(0!==e.meta.roles.length)for(var s=0;s<e.meta.roles.length;s++){if(a===e.meta.roles[s]){n();break}s===e.meta.roles.length-1&&n({path:"/Error"})}else n();else n({path:"/login"});else n();"/login"===e.fullPath&&(r?n("university"===a?{path:"/university/demand/list/船舶产业"}:"company"===a?{path:"/company/research/list/船舶产业"}:{path:t.fullPath}):n())})),new r.default({router:U,store:J,vuetify:ee,render:function(e){return e(u)}}).$mount("#app")},"5ef3":function(e,t,n){"use strict";var r=n("6317");n.n(r).a},6317:function(e,t,n){},7671:function(e,t,n){},"88f8":function(e,t,n){e.exports=n.p+"assets/img/13-4.d0f9665a.jpg"},b76c:function(e,t,n){"use strict";var r=n("7671");n.n(r).a},cba5:function(e,t,n){"use strict";var r={name:"FullScreenBtn",methods:{toggleFullScreen:function(){document.fullscreenElement?document.exitFullscreen&&this.exitFullscreen():this.inFullScreen()},inFullScreen:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},exitFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}}},a=n("2877"),s=n("6544"),o=n.n(s),i=n("8336"),c=n("132d"),l=n("3a2f"),u=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{icon:""},on:{click:e.toggleFullScreen}},r),[n("v-icon",[e._v("mdi-fullscreen")])],1)]}}])},[n("span",[e._v("全屏")])])}),[],!1,null,"6ca5c481",null),m=u.exports;o()(u,{VBtn:i.a,VIcon:c.a,VTooltip:l.a});n("b0c0"),n("96cf");var p=n("1da1"),d={inject:["reload"],name:"UserMenu",data:function(){return{role:""}},computed:{username:function(){return sessionStorage.getItem("username")},account:function(){return sessionStorage.getItem("account")}},mounted:function(){},methods:{logout:function(){var e=this;return Object(p.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("logout"),t.next=3,e.$http.get("/api/user/logout");case 3:if(200==t.sent.data.code){t.next=7;break}return e.$message.error("退出登录失败！"),t.abrupt("return",!1);case 7:"Login"!==e.$router.name&&(e.$router.push({name:"Login"}),e.$router.go(0));case 8:case"end":return t.stop()}}),t)})))()},handleToInfo:function(){this.role=sessionStorage.getItem("role"),this.$router.push("/"+this.role+"/personalInfo")},handleToHistory:function(){this.role=sessionStorage.getItem("role"),this.$router.push("/"+this.role+"/history")}}},f=n("b0af"),h=n("ce7e"),v=n("8860"),b=n("da13"),g=n("5d23"),k=n("e449"),x=Object(a.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!1,left:"",bottom:"","offset-y":"","nudge-bottom":"8",transition:"scroll-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({staticClass:"body-1",attrs:{text:""}},r),[e._v(e._s(e.username))])]}}])},[n("v-card",{attrs:{width:"240"}},[n("v-list",{staticClass:"py-1"},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-medium"},[e._v(e._s(e.username))]),n("v-list-item-subtitle",[e._v(e._s(e.account))])],1)],1),n("v-divider"),n("v-list-item",[n("v-list-item-title",{staticClass:"body-2"},[n("a",{staticClass:"grey--text text--darken-2",on:{click:function(t){return e.handleToHistory()}}},[e._v("发布历史")])])],1),n("v-list-item",[n("v-list-item-title",{staticClass:"body-2"},[n("a",{staticClass:"grey--text text--darken-2",on:{click:function(t){return e.handleToInfo()}}},[e._v("我的信息")])])],1),n("v-list-item",[n("v-list-item-title",{staticClass:"body-2"},[n("router-link",{staticClass:"grey--text text--darken-2",attrs:{to:"/accountSetting"}},[e._v("账户设置")])],1)],1),n("v-divider"),n("v-list-item",{on:{click:e.logout}},[n("v-list-item-title",{staticClass:"grey--text body-2"},[e._v("退出登录")])],1)],1)],1)],1)}),[],!1,null,"6e365a78",null),y=x.exports;o()(x,{VBtn:i.a,VCard:f.a,VDivider:h.a,VList:v.a,VListItem:b.a,VListItemContent:g.b,VListItemSubtitle:g.c,VListItemTitle:g.d,VMenu:k.a});var w={name:"AppBar",components:{UserMenu:y,FullScreenBtn:m},props:{title:{type:String},subTitle:{type:String},backIcon:{type:Boolean,default:!1},hideMessage:{type:Boolean,default:!1},hideUserMenu:{type:Boolean,default:!1},hideDemand:{type:Boolean,default:!1},newMessage:{type:Boolean,default:!1}},computed:{dark:function(){return this.$vuetify.theme.dark},appName:function(){return"靖江市科技镇长团"},noIcon:function(){return!this.backIcon}},data:function(){return{crole:"",releaseText:""}},methods:{goBack:function(){"company"===this.crole?this.$router.push("/company"):"university"===this.crole?this.$router.push("/university"):this.$router.back()},goNameRouter:function(e){this.$router.push(e)},handleToRelease:function(){"company"===this.crole?this.$router.push("/company/realeaseDemand"):"university"===this.crole&&this.$router.push("/university/realeaseScience")},handleToText:function(){this.crole=sessionStorage.getItem("role"),"company"===this.crole?this.releaseText="发布需求":"university"===this.crole&&(this.releaseText="发布成果")}},mounted:function(){this.handleToText()}},_=n("40dc"),C=n("5bc1"),$=n("2fa4"),V=n("2a7f"),S=Object(a.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",elevation:"2",color:"#333744",dark:""}},[e.backIcon?n("v-app-bar-nav-icon",{on:{click:function(t){return e.goBack()}}},[n("v-icon",{domProps:{innerHTML:e._s("mdi-arrow-left")}})],1):e._e(),n("v-toolbar-title",[n("span",{staticClass:"pr-8"},[e._v(e._s(e.title||e.appName))])]),n("v-spacer"),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.hideDemand,expression:"!hideDemand"}],staticClass:"mr-5",attrs:{color:"light-blue darken-1"},on:{click:function(t){return e.handleToRelease()}}},[n("v-icon",[e._v("mdi-plus")]),e._v(" "+e._s(e.releaseText)+" ")],1),n("full-screen-btn",{staticClass:"hidden-sm-and-down"}),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:!e.hideMessage,expression:"!hideMessage"}],attrs:{icon:""},on:{click:function(t){return e.goNameRouter("/message")}}},r),[n("v-icon",[e._v("mdi-bell")])],1)]}}])},[n("span",[e._v("消息中心")])]),n("v-toolbar-items",[e.hideUserMenu?e._e():n("user-menu")],1)],1)}),[],!1,null,"610ec28e",null),I=S.exports;o()(S,{VAppBar:_.a,VAppBarNavIcon:C.a,VBtn:i.a,VIcon:c.a,VSpacer:$.a,VToolbarItems:V.a,VToolbarTitle:V.b,VTooltip:l.a});t.a=I},f0e3:function(e,t,n){}},[[0,"runtime","npm.vuetify","npm.core-js","npm.babel-runtime","npm.element-ui","npm.axios","npm.async-validator","npm.qs","npm.mdi","npm.regenerator-runtime","npm.resize-observer-polyfill","npm.vue-router","npm.vue","npm.vuex","vendors~app"]]]);