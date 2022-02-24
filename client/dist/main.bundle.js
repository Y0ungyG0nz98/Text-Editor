(()=>{var n={757:(n,r,t)=>{n.exports=t(666)},402:(n,r,t)=>{"use strict";t.d(r,{Z:()=>c});var e=t(81),o=t.n(e),i=t(645),a=t.n(i)()(o());a.push([n.id,"/* app shell CSS */\r\n:root {\r\n  --primary: #31a9e1;\r\n  --gray: #ececec;\r\n  --whitesmoke: #f5f5f5;\r\n  --dark: #222;\r\n  --monoaki: #272822;\r\n  --navbar-height: 50px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--monoaki);\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 22px;\r\n}\r\n\r\n#navbar {\r\n  height: var(--navbar-height);\r\n  background-color: var(--primary);\r\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: white;\r\n  font-size: 22px;\r\n  font-weight: 550;\r\n  letter-spacing: 0.9px;\r\n}\r\n\r\n.navbar-brand img {\r\n  padding-top: 10px;\r\n}\r\n\r\n.loading-spinner {\r\n  animation-duration: 0.75s;\r\n  animation-iteration-count: infinite;\r\n  animation-name: rotate-forever;\r\n  animation-timing-function: linear;\r\n  height: 30px;\r\n  width: 30px;\r\n  border: 3px solid var(--primary);\r\n  border-right-color: transparent;\r\n  border-radius: 50%;\r\n}\r\n\r\n.loading-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: calc(100vh - var(--navbar-height));\r\n}\r\n\r\n@keyframes rotate-forever {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.app-update {\r\n  display: none;\r\n  position: absolute;\r\n  right: 10px;\r\n}\r\n\r\n.app-update.show {\r\n  display: block;\r\n}\r\n\r\n.nav-btn {\r\n  margin: 25px;\r\n}\r\n\r\n.btn {\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 0.5rem 1.2rem;\r\n  margin: 0;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n  border-radius: 0.3rem;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n  color: #1a1a1a;\r\n  background-color: #aeaeae;\r\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #cecece;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.btn-squared {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn.btn-sm {\r\n  font-size: 0.85rem;\r\n  padding: 0.3rem 0.9rem;\r\n}\r\n\r\n.btn.btn-lg {\r\n  font-size: 1.25rem;\r\n  padding: 0.8rem 1.4rem;\r\n}\r\n\r\n.btn.btn-block {\r\n  width: 100%;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.btn.btn-primary {\r\n  background-color: #2d3e50;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-primary:hover {\r\n  background-color: #57779a;\r\n}\r\n\r\n.btn.btn-danger {\r\n  background-color: #e64c66;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-danger:hover {\r\n  background-color: #ee8294;\r\n}\r\n\r\n.btn.btn-info {\r\n  background-color: #1bbc9b;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-info:hover {\r\n  background-color: #31e1bd;\r\n}\r\n\r\n.btn.btn-light {\r\n  background-color: #d9e9e8;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-light:hover {\r\n  background-color: #84b8b4;\r\n}\r\n\r\n.btn.btn-dark {\r\n  background-color: #1a1a1a;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-dark:hover {\r\n  background-color: #5f5f5f;\r\n}\r\n\r\n.btn.btn-white {\r\n  background-color: #ffffff;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-white:hover {\r\n  background-color: #cccccc;\r\n}\r\n\r\n.btn.btn-black {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-black:hover {\r\n  background-color: #666666;\r\n}\r\n\r\n.btn.btn-link {\r\n  background-color: #1b89bc;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-link:hover {\r\n  background-color: #31a9e1;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .nav-btn {\r\n    display: none;\r\n  }\r\n\r\n  .navbar-brand {\r\n    display: none;\r\n  }\r\n\r\n  #navbar {\r\n    justify-content: center;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 18px;\r\n  }\r\n}\r\n",""]);const c=a},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{"use strict";n.exports=function(n){return n[1]}},666:n=>{var r=function(n){"use strict";var r,t=Object.prototype,e=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(n,r,t){return Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[r]}try{s({},"")}catch(n){s=function(n,r,t){return n[r]=t}}function u(n,r,t,e){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),a=new I(e||[]);return i._invoke=function(n,r,t){var e=f;return function(o,i){if(e===p)throw new Error("Generator is already running");if(e===h){if("throw"===o)throw i;return T()}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var c=L(a,t);if(c){if(c===v)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(e===f)throw e=h,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);e=p;var s=l(n,r,t);if("normal"===s.type){if(e=t.done?h:d,s.arg===v)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(e=h,t.method="throw",t.arg=s.arg)}}}(n,t,a),i}function l(n,r,t){try{return{type:"normal",arg:n.call(r,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==t&&e.call(x,i)&&(b=x);var k=y.prototype=g.prototype=Object.create(b);function _(n){["next","throw","return"].forEach((function(r){s(n,r,(function(n){return this._invoke(r,n)}))}))}function E(n,r){function t(o,i,a,c){var s=l(n[o],n,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(n){t("next",n,a,c)}),(function(n){t("throw",n,a,c)})):r.resolve(f).then((function(n){u.value=n,a(u)}),(function(n){return t("throw",n,a,c)}))}c(s.arg)}var o;this._invoke=function(n,e){function i(){return new r((function(r,o){t(n,e,r,o)}))}return o=o?o.then(i,i):i()}}function L(n,t){var e=n.iterator[t.method];if(e===r){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=r,L(n,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(e,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,v;var i=o.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function S(n){var r={tryLoc:n[0]};1 in n&&(r.catchLoc=n[1]),2 in n&&(r.finallyLoc=n[2],r.afterLoc=n[3]),this.tryEntries.push(r)}function j(n){var r=n.completion||{};r.type="normal",delete r.arg,n.completion=r}function I(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(S,this),this.reset(!0)}function P(n){if(n){var t=n[i];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,a=function t(){for(;++o<n.length;)if(e.call(n,o))return t.value=n[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return m.prototype=y,s(k,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var r="function"==typeof n&&n.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,y):(n.__proto__=y,s(n,c,"GeneratorFunction")),n.prototype=Object.create(k),n},n.awrap=function(n){return{__await:n}},_(E.prototype),s(E.prototype,a,(function(){return this})),n.AsyncIterator=E,n.async=function(r,t,e,o,i){void 0===i&&(i=Promise);var a=new E(u(r,t,e,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},_(k),s(k,c,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var r=[];for(var t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=P,I.prototype={constructor:I,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function o(e,o){return c.type="throw",c.arg=n,t.next=e,o&&(t.method="next",t.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(n,r){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(n,r){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&r&&(this.next=r),v},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),j(t),v}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===n){var e=t.completion;if("throw"===e.type){var o=e.arg;j(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:P(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=r),v}},n}(n.exports);try{regeneratorRuntime=r}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},379:n=>{"use strict";var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=e.base?s[0]+e.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var d=t(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(p);else{var h=o(p,e);e.byIndex=c,r.splice(c,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);r[c].references--}for(var s=e(n,o),u=0;u<i.length;u++){var l=t(i[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},569:n=>{"use strict";var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{"use strict";n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{"use strict";n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{"use strict";n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,t),i.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{"use strict";try{self["workbox:window:6.4.1"]&&_()}catch(n){}function n(n,r){return new Promise((function(t){var e=new MessageChannel;e.port1.onmessage=function(n){t(n.data)},n.postMessage(r,[e.port2])}))}function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function e(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=n[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.4.1"]&&_()}catch(n){}var o=function(){var n=this;this.promise=new Promise((function(r,t){n.resolve=r,n.reject=t}))};function i(n,r){var t=location.href;return new URL(n,t).href===new URL(r,t).href}var a=function(n,r){this.type=n,Object.assign(this,r)};function c(n,r,t){return t?r?r(n):n:(n&&n.then||(n=Promise.resolve(n)),r?n.then(r):n)}function s(){}var u={type:"SKIP_WAITING"};function l(n,r){if(!r)return n&&n.then?n.then(s):Promise.resolve()}var f=function(r){var t,e;function s(n,t){var e,s;return void 0===t&&(t={}),(e=r.call(this)||this).nn={},e.tn=0,e.rn=new o,e.en=new o,e.on=new o,e.un=0,e.an=new Set,e.cn=function(){var n=e.fn,r=n.installing;e.tn>0||!i(r.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=r,n.removeEventListener("updatefound",e.cn)):(e.hn=r,e.an.add(r),e.rn.resolve(r)),++e.tn,r.addEventListener("statechange",e.ln)},e.ln=function(n){var r=e.fn,t=n.target,o=t.state,i=t===e.vn,c={sw:t,isExternal:i,originalEvent:n};!i&&e.mn&&(c.isUpdate=!0),e.dispatchEvent(new a(o,c)),"installed"===o?e.wn=self.setTimeout((function(){"installed"===o&&r.waiting===t&&e.dispatchEvent(new a("waiting",c))}),200):"activating"===o&&(clearTimeout(e.wn),i||e.en.resolve(t))},e.dn=function(n){var r=e.hn,t=r!==navigator.serviceWorker.controller;e.dispatchEvent(new a("controlling",{isExternal:t,originalEvent:n,sw:r,isUpdate:e.mn})),t||e.on.resolve(r)},e.gn=(s=function(n){var r=n.data,t=n.ports,o=n.source;return c(e.getSW(),(function(){e.an.has(o)&&e.dispatchEvent(new a("message",{data:r,originalEvent:n,ports:t,sw:o}))}))},function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{return Promise.resolve(s.apply(this,n))}catch(n){return Promise.reject(n)}}),e.sn=n,e.nn=t,navigator.serviceWorker.addEventListener("message",e.gn),e}e=r,(t=s).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var f,d=s.prototype;return d.register=function(n){var r=(void 0===n?{}:n).immediate,t=void 0!==r&&r;try{var e=this;return function(n,r){var t=n();return t&&t.then?t.then(r):r()}((function(){if(!t&&"complete"!==document.readyState)return l(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.mn=Boolean(navigator.serviceWorker.controller),e.yn=e.pn(),c(e.bn(),(function(n){e.fn=n,e.yn&&(e.hn=e.yn,e.en.resolve(e.yn),e.on.resolve(e.yn),e.yn.addEventListener("statechange",e.ln,{once:!0}));var r=e.fn.waiting;return r&&i(r.scriptURL,e.sn.toString())&&(e.hn=r,Promise.resolve().then((function(){e.dispatchEvent(new a("waiting",{sw:r,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.hn&&(e.rn.resolve(e.hn),e.an.add(e.hn)),e.fn.addEventListener("updatefound",e.cn),navigator.serviceWorker.addEventListener("controllerchange",e.dn),e.fn}))}))}catch(n){return Promise.reject(n)}},d.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(r){try{return c(this.getSW(),(function(t){return n(t,r)}))}catch(n){return Promise.reject(n)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,u)},d.pn=function(){var n=navigator.serviceWorker.controller;return n&&i(n.scriptURL,this.sn.toString())?n:void 0},d.bn=function(){try{var n=this;return function(n,r){try{var t=n()}catch(n){return r(n)}return t&&t.then?t.then(void 0,r):t}((function(){return c(navigator.serviceWorker.register(n.sn,n.nn),(function(r){return n.un=performance.now(),r}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(s.prototype,f),s}(function(){function n(){this.Pn=new Map}var r=n.prototype;return r.addEventListener=function(n,r){this.Sn(n).add(r)},r.removeEventListener=function(n,r){this.Sn(n).delete(r)},r.dispatchEvent=function(n){n.target=this;for(var r,t=e(this.Sn(n.type));!(r=t()).done;)(0,r.value)(n)},r.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());function d(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function p(n,r,t){return r&&d(n.prototype,r),t&&d(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function h(n,r,t,e,o,i,a){try{var c=n[i](a),s=c.value}catch(n){return void t(n)}c.done?r(s):Promise.resolve(s).then(e,o)}function v(n){return function(){var r=this,t=arguments;return new Promise((function(e,o){var i=n.apply(r,t);function a(n){h(i,e,o,a,c,"next",n)}function c(n){h(i,e,o,a,c,"throw",n)}a(void 0)}))}}var g=t(757),m=t.n(g);let y,b;const w=new WeakMap,x=new WeakMap,k=new WeakMap,E=new WeakMap,L=new WeakMap;let S={get(n,r,t){if(n instanceof IDBTransaction){if("done"===r)return x.get(n);if("objectStoreNames"===r)return n.objectStoreNames||k.get(n);if("store"===r)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return I(n[r])},set:(n,r,t)=>(n[r]=t,!0),has:(n,r)=>n instanceof IDBTransaction&&("done"===r||"store"===r)||r in n};function j(n){return"function"==typeof n?(r=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(b||(b=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...n){return r.apply(P(this),n),I(w.get(this))}:function(...n){return I(r.apply(P(this),n))}:function(n,...t){const e=r.call(P(this),n,...t);return k.set(e,n.sort?n.sort():[n]),I(e)}:(n instanceof IDBTransaction&&function(n){if(x.has(n))return;const r=new Promise(((r,t)=>{const e=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",i),n.removeEventListener("abort",i)},o=()=>{r(),e()},i=()=>{t(n.error||new DOMException("AbortError","AbortError")),e()};n.addEventListener("complete",o),n.addEventListener("error",i),n.addEventListener("abort",i)}));x.set(n,r)}(n),t=n,(y||(y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((n=>t instanceof n))?new Proxy(n,S):n);var r,t}function I(n){if(n instanceof IDBRequest)return function(n){const r=new Promise(((r,t)=>{const e=()=>{n.removeEventListener("success",o),n.removeEventListener("error",i)},o=()=>{r(I(n.result)),e()},i=()=>{t(n.error),e()};n.addEventListener("success",o),n.addEventListener("error",i)}));return r.then((r=>{r instanceof IDBCursor&&w.set(r,n)})).catch((()=>{})),L.set(r,n),r}(n);if(E.has(n))return E.get(n);const r=j(n);return r!==n&&(E.set(n,r),L.set(r,n)),r}const P=n=>L.get(n);function T(n,r,{blocked:t,upgrade:e,blocking:o,terminated:i}={}){const a=indexedDB.open(n,r),c=I(a);return e&&a.addEventListener("upgradeneeded",(n=>{e(I(a.result),n.oldVersion,n.newVersion,I(a.transaction))})),t&&a.addEventListener("blocked",(()=>t())),c.then((n=>{i&&n.addEventListener("close",(()=>i())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const D=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],M=new Map;function B(n,r){if(!(n instanceof IDBDatabase)||r in n||"string"!=typeof r)return;if(M.get(r))return M.get(r);const t=r.replace(/FromIndex$/,""),e=r!==t,o=O.includes(t);if(!(t in(e?IDBIndex:IDBObjectStore).prototype)||!o&&!D.includes(t))return;const i=async function(n,...r){const i=this.transaction(n,o?"readwrite":"readonly");let a=i.store;return e&&(a=a.index(r.shift())),(await Promise.all([a[t](...r),o&&i.done]))[0]};return M.set(r,i),i}var C;C=S,S={...C,get:(n,r,t)=>B(n,r)||C.get(n,r,t),has:(n,r)=>!!B(n,r)||C.has(n,r)};var N=function(){var n=v(m().mark((function n(){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",T("jate",1,{upgrade:function(n){n.objectStoreNames.contains("jate")?console.log("jate database already exists"):(n.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),W=function(){var n=v(m().mark((function n(r){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",console.error("putDb not implemented"));case 1:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),A=function(){var n=v(m().mark((function n(){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",console.error("getDb not implemented"));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();N();var R=p((function n(){var r=this;!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n);var t=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),A().then((function(n){console.info("Loaded data from IndexedDB, injecting into editor"),r.editor.setValue(n||t||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",r.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),W(localStorage.getItem("content"))}))})),U=t(379),F=t.n(U),G=t(795),z=t.n(G),q=t(569),H=t.n(q),Z=t(565),K=t.n(Z),V=t(216),Y=t.n(V),$=t(589),J=t.n($),Q=t(402),X={};X.styleTagTransform=J(),X.setAttributes=K(),X.insert=H().bind(null,"head"),X.domAPI=z(),X.insertStyleElement=Y(),F()(Q.Z,X),Q.Z&&Q.Z.locals&&Q.Z.locals;var nn,rn=document.querySelector("#main");rn.innerHTML="",void 0===new R&&((nn=document.createElement("div")).classList.add("spinner"),nn.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',rn.appendChild(nn)),"serviceWorker"in navigator?new f("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();