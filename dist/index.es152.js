import { __require as u } from "./index.es274.js";
var o, p;
function g() {
  if (p) return o;
  p = 1;
  var c = /* @__PURE__ */ u();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, o = function() {
    function e(h, y, m, f, l, s) {
      if (s !== c) {
        var a = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw a.name = "Invariant Violation", a;
      }
    }
    e.isRequired = e;
    function r() {
      return e;
    }
    var t = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: r,
      element: e,
      elementType: e,
      instanceOf: r,
      node: e,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: i,
      resetWarningCache: n
    };
    return t.PropTypes = t, t;
  }, o;
}
export {
  g as __require
};
//# sourceMappingURL=index.es152.js.map
