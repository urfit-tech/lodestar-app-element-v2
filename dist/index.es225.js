import { __require as G } from "./index.es301.js";
import { __require as j } from "./index.es223.js";
import C from "./index.es76.js";
import { __require as M } from "./index.es302.js";
import { __require as O } from "./index.es227.js";
var _, w;
function z() {
  if (w) return _;
  w = 1;
  var P = G(), u = j().Buffer, o = C, m = M(), y = O(), b = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`, s = "secret must be a string or buffer", c = "key must be a string or a buffer", q = "key must be a string, a buffer or an object", v = typeof o.createPublicKey == "function";
  v && (c += " or a KeyObject", s += "or a KeyObject");
  function E(r) {
    if (!u.isBuffer(r) && typeof r != "string" && (!v || typeof r != "object" || typeof r.type != "string" || typeof r.asymmetricKeyType != "string" || typeof r.export != "function"))
      throw a(c);
  }
  function A(r) {
    if (!u.isBuffer(r) && typeof r != "string" && typeof r != "object")
      throw a(q);
  }
  function h(r) {
    if (!u.isBuffer(r)) {
      if (typeof r == "string")
        return r;
      if (!v || typeof r != "object" || r.type !== "secret" || typeof r.export != "function")
        throw a(s);
    }
  }
  function g(r) {
    return r.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function l(r) {
    r = r.toString();
    var i = 4 - r.length % 4;
    if (i !== 4)
      for (var e = 0; e < i; ++e)
        r += "=";
    return r.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function a(r) {
    var i = [].slice.call(arguments, 1), e = y.format.bind(y, r).apply(null, i);
    return new TypeError(e);
  }
  function D(r) {
    return u.isBuffer(r) || typeof r == "string";
  }
  function S(r) {
    return D(r) || (r = JSON.stringify(r)), r;
  }
  function d(r) {
    return function(e, t) {
      h(t), e = S(e);
      var n = o.createHmac("sha" + r, t), f = (n.update(e), n.digest("base64"));
      return g(f);
    };
  }
  function H(r) {
    return function(e, t, n) {
      var f = d(r)(e, n);
      return P(u.from(t), u.from(f));
    };
  }
  function I(r) {
    return function(e, t) {
      A(t), e = S(e);
      var n = o.createSign("RSA-SHA" + r), f = (n.update(e), n.sign(t, "base64"));
      return g(f);
    };
  }
  function R(r) {
    return function(e, t, n) {
      E(n), e = S(e), t = l(t);
      var f = o.createVerify("RSA-SHA" + r);
      return f.update(e), f.verify(n, t, "base64");
    };
  }
  function K(r) {
    return function(e, t) {
      A(t), e = S(e);
      var n = o.createSign("RSA-SHA" + r), f = (n.update(e), n.sign({
        key: t,
        padding: o.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: o.constants.RSA_PSS_SALTLEN_DIGEST
      }, "base64"));
      return g(f);
    };
  }
  function L(r) {
    return function(e, t, n) {
      E(n), e = S(e), t = l(t);
      var f = o.createVerify("RSA-SHA" + r);
      return f.update(e), f.verify({
        key: n,
        padding: o.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: o.constants.RSA_PSS_SALTLEN_DIGEST
      }, t, "base64");
    };
  }
  function N(r) {
    var i = I(r);
    return function() {
      var t = i.apply(null, arguments);
      return t = m.derToJose(t, "ES" + r), t;
    };
  }
  function V(r) {
    var i = R(r);
    return function(t, n, f) {
      n = m.joseToDer(n, "ES" + r).toString("base64");
      var p = i(t, n, f);
      return p;
    };
  }
  function T() {
    return function() {
      return "";
    };
  }
  function B() {
    return function(i, e) {
      return e === "";
    };
  }
  return _ = function(i) {
    var e = {
      hs: d,
      rs: I,
      ps: K,
      es: N,
      none: T
    }, t = {
      hs: H,
      rs: R,
      ps: L,
      es: V,
      none: B
    }, n = i.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
    if (!n)
      throw a(b, i);
    var f = (n[1] || n[3]).toLowerCase(), p = n[2];
    return {
      sign: e[f](p),
      verify: t[f](p)
    };
  }, _;
}
export {
  z as __require
};
//# sourceMappingURL=index.es225.js.map
