"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u,f;function j(){if(f)return u;f=1;var i=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function O(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function g(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var c={},r=0;r<10;r++)c["_"+String.fromCharCode(r)]=r;var a=Object.getOwnPropertyNames(c).map(function(e){return c[e]});if(a.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return u=g()?Object.assign:function(t,c){for(var r,a=O(t),n,e=1;e<arguments.length;e++){r=Object(arguments[e]);for(var s in r)b.call(r,s)&&(a[s]=r[s]);if(i){n=i(r);for(var o=0;o<n.length;o++)l.call(r,n[o])&&(a[n[o]]=r[n[o]])}}return a},u}exports.__require=j;
//# sourceMappingURL=index.cjs223.js.map
