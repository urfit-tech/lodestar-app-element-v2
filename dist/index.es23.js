import o from "./index.es61.js";
import * as p from "./index.es62.js";
import { outboundLink as f } from "./index.es62.js";
function i(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(c) {
      return Object.getOwnPropertyDescriptor(r, c).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function u(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? i(Object(e), !0).forEach(function(n) {
      O(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : i(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
function O(r, t, e) {
  return t in r ? Object.defineProperty(r, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = e, r;
}
o.origTrackLink = o.trackLink;
o.trackLink = f;
var a = o;
const l = u(u({}, p), {}, {
  OutboundLink: a
});
export {
  a as OutboundLink,
  l as default
};
//# sourceMappingURL=index.es23.js.map
