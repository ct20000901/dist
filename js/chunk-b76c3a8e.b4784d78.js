(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b76c3a8e"],{1681:function(t,e,a){},"174c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back"},[a("v-breadcrumbs",{staticClass:"ml-12",attrs:{items:t.breadList},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),a("v-card",{staticClass:"mx-auto mb-12",attrs:{"max-width":"1000","min-height":"1100"}},[a("v-form",{staticClass:"pl-8"},[a("div",{staticClass:"pt-8"},[a("span",{staticClass:"red--text"},[t._v("*")]),t._v("第一步：项目名称")]),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{required:"",placeholder:"请输入项目名称，1-20个字以内"},model:{value:t.projectName,callback:function(e){t.projectName=e},expression:"projectName"}})],1),a("p",[a("span",{staticClass:"red--text"},[t._v("*")]),t._v("第二步：我的项目类型（可多选）")]),a("v-row",[a("v-checkbox",{staticClass:"ml-4 mx-2",attrs:{label:"机械"},model:{value:t.jixie,callback:function(e){t.jixie=e},expression:"jixie"}}),a("v-checkbox",{staticClass:"mx-2",attrs:{label:"电气"},model:{value:t.dianqi,callback:function(e){t.dianqi=e},expression:"dianqi"}}),a("v-checkbox",{staticClass:"mx-2",attrs:{label:"能源动力"},model:{value:t.nengyuan,callback:function(e){t.nengyuan=e},expression:"nengyuan"}}),a("v-checkbox",{staticClass:"mx-2",attrs:{label:"电子信息"},model:{value:t.dianzi,callback:function(e){t.dianzi=e},expression:"dianzi"}}),a("v-checkbox",{staticClass:"mx-2",attrs:{label:"新材料"},model:{value:t.cailiao,callback:function(e){t.cailiao=e},expression:"cailiao"}}),a("v-checkbox",{staticClass:"mx-2",attrs:{label:"化工"},model:{value:t.huagong,callback:function(e){t.huagong=e},expression:"huagong"}}),a("v-checkbox",{staticClass:"mx-2",attrs:{label:"生物医疗"},model:{value:t.shengwu,callback:function(e){t.shengwu=e},expression:"shengwu"}}),a("v-checkbox",{staticClass:"mx-2",attrs:{label:"航空航天"},model:{value:t.hangkong,callback:function(e){t.hangkong=e},expression:"hangkong"}}),a("v-checkbox",{staticClass:"mx-2",attrs:{label:"其他"},model:{value:t.qita,callback:function(e){t.qita=e},expression:"qita"}}),a("v-col",{attrs:{cols:"12",sm:"6"}},[t.qita?a("v-text-field",{staticClass:"mx-2",attrs:{placeholder:"请输入所属学科"}}):t._e()],1)],1),a("div",{staticClass:"mt-5"},[a("span",{staticClass:"red--text pt-5"},[t._v("*")]),t._v("第三步：我的需求简介 ")]),a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-textarea",{attrs:{filled:"",placeholder:"请输入项目需求简介，200字以内"}})],1),a("div",{staticClass:"mt-5"},[a("span",{staticClass:"red--text"},[t._v("*")]),t._v("第四步：项目预算")]),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{required:"",placeholder:"请输入您的资金预算（元）"},model:{value:t.projectName,callback:function(e){t.projectName=e},expression:"projectName"}})],1),a("div",{staticClass:"mt-5"},[a("span",{staticClass:"red--text"},[t._v("*")]),t._v("第五步：联系方式")]),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{required:"",filled:"",label:"联系人姓名",placeholder:"请输入联系人姓名"},model:{value:t.contactName,callback:function(e){t.contactName=e},expression:"contactName"}}),a("v-text-field",{attrs:{required:"",filled:"",label:"联系人电话",placeholder:"请输入联系人电话"},model:{value:t.contactPhone,callback:function(e){t.contactPhone=e},expression:"contactPhone"}}),a("v-text-field",{attrs:{required:"",filled:"",label:"联系邮箱",placeholder:"请输入联系邮箱"},model:{value:t.contactEmail,callback:function(e){t.contactEmail=e},expression:"contactEmail"}})],1),a("v-row",{staticClass:"mt-8 mb-12 ml-2"},[a("div",{staticClass:"mr-12 ml-3"},[a("v-btn",{attrs:{width:"120px",depressed:"",large:"",color:"info",loading:t.loading,disabled:t.loading}},[t._v("发布需求")])],1),a("div",{staticClass:"mr-12"},[a("v-btn",{staticClass:"white--text",attrs:{width:"120px",depressed:"",large:"",color:"#AAAAAA"}},[t._v("取消")])],1)])],1)],1)],1)},s=[],n={name:"ReleaseScience",computed:{},data:function(){return{loading:!1,contactName:"",contactPhone:"",contactEmail:"",personalContact:"",projectName:"",uniName:"",jixie:!1,dianqi:!1,nengyuan:!1,dianzi:!1,cailiao:!1,huagong:!1,shengwu:!1,hangkong:!1,qita:!1,breadList:[{text:"您的位置：首页",disabled:!1,href:"/company"},{text:"发布科研成果",disabled:!0}]}},methods:{onEditorChange:function(t){var e=t.html;this.content=e}}},o=n,l=(a("27ef"),a("2877")),r=a("6544"),c=a.n(r),u=a("2bc5"),d=a("8336"),h=a("b0af"),p=a("ac7c"),m=a("62ad"),v=a("4bd4"),f=a("132d"),b=a("0fd9"),g=a("8654"),x=a("a844"),C=Object(l["a"])(o,i,s,!1,null,"5b194f86",null);e["default"]=C.exports;c()(C,{VBreadcrumbs:u["a"],VBtn:d["a"],VCard:h["a"],VCheckbox:p["a"],VCol:m["a"],VForm:v["a"],VIcon:f["a"],VRow:b["a"],VTextField:g["a"],VTextarea:x["a"]})},"27ef":function(t,e,a){"use strict";var i=a("bfa7"),s=a.n(i);s.a},"2bc5":function(t,e,a){"use strict";a("a15b");var i=a("5530"),s=(a("abd3"),a("ade3")),n=a("1c87"),o=a("58df"),l=Object(o["a"])(n["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return t("li",[t(a,Object(i["a"])({},s,{attrs:Object(i["a"])({},s.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),r=a("80d2"),c=Object(r["g"])("v-breadcrumbs__divider","li"),u=a("7560");e["a"]=Object(o["a"])(u["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],i=0;i<this.items.length;i++){var s=this.items[i];a.push(s.text),e?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(l,{key:a.join("."),props:s},[s.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},5311:function(t,e,a){"use strict";var i=a("5607"),s=a("2b0e");e["a"]=s["default"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}})},"6ca7":function(t,e,a){},8547:function(t,e,a){"use strict";var i=a("2b0e"),s=a("80d2");e["a"]=i["default"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["h"]}}})},a844:function(t,e,a){"use strict";a("a9e3");var i=a("5530"),s=(a("1681"),a("8654")),n=a("58df"),o=Object(n["a"])(s["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(i["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},abd3:function(t,e,a){},ac7c:function(t,e,a){"use strict";a("d3b7"),a("25f0");var i=a("5530"),s=(a("6ca7"),a("ec29"),a("9d26")),n=a("c37a"),o=a("fe09");e["a"]=o["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(i["a"])({},n["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(i["a"])({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},bfa7:function(t,e,a){},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a("4de4"),a("45fc"),a("d3b7"),a("25f0");var i=a("c37a"),s=a("5311"),n=a("8547"),o=a("58df");e["a"]=Object(o["a"])(i["a"],s["a"],n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=i["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===i&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-b76c3a8e.b4784d78.js.map