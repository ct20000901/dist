(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-50a7176b"],{"1fb5":function(e,t,i){"use strict";t.byteLength=function(e){var t=c(e),i=t[0],s=t[1];return 3*(i+s)/4-s},t.toByteArray=function(e){var t,i,s=c(e),a=s[0],n=s[1],o=new r(function(e,t,i){return 3*(t+i)/4-i}(0,a,n)),u=0,d=n>0?a-4:a;for(i=0;i<d;i+=4)t=l[e.charCodeAt(i)]<<18|l[e.charCodeAt(i+1)]<<12|l[e.charCodeAt(i+2)]<<6|l[e.charCodeAt(i+3)],o[u++]=t>>16&255,o[u++]=t>>8&255,o[u++]=255&t;2===n&&(t=l[e.charCodeAt(i)]<<2|l[e.charCodeAt(i+1)]>>4,o[u++]=255&t);1===n&&(t=l[e.charCodeAt(i)]<<10|l[e.charCodeAt(i+1)]<<4|l[e.charCodeAt(i+2)]>>2,o[u++]=t>>8&255,o[u++]=255&t);return o},t.fromByteArray=function(e){for(var t,i=e.length,l=i%3,r=[],a=0,n=i-l;a<n;a+=16383)r.push(u(e,a,a+16383>n?n:a+16383));1===l?(t=e[i-1],r.push(s[t>>2]+s[t<<4&63]+"==")):2===l&&(t=(e[i-2]<<8)+e[i-1],r.push(s[t>>10]+s[t>>4&63]+s[t<<2&63]+"="));return r.join("")};for(var s=[],l=[],r="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=0,o=a.length;n<o;++n)s[n]=a[n],l[a.charCodeAt(n)]=n;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var i=e.indexOf("=");return-1===i&&(i=t),[i,i===t?0:4-i%4]}function u(e,t,i){for(var l,r,a=[],n=t;n<i;n+=3)l=(e[n]<<16&16711680)+(e[n+1]<<8&65280)+(255&e[n+2]),a.push(s[(r=l)>>18&63]+s[r>>12&63]+s[r>>6&63]+s[63&r]);return a.join("")}l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63},"38a6":function(e,t,i){"use strict";var s=i("92bd");i.n(s).a},"712e":function(e,t,i){"use strict";i.r(t);i("96cf");var s=i("1da1"),l=i("953d"),r=(i("a753"),i("8096"),i("14e1"),{name:"ReleaseScience",components:{quillEditor:l.quillEditor},data:function(){return{loading:!1,file:null,editorOption:{theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"][{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]}],[{align:[]}],["link","image"],["sourceEditor"]]}},form:{sci:{entryname:"",tel:"",mail:"",position:"",information:"",charge:"",results:"",maturity:"",contacts:"",tecNew:null,future:null},fileurl:"",disciplines:[]},breadList:[{text:"您的位置：首页",disabled:!1,href:"/university"},{text:"发布科研成果",disabled:!0}]}},methods:{clearInput:function(){this.form={sci:{entryname:"",tel:"",mail:"",position:"",information:"",charge:"",results:"",maturity:"",contacts:"",tecNew:null,future:null},fileurl:"",disciplines:[]}},releaseSci:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function t(){var i,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.form.disciplines.length){t.next=3;break}return e.$message.warning("您还未选择项目类型"),t.abrupt("return");case 3:if(e.$refs.form.validate()){t.next=6;break}return t.abrupt("return");case 6:if(e.loading=!0,!e.file){t.next=14;break}return(i=new FormData).append("File",e.file),t.next=12,e.$http.post("/api/school/upload",i,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 12:200===(s=t.sent).data.code&&(e.form.fileurl=s.data.data);case 14:return t.next=16,e.$http.post("/api/school/add",e.form,{headers:{"Content-Type":"application/json"}});case 16:200===t.sent.data.code?(e.$message.success("发布科研成果成功！"),e.clearInput(),e.loading=!1,e.$router.push("/university/history")):(e.clearInput(),e.loading=!1,e.$message.error("发布科研成果失败！")),e.clearInput();case 19:case"end":return t.stop()}}),t)})))()},cancel:function(){this.clearInput(),this.$router.push("/university")}}}),a=(i("38a6"),i("2877")),n=i("6544"),o=i.n(n),c=i("2bc5"),u=i("8336"),d=i("b0af"),f=i("ac7c"),p=i("62ad"),m=i("23a7"),v=i("4bd4"),h=i("132d"),b=i("67b6"),x=i("43a6"),C=i("0fd9"),g=i("8654"),_=i("a844"),y=Object(a.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"back"},[i("v-breadcrumbs",{staticClass:"ml-12",attrs:{items:e.breadList},scopedSlots:e._u([{key:"divider",fn:function(){return[i("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])}),i("v-card",{staticClass:"mx-auto mb-12",attrs:{"max-width":"1000","min-height":"2800"}},[i("v-form",{ref:"form",staticClass:"pl-8"},[i("div",{staticClass:"pt-8"},[i("span",{staticClass:"red--text"},[e._v("*")]),e._v("第一步：项目名称")]),i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",{attrs:{required:"",placeholder:"请输入项目名称，20个字以内",rules:[function(e){return!!e||"项目名称为必填项"}]},model:{value:e.form.sci.entryname,callback:function(t){e.$set(e.form.sci,"entryname",t)},expression:"form.sci.entryname"}})],1),i("div",{staticClass:"pt-8"},[i("span",{staticClass:"red--text"},[e._v("*")]),e._v("第二步：成果负责人 ")]),i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",{attrs:{required:"",placeholder:"请输入成果负责人姓名",rules:[function(e){return!!e||"成果负责人姓名为必填项"}]},model:{value:e.form.sci.charge,callback:function(t){e.$set(e.form.sci,"charge",t)},expression:"form.sci.charge"}}),i("v-text-field",{attrs:{required:"",placeholder:"请输入成果负责人职称信息",rules:[function(e){return!!e||"成果负责人职称信息为必填项"}]},model:{value:e.form.sci.position,callback:function(t){e.$set(e.form.sci,"position",t)},expression:"form.sci.position"}})],1),i("div",{staticClass:"mt-5"},[i("span",{staticClass:"red--text"},[e._v("*")]),e._v("第三步：我的科研类型（可多选） ")]),i("v-row",[i("v-checkbox",{staticClass:"ml-4 mx-2",attrs:{value:"船舶产业",label:"船舶产业"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"金属材料",label:"金属材料"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"能源石化",label:"能源石化"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"汽车配件",label:"汽车配件"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"电机电器",label:"电机电器"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"通（专）用设备",label:"通（专）用设备"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"工程机械",label:"工程机械"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"高端装备",label:"高端装备"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"生物医药",label:"生物医药"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"电子信息",label:"电子信息"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"节能环保",label:"节能环保"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}}),i("v-checkbox",{staticClass:"mx-2",attrs:{value:"其他",label:"其他"},model:{value:e.form.disciplines,callback:function(t){e.$set(e.form,"disciplines",t)},expression:"form.disciplines"}})],1),i("div",{staticClass:"mt-5"},[i("span",{staticClass:"red--text pt-5"},[e._v("*")]),e._v("第四步：我的科研成果介绍 ")]),i("v-col",{attrs:{cols:"12",sm:"8"}},[i("v-textarea",{attrs:{filled:"",placeholder:"请输入科研成果简介，200字以内",rules:[function(e){return!!e||"项目名称为必填项"}]},model:{value:e.form.sci.results,callback:function(t){e.$set(e.form.sci,"results",t)},expression:"form.sci.results"}})],1),i("div",{staticClass:"mt-5"},[e._v(" 第五步：技术创新点 ")]),i("div",{staticStyle:{height:"610px"}},[i("quill-editor",{ref:"myQuillEditor",staticClass:"mr-8",staticStyle:{height:"500px"},attrs:{"max-height":"400",options:e.editorOption},model:{value:e.form.sci.tecNew,callback:function(t){e.$set(e.form.sci,"tecNew",t)},expression:"form.sci.tecNew"}})],1),i("div",{staticClass:"mt-5"},[e._v("第六步：市场前景及应用")]),i("div",{staticStyle:{height:"610px"}},[i("quill-editor",{ref:"myQuillEditor",staticClass:"mr-8",staticStyle:{height:"500px"},attrs:{"max-height":"400",options:e.editorOption},model:{value:e.form.sci.future,callback:function(t){e.$set(e.form.sci,"future",t)},expression:"form.sci.future"}})],1),i("div",{staticClass:"mt-5"},[e._v("第七步：技术成熟度")]),i("v-radio-group",{attrs:{row:""},model:{value:e.form.sci.maturity,callback:function(t){e.$set(e.form.sci,"maturity",t)},expression:"form.sci.maturity"}},[i("v-radio",{staticClass:"ml-4",attrs:{value:"概念验证",label:"概念验证"}}),i("v-radio",{staticClass:"ml-4",attrs:{value:"原理样机",label:"原理样机"}}),i("v-radio",{staticClass:"ml-4",attrs:{value:"工程样机",label:"工程样机"}}),i("v-radio",{staticClass:"ml-4",attrs:{value:"中试",label:"中试"}}),i("v-radio",{staticClass:"ml-4",attrs:{value:"产业化",label:"产业化"}})],1),i("div",{staticClass:"mt-5"},[i("span",{staticClass:"red--text"},[e._v("*")]),e._v("第八步：联系方式")]),i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",{attrs:{required:"",filled:"",label:"项目联系人姓名",placeholder:"请输入联系人姓名",rules:[function(e){return!!e||"联系人姓名为必填项"}]},model:{value:e.form.sci.contacts,callback:function(t){e.$set(e.form.sci,"contacts",t)},expression:"form.sci.contacts"}}),i("v-text-field",{attrs:{required:"",filled:"",label:"项目联系人电话",placeholder:"请输入联系电话",rules:[function(e){return!!e||"联系人电话为必填项"}]},model:{value:e.form.sci.tel,callback:function(t){e.$set(e.form.sci,"tel",t)},expression:"form.sci.tel"}}),i("v-text-field",{attrs:{required:"",filled:"",label:"项目联系邮箱",placeholder:"请输入联系邮箱",rules:[function(e){return!!e||"联系人邮箱为必填项"}]},model:{value:e.form.sci.mail,callback:function(t){e.$set(e.form.sci,"mail",t)},expression:"form.sci.mail"}})],1),i("div",{staticClass:"mt-5"},[e._v("第八步：科研论文")]),i("v-file-input",{attrs:{accept:"application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",placeholder:"只能上传pdf/docx/excel文件","prepend-icon":"mdi-paperclip"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),i("v-row",{staticClass:"mt-12 mb-12"},[i("div",{staticClass:"mr-12 ml-3"},[i("v-btn",{attrs:{width:"120px",depressed:"",large:"",color:"info",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.releaseSci()}}},[e._v("发布成果")])],1),i("div",{staticClass:"mr-12"},[i("v-btn",{staticClass:"white--text",attrs:{width:"120px",depressed:"",large:"",color:"#AAAAAA"},on:{click:function(t){return e.cancel()}}},[e._v("取消")])],1)])],1)],1)],1)}),[],!1,null,"25174f5f",null);t.default=y.exports;o()(y,{VBreadcrumbs:c.a,VBtn:u.a,VCard:d.a,VCheckbox:f.a,VCol:p.a,VFileInput:m.a,VForm:v.a,VIcon:h.a,VRadio:b.a,VRadioGroup:x.a,VRow:C.a,VTextField:g.a,VTextarea:_.a})},9152:function(e,t){t.read=function(e,t,i,s,l){var r,a,n=8*l-s-1,o=(1<<n)-1,c=o>>1,u=-7,d=i?l-1:0,f=i?-1:1,p=e[t+d];for(d+=f,r=p&(1<<-u)-1,p>>=-u,u+=n;u>0;r=256*r+e[t+d],d+=f,u-=8);for(a=r&(1<<-u)-1,r>>=-u,u+=s;u>0;a=256*a+e[t+d],d+=f,u-=8);if(0===r)r=1-c;else{if(r===o)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,s),r-=c}return(p?-1:1)*a*Math.pow(2,r-s)},t.write=function(e,t,i,s,l,r){var a,n,o,c=8*r-l-1,u=(1<<c)-1,d=u>>1,f=23===l?Math.pow(2,-24)-Math.pow(2,-77):0,p=s?0:r-1,m=s?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(n=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(o=Math.pow(2,-a))<1&&(a--,o*=2),(t+=a+d>=1?f/o:f*Math.pow(2,1-d))*o>=2&&(a++,o/=2),a+d>=u?(n=0,a=u):a+d>=1?(n=(t*o-1)*Math.pow(2,l),a+=d):(n=t*Math.pow(2,d-1)*Math.pow(2,l),a=0));l>=8;e[i+p]=255&n,p+=m,n/=256,l-=8);for(a=a<<l|n,c+=l;c>0;e[i+p]=255&a,p+=m,a/=256,c-=8);e[i+p-m]|=128*v}},"92bd":function(e,t,i){},"953d":function(e,t,i){var s;e.exports=(s=i("9339"),function(e){function t(s){if(i[s])return i[s].exports;var l=i[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,s){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=2)}([function(e,t){e.exports=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(4),l=i.n(s),r=i(6),a=i(5)(l.a,r.a,!1,null,null,null);t.default=a.exports},function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.quillEditor=t.Quill=void 0;var l=s(i(0)),r=s(i(1)),a=window.Quill||l.default,n=function(e,t){t&&(r.default.props.globalOptions.default=function(){return t}),e.component(r.default.name,r.default)},o={Quill:a,quillEditor:r.default,install:n};t.default=o,t.Quill=a,t.quillEditor=r.default,t.install=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={theme:"snow",boundary:document.body,modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},placeholder:"Insert text here ...",readOnly:!1}},function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=s(i(0)),r=s(i(3)),a=window.Quill||l.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),s=1;s<arguments.length;s++){var l=arguments[s];if(null!=l)for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(i[r]=l[r])}return i},writable:!0,configurable:!0}),t.default={name:"quill-editor",data:function(){return{_options:{},_content:"",defaultOptions:r.default}},props:{content:String,value:String,disabled:{type:Boolean,default:!1},options:{type:Object,required:!1,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.initialize()},beforeDestroy:function(){this.quill=null,delete this.quill},methods:{initialize:function(){var e=this;this.$el&&(this._options=Object.assign({},this.defaultOptions,this.globalOptions,this.options),this.quill=new a(this.$refs.editor,this._options),this.quill.enable(!1),(this.value||this.content)&&this.quill.pasteHTML(this.value||this.content),this.disabled||this.quill.enable(!0),this.quill.on("selection-change",(function(t){t?e.$emit("focus",e.quill):e.$emit("blur",e.quill)})),this.quill.on("text-change",(function(t,i,s){var l=e.$refs.editor.children[0].innerHTML,r=e.quill,a=e.quill.getText();"<p><br></p>"===l&&(l=""),e._content=l,e.$emit("input",e._content),e.$emit("change",{html:l,text:a,quill:r})})),this.$emit("ready",this.quill))}},watch:{content:function(e,t){this.quill&&(e&&e!==this._content?(this._content=e,this.quill.pasteHTML(e)):e||this.quill.setText(""))},value:function(e,t){this.quill&&(e&&e!==this._content?(this._content=e,this.quill.pasteHTML(e)):e||this.quill.setText(""))},disabled:function(e,t){this.quill&&this.quill.enable(!e)}}}},function(e,t){e.exports=function(e,t,i,s,l,r){var a,n=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(a=e,n=e.default);var c,u="function"==typeof n?n.options:n;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),l&&(u._scopeId=l),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):s&&(c=s),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:n,options:u}}},function(e,t,i){"use strict";var s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"quill-editor"},[e._t("toolbar"),e._v(" "),i("div",{ref:"editor"})],2)},staticRenderFns:[]};t.a=s}]))},e3db:function(e,t){var i={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==i.call(e)}}}]);