// ==UserScript==
// @name         <name>
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  <description>
// @author       <author>
// @require      https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/antd/4.17.4/antd.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @match        <match>
// @icon         https://www.google.com/s2/favicons?domain=amazon.com
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @downloadURL  <downloadURL>
// ==/UserScript==

(async function () {
    // inject a root dom for rendering React component
    const div = document.createElement("div");
    div.id = 'tamper-monkey-mount-entry';
    document.querySelector(<mount selector>).appendChild(div);

    // inject antd style
    const styleRes = await fetch('https://cdnjs.cloudflare.com/ajax/libs/antd/4.17.4/antd.min.css');
    const style = await styleRes.text();

    GM_addStyle(style);
    GM_addStyle(`.app{font-size:20px}
/*# sourceMappingURL=bundle.css.map*/`);



    const <function's name> = () => {
/*! For license information please see bundle.js.LICENSE.txt */
!function(){"use strict";var r={725:function(r){var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(r,o){for(var c,a,i=function(r){if(null===r||void 0===r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}(r),f=1;f<arguments.length;f++){for(var u in c=Object(arguments[f]))t.call(c,u)&&(i[u]=c[u]);if(e){a=e(c);for(var l=0;l<a.length;l++)n.call(c,a[l])&&(i[a[l]]=c[a[l]])}}return i}},374:function(r,e,t){t(725);var n=t(363),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function u(r,e,t){var n,c={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(l=e.ref),e)i.call(e,n)&&!f.hasOwnProperty(n)&&(c[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps)void 0===c[n]&&(c[n]=e[n]);return{$$typeof:o,type:r,key:u,ref:l,props:c,_owner:a.current}}e.jsx=u},184:function(r,e,t){r.exports=t(374)},363:function(r){r.exports=React}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return r[n](c,c.exports,t),c.exports}t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,{a:e}),e},t.d=function(r,e){for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},function(){var r=t(363),e=t.n(r),n=ReactDOM,o=t.n(n),c=t(184);var a=function(){return(0,c.jsx)("div",{className:"app",children:"hello world"})};o().render((0,c.jsx)(e().StrictMode,{children:(0,c.jsx)(a,{})}),document.querySelector("#tamper-monkey-mount-entry"))}()}();
//# sourceMappingURL=bundle.js.map



    };



    GM_registerMenuCommand('<action>', () => {
        <function's name>();
    });
})();