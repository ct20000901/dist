(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.vue-router"],{"8c4f":function(t,e,r){"use strict";
/*!
  * vue-router v3.1.6
  * (c) 2020 Evan You
  * @license MIT
  */function n(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function o(t,e){return e instanceof t||e&&(e.name===t.name||e._name===t._name)}function i(t,e){for(var r in e)t[r]=e[r];return t}var a={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,a=e.data;a.routerView=!0;for(var u=o.$createElement,s=r.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(l=!0),o=o.$parent}if(a.routerViewDepth=h,l){var v=f[s],y=v&&v.component;return y?(v.configProps&&c(y,a,v.route,v.configProps),u(y,a,n)):u()}var m=p.matched[h],g=m&&m.components[s];if(!m||!g)return f[s]=null,u();f[s]={component:g},a.registerRouteInstance=function(t,e){var r=m.instances[s];(e&&r!==t||!e&&r===t)&&(m.instances[s]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){m.instances[s]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[s]&&(m.instances[s]=t.componentInstance)};var w=m.props&&m.props[s];return w&&(i(f[s],{route:p,configProps:w}),c(g,a,p,w)),u(g,a,n)}};function c(t,e,r,n){var o=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(r,n);if(o){o=e.props=i({},o);var a=e.attrs=e.attrs||{};for(var c in o)t.props&&c in t.props||(a[c]=o[c],delete o[c])}}var u=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},p=/%2C/g,f=function(t){return encodeURIComponent(t).replace(u,s).replace(p,",")},h=decodeURIComponent;function l(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=h(r.shift()),o=r.length>0?h(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return f(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(f(e)):n.push(f(e)+"="+f(t)))})),n.join("&")}return f(e)+"="+f(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var v=/\/?$/;function y(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=m(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:b(e,o),matched:t?w(t):[]};return r&&(a.redirectedFrom=b(r,o)),Object.freeze(a)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=m(t[r]);return e}return t}var g=y(null,{path:"/"});function w(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function b(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||d)(n)+o}function x(t,e){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(v,"")===e.path.replace(v,"")&&t.hash===e.hash&&k(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&k(t.query,e.query)&&k(t.params,e.params)))}function k(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every((function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?k(n,o):String(n)===String(o)}))}function R(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var c=i[a];".."===c?o.pop():"."!==c&&o.push(c)}return""!==o[0]&&o.unshift(""),o.join("/")}function E(t){return t.replace(/\/\//g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},_=V,A=T,j=function(t,e){return L(T(t,e))},C=L,S=B,$=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function T(t,e){for(var r,n=[],o=0,i=0,a="",c=e&&e.delimiter||"/";null!=(r=$.exec(t));){var u=r[0],s=r[1],p=r.index;if(a+=t.slice(i,p),i=p+u.length,s)a+=s[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||c,k=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?U(k):m?".*":"[^"+q(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function P(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function L(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=(n||{}).pretty?P:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!=typeof u){var s,p=i[u.name];if(null==p){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(O(p)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(s=a(p[f]),!e[c].test(s))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(s)+"`");o+=(0===f?u.prefix:u.delimiter)+s}}else{if(s=u.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!e[c].test(s))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+s+'"');o+=u.prefix+s}}else o+=u}return o}}function q(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function I(t,e){return t.keys=e,t}function M(t){return t.sensitive?"":"i"}function B(t,e,r){O(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=q(c);else{var u=q(c.prefix),s="(?:"+c.pattern+")";e.push(c),c.repeat&&(s+="(?:"+u+s+")*"),i+=s=c.optional?c.partial?u+"("+s+")?":"(?:"+u+"("+s+"))?":u+"("+s+")"}}var p=q(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",I(new RegExp("^"+i,M(r)),e)}function V(t,e,r){return O(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return I(t,e)}(t,e):O(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(V(t[o],e,r).source);return I(new RegExp("(?:"+n.join("|")+")",M(r)),e)}(t,e,r):function(t,e,r){return B(T(t,r),e,r)}(t,e,r)}_.parse=A,_.compile=j,_.tokensToFunction=C,_.tokensToRegExp=S;var H=Object.create(null);function z(t,e,r){e=e||{};try{var n=H[t]||(H[t]=_.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function D(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){var a=(o=i({},t)).params;return a&&"object"==typeof a&&(o.params=i({},a)),o}if(!o.path&&o.params&&e){(o=i({},o))._normalized=!0;var c=i(i({},e.params),o.params);if(e.name)o.name=e.name,o.params=c;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;o.path=z(u,c,e.path)}else 0;return o}var s=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(o.path||""),p=e&&e.path||"/",f=s.path?R(s.path,p,r||o.append):p,h=function(t,e,r){void 0===e&&(e={});var n,o=r||l;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}(s.query,o.query,n&&n.options.parseQuery),d=o.hash||s.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:f,query:h,hash:d}}var F,N=function(){},J={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),a=o.location,c=o.route,u=o.href,s={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,m=null==this.exactActiveClass?l:this.exactActiveClass,g=c.redirectedFrom?y(null,D(c.redirectedFrom),null,r):c;s[m]=x(n,g),s[d]=this.exact?s[m]:function(t,e){return 0===t.path.replace(v,"/").indexOf(e.path.replace(v,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(n,g);var w=function(t){K(t)&&(e.replace?r.replace(a,N):r.push(a,N))},b={click:K};Array.isArray(this.event)?this.event.forEach((function(t){b[t]=w})):b[this.event]=w;var k={class:s},R=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:u,route:c,navigate:w,isActive:s[d],isExactActive:s[m]});if(R){if(1===R.length)return R[0];if(R.length>1||!R.length)return 0===R.length?t():t("span",{},R)}if("a"===this.tag)k.on=b,k.attrs={href:u};else{var E=function t(e){var r;if(e)for(var n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(E){E.isStatic=!1;var O=E.data=i({},E.data);for(var _ in O.on=O.on||{},O.on){var A=O.on[_];_ in b&&(O.on[_]=Array.isArray(A)?A:[A])}for(var j in b)j in O.on?O.on[j].push(b[j]):O.on[j]=w;(E.data.attrs=i({},E.data.attrs)).href=u}else k.on=b}return t(this.tag,k,this.$slots.default)}};function K(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var Q="undefined"!=typeof window;function X(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach((function(t){!function t(e,r,n,o,i,a){var c=o.path,u=o.name;0;var s=o.pathToRegexpOptions||{},p=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return E(e.path+"/"+t)}(c,i,s.strict);"boolean"==typeof o.caseSensitive&&(s.sensitive=o.caseSensitive);var f={path:p,regex:Y(p,s),components:o.components||{default:o.component},instances:{},name:u,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach((function(o){var i=a?E(a+"/"+o.path):void 0;t(e,r,n,o,f,i)}));r[f.path]||(e.push(f.path),r[f.path]=f);if(void 0!==o.alias)for(var h=Array.isArray(o.alias)?o.alias:[o.alias],l=0;l<h.length;++l){0;var d={path:h[l],children:o.children};t(e,r,n,d,i,f.path||"/")}u&&(n[u]||(n[u]=f))}(o,i,a,t)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:i,nameMap:a}}function Y(t,e){return _(t,[],e)}function W(t,e){var r=X(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var c=D(t,r,!1,e),s=c.name;if(s){var p=i[s];if(!p)return u(null,c);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof c.params&&(c.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in c.params)&&f.indexOf(h)>-1&&(c.params[h]=r.params[h]);return c.path=z(p.path,c.params),u(p,c,a)}if(c.path){c.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(G(v.regex,c.path,c.params))return u(v,c,a)}}return u(null,c)}function c(t,r){var n=t.redirect,o="function"==typeof n?n(y(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return u(null,r);var c=o,s=c.name,p=c.path,f=r.query,h=r.hash,l=r.params;if(f=c.hasOwnProperty("query")?c.query:f,h=c.hasOwnProperty("hash")?c.hash:h,l=c.hasOwnProperty("params")?c.params:l,s){i[s];return a({_normalized:!0,name:s,query:f,hash:h,params:l},void 0,r)}if(p){var d=function(t,e){return R(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:z(d,l),query:f,hash:h},void 0,r)}return u(null,r)}function u(t,r,n){return t&&t.redirect?c(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:z(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,u(i,e)}return u(null,e)}(0,r,t.matchAs):y(t,r,n,e)}return{match:a,addRoutes:function(t){X(t,n,o,i)}}}function G(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],c="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=c)}return!0}var Z=Q&&window.performance&&window.performance.now?window.performance:Date;function tt(){return Z.now().toFixed(3)}var et=tt();function rt(){return et}function nt(t){return et=t}var ot=Object.create(null);function it(){var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=i({},window.history.state);r.key=rt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",(function(t){ct(),t.state&&t.state.key&&nt(t.state.key)}))}function at(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=function(){var t=rt();if(t)return ot[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then((function(t){ht(t,i)})).catch((function(t){0})):ht(a,i))}))}}function ct(){var t=rt();t&&(ot[t]={x:window.pageXOffset,y:window.pageYOffset})}function ut(t){return pt(t.x)||pt(t.y)}function st(t){return{x:pt(t.x)?t.x:window.pageXOffset,y:pt(t.y)?t.y:window.pageYOffset}}function pt(t){return"number"==typeof t}var ft=/^#\d/;function ht(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=ft.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:pt((r=i).x)?r.x:0,y:pt(r.y)?r.y:0})}else ut(t)&&(e=st(t))}else n&&ut(t)&&(e=st(t));e&&window.scrollTo(e.x,e.y)}var lt,dt=Q&&((-1===(lt=window.navigator.userAgent).indexOf("Android 2.")&&-1===lt.indexOf("Android 4.0")||-1===lt.indexOf("Mobile Safari")||-1!==lt.indexOf("Chrome")||-1!==lt.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history);function vt(t,e){ct();var r=window.history;try{if(e){var n=i({},r.state);n.key=rt(),r.replaceState(n,"",t)}else r.pushState({key:nt(tt())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function yt(t){vt(t,!0)}function mt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}function gt(t){return function(e,r,o){var i=!1,a=0,c=null;wt(t,(function(t,e,r,u){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var s,p=kt((function(e){var n;((n=e).__esModule||xt&&"Module"===n[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:F.extend(e),r.components[u]=e,--a<=0&&o()})),f=kt((function(t){var e="Failed to resolve async component "+u+": "+t;c||(c=n(t)?t:new Error(e),o(c))}));try{s=t(p,f)}catch(t){f(t)}if(s)if("function"==typeof s.then)s.then(p,f);else{var h=s.component;h&&"function"==typeof h.then&&h.then(p,f)}}})),i||o()}}function wt(t,e){return bt(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function bt(t){return Array.prototype.concat.apply([],t)}var xt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function kt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var Rt=function(t){function e(e){t.call(this),this.name=this._name="NavigationDuplicated",this.message='Navigating to current location ("'+e.fullPath+'") is not allowed',Object.defineProperty(this,"stack",{value:(new t).stack,writable:!0,configurable:!0})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error);Rt._name="NavigationDuplicated";var Et=function(t,e){this.router=t,this.base=function(t){if(!t)if(Q){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};function Ot(t,e,r,n){var o=wt(t,(function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=F.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return bt(n?o.reverse():o)}function _t(t,e){if(e)return function(){return t.apply(e,arguments)}}Et.prototype.listen=function(t){this.cb=t},Et.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Et.prototype.onError=function(t){this.errorCbs.push(t)},Et.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,(function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach((function(t){t(o)})))}),(function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach((function(e){e(t)})))}))},Et.prototype.confirmTransition=function(t,e,r){var i=this,a=this.current,c=function(t){!o(Rt,t)&&n(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)};if(x(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),c(new Rt(t));var u=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),s=u.updated,p=u.deactivated,f=u.activated,h=[].concat(function(t){return Ot(t,"beforeRouteLeave",_t,!0)}(p),this.router.beforeHooks,function(t){return Ot(t,"beforeRouteUpdate",_t)}(s),f.map((function(t){return t.beforeEnter})),gt(f));this.pending=t;var l=function(e,r){if(i.pending!==t)return c();try{e(t,a,(function(t){!1===t||n(t)?(i.ensureURL(!0),c(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(c(),"object"==typeof t&&t.replace?i.replace(t):i.push(t)):r(t)}))}catch(t){c(t)}};mt(h,l,(function(){var r=[];mt(function(t,e,r){return Ot(t,"beforeRouteEnter",(function(t,n,o,i){return function(t,e,r,n,o){return function(i,a,c){return t(i,a,(function(t){"function"==typeof t&&n.push((function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout((function(){t(e,r,n,o)}),16)}(t,e.instances,r,o)})),c(t)}))}}(t,o,i,e,r)}))}(f,r,(function(){return i.current===t})).concat(i.router.resolveHooks),l,(function(){if(i.pending!==t)return c();i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},Et.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach((function(r){r&&r(t,e)}))};var At=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior,i=dt&&o;i&&it();var a=jt(this.base);window.addEventListener("popstate",(function(t){var r=n.current,o=jt(n.base);n.current===g&&o===a||n.transitionTo(o,(function(t){i&&at(e,t,r,!0)}))}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){vt(E(n.base+t.fullPath)),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){yt(E(n.base+t.fullPath)),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(jt(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?vt(e):yt(e)}},e.prototype.getCurrentLocation=function(){return jt(this.base)},e}(Et);function jt(t){var e=decodeURI(window.location.pathname);return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Ct=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=jt(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}(this.base)||St()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,r=dt&&e;r&&it(),window.addEventListener(dt?"popstate":"hashchange",(function(){var e=t.current;St()&&t.transitionTo($t(),(function(n){r&&at(t.router,n,e,!0),dt||Lt(n.fullPath)}))}))},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Pt(t.fullPath),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Lt(t.fullPath),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;$t()!==e&&(t?Pt(e):Lt(e))},e.prototype.getCurrentLocation=function(){return $t()},e}(Et);function St(){var t=$t();return"/"===t.charAt(0)||(Lt("/"+t),!1)}function $t(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function Tt(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Pt(t){dt?vt(Tt(t)):window.location.hash=t}function Lt(t){dt?yt(Tt(t)):window.location.replace(Tt(t))}var qt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){o(Rt,t)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Et),Ut=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=W(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!dt&&!1!==t.fallback,this.fallback&&(e="hash"),Q||(e="abstract"),this.mode=e,e){case"history":this.history=new At(this,t.base);break;case"hash":this.history=new Ct(this,t.base,this.fallback);break;case"abstract":this.history=new qt(this,t.base);break;default:0}},It={currentRoute:{configurable:!0}};function Mt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}Ut.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},It.currentRoute.get=function(){return this.history&&this.history.current},Ut.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null)})),!this.app){this.app=t;var r=this.history;if(r instanceof At)r.transitionTo(r.getCurrentLocation());else if(r instanceof Ct){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Ut.prototype.beforeEach=function(t){return Mt(this.beforeHooks,t)},Ut.prototype.beforeResolve=function(t){return Mt(this.resolveHooks,t)},Ut.prototype.afterEach=function(t){return Mt(this.afterHooks,t)},Ut.prototype.onReady=function(t,e){this.history.onReady(t,e)},Ut.prototype.onError=function(t){this.history.onError(t)},Ut.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Ut.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Ut.prototype.go=function(t){this.history.go(t)},Ut.prototype.back=function(){this.go(-1)},Ut.prototype.forward=function(){this.go(1)},Ut.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Ut.prototype.resolve=function(t,e,r){var n=D(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?E(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Ut.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Ut.prototype,It),Ut.install=function t(e){if(!t.installed||F!==e){t.installed=!0,F=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",a),e.component("RouterLink",J);var o=e.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}},Ut.version="3.1.6",Q&&window.Vue&&window.Vue.use(Ut),e.a=Ut}}]);