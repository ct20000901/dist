(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b362787"],{"174c":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"back"},[s("v-breadcrumbs",{staticClass:"ml-12",attrs:{items:e.breadList},scopedSlots:e._u([{key:"divider",fn:function(){return[s("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])}),s("v-card",{staticClass:"mx-auto mb-12",attrs:{"max-width":"1000","min-height":"1100"}},[s("v-form",{staticClass:"pl-8",attrs:{model:e.form}},[s("div",{staticClass:"pt-8"},[s("span",{staticClass:"red--text"},[e._v("*")]),e._v("第一步：项目名称")]),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{required:"",placeholder:"请输入项目名称，1-20个字以内",rules:[function(e){return!!e||"项目名称为必填项"}]},model:{value:e.form.enterpriseneeds.title,callback:function(t){e.$set(e.form.enterpriseneeds,"title",t)},expression:"form.enterpriseneeds.title"}})],1),s("p",[s("span",{staticClass:"red--text"},[e._v("*")]),e._v("第二步：我的项目类型（可多选）")]),s("v-row",[s("v-checkbox",{staticClass:"ml-4 mx-2",attrs:{label:"机械",value:"机械"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"电气",value:"电气"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"能源动力",value:"能源动力"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"电子信息",value:"电子信息"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"新材料",value:"新材料"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"化工",value:"化工"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"生物医疗"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"航空航天",value:"航空航天"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}}),s("v-checkbox",{staticClass:"mx-2",attrs:{label:"其他",value:"其他"},model:{value:e.form.needs,callback:function(t){e.$set(e.form,"needs",t)},expression:"form.needs"}})],1),s("div",{staticClass:"mt-5"},[s("span",{staticClass:"red--text pt-5"},[e._v("*")]),e._v("第三步：我的需求简介 ")]),s("v-col",{attrs:{cols:"12",sm:"8"}},[s("v-textarea",{attrs:{filled:"",placeholder:"请输入项目需求简介，200字以内",rules:[function(e){return!!e||"项目需求简介为必填项"}]},model:{value:e.form.enterpriseneeds.intro,callback:function(t){e.$set(e.form.enterpriseneeds,"intro",t)},expression:"form.enterpriseneeds.intro"}})],1),s("div",{staticClass:"mt-5"},[s("span",{staticClass:"red--text"},[e._v("*")]),e._v("第四步：项目预算")]),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{required:"",placeholder:"请输入您的资金预算（元）",rules:[function(e){return!!e||"资金预算为必填项"}]},model:{value:e.form.enterpriseneeds.budget,callback:function(t){e.$set(e.form.enterpriseneeds,"budget",t)},expression:"form.enterpriseneeds.budget"}})],1),s("div",{staticClass:"mt-5"},[s("span",{staticClass:"red--text"},[e._v("*")]),e._v("第五步：联系方式")]),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{required:"",filled:"",label:"联系人姓名",placeholder:"请输入联系人姓名",rules:[function(e){return!!e||"联系人姓名为必填项"}]},model:{value:e.form.enterpriseneeds.contacts,callback:function(t){e.$set(e.form.enterpriseneeds,"contacts",t)},expression:"form.enterpriseneeds.contacts"}}),s("v-text-field",{attrs:{required:"",filled:"",label:"联系人电话",placeholder:"请输入联系人电话",rules:[function(e){return!!e||"联系人电话为必填项"}]},model:{value:e.form.enterpriseneeds.tel,callback:function(t){e.$set(e.form.enterpriseneeds,"tel",t)},expression:"form.enterpriseneeds.tel"}}),s("v-text-field",{attrs:{required:"",filled:"",label:"联系邮箱",placeholder:"请输入联系邮箱",rules:[function(e){return!!e||"联系人邮箱为必填项"}]},model:{value:e.form.enterpriseneeds.mail,callback:function(t){e.$set(e.form.enterpriseneeds,"mail",t)},expression:"form.enterpriseneeds.mail"}})],1),s("div",{staticClass:"mt-5"},[e._v("第六步：需求文档")]),s("v-file-input",{attrs:{accept:"application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",placeholder:"只能上传pdf/docx/excel文件",label:"科研论文上传","prepend-icon":"mdi-paperclip"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),s("v-row",{staticClass:"mt-8 mb-12 ml-2"},[s("div",{staticClass:"mr-12 ml-3"},[s("v-btn",{attrs:{width:"120px",depressed:"",large:"",color:"info",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.release()}}},[e._v("发布需求")])],1),s("div",{staticClass:"mr-12"},[s("v-btn",{staticClass:"white--text",attrs:{width:"120px",depressed:"",large:"",color:"#AAAAAA"},on:{click:function(t){return e.cancel()}}},[e._v("取消")])],1)])],1)],1)],1)},a=[],i=(s("96cf"),s("1da1")),r={name:"ReleaseScience",computed:{},data:function(){return{form:{enterpriseneeds:{title:"",intro:"",budget:"",contacts:"",mail:"",tel:""},fileurl:null,needs:[]},file:null,loading:!1,breadList:[{text:"您的位置：首页",disabled:!1,href:"/company"},{text:"发布企业需求",disabled:!0}]}},methods:{clearInput:function(){this.form={}},release:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=new FormData,s.append("File",e.file),t.next=4,e.$http.post("/api/business/upload",s,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:return n=t.sent,200===n.data.code&&(e.form.fileurl=n.data.data),t.next=8,e.$http.post("/api/business/add",e.form,{headers:{"Content-Type":"application/json"}});case 8:a=t.sent,200===a.data.code?(e.$message.success("发布企业需求成功！"),e.clearInput(),e.$router.push("/company")):e.$message.error("发布企业需求失败！");case 10:case"end":return t.stop()}}),t)})))()},cancel:function(){this.clearInput(),this.$router.push("/company")}}},o=r,c=(s("de73"),s("2877")),l=s("6544"),d=s.n(l),u=s("2bc5"),m=s("8336"),p=s("b0af"),f=s("ac7c"),h=s("62ad"),v=s("23a7"),b=s("4bd4"),x=s("132d"),k=s("0fd9"),g=s("8654"),C=s("a844"),$=Object(c["a"])(o,n,a,!1,null,"1fae4f8c",null);t["default"]=$.exports;d()($,{VBreadcrumbs:u["a"],VBtn:m["a"],VCard:p["a"],VCheckbox:f["a"],VCol:h["a"],VFileInput:v["a"],VForm:b["a"],VIcon:x["a"],VRow:k["a"],VTextField:g["a"],VTextarea:C["a"]})},"2bc5":function(e,t,s){"use strict";s("a15b");var n=s("5530"),a=(s("abd3"),s("ade3")),i=s("1c87"),r=s("58df"),o=Object(r["a"])(i["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(a["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),s=t.tag,a=t.data;return e("li",[e(s,Object(n["a"])({},a,{attrs:Object(n["a"])({},a.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),c=s("80d2"),l=Object(c["g"])("v-breadcrumbs__divider","li"),d=s("7560");t["a"]=Object(r["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(n["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(l,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,s=[],n=0;n<this.items.length;n++){var a=this.items[n];s.push(a.text),t?e.push(this.$scopedSlots.item({item:a})):e.push(this.$createElement(o,{key:s.join("."),props:a},[a.text])),n<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},"6ca7":function(e,t,s){},abd3:function(e,t,s){},ac7c:function(e,t,s){"use strict";s("d3b7"),s("25f0");var n=s("5530"),a=(s("6ca7"),s("ec29"),s("9d26")),i=s("c37a"),r=s("fe09");t["a"]=r["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(n["a"])({},i["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(a["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(n["a"])({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},d5f8:function(e,t,s){},de73:function(e,t,s){"use strict";var n=s("d5f8"),a=s.n(n);a.a}}]);
//# sourceMappingURL=chunk-2b362787.017925db.js.map