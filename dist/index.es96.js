import { __assign as t } from "./index.es47.js";
function c(o, n) {
  var e = t({}, o), f = function(r) {
    typeof r == "function" ? e = t(t({}, e), r(e)) : e = t(t({}, e), r);
  }, a = function() {
    return t({}, e);
  };
  return Object.defineProperty(n, "setContext", {
    enumerable: !1,
    value: f
  }), Object.defineProperty(n, "getContext", {
    enumerable: !1,
    value: a
  }), n;
}
export {
  c as createOperation
};
//# sourceMappingURL=index.es96.js.map
