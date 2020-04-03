(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b369a34"],{"23a7":function(t,e,i){"use strict";i("99af"),i("a623"),i("4160"),i("caad"),i("d81d"),i("13d5"),i("fb6a"),i("a434"),i("b0c0"),i("a9e3"),i("159b");var s=i("2909"),a=i("5530"),n=i("53ca"),l=(i("5803"),i("2677")),r=i("cc20"),c=i("80d2"),o=i("d9bd");e["a"]=l["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(c["x"])(t).every((function(t){return null!=t&&"object"===Object(n["a"])(t)}))}}},computed:{classes:function(){return Object(a["a"])({},l["a"].options.computed.classes.call(this),{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,s=void 0===i?0:i;return t+s}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(c["p"])(e,1024===this.base))},internalArrayValue:function(){return Object(c["x"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var i=e.name,s=void 0===i?"":i,a=e.size,n=void 0===a?0:a,l=t.truncateText(s);return t.showSize?"".concat(l," (").concat(Object(c["p"])(n,1024===t.base),")"):l})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(o["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(c["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:void 0,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(r["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genInput:function(){var t=l["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,s){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[s],file:i,index:s}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=l["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(a["a"])({},e.data.on||{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(s["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,i){"use strict";var s=i("8654");e["a"]=s["a"]},"2bc5":function(t,e,i){"use strict";i("a15b");var s=i("5530"),a=(i("abd3"),i("ade3")),n=i("1c87"),l=i("58df"),r=Object(l["a"])(n["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(a["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return t("li",[t(i,Object(s["a"])({},a,{attrs:Object(s["a"])({},a.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),c=i("80d2"),o=Object(c["g"])("v-breadcrumbs__divider","li"),u=i("7560");e["a"]=Object(l["a"])(u["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(o,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],s=0;s<this.items.length;s++){var a=this.items[s];i.push(a.text),e?t.push(this.$scopedSlots.item({item:a})):t.push(this.$createElement(r,{key:i.join("."),props:a},[a.text])),s<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},5803:function(t,e,i){},"6ca7":function(t,e,i){},"712e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back"},[i("v-breadcrumbs",{staticClass:"ml-12",attrs:{items:t.breadList},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),i("v-card",{staticClass:"mx-auto mb-12",attrs:{"max-width":"1000","min-height":"2850"}},[i("v-form",{staticClass:"pl-8"},[i("div",{staticClass:"pt-8"},[i("span",{staticClass:"red--text"},[t._v("*")]),t._v("第一步：项目名称")]),i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",{attrs:{required:"",placeholder:"请输入项目名称，20个字以内",rules:[function(t){return!!t||"项目名称为必填项"}]},model:{value:t.form.sci.entryname,callback:function(e){t.$set(t.form.sci,"entryname",e)},expression:"form.sci.entryname"}})],1),i("div",{staticClass:"pt-8"},[i("span",{staticClass:"red--text"},[t._v("*")]),t._v("第二步：成果负责人 ")]),i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",{attrs:{required:"",placeholder:"请输入成果负责人姓名",rules:[function(t){return!!t||"成果负责人姓名为必填项"}]},model:{value:t.form.sci.charge,callback:function(e){t.$set(t.form.sci,"charge",e)},expression:"form.sci.charge"}}),i("v-text-field",{attrs:{required:"",placeholder:"请输入成果负责人职称信息",rules:[function(t){return!!t||"成果负责人职称信息为必填项"}]},model:{value:t.form.sci.position,callback:function(e){t.$set(t.form.sci,"position",e)},expression:"form.sci.position"}})],1),i("div",{staticClass:"mt-5"},[i("span",{staticClass:"red--text"},[t._v("*")]),t._v("第三步：我的科研类型（可多选） ")]),i("v-row",[i("v-checkbox",{staticClass:"ml-4 mx-2",attrs:{value:"机械",label:"机械"},model:{value:t.form.disciplines,callback:function(e){t.$set(t.form,"disciplines",e)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"电气",label:"电气"},model:{value:t.form.disciplines,callback:function(e){t.$set(t.form,"disciplines",e)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"能源动力",label:"能源动力"},model:{value:t.form.disciplines,callback:function(e){t.$set(t.form,"disciplines",e)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"电子信息",label:"电子信息"},model:{value:t.form.disciplines,callback:function(e){t.$set(t.form,"disciplines",e)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"新材料",label:"新材料"},model:{value:t.form.disciplines,callback:function(e){t.$set(t.form,"disciplines",e)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"化工",label:"化工"},model:{value:t.form.disciplines,callback:function(e){t.$set(t.form,"disciplines",e)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"生物医疗",label:"生物医疗"},model:{value:t.form.disciplines,callback:function(e){t.$set(t.form,"disciplines",e)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"航空航天",label:"航空航天"},model:{value:t.form.disciplines,callback:function(e){t.$set(t.form,"disciplines",e)},expression:"form.disciplines"}})],1),i("div",{staticClass:"mt-5"},[i("span",{staticClass:"red--text pt-5"},[t._v("*")]),t._v("第四步：我的科研成果介绍 ")]),i("v-col",{attrs:{cols:"12",sm:"8"}},[i("v-textarea",{attrs:{filled:"",placeholder:"请输入科研成果简介，200字以内",rules:[function(t){return!!t||"项目名称为必填项"}]},model:{value:t.form.sci.results,callback:function(e){t.$set(t.form.sci,"results",e)},expression:"form.sci.results"}})],1),i("div",{staticClass:"mt-5"},[i("span",{staticClass:"red--text"},[t._v("*")]),t._v("第五步：技术创新点 ")]),i("div",{staticStyle:{height:"610px"}},[i("quill-editor",{ref:"myQuillEditor",staticClass:"mr-8",staticStyle:{height:"500px"},attrs:{"max-height":"400",options:t.editorOption},model:{value:t.form.sci.tecNew,callback:function(e){t.$set(t.form.sci,"tecNew",e)},expression:"form.sci.tecNew"}})],1),i("div",{staticClass:"mt-5"},[t._v("第六步：市场前景及应用")]),i("div",{staticStyle:{height:"610px"}},[i("quill-editor",{ref:"myQuillEditor",staticClass:"mr-8",staticStyle:{height:"500px"},attrs:{"max-height":"400",options:t.editorOption},model:{value:t.form.sci.future,callback:function(e){t.$set(t.form.sci,"future",e)},expression:"form.sci.future"}})],1),i("div",{staticClass:"mt-5"},[t._v("第七步：技术成熟度")]),i("v-radio-group",{attrs:{row:""},model:{value:t.form.sci.maturity,callback:function(e){t.$set(t.form.sci,"maturity",e)},expression:"form.sci.maturity"}},[i("v-radio",{staticClass:"ml-4",attrs:{value:"概念验证",label:"概念验证"}}),i("v-radio",{staticClass:"ml-4",attrs:{value:"原理样机",label:"原理样机"}}),i("v-radio",{staticClass:"ml-4",attrs:{value:"工程样机",label:"工程样机"}}),i("v-radio",{staticClass:"ml-4",attrs:{value:"中试",label:"中试"}}),i("v-radio",{staticClass:"ml-4",attrs:{value:"产业化",label:"产业化"}})],1),i("div",{staticClass:"mt-5"},[i("span",{staticClass:"red--text"},[t._v("*")]),t._v("第八步：联系方式")]),i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",{attrs:{required:"",filled:"",label:"项目联系人姓名",placeholder:"请输入联系人姓名",rules:[function(t){return!!t||"联系人姓名为必填项"}]},model:{value:t.form.sci.contacts,callback:function(e){t.$set(t.form.sci,"contacts",e)},expression:"form.sci.contacts"}}),i("v-text-field",{attrs:{required:"",filled:"",label:"项目联系人电话",placeholder:"请输入联系电话",rules:[function(t){return!!t||"联系人电话为必填项"}]},model:{value:t.form.sci.tel,callback:function(e){t.$set(t.form.sci,"tel",e)},expression:"form.sci.tel"}}),i("v-text-field",{attrs:{required:"",filled:"",label:"项目联系邮箱",placeholder:"请输入联系邮箱",rules:[function(t){return!!t||"联系人邮箱为必填项"}]},model:{value:t.form.sci.mail,callback:function(e){t.$set(t.form.sci,"mail",e)},expression:"form.sci.mail"}}),i("v-text-field",{attrs:{required:"",filled:"",label:"个人信息",placeholder:"请输入个人联系方式",rules:[function(t){return!!t||"个人信息为必填项"}]},model:{value:t.form.sci.information,callback:function(e){t.$set(t.form.sci,"information",e)},expression:"form.sci.information"}})],1),i("div",{staticClass:"mt-5"},[t._v("第八步：科研论文")]),i("v-file-input",{attrs:{accept:"application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",placeholder:"只能上传pdf/docx/excel文件",label:"科研论文上传","prepend-icon":"mdi-paperclip"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),i("v-row",{staticClass:"mt-12 mb-12"},[i("div",{staticClass:"mr-12 ml-3"},[i("v-btn",{attrs:{width:"120px",depressed:"",large:"",color:"info",loading:t.loading,disabled:t.loading},on:{click:function(e){return t.releaseSci()}}},[t._v("发布成果")])],1),i("div",{staticClass:"mr-12"},[i("v-btn",{staticClass:"white--text",attrs:{width:"120px",depressed:"",large:"",color:"#AAAAAA"},on:{click:function(e){return t.cancel()}}},[t._v("取消")])],1)])],1)],1)],1)},a=[],n=(i("96cf"),i("1da1")),l=i("953d"),r=(i("a753"),i("8096"),i("14e1"),{name:"ReleaseScience",components:{quillEditor:l["quillEditor"]},data:function(){return{loading:!1,file:null,editorOption:{theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"][{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]}],[{align:[]}],["link","image"],["sourceEditor"]]}},form:{sci:{entryname:"",tel:"",mail:"",position:"",information:"",charge:"",results:"",maturity:"",contacts:"",tecNew:null,future:null},File:null,disciplines:[]},breadList:[{text:"您的位置：首页",disabled:!1,href:"/university"},{text:"发布科研成果",disabled:!0}]}},methods:{clearInput:function(){this.form={}},releaseSci:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=new FormData,i.append("File",t.file),e.next=4,t.$http.post("/api/school/upload",i,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:return s=e.sent,200===s.data.code&&(t.form.File=s.data.data),e.next=8,t.$http.post("/api/school/add",t.form,{headers:{"Content-Type":"application/json"}});case 8:a=e.sent,200===a.data.code?(t.$message.success("发布科研成果成功！"),t.clearInput(),t.$router.push("/university/history")):(t.clearInput(),t.$message.error("发布科研成果失败！")),t.clearInput();case 11:case"end":return e.stop()}}),e)})))()},cancel:function(){this.clearInput(),this.$router.push("/university")}}}),c=r,o=(i("923d"),i("2877")),u=i("6544"),d=i.n(u),h=i("2bc5"),p=i("8336"),f=i("b0af"),m=i("ac7c"),v=i("62ad"),b=i("23a7"),g=i("4bd4"),x=i("132d"),C=i("67b6"),y=i("43a6"),k=i("0fd9"),$=i("8654"),S=i("a844"),w=Object(o["a"])(c,s,a,!1,null,"728a4994",null);e["default"]=w.exports;d()(w,{VBreadcrumbs:h["a"],VBtn:p["a"],VCard:f["a"],VCheckbox:m["a"],VCol:v["a"],VFileInput:b["a"],VForm:g["a"],VIcon:x["a"],VRadio:C["a"],VRadioGroup:y["a"],VRow:k["a"],VTextField:$["a"],VTextarea:S["a"]})},"8adc":function(t,e,i){},"923d":function(t,e,i){"use strict";var s=i("f20e"),a=i.n(s);a.a},abd3:function(t,e,i){},ac7c:function(t,e,i){"use strict";i("d3b7"),i("25f0");var s=i("5530"),a=(i("6ca7"),i("ec29"),i("9d26")),n=i("c37a"),l=i("fe09");e["a"]=l["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(s["a"])({},n["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(a["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(s["a"])({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},cc20:function(t,e,i){"use strict";i("4de4"),i("4160");var s=i("3835"),a=i("5530"),n=(i("8adc"),i("58df")),l=i("0789"),r=i("9d26"),c=i("a9ad"),o=i("4e82"),u=i("7560"),d=i("f2e7"),h=i("1c87"),p=i("af2b"),f=i("d9bd");e["a"]=Object(n["a"])(c["a"],p["a"],h["a"],u["a"],Object(o["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(a["a"])({"v-chip":!0},h["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(s["a"])(e,2),a=i[0],n=i[1];t.$attrs.hasOwnProperty(a)&&Object(f["a"])(a,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l["b"],t)},genClose:function(){var t=this;return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),s=i.tag,n=i.data;n.attrs=Object(a["a"])({},n.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var l=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(l,n),e)}})},f20e:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0b369a34.f583465a.js.map