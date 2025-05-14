import { __assign as w } from "./index.es63.js";
import { newInvariantError as R, invariant as D } from "./index.es116.js";
import "./index.es117.js";
import { equal as Q } from "./index.es164.js";
import { Trie as U } from "./index.es120.js";
import { Kind as X } from "graphql";
import { makeProcessedFieldsMerger as Y, extractFragmentContext as Z, storeValueIsStoreObject as q, fieldNameFromStoreName as H } from "./index.es252.js";
import { normalizeReadFieldOptions as $ } from "./index.es256.js";
import { getOperationDefinition as A, getDefaultValues as x } from "./index.es36.js";
import { canonicalStringify as ee } from "./index.es129.js";
import { isReference as T, makeReference as P, getTypenameFromResult as C, resultKeyNameFromField as K, argumentsObjectFromField as re, isField as ae } from "./index.es126.js";
import { addTypenameToDocument as te } from "./index.es130.js";
import { cloneDeep as ie } from "./index.es134.js";
import { shouldInclude as ne } from "./index.es118.js";
import { getFragmentFromSelection as oe } from "./index.es125.js";
import { isArray as O, isNonEmptyArray as fe } from "./index.es131.js";
function V(a, e, t) {
  var r = "".concat(e).concat(t), f = a.flavors.get(r);
  return f || a.flavors.set(r, f = a.clientOnly === e && a.deferred === t ? a : w(w({}, a), { clientOnly: e, deferred: t })), f;
}
var Ee = (
  /** @class */
  function() {
    function a(e, t, r) {
      this.cache = e, this.reader = t, this.fragments = r;
    }
    return a.prototype.writeToStore = function(e, t) {
      var r = this, f = t.query, i = t.result, n = t.dataId, u = t.variables, l = t.overwrite, v = A(f), p = Y();
      u = w(w({}, x(v)), u);
      var m = w(w({ store: e, written: /* @__PURE__ */ Object.create(null), merge: function(s, b) {
        return p.merge(s, b);
      }, variables: u, varString: ee(u) }, Z(f, this.fragments)), { overwrite: !!l, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), o = this.processSelectionSet({
        result: i || /* @__PURE__ */ Object.create(null),
        dataId: n,
        selectionSet: v.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context: m
      });
      if (!T(o))
        throw R(11, i);
      return m.incomingById.forEach(function(s, b) {
        var h = s.storeObject, d = s.mergeTree, F = s.fieldNodeSet, M = P(b);
        if (d && d.map.size) {
          var c = r.applyMerges(d, M, h, m);
          if (T(c))
            return;
          h = c;
        }
        if (globalThis.__DEV__ !== !1 && !m.overwrite) {
          var y = /* @__PURE__ */ Object.create(null);
          F.forEach(function(g) {
            g.selectionSet && (y[g.name.value] = !0);
          });
          var S = function(g) {
            return y[H(g)] === !0;
          }, I = function(g) {
            var E = d && d.map.get(g);
            return !!(E && E.info && E.info.merge);
          };
          Object.keys(h).forEach(function(g) {
            S(g) && !I(g) && se(M, h, g, m.store);
          });
        }
        e.merge(b, h);
      }), e.retain(o.__ref), o;
    }, a.prototype.processSelectionSet = function(e) {
      var t = this, r = e.dataId, f = e.result, i = e.selectionSet, n = e.context, u = e.mergeTree, l = this.cache.policies, v = /* @__PURE__ */ Object.create(null), p = r && l.rootTypenamesById[r] || C(f, i, n.fragmentMap) || r && n.store.get(r, "__typename");
      typeof p == "string" && (v.__typename = p);
      var m = function() {
        var c = $(arguments, v, n.variables);
        if (T(c.from)) {
          var y = n.incomingById.get(c.from.__ref);
          if (y) {
            var S = l.readField(w(w({}, c), { from: y.storeObject }), n);
            if (S !== void 0)
              return S;
          }
        }
        return l.readField(c, n);
      }, o = /* @__PURE__ */ new Set();
      this.flattenFields(
        i,
        f,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        n,
        p
      ).forEach(function(c, y) {
        var S, I = K(y), g = f[I];
        if (o.add(y), g !== void 0) {
          var E = l.getStoreFieldName({
            typename: p,
            fieldName: y.name.value,
            field: y,
            variables: c.variables
          }), B = G(u, E), j = t.processFieldValue(
            g,
            y,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            y.selectionSet ? V(c, !1, !1) : c,
            B
          ), N = void 0;
          y.selectionSet && (T(j) || q(j)) && (N = m("__typename", j));
          var k = l.getMergeFunction(p, y.name.value, N);
          k ? B.info = {
            // TODO Check compatibility against any existing childTree.field?
            field: y,
            typename: p,
            merge: k
          } : L(u, E), v = c.merge(v, (S = {}, S[E] = j, S));
        } else globalThis.__DEV__ !== !1 && !c.clientOnly && !c.deferred && !te.added(y) && // If the field has a read function, it may be a synthetic field or
        // provide a default value, so its absence from the written data should
        // not be cause for alarm.
        !l.getReadFunction(p, y.name.value) && globalThis.__DEV__ !== !1 && D.error(12, K(y), f);
      });
      try {
        var s = l.identify(f, {
          typename: p,
          selectionSet: i,
          fragmentMap: n.fragmentMap,
          storeObject: v,
          readField: m
        }), b = s[0], h = s[1];
        r = r || b, h && (v = n.merge(v, h));
      } catch (c) {
        if (!r)
          throw c;
      }
      if (typeof r == "string") {
        var d = P(r), F = n.written[r] || (n.written[r] = []);
        if (F.indexOf(i) >= 0 || (F.push(i), this.reader && this.reader.isFresh(f, d, i, n)))
          return d;
        var M = n.incomingById.get(r);
        return M ? (M.storeObject = n.merge(M.storeObject, v), M.mergeTree = z(M.mergeTree, u), o.forEach(function(c) {
          return M.fieldNodeSet.add(c);
        })) : n.incomingById.set(r, {
          storeObject: v,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: _(u) ? void 0 : u,
          fieldNodeSet: o
        }), d;
      }
      return v;
    }, a.prototype.processFieldValue = function(e, t, r, f) {
      var i = this;
      return !t.selectionSet || e === null ? globalThis.__DEV__ !== !1 ? ie(e) : e : O(e) ? e.map(function(n, u) {
        var l = i.processFieldValue(n, t, r, G(f, u));
        return L(f, u), l;
      }) : this.processSelectionSet({
        result: e,
        selectionSet: t.selectionSet,
        context: r,
        mergeTree: f
      });
    }, a.prototype.flattenFields = function(e, t, r, f) {
      f === void 0 && (f = C(t, e, r.fragmentMap));
      var i = /* @__PURE__ */ new Map(), n = this.cache.policies, u = new U(!1);
      return function l(v, p) {
        var m = u.lookup(
          v,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          p.clientOnly,
          p.deferred
        );
        m.visited || (m.visited = !0, v.selections.forEach(function(o) {
          if (ne(o, r.variables)) {
            var s = p.clientOnly, b = p.deferred;
            if (
              // Since the presence of @client or @defer on this field can only
              // cause clientOnly or deferred to become true, we can skip the
              // forEach loop if both clientOnly and deferred are already true.
              !(s && b) && fe(o.directives) && o.directives.forEach(function(F) {
                var M = F.name.value;
                if (M === "client" && (s = !0), M === "defer") {
                  var c = re(F, r.variables);
                  (!c || c.if !== !1) && (b = !0);
                }
              }), ae(o)
            ) {
              var h = i.get(o);
              h && (s = s && h.clientOnly, b = b && h.deferred), i.set(o, V(r, s, b));
            } else {
              var d = oe(o, r.lookupFragment);
              if (!d && o.kind === X.FRAGMENT_SPREAD)
                throw R(13, o.name.value);
              d && n.fragmentMatches(d, f, t, r.variables) && l(d.selectionSet, V(r, s, b));
            }
          }
        }));
      }(e, r), i;
    }, a.prototype.applyMerges = function(e, t, r, f, i) {
      var n, u = this;
      if (e.map.size && !T(r)) {
        var l = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !O(r) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (T(t) || q(t)) ? t : void 0
        ), v = r;
        l && !i && (i = [T(l) ? l.__ref : l]);
        var p, m = function(o, s) {
          return O(o) ? typeof s == "number" ? o[s] : void 0 : f.store.getFieldValue(o, String(s));
        };
        e.map.forEach(function(o, s) {
          var b = m(l, s), h = m(v, s);
          if (h !== void 0) {
            i && i.push(s);
            var d = u.applyMerges(o, b, h, f, i);
            d !== h && (p = p || /* @__PURE__ */ new Map(), p.set(s, d)), i && D(i.pop() === s);
          }
        }), p && (r = O(v) ? v.slice(0) : w({}, v), p.forEach(function(o, s) {
          r[s] = o;
        }));
      }
      return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, f, i && (n = f.store).getStorage.apply(n, i)) : r;
    }, a;
  }()
), J = [];
function G(a, e) {
  var t = a.map;
  return t.has(e) || t.set(e, J.pop() || { map: /* @__PURE__ */ new Map() }), t.get(e);
}
function z(a, e) {
  if (a === e || !e || _(e))
    return a;
  if (!a || _(a))
    return e;
  var t = a.info && e.info ? w(w({}, a.info), e.info) : a.info || e.info, r = a.map.size && e.map.size, f = r ? /* @__PURE__ */ new Map() : a.map.size ? a.map : e.map, i = { info: t, map: f };
  if (r) {
    var n = new Set(e.map.keys());
    a.map.forEach(function(u, l) {
      i.map.set(l, z(u, e.map.get(l))), n.delete(l);
    }), n.forEach(function(u) {
      i.map.set(u, z(e.map.get(u), a.map.get(u)));
    });
  }
  return i;
}
function _(a) {
  return !a || !(a.info || a.map.size);
}
function L(a, e) {
  var t = a.map, r = t.get(e);
  r && _(r) && (J.push(r), t.delete(e));
}
var W = /* @__PURE__ */ new Set();
function se(a, e, t, r) {
  var f = function(m) {
    var o = r.getFieldValue(m, t);
    return typeof o == "object" && o;
  }, i = f(a);
  if (i) {
    var n = f(e);
    if (n && !T(i) && !Q(i, n) && !Object.keys(i).every(function(m) {
      return r.getFieldValue(n, m) !== void 0;
    })) {
      var u = r.getFieldValue(a, "__typename") || r.getFieldValue(e, "__typename"), l = H(t), v = "".concat(u, ".").concat(l);
      if (!W.has(v)) {
        W.add(v);
        var p = [];
        !O(i) && !O(n) && [i, n].forEach(function(m) {
          var o = r.getFieldValue(m, "__typename");
          typeof o == "string" && !p.includes(o) && p.push(o);
        }), globalThis.__DEV__ !== !1 && D.warn(14, l, u, p.length ? "either ensure all objects of type " + p.join(" and ") + " have an ID or a custom merge function, or " : "", v, w({}, i), w({}, n));
      }
    }
  }
}
export {
  Ee as StoreWriter
};
//# sourceMappingURL=index.es254.js.map
