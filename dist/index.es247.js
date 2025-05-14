import { __assign as v, __rest as W, __extends as C } from "./index.es63.js";
import { invariant as j } from "./index.es117.js";
import "./index.es118.js";
import "./index.es190.js";
import "./index.es191.js";
import { dep as H } from "./index.es248.js";
import { equal as G } from "./index.es163.js";
import { Trie as q } from "./index.es120.js";
import { hasOwn as u, fieldNameFromStoreName as O } from "./index.es249.js";
import { maybeDeepFreeze as M } from "./index.es135.js";
import { isReference as p, makeReference as S } from "./index.es126.js";
import { canUseWeakMap as z } from "./index.es121.js";
import { DeepMerger as J } from "./index.es133.js";
import { isNonNullObject as K } from "./index.es69.js";
var _ = /* @__PURE__ */ Object.create(null), x = function() {
  return _;
}, D = /* @__PURE__ */ Object.create(null), d = (
  /** @class */
  function() {
    function o(t, i) {
      var r = this;
      this.policies = t, this.group = i, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(e, n) {
        return M(p(e) ? r.get(e.__ref, n) : e && e[n]);
      }, this.canRead = function(e) {
        return p(e) ? r.has(e.__ref) : typeof e == "object";
      }, this.toReference = function(e, n) {
        if (typeof e == "string")
          return S(e);
        if (p(e))
          return e;
        var s = r.policies.identify(e)[0];
        if (s) {
          var c = S(s);
          return n && r.merge(s, e), c;
        }
      };
    }
    return o.prototype.toObject = function() {
      return v({}, this.data);
    }, o.prototype.has = function(t) {
      return this.lookup(t, !0) !== void 0;
    }, o.prototype.get = function(t, i) {
      if (this.group.depend(t, i), u.call(this.data, t)) {
        var r = this.data[t];
        if (r && u.call(r, i))
          return r[i];
      }
      if (i === "__typename" && u.call(this.policies.rootTypenamesById, t))
        return this.policies.rootTypenamesById[t];
      if (this instanceof l)
        return this.parent.get(t, i);
    }, o.prototype.lookup = function(t, i) {
      if (i && this.group.depend(t, "__exists"), u.call(this.data, t))
        return this.data[t];
      if (this instanceof l)
        return this.parent.lookup(t, i);
      if (this.policies.rootTypenamesById[t])
        return /* @__PURE__ */ Object.create(null);
    }, o.prototype.merge = function(t, i) {
      var r = this, e;
      p(t) && (t = t.__ref), p(i) && (i = i.__ref);
      var n = typeof t == "string" ? this.lookup(e = t) : t, s = typeof i == "string" ? this.lookup(e = i) : i;
      if (s) {
        j(typeof e == "string", 1);
        var c = new J(V).merge(n, s);
        if (this.data[e] = c, c !== n && (delete this.refs[e], this.group.caching)) {
          var a = /* @__PURE__ */ Object.create(null);
          n || (a.__exists = 1), Object.keys(s).forEach(function(f) {
            if (!n || n[f] !== c[f]) {
              a[f] = 1;
              var y = O(f);
              y !== f && !r.policies.hasKeyArgs(c.__typename, y) && (a[y] = 1), c[f] === void 0 && !(r instanceof l) && delete c[f];
            }
          }), a.__typename && !(n && n.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[e] === c.__typename && delete a.__typename, Object.keys(a).forEach(function(f) {
            return r.group.dirty(e, f);
          });
        }
      }
    }, o.prototype.modify = function(t, i) {
      var r = this, e = this.lookup(t);
      if (e) {
        var n = /* @__PURE__ */ Object.create(null), s = !1, c = !0, a = {
          DELETE: _,
          INVALIDATE: D,
          isReference: p,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(f, y) {
            return r.policies.readField(typeof f == "string" ? {
              fieldName: f,
              from: y || S(t)
            } : f, { store: r });
          }
        };
        if (Object.keys(e).forEach(function(f) {
          var y = O(f), m = e[f];
          if (m !== void 0) {
            var E = typeof i == "function" ? i : i[f] || i[y];
            if (E) {
              var h = E === x ? _ : E(M(m), v(v({}, a), { fieldName: y, storeFieldName: f, storage: r.getStorage(t, f) }));
              if (h === D)
                r.group.dirty(t, f);
              else if (h === _ && (h = void 0), h !== m && (n[f] = h, s = !0, m = h, globalThis.__DEV__ !== !1)) {
                var R = function(B) {
                  if (r.lookup(B.__ref) === void 0)
                    return globalThis.__DEV__ !== !1 && j.warn(2, B), !0;
                };
                if (p(h))
                  R(h);
                else if (Array.isArray(h))
                  for (var T = !1, k = void 0, b = 0, A = h; b < A.length; b++) {
                    var g = A[b];
                    if (p(g)) {
                      if (T = !0, R(g))
                        break;
                    } else if (typeof g == "object" && g) {
                      var U = r.policies.identify(g)[0];
                      U && (k = g);
                    }
                    if (T && k !== void 0) {
                      globalThis.__DEV__ !== !1 && j.warn(3, k);
                      break;
                    }
                  }
              }
            }
            m !== void 0 && (c = !1);
          }
        }), s)
          return this.merge(t, n), c && (this instanceof l ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
      }
      return !1;
    }, o.prototype.delete = function(t, i, r) {
      var e, n = this.lookup(t);
      if (n) {
        var s = this.getFieldValue(n, "__typename"), c = i && r ? this.policies.getStoreFieldName({ typename: s, fieldName: i, args: r }) : i;
        return this.modify(t, c ? (e = {}, e[c] = x, e) : x);
      }
      return !1;
    }, o.prototype.evict = function(t, i) {
      var r = !1;
      return t.id && (u.call(this.data, t.id) && (r = this.delete(t.id, t.fieldName, t.args)), this instanceof l && this !== i && (r = this.parent.evict(t, i) || r), (t.fieldName || r) && this.group.dirty(t.id, t.fieldName || "__exists")), r;
    }, o.prototype.clear = function() {
      this.replace(null);
    }, o.prototype.extract = function() {
      var t = this, i = this.toObject(), r = [];
      return this.getRootIdSet().forEach(function(e) {
        u.call(t.policies.rootTypenamesById, e) || r.push(e);
      }), r.length && (i.__META = { extraRootIds: r.sort() }), i;
    }, o.prototype.replace = function(t) {
      var i = this;
      if (Object.keys(this.data).forEach(function(n) {
        t && u.call(t, n) || i.delete(n);
      }), t) {
        var r = t.__META, e = W(t, ["__META"]);
        Object.keys(e).forEach(function(n) {
          i.merge(n, e[n]);
        }), r && r.extraRootIds.forEach(this.retain, this);
      }
    }, o.prototype.retain = function(t) {
      return this.rootIds[t] = (this.rootIds[t] || 0) + 1;
    }, o.prototype.release = function(t) {
      if (this.rootIds[t] > 0) {
        var i = --this.rootIds[t];
        return i || delete this.rootIds[t], i;
      }
      return 0;
    }, o.prototype.getRootIdSet = function(t) {
      return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof l ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
    }, o.prototype.gc = function() {
      var t = this, i = this.getRootIdSet(), r = this.toObject();
      i.forEach(function(s) {
        u.call(r, s) && (Object.keys(t.findChildRefIds(s)).forEach(i.add, i), delete r[s]);
      });
      var e = Object.keys(r);
      if (e.length) {
        for (var n = this; n instanceof l; )
          n = n.parent;
        e.forEach(function(s) {
          return n.delete(s);
        });
      }
      return e;
    }, o.prototype.findChildRefIds = function(t) {
      if (!u.call(this.refs, t)) {
        var i = this.refs[t] = /* @__PURE__ */ Object.create(null), r = this.data[t];
        if (!r)
          return i;
        var e = /* @__PURE__ */ new Set([r]);
        e.forEach(function(n) {
          p(n) && (i[n.__ref] = !0), K(n) && Object.keys(n).forEach(function(s) {
            var c = n[s];
            K(c) && e.add(c);
          });
        });
      }
      return this.refs[t];
    }, o.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    }, o;
  }()
), P = (
  /** @class */
  function() {
    function o(t, i) {
      i === void 0 && (i = null), this.caching = t, this.parent = i, this.d = null, this.resetCaching();
    }
    return o.prototype.resetCaching = function() {
      this.d = this.caching ? H() : null, this.keyMaker = new q(z);
    }, o.prototype.depend = function(t, i) {
      if (this.d) {
        this.d(L(t, i));
        var r = O(i);
        r !== i && this.d(L(t, r)), this.parent && this.parent.depend(t, i);
      }
    }, o.prototype.dirty = function(t, i) {
      this.d && this.d.dirty(
        L(t, i),
        // When storeFieldName === "__exists", that means the entity identified
        // by dataId has either disappeared from the cache or was newly added,
        // so the result caching system would do well to "forget everything it
        // knows" about that object. To achieve that kind of invalidation, we
        // not only dirty the associated result cache entry, but also remove it
        // completely from the dependency graph. For the optimism implementation
        // details, see https://github.com/benjamn/optimism/pull/195.
        i === "__exists" ? "forget" : "setDirty"
      );
    }, o;
  }()
);
function L(o, t) {
  return t + "#" + o;
}
function ft(o, t) {
  X(o) && o.group.depend(t, "__exists");
}
(function(o) {
  var t = (
    /** @class */
    function(i) {
      C(r, i);
      function r(e) {
        var n = e.policies, s = e.resultCaching, c = s === void 0 ? !0 : s, a = e.seed, f = i.call(this, n, new P(c)) || this;
        return f.stump = new Q(f), f.storageTrie = new q(z), a && f.replace(a), f;
      }
      return r.prototype.addLayer = function(e, n) {
        return this.stump.addLayer(e, n);
      }, r.prototype.removeLayer = function() {
        return this;
      }, r.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      }, r;
    }(o)
  );
  o.Root = t;
})(d || (d = {}));
var l = (
  /** @class */
  function(o) {
    C(t, o);
    function t(i, r, e, n) {
      var s = o.call(this, r.policies, n) || this;
      return s.id = i, s.parent = r, s.replay = e, s.group = n, e(s), s;
    }
    return t.prototype.addLayer = function(i, r) {
      return new t(i, this, r, this.group);
    }, t.prototype.removeLayer = function(i) {
      var r = this, e = this.parent.removeLayer(i);
      return i === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(n) {
        var s = r.data[n], c = e.lookup(n);
        c ? s ? s !== c && Object.keys(s).forEach(function(a) {
          G(s[a], c[a]) || r.group.dirty(n, a);
        }) : (r.group.dirty(n, "__exists"), Object.keys(c).forEach(function(a) {
          r.group.dirty(n, a);
        })) : r.delete(n);
      }), e) : e === this.parent ? this : e.addLayer(this.id, this.replay);
    }, t.prototype.toObject = function() {
      return v(v({}, this.parent.toObject()), this.data);
    }, t.prototype.findChildRefIds = function(i) {
      var r = this.parent.findChildRefIds(i);
      return u.call(this.data, i) ? v(v({}, r), o.prototype.findChildRefIds.call(this, i)) : r;
    }, t.prototype.getStorage = function() {
      for (var i = this.parent; i.parent; )
        i = i.parent;
      return i.getStorage.apply(
        i,
        // @ts-expect-error
        arguments
      );
    }, t;
  }(d)
), Q = (
  /** @class */
  function(o) {
    C(t, o);
    function t(i) {
      return o.call(this, "EntityStore.Stump", i, function() {
      }, new P(i.group.caching, i.group)) || this;
    }
    return t.prototype.removeLayer = function() {
      return this;
    }, t.prototype.merge = function(i, r) {
      return this.parent.merge(i, r);
    }, t;
  }(l)
);
function V(o, t, i) {
  var r = o[i], e = t[i];
  return G(r, e) ? r : e;
}
function X(o) {
  return !!(o instanceof d && o.group.caching);
}
export {
  d as EntityStore,
  ft as maybeDependOnExistenceOfEntity,
  X as supportsResultCaching
};
//# sourceMappingURL=index.es247.js.map
