import { __assign as R } from "./index.es65.js";
import { newInvariantError as T, invariant as I } from "./index.es116.js";
import "./index.es117.js";
import { Kind as K } from "graphql";
import { wrap as O } from "./index.es122.js";
import { supportsResultCaching as z, maybeDependOnExistenceOfEntity as k } from "./index.es206.js";
import { shouldCanonizeResults as N, extractFragmentContext as q, getTypenameFromStoreObject as P } from "./index.es208.js";
import { MissingFieldError as Q } from "./index.es205.js";
import { ObjectCanon as F } from "./index.es295.js";
import { cacheSizes as j } from "./index.es123.js";
import { isReference as v, makeReference as B, isField as J, resultKeyNameFromField as U } from "./index.es126.js";
import { getDefaultValues as W, getQueryDefinition as G, getMainDefinition as Y } from "./index.es36.js";
import { canonicalStringify as H } from "./index.es129.js";
import { shouldInclude as L } from "./index.es118.js";
import { addTypenameToDocument as X } from "./index.es130.js";
import { getFragmentFromSelection as Z } from "./index.es125.js";
import { canUseWeakMap as $ } from "./index.es121.js";
import { compact as V } from "./index.es143.js";
import { DeepMerger as A, mergeDeepArray as ee } from "./index.es133.js";
import { isArray as C } from "./index.es131.js";
import { maybeDeepFreeze as te } from "./index.es135.js";
import { isNonNullObject as re } from "./index.es71.js";
function D(c) {
  return [
    c.selectionSet,
    c.objectOrReference,
    c.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    c.context.canonizeResults
  ];
}
var Oe = (
  /** @class */
  function() {
    function c(n) {
      var i = this;
      this.knownResults = new ($ ? WeakMap : Map)(), this.config = V(n, {
        addTypename: n.addTypename !== !1,
        canonizeResults: N(n)
      }), this.canon = n.canon || new F(), this.executeSelectionSet = O(function(e) {
        var t, o = e.context.canonizeResults, r = D(e);
        r[3] = !o;
        var m = (t = i.executeSelectionSet).peek.apply(t, r);
        return m ? o ? R(R({}, m), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: i.canon.admit(m.result)
        }) : m : (k(e.context.store, e.enclosingRef.__ref), i.execSelectionSetImpl(e));
      }, {
        max: this.config.resultCacheMaxSize || j["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: D,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(e, t, o, r) {
          if (z(o.store))
            return o.store.makeCacheKey(e, v(t) ? t.__ref : t, o.varString, r);
        }
      }), this.executeSubSelectedArray = O(function(e) {
        return k(e.context.store, e.enclosingRef.__ref), i.execSubSelectedArrayImpl(e);
      }, {
        max: this.config.resultCacheMaxSize || j["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(e) {
          var t = e.field, o = e.array, r = e.context;
          if (z(r.store))
            return r.store.makeCacheKey(t, o, r.varString);
        }
      });
    }
    return c.prototype.resetCanon = function() {
      this.canon = new F();
    }, c.prototype.diffQueryAgainstStore = function(n) {
      var i = n.store, e = n.query, t = n.rootId, o = t === void 0 ? "ROOT_QUERY" : t, r = n.variables, m = n.returnPartialData, g = m === void 0 ? !0 : m, p = n.canonizeResults, s = p === void 0 ? this.config.canonizeResults : p, l = this.config.cache.policies;
      r = R(R({}, W(G(e))), r);
      var u = B(o), S = this.executeSelectionSet({
        selectionSet: Y(e).selectionSet,
        objectOrReference: u,
        enclosingRef: u,
        context: R({ store: i, query: e, policies: l, variables: r, varString: H(r), canonizeResults: s }, q(e, this.config.fragments))
      }), y;
      if (S.missing && (y = [
        new Q(ne(S.missing), S.missing, e, r)
      ], !g))
        throw y[0];
      return {
        result: S.result,
        complete: !y,
        missing: y
      };
    }, c.prototype.isFresh = function(n, i, e, t) {
      if (z(t.store) && this.knownResults.get(n) === e) {
        var o = this.executeSelectionSet.peek(
          e,
          i,
          t,
          // If result is canonical, then it could only have been previously
          // cached by the canonizing version of executeSelectionSet, so we can
          // avoid checking both possibilities here.
          this.canon.isKnown(n)
        );
        if (o && n === o.result)
          return !0;
      }
      return !1;
    }, c.prototype.execSelectionSetImpl = function(n) {
      var i = this, e = n.selectionSet, t = n.objectOrReference, o = n.enclosingRef, r = n.context;
      if (v(t) && !r.policies.rootTypenamesById[t.__ref] && !r.store.has(t.__ref))
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(t.__ref, " object")
        };
      var m = r.variables, g = r.policies, p = r.store, s = p.getFieldValue(t, "__typename"), l = [], u, S = new A();
      this.config.addTypename && typeof s == "string" && !g.rootIdsByTypename[s] && l.push({ __typename: s });
      function y(a, d) {
        var h;
        return a.missing && (u = S.merge(u, (h = {}, h[d] = a.missing, h))), a.result;
      }
      var _ = new Set(e.selections);
      _.forEach(function(a) {
        var d, h;
        if (L(a, m))
          if (J(a)) {
            var f = g.readField({
              fieldName: a.name.value,
              field: a,
              variables: r.variables,
              from: t
            }, r), x = U(a);
            f === void 0 ? X.added(a) || (u = S.merge(u, (d = {}, d[x] = "Can't find field '".concat(a.name.value, "' on ").concat(v(t) ? t.__ref + " object" : "object " + JSON.stringify(t, null, 2)), d))) : C(f) ? f.length > 0 && (f = y(i.executeSubSelectedArray({
              field: a,
              array: f,
              enclosingRef: o,
              context: r
            }), x)) : a.selectionSet ? f != null && (f = y(i.executeSelectionSet({
              selectionSet: a.selectionSet,
              objectOrReference: f,
              enclosingRef: v(f) ? f : o,
              context: r
            }), x)) : r.canonizeResults && (f = i.canon.pass(f)), f !== void 0 && l.push((h = {}, h[x] = f, h));
          } else {
            var b = Z(a, r.lookupFragment);
            if (!b && a.kind === K.FRAGMENT_SPREAD)
              throw T(9, a.name.value);
            b && g.fragmentMatches(b, s) && b.selectionSet.selections.forEach(_.add, _);
          }
      });
      var E = ee(l), w = { result: E, missing: u }, M = r.canonizeResults ? this.canon.admit(w) : te(w);
      return M.result && this.knownResults.set(M.result, e), M;
    }, c.prototype.execSubSelectedArrayImpl = function(n) {
      var i = this, e = n.field, t = n.array, o = n.enclosingRef, r = n.context, m, g = new A();
      function p(s, l) {
        var u;
        return s.missing && (m = g.merge(m, (u = {}, u[l] = s.missing, u))), s.result;
      }
      return e.selectionSet && (t = t.filter(r.store.canRead)), t = t.map(function(s, l) {
        return s === null ? null : C(s) ? p(i.executeSubSelectedArray({
          field: e,
          array: s,
          enclosingRef: o,
          context: r
        }), l) : e.selectionSet ? p(i.executeSelectionSet({
          selectionSet: e.selectionSet,
          objectOrReference: s,
          enclosingRef: v(s) ? s : o,
          context: r
        }), l) : (globalThis.__DEV__ !== !1 && ie(r.store, e, s), s);
      }), {
        result: r.canonizeResults ? this.canon.admit(t) : t,
        missing: m
      };
    }, c;
  }()
);
function ne(c) {
  try {
    JSON.stringify(c, function(n, i) {
      if (typeof i == "string")
        throw i;
      return i;
    });
  } catch (n) {
    return n;
  }
}
function ie(c, n, i) {
  if (!n.selectionSet) {
    var e = /* @__PURE__ */ new Set([i]);
    e.forEach(function(t) {
      re(t) && (I(
        !v(t),
        10,
        P(c, t),
        n.name.value
      ), Object.values(t).forEach(e.add, e));
    });
  }
}
export {
  Oe as StoreReader
};
//# sourceMappingURL=index.es209.js.map
