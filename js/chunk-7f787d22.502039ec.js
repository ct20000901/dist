(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f787d22"],{"242b":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"back"},[t("app-bar",{attrs:{"back-icon":"",title:"我的信息","hide-user-menu":"",hideMessage:"",hideDemand:""}}),t("v-content",{staticStyle:{"min-height":"calc(100vh - 64px)"}},[t("v-container",[t("v-card",{staticClass:"mx-auto mt-12",attrs:{"min-height":"400","max-width":"800"}},[t("v-card-title",[e._v("基本信息")]),t("div",{staticClass:"pl-10"},[t("el-form",{ref:"editUserFormRef",attrs:{"label-position":"left","label-width":"80px",model:e.form,rules:e.editUserFormRules}},[t("v-col",{attrs:{cols:"12",sm:"6"}},[t("el-form-item",{attrs:{label:"所属大学"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"联系方式",prop:"tel"}},[t("el-input",{on:{blur:function(r){return e.changeUserInfo()}},model:{value:e.form.tel,callback:function(r){e.$set(e.form,"tel",r)},expression:"form.tel"}})],1),t("el-form-item",{attrs:{label:"联系邮箱",prop:"mail"}},[t("el-input",{on:{blur:function(r){return e.changeUserInfo()}},model:{value:e.form.mail,callback:function(r){e.$set(e.form,"mail",r)},expression:"form.mail"}})],1)],1),t("v-col",{attrs:{cols:"12",sm:"8"}},[t("el-form-item",{attrs:{label:"地址",prop:"address"}},[t("el-input",{on:{blur:function(r){return e.changeUserInfo()}},model:{value:e.form.address,callback:function(r){e.$set(e.form,"address",r)},expression:"form.address"}})],1)],1)],1)],1)],1)],1)],1),t("app-footer")],1)},n=[],s=(t("96cf"),t("1da1")),o=t("cba5"),i=t("4fbe"),l={name:"PersonalCenter",components:{AppBar:o["a"],AppFooter:i["a"]},data:function(){var e=function(e,r,t){var a=/^\w+@\w+(\.\w+)+$/;if(a.test(r))return t();t(new Error("请输入合法邮箱"))},r=function(e,r,t){var a=/^1[34578]\d{9}$/;if(a.test(r))return t();t(new Error("请输入合法的手机号码"))};return{form:{id:"",username:"",tel:"",mail:"",address:""},editUserFormRules:{mail:[{required:!0,message:"请输入联系邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],tel:[{required:!0,message:"请输入联系电话",trigger:"blur"},{validator:r,trigger:"blur"}],address:[{required:!0,message:"请输入高校所在地址",trigger:"blur"}]}}},methods:{getUserInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/api/home/thisuser");case 2:if(t=r.sent,200!=t.data.code){r.next=11;break}e.form.id=t.data.data.id,e.form.username=t.data.data.username,e.form.tel=t.data.data.tel,e.form.mail=t.data.data.mail,e.form.address=t.data.data.address,r.next=12;break;case 11:return r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r)})))()},changeUserInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$refs.editUserFormRef.validate(function(){var r=Object(s["a"])(regeneratorRuntime.mark((function r(t){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,e.$http.post("/api/school/updateSchool",e.form,{headers:{"Content-Type":"application/json"}});case 4:a=r.sent,200===a.data.code?e.$message.success("用户信息修改成功！"):e.$message.error("用户信息修改失败");case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.getUserInfo()}},u=l,c=(t("714b"),t("2877")),m=t("6544"),d=t.n(m),f=t("b0af"),p=t("99d9"),b=t("62ad"),h=t("a523"),g=t("a75b"),v=Object(c["a"])(u,a,n,!1,null,"3c502d06",null);r["default"]=v.exports;d()(v,{VCard:f["a"],VCardTitle:p["c"],VCol:b["a"],VContainer:h["a"],VContent:g["a"]})},"714b":function(e,r,t){"use strict";var a=t("f11c"),n=t.n(a);n.a},f11c:function(e,r,t){}}]);
//# sourceMappingURL=chunk-7f787d22.502039ec.js.map