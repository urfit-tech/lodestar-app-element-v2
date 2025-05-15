import { invariant as l, newInvariantError as h } from "./index.es116.js";
import "./index.es117.js";
import { Observable as i } from "./index.es67.js";
import "./index.es68.js";
import { createOperation as q } from "./index.es187.js";
import { transformOperation as w } from "./index.es188.js";
import { validateOperation as g } from "./index.es189.js";
function m(t, r) {
  return r ? r(t) : i.of();
}
function s(t) {
  return typeof t == "function" ? new v(t) : t;
}
function a(t) {
  return t.request.length <= 1;
}
var v = (
  /** @class */
  function() {
    function t(r) {
      r && (this.request = r);
    }
    return t.empty = function() {
      return new t(function() {
        return i.of();
      });
    }, t.from = function(r) {
      return r.length === 0 ? t.empty() : r.map(s).reduce(function(n, e) {
        return n.concat(e);
      });
    }, t.split = function(r, n, e) {
      var u = s(n), f = s(e || new t(m)), c;
      return a(u) && a(f) ? c = new t(function(o) {
        return r(o) ? u.request(o) || i.of() : f.request(o) || i.of();
      }) : c = new t(function(o, p) {
        return r(o) ? u.request(o, p) || i.of() : f.request(o, p) || i.of();
      }), Object.assign(c, { left: u, right: f });
    }, t.execute = function(r, n) {
      return r.request(q(n.context, w(g(n)))) || i.of();
    }, t.concat = function(r, n) {
      var e = s(r);
      if (a(e))
        return globalThis.__DEV__ !== !1 && l.warn(35, e), e;
      var u = s(n), f;
      return a(u) ? f = new t(function(c) {
        return e.request(c, function(o) {
          return u.request(o) || i.of();
        }) || i.of();
      }) : f = new t(function(c, o) {
        return e.request(c, function(p) {
          return u.request(p, o) || i.of();
        }) || i.of();
      }), Object.assign(f, { left: e, right: u });
    }, t.prototype.split = function(r, n, e) {
      return this.concat(t.split(r, n, e || new t(m)));
    }, t.prototype.concat = function(r) {
      return t.concat(this, r);
    }, t.prototype.request = function(r, n) {
      throw h(36);
    }, t.prototype.onError = function(r, n) {
      if (n && n.error)
        return n.error(r), !1;
      throw r;
    }, t.prototype.setOnError = function(r) {
      return this.onError = r, this;
    }, t;
  }()
);
export {
  v as ApolloLink
};
//# sourceMappingURL=index.es66.js.map
