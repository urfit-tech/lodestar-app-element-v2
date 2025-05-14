import { invariant as v } from "./index.es70.js";
import "./index.es71.js";
import { visit as l, BREAK as f } from "graphql";
function p(e, r) {
  var i = e.directives;
  return !i || !i.length ? !0 : m(i).every(function(n) {
    var a = n.directive, u = n.ifArgument, t = !1;
    return u.value.kind === "Variable" ? (t = r && r[u.value.name.value], v(t !== void 0, 69, a.name.value)) : t = u.value.value, a.name.value === "skip" ? !t : t;
  });
}
function o(e, r, i) {
  var n = new Set(e), a = n.size;
  return l(r, {
    Directive: function(u) {
      if (n.delete(u.name.value) && (!i || !n.size))
        return f;
    }
  }), i ? !n.size : n.size < a;
}
function h(e) {
  return e && o(["client", "export"], e, !0);
}
function s(e) {
  var r = e.name.value;
  return r === "skip" || r === "include";
}
function m(e) {
  var r = [];
  return e && e.length && e.forEach(function(i) {
    if (s(i)) {
      var n = i.arguments, a = i.name.value;
      v(n && n.length === 1, 70, a);
      var u = n[0];
      v(u.name && u.name.value === "if", 71, a);
      var t = u.value;
      v(t && (t.kind === "Variable" || t.kind === "BooleanValue"), 72, a), r.push({ directive: i, ifArgument: u });
    }
  }), r;
}
export {
  m as getInclusionDirectives,
  h as hasClientExports,
  o as hasDirectives,
  p as shouldInclude
};
//# sourceMappingURL=index.es72.js.map
