import { compact as p } from "./index.es110.js";
import { isArray as u } from "./index.es165.js";
import { isField as s, resultKeyNameFromField as l, isReference as m } from "./index.es160.js";
import { shouldInclude as d } from "./index.es159.js";
import { createFragmentMap as g } from "./index.es167.js";
import { getFragmentDefinitions as y } from "./index.es36.js";
import { DeepMerger as _ } from "./index.es166.js";
import { isNonNullObject as f } from "./index.es113.js";
var F = Object.prototype.hasOwnProperty;
function i(t) {
  return t == null;
}
function v(t, e) {
  var o = t.__typename, r = t.id, n = t._id;
  if (typeof o == "string" && (e && (e.keyObject = i(r) ? i(n) ? void 0 : { _id: n } : { id: r }), i(r) && !i(n) && (r = n), !i(r)))
    return "".concat(o, ":").concat(typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r));
}
var c = {
  dataIdFromObject: v,
  addTypename: !0,
  resultCaching: !0,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: !1
};
function R(t) {
  return p(c, t);
}
function b(t) {
  var e = t.canonizeResults;
  return e === void 0 ? c.canonizeResults : e;
}
function k(t, e) {
  return m(e) ? t.get(e.__ref, "__typename") : e && e.__typename;
}
var h = /^[_a-z][_0-9a-z]*/i;
function w(t) {
  var e = t.match(h);
  return e ? e[0] : t;
}
function a(t, e, o) {
  return f(e) ? u(e) ? e.every(function(r) {
    return a(t, r, o);
  }) : t.selections.every(function(r) {
    if (s(r) && d(r, o)) {
      var n = l(r);
      return F.call(e, n) && (!r.selectionSet || a(r.selectionSet, e[n], o));
    }
    return !0;
  }) : !1;
}
function x(t) {
  return f(t) && !m(t) && !u(t);
}
function D() {
  return new _();
}
function T(t, e) {
  var o = g(y(t));
  return {
    fragmentMap: o,
    lookupFragment: function(r) {
      var n = o[r];
      return !n && e && (n = e.lookup(r)), n || null;
    }
  };
}
export {
  h as TypeOrFieldNameRegExp,
  v as defaultDataIdFromObject,
  T as extractFragmentContext,
  w as fieldNameFromStoreName,
  k as getTypenameFromStoreObject,
  F as hasOwn,
  u as isArray,
  i as isNullish,
  D as makeProcessedFieldsMerger,
  R as normalizeConfig,
  a as selectionSetMatchesResult,
  b as shouldCanonizeResults,
  x as storeValueIsStoreObject
};
//# sourceMappingURL=index.es177.js.map
