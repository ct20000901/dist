(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-712348de"],{"174c":function(e,t,s){"use strict";s.r(t);s("96cf");var a=s("1da1"),r={name:"ReleaseScience",computed:{},data:function(){return{form:{enterpriseneeds:{title:"",intro:"",budget:"",contacts:"",mail:"",tel:""},fileurl:null,needs:[]},file:null,loading:!1,breadList:[{text:"您的位置：首页",disabled:!1,href:"/company"},{text:"发布企业需求",disabled:!0}]}},methods:{clearInput:function(){this.form={}},release:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.form.validate()){t.next=3;break}return t.abrupt("return");case 3:if(e.loading=!0,!e.file){t.next=11;break}return(s=new FormData).append("File",e.file),t.next=9,e.$http.post("/api/business/upload",s,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 9:200===(a=t.sent).data.code&&(e.form.fileurl=a.data.data);case 11:return t.next=13,e.$http.post("/api/business/add",e.form,{headers:{"Content-Type":"application/json"}});case 13:200===t.sent.data.code?(e.$message.success("发布企业需求成功！"),e.clearInput(),e.$router.push("/company")):e.$message.error("发布企业需求失败！");case 15:case"end":return t.stop()}}),t)})))()},cancel:function(){this.clearInput(),this.$router.push("/company")}}},n=(s("4d46"),s("2877")),l=s("6544"),o=s.n(l),c=s("2bc5"),i=s("8336"),d=s("b0af"),m=s("ac7c"),f=s("62ad"),u=s("23a7"),p=s("4bd4"),v=s("132d"),b=s("0fd9"),x=s("8654"),h=s("a844"),k=Object(n.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"back"},[s("v-breadcrumbs",{staticClass:"ml-12",attrs:{items:e.breadList},scopedSlots:e._u([{key:"divider",fn:function(){return[s("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])}),s("v-card",{staticClass:"mx-auto mb-12",attrs:{"max-width":"1000","min-height":"1100"}},[s("v-form",{ref:"form",staticClass:"pl-8"},[s("div",{staticClass:"pt-8"},[s("span",{staticClass:"red--text"},[e._v("*")]),e._v("第一步：项目名称")]),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{required:"",placeholder:"请输入项目名称，1-20个字以内",rules:[function(e){return!!e||"项目名称为必填项"}]},model:{value:e.form.enterpriseneeds.title,callback:function(t){e.$set(e.form.enterpriseneeds,"title",t)},expression:"form.enterpriseneeds.title"}})],1),s("p",[s("span",{staticClass:"red--text"},[e._v("*")]),e._v("第二步：我的项目类型（可多选）")]),s("v-row",[s("v-checkbox",{staticClass:"ml-4 mx-2",attrs:{label:"船舶产业",value:"船舶产业"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"金属材料",value:"金属材料"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"能源石化",value:"能源石化"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"汽车配件",value:"汽车配件"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"电机电器",value:"电机电器"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"通（专）用设备",value:"通（专）用设备"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"工程机械",value:"工程机械"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"高端装备"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"新材料",value:"新材料"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"生物医药",value:"生物医药"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"电子信息",value:"电子信息"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"节能环保",value:"节能环保"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"其他",value:"其他"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}})],1),s("div",{staticClass:"mt-5"},[s("span",{staticClass:"red--text pt-5"},[e._v("*")]),e._v("第三步：我的需求简介 ")]),s("v-col",{attrs:{cols:"12",sm:"8"}},[s("v-textarea",{attrs:{filled:"",placeholder:"请输入项目需求简介，200字以内",rules:[function(e){return!!e||"项目需求简介为必填项"}]},model:{value:e.form.enterpriseneeds.intro,callback:function(t){e.$set(e.form.enterpriseneeds,"intro",t)},expression:"form.enterpriseneeds.intro"}})],1),s("div",{staticClass:"mt-5"},[s("span",{staticClass:"red--text"},[e._v("*")]),e._v("第四步：项目预算")]),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{required:"",placeholder:"请输入您的资金预算（元）",rules:[function(e){return!!e||"资金预算为必填项"}]},model:{value:e.form.enterpriseneeds.budget,callback:function(t){e.$set(e.form.enterpriseneeds,"budget",t)},expression:"form.enterpriseneeds.budget"}})],1),s("div",{staticClass:"mt-5"},[s("span",{staticClass:"red--text"},[e._v("*")]),e._v("第五步：联系方式")]),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{required:"",filled:"",label:"联系人姓名",placeholder:"请输入联系人姓名",rules:[function(e){return!!e||"联系人姓名为必填项"}]},model:{value:e.form.enterpriseneeds.contacts,callback:function(t){e.$set(e.form.enterpriseneeds,"contacts",t)},expression:"form.enterpriseneeds.contacts"}}),s("v-text-field",{attrs:{required:"",filled:"",label:"联系人电话",placeholder:"请输入联系人电话",rules:[function(e){return!!e||"联系人电话为必填项"}]},model:{value:e.form.enterpriseneeds.tel,callback:function(t){e.$set(e.form.enterpriseneeds,"tel",t)},expression:"form.enterpriseneeds.tel"}}),s("v-text-field",{attrs:{required:"",filled:"",label:"联系邮箱",placeholder:"请输入联系邮箱",rules:[function(e){return!!e||"联系人邮箱为必填项"}]},model:{value:e.form.enterpriseneeds.mail,callback:function(t){e.$set(e.form.enterpriseneeds,"mail",t)},expression:"form.enterpriseneeds.mail"}})],1),s("div",{staticClass:"mt-5"},[e._v("第六步：需求文档")]),s("v-file-input",{attrs:{accept:"application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",placeholder:"只能上传pdf/docx/excel文件",label:"科研论文上传","prepend-icon":"mdi-paperclip"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),s("v-row",{staticClass:"mt-8 mb-12 ml-2"},[s("div",{staticClass:"mr-12 ml-3"},[s("v-btn",{attrs:{width:"120px",depressed:"",large:"",color:"info",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.release()}}},[e._v("发布需求")])],1),s("div",{staticClass:"mr-12"},[s("v-btn",{staticClass:"white--text",attrs:{width:"120px",depressed:"",large:"",color:"#AAAAAA"},on:{click:function(t){return e.cancel()}}},[e._v("取消")])],1)])],1)],1)],1)}),[],!1,null,"9bd70d86",null);t.default=k.exports;o()(k,{VBreadcrumbs:c.a,VBtn:i.a,VCard:d.a,VCheckbox:m.a,VCol:f.a,VFileInput:u.a,VForm:p.a,VIcon:v.a,VRow:b.a,VTextField:x.a,VTextarea:h.a})},"4d46":function(e,t,s){"use strict";var a=s("55a6");s.n(a).a},"55a6":function(e,t,s){}}]);
//# sourceMappingURL=chunk-712348de.e578fc26.js.map