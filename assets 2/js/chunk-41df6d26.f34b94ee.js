(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-41df6d26"],{"59df":function(t,e,a){},ba2b:function(t,e,a){"use strict";a.r(e);a("96cf");var n=a("1da1"),r={name:"CompanyEdit",props:["id"],data:function(){return{file:null,form:{id:this.id,title:"",intro:"",budget:"",contacts:"",mail:"",tel:"",fileurl:""},loading:!1}},watch:{$router:function(){this.getNeed()}},components:{AppFooter:a("4fbe").a},methods:{clearInput:function(){this.form={}},goBack:function(){this.$router.push("/company/history")},saveComChanges:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,!t.file){e.next=8;break}return(a=new FormData).append("File",t.file),e.next=6,t.$http.post("/api/business/upload",a,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 6:200===(n=e.sent).data.code&&(t.form.fileurl=n.data.data);case 8:return e.next=10,t.$http.post("/api/business/updateEnter",t.form,{headers:{"Content-Type":"application/json"}});case 10:200===e.sent.data.code?(t.$message.success("提交需求修改成功！"),t.loading=!1,t.$router.push("/company/history")):(t.loading=!1,t.$message.error("企业需求修改失败！"));case 12:case"end":return e.stop()}}),e)})))()},getNeed:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/business/readMyEntry?id="+t.id);case 2:if(200==(a=e.sent).data.code){e.next=6;break}return t.$message.warning("抱歉，您无法编辑该企业需求！"),e.abrupt("return",!1);case 6:t.form=a.data.data.enterpriseneeds;case 7:case"end":return e.stop()}}),e)})))()},cancel:function(){this.clearInput(),this.$router.push("/company/history")}},mounted:function(){this.getNeed()}},o=(a("c914"),a("2877")),s=a("6544"),i=a.n(s),l=a("40dc"),c=a("5bc1"),d=a("8336"),p=a("b0af"),u=a("62ad"),m=a("a523"),f=a("a75b"),v=a("23a7"),h=a("4bd4"),b=a("132d"),x=a("0fd9"),g=a("2fa4"),C=a("8654"),w=a("a844"),k=a("2a7f"),$=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back"},[a("v-app-bar",{attrs:{app:"",elevation:"2",color:"#333744",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){return t.goBack()}}},[a("v-icon",{domProps:{innerHTML:t._s("mdi-arrow-left")}})],1),a("v-toolbar-title",[a("span",{staticClass:"pr-8"},[t._v("编辑企业需求")])]),a("v-spacer")],1),a("v-content",{staticStyle:{"min-height":"calc(100vh - 64px)"}},[a("v-container",[a("v-card",{staticClass:"mx-auto mb-12 mt-6",attrs:{"max-width":"1000","min-height":"800"}},[a("v-form",{staticClass:"pl-8",attrs:{model:t.form}},[a("div",{staticClass:"pt-8"},[a("v-icon",[t._v("mdi-tag")]),a("span",{staticClass:"ml-3"},[t._v("项目名称")])],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{required:"",placeholder:"请输入项目名称，1-20个字以内",rules:[function(t){return!!t||"项目名称为必填项"}]},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("div",{staticClass:"mt-5"},[a("v-icon",[t._v("mdi-clipboard-text")]),a("span",{staticClass:"ml-3"},[t._v("企业需求介绍")])],1),a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-textarea",{attrs:{filled:"",placeholder:"请输入项目需求简介，200字以内",rules:[function(t){return!!t||"项目需求简介为必填项"}]},model:{value:t.form.intro,callback:function(e){t.$set(t.form,"intro",e)},expression:"form.intro"}})],1),a("div",{staticClass:"mt-5"},[a("v-icon",[t._v("mdi-cash-usd")]),a("span",{staticClass:"ml-3"},[t._v("资金预算")])],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{required:"",placeholder:"请输入您的资金预算（元）",rules:[function(t){return!!t||"资金预算为必填项"}]},model:{value:t.form.budget,callback:function(e){t.$set(t.form,"budget",e)},expression:"form.budget"}})],1),a("div",{staticClass:"mt-5"},[a("v-icon",[t._v("mdi-phone")]),a("span",{staticClass:"ml-3"},[t._v("联系方式")])],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{required:"",filled:"",label:"联系人姓名",placeholder:"请输入联系人姓名",rules:[function(t){return!!t||"联系人姓名为必填项"}]},model:{value:t.form.contacts,callback:function(e){t.$set(t.form,"contacts",e)},expression:"form.contacts"}}),a("v-text-field",{attrs:{required:"",filled:"",label:"联系人电话",placeholder:"请输入联系人电话",rules:[function(t){return!!t||"联系人电话为必填项"}]},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}}),a("v-text-field",{attrs:{required:"",filled:"",label:"联系邮箱",placeholder:"请输入联系邮箱",rules:[function(t){return!!t||"联系人邮箱为必填项"}]},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}})],1),a("div",{staticClass:"mt-5"},[a("v-icon",[t._v("mdi-file-document-edit")]),a("span",{staticClass:"ml-3"},[t._v("需求文档")])],1),a("v-file-input",{attrs:{accept:"application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",placeholder:"只能上传pdf/docx/excel文件",label:"需求文档上传","prepend-icon":"mdi-paperclip"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),a("v-row",{staticClass:"mt-8 mb-12 ml-2"},[a("div",{staticClass:"mr-12 ml-3"},[a("v-btn",{attrs:{width:"120px",depressed:"",large:"",color:"info",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.saveComChanges()}}},[t._v("提交修改")])],1),a("div",{staticClass:"mr-12"},[a("v-btn",{staticClass:"white--text",attrs:{width:"120px",depressed:"",large:"",color:"#AAAAAA"},on:{click:function(e){return t.cancel()}}},[t._v("取消")])],1)])],1)],1)],1)],1),a("app-footer")],1)}),[],!1,null,"041169c4",null);e.default=$.exports;i()($,{VAppBar:l.a,VAppBarNavIcon:c.a,VBtn:d.a,VCard:p.a,VCol:u.a,VContainer:m.a,VContent:f.a,VFileInput:v.a,VForm:h.a,VIcon:b.a,VRow:x.a,VSpacer:g.a,VTextField:C.a,VTextarea:w.a,VToolbarTitle:k.b})},c914:function(t,e,a){"use strict";var n=a("59df");a.n(n).a}}]);