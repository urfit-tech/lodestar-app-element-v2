import "./index.es70.js";
import { maybe as e } from "./index.es96.js";
import "./index.es71.js";
var t = e(function() {
  return navigator.product;
}) == "ReactNative", i = typeof WeakMap == "function" && !(t && !global.HermesInternal), u = typeof WeakSet == "function", a = typeof Symbol == "function" && typeof Symbol.for == "function", m = a && Symbol.asyncIterator, n = typeof e(function() {
  return window.document.createElement;
}) == "function", o = (
  // Following advice found in this comment from @domenic (maintainer of jsdom):
  // https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
  //
  // Since we control the version of Jest and jsdom used when running Apollo
  // Client tests, and that version is recent enought to include " jsdom/x.y.z"
  // at the end of the user agent string, I believe this case is all we need to
  // check. Testing for "Node.js" was recommended for backwards compatibility
  // with older version of jsdom, but we don't have that problem.
  e(function() {
    return navigator.userAgent.indexOf("jsdom") >= 0;
  }) || !1
), s = (n || t) && !o;
export {
  m as canUseAsyncIteratorSymbol,
  n as canUseDOM,
  s as canUseLayoutEffect,
  a as canUseSymbol,
  i as canUseWeakMap,
  u as canUseWeakSet
};
//# sourceMappingURL=index.es75.js.map
