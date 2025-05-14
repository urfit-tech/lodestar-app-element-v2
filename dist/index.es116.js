import { __require as L } from "./index.es118.js";
import { __require as $ } from "./index.es119.js";
import { __require as J } from "./index.es120.js";
import { __require as N } from "./index.es115.js";
import { __require as V } from "./index.es180.js";
import { __require as W } from "./index.es181.js";
import { __require as Y } from "./index.es182.js";
import { __require as U } from "./index.es179.js";
import C from "./index.es183.js";
var p, q;
function re() {
  if (q) return p;
  q = 1;
  const n = L(), A = $(), v = J(), T = N(), b = V(), j = W(), k = Y(), E = U(), { KeyObject: R, createSecretKey: D, createPublicKey: B } = C, d = ["RS256", "RS384", "RS512"], H = ["ES256", "ES384", "ES512"], l = ["RS256", "RS384", "RS512"], G = ["HS256", "HS384", "HS512"];
  return k && (d.splice(d.length, 0, "PS256", "PS384", "PS512"), l.splice(l.length, 0, "PS256", "PS384", "PS512")), p = function(m, o, e, c) {
    typeof e == "function" && !c && (c = e, e = {}), e || (e = {}), e = Object.assign({}, e);
    let r;
    if (c ? r = c : r = function(u, t) {
      if (u) throw u;
      return t;
    }, e.clockTimestamp && typeof e.clockTimestamp != "number")
      return r(new n("clockTimestamp must be a number"));
    if (e.nonce !== void 0 && (typeof e.nonce != "string" || e.nonce.trim() === ""))
      return r(new n("nonce must be a non-empty string"));
    if (e.allowInvalidAsymmetricKeyTypes !== void 0 && typeof e.allowInvalidAsymmetricKeyTypes != "boolean")
      return r(new n("allowInvalidAsymmetricKeyTypes must be a boolean"));
    const y = e.clockTimestamp || Math.floor(Date.now() / 1e3);
    if (!m)
      return r(new n("jwt must be provided"));
    if (typeof m != "string")
      return r(new n("jwt must be a string"));
    const S = m.split(".");
    if (S.length !== 3)
      return r(new n("jwt malformed"));
    let f;
    try {
      f = T(m, { complete: !0 });
    } catch (u) {
      return r(u);
    }
    if (!f)
      return r(new n("invalid token"));
    const s = f.header;
    let w;
    if (typeof o == "function") {
      if (!c)
        return r(new n("verify must be called asynchronous if secret or public key is provided as a callback"));
      w = o;
    } else
      w = function(u, t) {
        return t(null, o);
      };
    return w(s, function(u, t) {
      if (u)
        return r(new n("error in secret or public key callback: " + u.message));
      const g = S[2].trim() !== "";
      if (!g && t)
        return r(new n("jwt signature is required"));
      if (g && !t)
        return r(new n("secret or public key must be provided"));
      if (!g && !e.algorithms)
        return r(new n('please specify "none" in "algorithms" to verify unsigned tokens'));
      if (t != null && !(t instanceof R))
        try {
          t = B(t);
        } catch {
          try {
            t = D(typeof t == "string" ? Buffer.from(t) : t);
          } catch {
            return r(new n("secretOrPublicKey is not valid key material"));
          }
        }
      if (e.algorithms || (t.type === "secret" ? e.algorithms = G : ["rsa", "rsa-pss"].includes(t.asymmetricKeyType) ? e.algorithms = l : t.asymmetricKeyType === "ec" ? e.algorithms = H : e.algorithms = d), e.algorithms.indexOf(f.header.alg) === -1)
        return r(new n("invalid algorithm"));
      if (s.alg.startsWith("HS") && t.type !== "secret")
        return r(new n(`secretOrPublicKey must be a symmetric key when using ${s.alg}`));
      if (/^(?:RS|PS|ES)/.test(s.alg) && t.type !== "public")
        return r(new n(`secretOrPublicKey must be an asymmetric key when using ${s.alg}`));
      if (!e.allowInvalidAsymmetricKeyTypes)
        try {
          j(s.alg, t);
        } catch (a) {
          return r(a);
        }
      let _;
      try {
        _ = E.verify(m, f.header.alg, t);
      } catch (a) {
        return r(a);
      }
      if (!_)
        return r(new n("invalid signature"));
      const i = f.payload;
      if (typeof i.nbf < "u" && !e.ignoreNotBefore) {
        if (typeof i.nbf != "number")
          return r(new n("invalid nbf value"));
        if (i.nbf > y + (e.clockTolerance || 0))
          return r(new A("jwt not active", new Date(i.nbf * 1e3)));
      }
      if (typeof i.exp < "u" && !e.ignoreExpiration) {
        if (typeof i.exp != "number")
          return r(new n("invalid exp value"));
        if (y >= i.exp + (e.clockTolerance || 0))
          return r(new v("jwt expired", new Date(i.exp * 1e3)));
      }
      if (e.audience) {
        const a = Array.isArray(e.audience) ? e.audience : [e.audience];
        if (!(Array.isArray(i.aud) ? i.aud : [i.aud]).some(function(x) {
          return a.some(function(h) {
            return h instanceof RegExp ? h.test(x) : h === x;
          });
        }))
          return r(new n("jwt audience invalid. expected: " + a.join(" or ")));
      }
      if (e.issuer && (typeof e.issuer == "string" && i.iss !== e.issuer || Array.isArray(e.issuer) && e.issuer.indexOf(i.iss) === -1))
        return r(new n("jwt issuer invalid. expected: " + e.issuer));
      if (e.subject && i.sub !== e.subject)
        return r(new n("jwt subject invalid. expected: " + e.subject));
      if (e.jwtid && i.jti !== e.jwtid)
        return r(new n("jwt jwtid invalid. expected: " + e.jwtid));
      if (e.nonce && i.nonce !== e.nonce)
        return r(new n("jwt nonce invalid. expected: " + e.nonce));
      if (e.maxAge) {
        if (typeof i.iat != "number")
          return r(new n("iat required when maxAge is specified"));
        const a = b(e.maxAge, i.iat);
        if (typeof a > "u")
          return r(new n('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        if (y >= a + (e.clockTolerance || 0))
          return r(new v("maxAge exceeded", new Date(a * 1e3)));
      }
      if (e.complete === !0) {
        const a = f.signature;
        return r(null, {
          header: s,
          payload: i,
          signature: a
        });
      }
      return r(null, i);
    });
  }, p;
}
export {
  re as __require
};
//# sourceMappingURL=index.es116.js.map
