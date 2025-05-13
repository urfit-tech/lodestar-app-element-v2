import { __require as K } from "./index.es68.js";
import { __require as v } from "./index.es70.js";
import { __require as $ } from "./index.es69.js";
import { __require as D } from "./index.es67.js";
import { __require as H } from "./index.es72.js";
import { __require as W } from "./index.es73.js";
import { __require as J } from "./index.es74.js";
import { __require as O } from "./index.es75.js";
import { __require as U } from "./index.es76.js";
import { __require as G } from "./index.es77.js";
import { __require as M } from "./index.es78.js";
import C from "./index.es71.js";
var l, q;
function te() {
  if (q) return l;
  q = 1;
  const g = K(), E = v(), j = $(), h = D(), V = H(), m = W(), y = J(), d = O(), p = U(), a = G(), I = M(), { KeyObject: x, createSecretKey: B, createPrivateKey: T } = C, b = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
  E && b.splice(3, 0, "PS256", "PS384", "PS512");
  const P = {
    expiresIn: { isValid: function(e) {
      return y(e) || a(e) && e;
    }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
    notBefore: { isValid: function(e) {
      return y(e) || a(e) && e;
    }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
    audience: { isValid: function(e) {
      return a(e) || Array.isArray(e);
    }, message: '"audience" must be a string or array' },
    algorithm: { isValid: V.bind(null, b), message: '"algorithm" must be a valid string enum value' },
    header: { isValid: p, message: '"header" must be an object' },
    encoding: { isValid: a, message: '"encoding" must be a string' },
    issuer: { isValid: a, message: '"issuer" must be a string' },
    subject: { isValid: a, message: '"subject" must be a string' },
    jwtid: { isValid: a, message: '"jwtid" must be a string' },
    noTimestamp: { isValid: m, message: '"noTimestamp" must be a boolean' },
    keyid: { isValid: a, message: '"keyid" must be a string' },
    mutatePayload: { isValid: m, message: '"mutatePayload" must be a boolean' },
    allowInsecureKeySizes: { isValid: m, message: '"allowInsecureKeySizes" must be a boolean' },
    allowInvalidAsymmetricKeyTypes: { isValid: m, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' }
  }, L = {
    iat: { isValid: d, message: '"iat" should be a number of seconds' },
    exp: { isValid: d, message: '"exp" should be a number of seconds' },
    nbf: { isValid: d, message: '"nbf" should be a number of seconds' }
  };
  function _(e, n, r, o) {
    if (!p(r))
      throw new Error('Expected "' + o + '" to be a plain object.');
    Object.keys(r).forEach(function(u) {
      const s = e[u];
      if (!s) {
        if (!n)
          throw new Error('"' + u + '" is not allowed in "' + o + '"');
        return;
      }
      if (!s.isValid(r[u]))
        throw new Error(s.message);
    });
  }
  function R(e) {
    return _(P, !1, e, "options");
  }
  function z(e) {
    return _(L, !0, e, "payload");
  }
  const w = {
    audience: "aud",
    issuer: "iss",
    subject: "sub",
    jwtid: "jti"
  }, A = [
    "expiresIn",
    "notBefore",
    "noTimestamp",
    "audience",
    "issuer",
    "subject",
    "jwtid"
  ];
  return l = function(e, n, r, o) {
    typeof r == "function" ? (o = r, r = {}) : r = r || {};
    const u = typeof e == "object" && !Buffer.isBuffer(e), s = Object.assign({
      alg: r.algorithm || "HS256",
      typ: u ? "JWT" : void 0,
      kid: r.keyid
    }, r.header);
    function t(i) {
      if (o)
        return o(i);
      throw i;
    }
    if (!n && r.algorithm !== "none")
      return t(new Error("secretOrPrivateKey must have a value"));
    if (n != null && !(n instanceof x))
      try {
        n = T(n);
      } catch {
        try {
          n = B(typeof n == "string" ? Buffer.from(n) : n);
        } catch {
          return t(new Error("secretOrPrivateKey is not valid key material"));
        }
      }
    if (s.alg.startsWith("HS") && n.type !== "secret")
      return t(new Error(`secretOrPrivateKey must be a symmetric key when using ${s.alg}`));
    if (/^(?:RS|PS|ES)/.test(s.alg)) {
      if (n.type !== "private")
        return t(new Error(`secretOrPrivateKey must be an asymmetric key when using ${s.alg}`));
      if (!r.allowInsecureKeySizes && !s.alg.startsWith("ES") && n.asymmetricKeyDetails !== void 0 && //KeyObject.asymmetricKeyDetails is supported in Node 15+
      n.asymmetricKeyDetails.modulusLength < 2048)
        return t(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${s.alg}`));
    }
    if (typeof e > "u")
      return t(new Error("payload is required"));
    if (u) {
      try {
        z(e);
      } catch (i) {
        return t(i);
      }
      r.mutatePayload || (e = Object.assign({}, e));
    } else {
      const i = A.filter(function(f) {
        return typeof r[f] < "u";
      });
      if (i.length > 0)
        return t(new Error("invalid " + i.join(",") + " option for " + typeof e + " payload"));
    }
    if (typeof e.exp < "u" && typeof r.expiresIn < "u")
      return t(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    if (typeof e.nbf < "u" && typeof r.notBefore < "u")
      return t(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    try {
      R(r);
    } catch (i) {
      return t(i);
    }
    if (!r.allowInvalidAsymmetricKeyTypes)
      try {
        j(s.alg, n);
      } catch (i) {
        return t(i);
      }
    const c = e.iat || Math.floor(Date.now() / 1e3);
    if (r.noTimestamp ? delete e.iat : u && (e.iat = c), typeof r.notBefore < "u") {
      try {
        e.nbf = g(r.notBefore, c);
      } catch (i) {
        return t(i);
      }
      if (typeof e.nbf > "u")
        return t(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    if (typeof r.expiresIn < "u" && typeof e == "object") {
      try {
        e.exp = g(r.expiresIn, c);
      } catch (i) {
        return t(i);
      }
      if (typeof e.exp > "u")
        return t(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    Object.keys(w).forEach(function(i) {
      const f = w[i];
      if (typeof r[i] < "u") {
        if (typeof e[f] < "u")
          return t(new Error('Bad "options.' + i + '" option. The payload already has an "' + f + '" property.'));
        e[f] = r[i];
      }
    });
    const S = r.encoding || "utf8";
    if (typeof o == "function")
      o = o && I(o), h.createSign({
        header: s,
        privateKey: n,
        payload: e,
        encoding: S
      }).once("error", o).once("done", function(i) {
        if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(s.alg) && i.length < 256)
          return o(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${s.alg}`));
        o(null, i);
      });
    else {
      let i = h.sign({ header: s, payload: e, secret: n, encoding: S });
      if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(s.alg) && i.length < 256)
        throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${s.alg}`);
      return i;
    }
  }, l;
}
export {
  te as __require
};
//# sourceMappingURL=index.es51.js.map
