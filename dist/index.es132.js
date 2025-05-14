import { __awaiter as R, __generator as F, __assign as g } from "./index.es54.js";
import { invariant as T } from "./index.es70.js";
import "./index.es71.js";
import { visit as b, BREAK as w, isSelectionNode as D } from "graphql";
import { mergeDeep as E, mergeDeepArray as O } from "./index.es87.js";
import { hasDirectives as V, shouldInclude as Q } from "./index.es72.js";
import { removeClientSetsFromDocument as k, buildQueryFromSelectionSet as B } from "./index.es84.js";
import { getMainDefinition as K, getFragmentDefinitions as I } from "./index.es36.js";
import { createFragmentMap as L } from "./index.es79.js";
import { isField as N, resultKeyNameFromField as P, isInlineFragment as U, argumentsObjectFromField as j } from "./index.es80.js";
import { cacheSlot as q } from "./index.es183.js";
var ee = (
  /** @class */
  function() {
    function c(e) {
      var n = e.cache, t = e.client, r = e.resolvers, a = e.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = n, t && (this.client = t), r && this.addResolvers(r), a && this.setFragmentMatcher(a);
    }
    return c.prototype.addResolvers = function(e) {
      var n = this;
      this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(t) {
        n.resolvers = E(n.resolvers, t);
      }) : this.resolvers = E(this.resolvers, e);
    }, c.prototype.setResolvers = function(e) {
      this.resolvers = {}, this.addResolvers(e);
    }, c.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, c.prototype.runResolvers = function(e) {
      return R(this, arguments, void 0, function(n) {
        var t = n.document, r = n.remoteResult, a = n.context, i = n.variables, s = n.onlyRunForcedResolvers, l = s === void 0 ? !1 : s;
        return F(this, function(v) {
          return t ? [2, this.resolveDocument(t, r.data, a, i, this.fragmentMatcher, l).then(function(h) {
            return g(g({}, r), { data: h.result });
          })] : [2, r];
        });
      });
    }, c.prototype.setFragmentMatcher = function(e) {
      this.fragmentMatcher = e;
    }, c.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    }, c.prototype.clientQuery = function(e) {
      return V(["client"], e) && this.resolvers ? e : null;
    }, c.prototype.serverQuery = function(e) {
      return k(e);
    }, c.prototype.prepareContext = function(e) {
      var n = this.cache;
      return g(g({}, e), {
        cache: n,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(t) {
          return n.identify(t);
        }
      });
    }, c.prototype.addExportedVariables = function(e) {
      return R(this, arguments, void 0, function(n, t, r) {
        return t === void 0 && (t = {}), r === void 0 && (r = {}), F(this, function(a) {
          return n ? [2, this.resolveDocument(n, this.buildRootValueFromCache(n, t) || {}, this.prepareContext(r), t).then(function(i) {
            return g(g({}, t), i.exportedVariables);
          })] : [2, g({}, t)];
        });
      });
    }, c.prototype.shouldForceResolvers = function(e) {
      var n = !1;
      return b(e, {
        Directive: {
          enter: function(t) {
            if (t.name.value === "client" && t.arguments && (n = t.arguments.some(function(r) {
              return r.name.value === "always" && r.value.kind === "BooleanValue" && r.value.value === !0;
            }), n))
              return w;
          }
        }
      }), n;
    }, c.prototype.buildRootValueFromCache = function(e, n) {
      return this.cache.diff({
        query: B(e),
        variables: n,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, c.prototype.resolveDocument = function(e, n) {
      return R(this, arguments, void 0, function(t, r, a, i, s, l) {
        var v, h, y, u, o, p, m, f, d, S, M;
        return a === void 0 && (a = {}), i === void 0 && (i = {}), s === void 0 && (s = function() {
          return !0;
        }), l === void 0 && (l = !1), F(this, function(_) {
          return v = K(t), h = I(t), y = L(h), u = this.collectSelectionsToResolve(v, y), o = v.operation, p = o ? o.charAt(0).toUpperCase() + o.slice(1) : "Query", m = this, f = m.cache, d = m.client, S = {
            fragmentMap: y,
            context: g(g({}, a), { cache: f, client: d }),
            variables: i,
            fragmentMatcher: s,
            defaultOperationType: p,
            exportedVariables: {},
            selectionsToResolve: u,
            onlyRunForcedResolvers: l
          }, M = !1, [2, this.resolveSelectionSet(v.selectionSet, M, r, S).then(function(A) {
            return {
              result: A,
              exportedVariables: S.exportedVariables
            };
          })];
        });
      });
    }, c.prototype.resolveSelectionSet = function(e, n, t, r) {
      return R(this, void 0, void 0, function() {
        var a, i, s, l, v, h = this;
        return F(this, function(y) {
          return a = r.fragmentMap, i = r.context, s = r.variables, l = [t], v = function(u) {
            return R(h, void 0, void 0, function() {
              var o, p;
              return F(this, function(m) {
                return !n && !r.selectionsToResolve.has(u) ? [
                  2
                  /*return*/
                ] : Q(u, s) ? N(u) ? [2, this.resolveField(u, n, t, r).then(function(f) {
                  var d;
                  typeof f < "u" && l.push((d = {}, d[P(u)] = f, d));
                })] : (U(u) ? o = u : (o = a[u.name.value], T(o, 18, u.name.value)), o && o.typeCondition && (p = o.typeCondition.name.value, r.fragmentMatcher(t, p, i)) ? [2, this.resolveSelectionSet(o.selectionSet, n, t, r).then(function(f) {
                  l.push(f);
                })] : [
                  2
                  /*return*/
                ]) : [
                  2
                  /*return*/
                ];
              });
            });
          }, [2, Promise.all(e.selections.map(v)).then(function() {
            return O(l);
          })];
        });
      });
    }, c.prototype.resolveField = function(e, n, t, r) {
      return R(this, void 0, void 0, function() {
        var a, i, s, l, v, h, y, u, o, p = this;
        return F(this, function(m) {
          return t ? (a = r.variables, i = e.name.value, s = P(e), l = i !== s, v = t[s] || t[i], h = Promise.resolve(v), (!r.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (y = t.__typename || r.defaultOperationType, u = this.resolvers && this.resolvers[y], u && (o = u[l ? i : s], o && (h = Promise.resolve(
            // In case the resolve function accesses reactive variables,
            // set cacheSlot to the current cache instance.
            q.withValue(this.cache, o, [
              t,
              j(e, a),
              r.context,
              { field: e, fragmentMap: r.fragmentMap }
            ])
          )))), [2, h.then(function(f) {
            var d, S;
            if (f === void 0 && (f = v), e.directives && e.directives.forEach(function(_) {
              _.name.value === "export" && _.arguments && _.arguments.forEach(function(A) {
                A.name.value === "as" && A.value.kind === "StringValue" && (r.exportedVariables[A.value.value] = f);
              });
            }), !e.selectionSet || f == null)
              return f;
            var M = (S = (d = e.directives) === null || d === void 0 ? void 0 : d.some(function(_) {
              return _.name.value === "client";
            })) !== null && S !== void 0 ? S : !1;
            if (Array.isArray(f))
              return p.resolveSubSelectedArray(e, n || M, f, r);
            if (e.selectionSet)
              return p.resolveSelectionSet(e.selectionSet, n || M, f, r);
          })]) : [2, null];
        });
      });
    }, c.prototype.resolveSubSelectedArray = function(e, n, t, r) {
      var a = this;
      return Promise.all(t.map(function(i) {
        if (i === null)
          return null;
        if (Array.isArray(i))
          return a.resolveSubSelectedArray(e, n, i, r);
        if (e.selectionSet)
          return a.resolveSelectionSet(e.selectionSet, n, i, r);
      }));
    }, c.prototype.collectSelectionsToResolve = function(e, n) {
      var t = function(i) {
        return !Array.isArray(i);
      }, r = this.selectionsToResolveCache;
      function a(i) {
        if (!r.has(i)) {
          var s = /* @__PURE__ */ new Set();
          r.set(i, s), b(i, {
            Directive: function(l, v, h, y, u) {
              l.name.value === "client" && u.forEach(function(o) {
                t(o) && D(o) && s.add(o);
              });
            },
            FragmentSpread: function(l, v, h, y, u) {
              var o = n[l.name.value];
              T(o, 19, l.name.value);
              var p = a(o);
              p.size > 0 && (u.forEach(function(m) {
                t(m) && D(m) && s.add(m);
              }), s.add(l), p.forEach(function(m) {
                s.add(m);
              }));
            }
          });
        }
        return r.get(i);
      }
      return a(e);
    }, c;
  }()
);
export {
  ee as LocalState
};
//# sourceMappingURL=index.es132.js.map
