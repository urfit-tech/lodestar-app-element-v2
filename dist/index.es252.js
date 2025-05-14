import { __assign as c, __rest as P } from "./index.es63.js";
import { invariant as g, newInvariantError as V } from "./index.es117.js";
import "./index.es118.js";
import { defaultDataIdFromObject as w, hasOwn as T, TypeOrFieldNameRegExp as D, selectionSetMatchesResult as K, fieldNameFromStoreName as O, storeValueIsStoreObject as m } from "./index.es249.js";
import { cacheSlot as A } from "./index.es244.js";
import { keyFieldsFnFromSpecifier as R, keyArgsFnFromSpecifier as N } from "./index.es255.js";
import { storeKeyNameFromField as U, getStoreKeyName as q, isReference as F, argumentsObjectFromField as Y } from "./index.es126.js";
import { stringifyForDisplay as G } from "./index.es145.js";
import { isArray as h } from "./index.es131.js";
import { isNonNullObject as E } from "./index.es69.js";
function _(s) {
  return s.args !== void 0 ? s.args : s.field ? Y(s.field, s.variables) : null;
}
var H = function() {
}, M = function(s, r) {
  return r.fieldName;
}, S = function(s, r, t) {
  var e = t.mergeObjects;
  return e(s, r);
}, k = function(s, r) {
  return r;
}, re = (
  /** @class */
  function() {
    function s(r) {
      this.config = r, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = c({ dataIdFromObject: w }, r), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), r.possibleTypes && this.addPossibleTypes(r.possibleTypes), r.typePolicies && this.addTypePolicies(r.typePolicies);
    }
    return s.prototype.identify = function(r, t) {
      var e, i = this, o = t && (t.typename || ((e = t.storeObject) === null || e === void 0 ? void 0 : e.__typename)) || r.__typename;
      if (o === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      for (var a = t && t.storeObject || r, n = c(c({}, t), { typename: o, storeObject: a, readField: t && t.readField || function() {
        var y = z(arguments, a);
        return i.readField(y, {
          store: i.cache.data,
          variables: y.variables
        });
      } }), f, l = o && this.getTypePolicy(o), u = l && l.keyFn || this.config.dataIdFromObject; u; ) {
        var d = u(c(c({}, r), a), n);
        if (h(d))
          u = R(d);
        else {
          f = d;
          break;
        }
      }
      return f = f ? String(f) : void 0, n.keyObject ? [f, n.keyObject] : [f];
    }, s.prototype.addTypePolicies = function(r) {
      var t = this;
      Object.keys(r).forEach(function(e) {
        var i = r[e], o = i.queryType, a = i.mutationType, n = i.subscriptionType, f = P(i, ["queryType", "mutationType", "subscriptionType"]);
        o && t.setRootTypename("Query", e), a && t.setRootTypename("Mutation", e), n && t.setRootTypename("Subscription", e), T.call(t.toBeAdded, e) ? t.toBeAdded[e].push(f) : t.toBeAdded[e] = [f];
      });
    }, s.prototype.updateTypePolicy = function(r, t) {
      var e = this, i = this.getTypePolicy(r), o = t.keyFields, a = t.fields;
      function n(f, l) {
        f.merge = typeof l == "function" ? l : l === !0 ? S : l === !1 ? k : f.merge;
      }
      n(i, t.merge), i.keyFn = // Pass false to disable normalization for this typename.
      o === !1 ? H : h(o) ? R(o) : typeof o == "function" ? o : i.keyFn, a && Object.keys(a).forEach(function(f) {
        var l = e.getFieldPolicy(r, f, !0), u = a[f];
        if (typeof u == "function")
          l.read = u;
        else {
          var d = u.keyArgs, y = u.read, p = u.merge;
          l.keyFn = // Pass false to disable argument-based differentiation of
          // field identities.
          d === !1 ? M : h(d) ? N(d) : typeof d == "function" ? d : l.keyFn, typeof y == "function" && (l.read = y), n(l, p);
        }
        l.read && l.merge && (l.keyFn = l.keyFn || M);
      });
    }, s.prototype.setRootTypename = function(r, t) {
      t === void 0 && (t = r);
      var e = "ROOT_" + r.toUpperCase(), i = this.rootTypenamesById[e];
      t !== i && (g(!i || i === r, 5, r), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[t] = e, this.rootTypenamesById[e] = t);
    }, s.prototype.addPossibleTypes = function(r) {
      var t = this;
      this.usingPossibleTypes = !0, Object.keys(r).forEach(function(e) {
        t.getSupertypeSet(e, !0), r[e].forEach(function(i) {
          t.getSupertypeSet(i, !0).add(e);
          var o = i.match(D);
          (!o || o[0] !== i) && t.fuzzySubtypes.set(i, new RegExp(i));
        });
      });
    }, s.prototype.getTypePolicy = function(r) {
      var t = this;
      if (!T.call(this.typePolicies, r)) {
        var e = this.typePolicies[r] = /* @__PURE__ */ Object.create(null);
        e.fields = /* @__PURE__ */ Object.create(null);
        var i = this.supertypeMap.get(r);
        !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(r, !0), this.fuzzySubtypes.forEach(function(a, n) {
          if (a.test(r)) {
            var f = t.supertypeMap.get(n);
            f && f.forEach(function(l) {
              return i.add(l);
            });
          }
        })), i && i.size && i.forEach(function(a) {
          var n = t.getTypePolicy(a), f = n.fields, l = P(n, ["fields"]);
          Object.assign(e, l), Object.assign(e.fields, f);
        });
      }
      var o = this.toBeAdded[r];
      return o && o.length && o.splice(0).forEach(function(a) {
        t.updateTypePolicy(r, a);
      }), this.typePolicies[r];
    }, s.prototype.getFieldPolicy = function(r, t, e) {
      if (r) {
        var i = this.getTypePolicy(r).fields;
        return i[t] || e && (i[t] = /* @__PURE__ */ Object.create(null));
      }
    }, s.prototype.getSupertypeSet = function(r, t) {
      var e = this.supertypeMap.get(r);
      return !e && t && this.supertypeMap.set(r, e = /* @__PURE__ */ new Set()), e;
    }, s.prototype.fragmentMatches = function(r, t, e, i) {
      var o = this;
      if (!r.typeCondition)
        return !0;
      if (!t)
        return !1;
      var a = r.typeCondition.name.value;
      if (t === a)
        return !0;
      if (this.usingPossibleTypes && this.supertypeMap.has(a))
        for (var n = this.getSupertypeSet(t, !0), f = [n], l = function(b) {
          var v = o.getSupertypeSet(b, !1);
          v && v.size && f.indexOf(v) < 0 && f.push(v);
        }, u = !!(e && this.fuzzySubtypes.size), d = !1, y = 0; y < f.length; ++y) {
          var p = f[y];
          if (p.has(a))
            return n.has(a) || (d && globalThis.__DEV__ !== !1 && g.warn(6, t, a), n.add(a)), !0;
          p.forEach(l), u && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          y === f.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          K(r.selectionSet, e, i) && (u = !1, d = !0, this.fuzzySubtypes.forEach(function(b, v) {
            var j = t.match(b);
            j && j[0] === t && l(v);
          }));
        }
      return !1;
    }, s.prototype.hasKeyArgs = function(r, t) {
      var e = this.getFieldPolicy(r, t, !1);
      return !!(e && e.keyFn);
    }, s.prototype.getStoreFieldName = function(r) {
      var t = r.typename, e = r.fieldName, i = this.getFieldPolicy(t, e, !1), o, a = i && i.keyFn;
      if (a && t)
        for (var n = {
          typename: t,
          fieldName: e,
          field: r.field || null,
          variables: r.variables
        }, f = _(r); a; ) {
          var l = a(f, n);
          if (h(l))
            a = N(l);
          else {
            o = l || e;
            break;
          }
        }
      return o === void 0 && (o = r.field ? U(r.field, r.variables) : q(e, _(r))), o === !1 ? e : e === O(o) ? o : e + ":" + o;
    }, s.prototype.readField = function(r, t) {
      var e = r.from;
      if (e) {
        var i = r.field || r.fieldName;
        if (i) {
          if (r.typename === void 0) {
            var o = t.store.getFieldValue(e, "__typename");
            o && (r.typename = o);
          }
          var a = this.getStoreFieldName(r), n = O(a), f = t.store.getFieldValue(e, a), l = this.getFieldPolicy(r.typename, n, !1), u = l && l.read;
          if (u) {
            var d = B(this, e, r, t, t.store.getStorage(F(e) ? e.__ref : e, a));
            return A.withValue(this.cache, u, [
              f,
              d
            ]);
          }
          return f;
        }
      }
    }, s.prototype.getReadFunction = function(r, t) {
      var e = this.getFieldPolicy(r, t, !1);
      return e && e.read;
    }, s.prototype.getMergeFunction = function(r, t, e) {
      var i = this.getFieldPolicy(r, t, !1), o = i && i.merge;
      return !o && e && (i = this.getTypePolicy(e), o = i && i.merge), o;
    }, s.prototype.runMergeFunction = function(r, t, e, i, o) {
      var a = e.field, n = e.typename, f = e.merge;
      return f === S ? I(i.store)(r, t) : f === k ? t : (i.overwrite && (r = void 0), f(r, t, B(
        this,
        // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0,
        {
          typename: n,
          fieldName: a.name.value,
          field: a,
          variables: i.variables
        },
        i,
        o || /* @__PURE__ */ Object.create(null)
      )));
    }, s;
  }()
);
function B(s, r, t, e, i) {
  var o = s.getStoreFieldName(t), a = O(o), n = t.variables || e.variables, f = e.store, l = f.toReference, u = f.canRead;
  return {
    args: _(t),
    field: t.field || null,
    fieldName: a,
    storeFieldName: o,
    variables: n,
    isReference: F,
    toReference: l,
    storage: i,
    cache: s.cache,
    canRead: u,
    readField: function() {
      return s.readField(z(arguments, r, n), e);
    },
    mergeObjects: I(e.store)
  };
}
function z(s, r, t) {
  var e = s[0], i = s[1], o = s.length, a;
  return typeof e == "string" ? a = {
    fieldName: e,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: o > 1 ? i : r
  } : (a = c({}, e), T.call(a, "from") || (a.from = r)), globalThis.__DEV__ !== !1 && a.from === void 0 && globalThis.__DEV__ !== !1 && g.warn(7, G(Array.from(s))), a.variables === void 0 && (a.variables = t), a;
}
function I(s) {
  return function(t, e) {
    if (h(t) || h(e))
      throw V(8);
    if (E(t) && E(e)) {
      var i = s.getFieldValue(t, "__typename"), o = s.getFieldValue(e, "__typename"), a = i && o && i !== o;
      if (a)
        return e;
      if (F(t) && m(e))
        return s.merge(t.__ref, e), t;
      if (m(t) && F(e))
        return s.merge(t, e.__ref), e;
      if (m(t) && m(e))
        return c(c({}, t), e);
    }
    return e;
  };
}
export {
  re as Policies,
  z as normalizeReadFieldOptions
};
//# sourceMappingURL=index.es252.js.map
