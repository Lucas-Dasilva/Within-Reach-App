!function(){function n(n,e,t,o,r,i,c){try{var a=n[i](c),u=a.value}catch(f){return void t(f)}a.done?e(u):Promise.resolve(u).then(o,r)}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n,e){return(t=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function o(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,o=i(n);if(e){var c=i(this).constructor;t=Reflect.construct(o,arguments,c)}else t=o.apply(this,arguments);return r(this,t)}}function r(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function i(n){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Fy9G:function(r,i,c){"use strict";function a(){var n=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection,e="unknown",t=n?n.type||n.effectiveType:null;if(t&&"string"==typeof t)switch(t){case"bluetooth":case"cellular":e="cellular";break;case"none":e="none";break;case"ethernet":case"wifi":case"wimax":e="wifi";break;case"other":case"unknown":e="unknown";break;case"slow-2g":case"2g":case"3g":e="cellular";break;case"4g":e="wifi"}return e}c.r(i),c.d(i,"NetworkWeb",(function(){return u})),c.d(i,"Network",(function(){return f}));var u=function(r){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}(w,r);var i,c,u,f,s,l=o(w);function w(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,w),(n=l.call(this)).handleOnline=function(){var e=a();n.notifyListeners("networkStatusChange",{connected:!0,connectionType:e})},n.handleOffline=function(){n.notifyListeners("networkStatusChange",{connected:!1,connectionType:"none"})},window.addEventListener("online",n.handleOnline),window.addEventListener("offline",n.handleOffline),n}return i=w,(c=[{key:"getStatus",value:(f=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(window.navigator){n.next=2;break}throw this.unavailable("Browser does not support the Network Information API");case 2:return e=window.navigator.onLine,t=a(),n.abrupt("return",{connected:e,connectionType:e?t:"none"});case 4:case"end":return n.stop()}}),n,this)})),s=function(){var e=this,t=arguments;return new Promise((function(o,r){var i=f.apply(e,t);function c(e){n(i,o,r,c,a,"next",e)}function a(e){n(i,o,r,c,a,"throw",e)}c(void 0)}))},function(){return s.apply(this,arguments)})}])&&e(i.prototype,c),u&&e(i,u),w}(c("FUe0").a),f=new u}}])}();