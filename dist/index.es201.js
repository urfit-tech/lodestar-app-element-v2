import { __require as L } from "./index.es189.js";
import { __require as N } from "./index.es188.js";
import { __require as V } from "./index.es190.js";
import { __require as x } from "./index.es174.js";
var S, D;
function k() {
  if (D) return S;
  D = 1;
  const _ = L(), m = N(), { ANY: c } = m, u = V(), p = x(), j = (t, r, s = {}) => {
    if (t === r)
      return !0;
    t = new _(t, s), r = new _(r, s);
    let o = !1;
    e: for (const l of t.set) {
      for (const n of r.set) {
        const f = R(l, n, s);
        if (o = o || f !== null, f)
          continue e;
      }
      if (o)
        return !1;
    }
    return !0;
  }, C = [new m(">=0.0.0-0")], w = [new m(">=0.0.0")], R = (t, r, s) => {
    if (t === r)
      return !0;
    if (t.length === 1 && t[0].semver === c) {
      if (r.length === 1 && r[0].semver === c)
        return !0;
      s.includePrerelease ? t = C : t = w;
    }
    if (r.length === 1 && r[0].semver === c) {
      if (s.includePrerelease)
        return !0;
      r = w;
    }
    const o = /* @__PURE__ */ new Set();
    let l, n;
    for (const e of t)
      e.operator === ">" || e.operator === ">=" ? l = P(l, e, s) : e.operator === "<" || e.operator === "<=" ? n = T(n, e, s) : o.add(e.semver);
    if (o.size > 1)
      return null;
    let f;
    if (l && n) {
      if (f = p(l.semver, n.semver, s), f > 0)
        return null;
      if (f === 0 && (l.operator !== ">=" || n.operator !== "<="))
        return null;
    }
    for (const e of o) {
      if (l && !u(e, String(l), s) || n && !u(e, String(n), s))
        return null;
      for (const G of r)
        if (!u(e, String(G), s))
          return !1;
      return !0;
    }
    let v, h, g, q, a = n && !s.includePrerelease && n.semver.prerelease.length ? n.semver : !1, i = l && !s.includePrerelease && l.semver.prerelease.length ? l.semver : !1;
    a && a.prerelease.length === 1 && n.operator === "<" && a.prerelease[0] === 0 && (a = !1);
    for (const e of r) {
      if (q = q || e.operator === ">" || e.operator === ">=", g = g || e.operator === "<" || e.operator === "<=", l) {
        if (i && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === i.major && e.semver.minor === i.minor && e.semver.patch === i.patch && (i = !1), e.operator === ">" || e.operator === ">=") {
          if (v = P(l, e, s), v === e && v !== l)
            return !1;
        } else if (l.operator === ">=" && !u(l.semver, String(e), s))
          return !1;
      }
      if (n) {
        if (a && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === a.major && e.semver.minor === a.minor && e.semver.patch === a.patch && (a = !1), e.operator === "<" || e.operator === "<=") {
          if (h = T(n, e, s), h === e && h !== n)
            return !1;
        } else if (n.operator === "<=" && !u(n.semver, String(e), s))
          return !1;
      }
      if (!e.operator && (n || l) && f !== 0)
        return !1;
    }
    return !(l && g && !n && f !== 0 || n && q && !l && f !== 0 || i || a);
  }, P = (t, r, s) => {
    if (!t)
      return r;
    const o = p(t.semver, r.semver, s);
    return o > 0 ? t : o < 0 || r.operator === ">" && t.operator === ">=" ? r : t;
  }, T = (t, r, s) => {
    if (!t)
      return r;
    const o = p(t.semver, r.semver, s);
    return o < 0 ? t : o > 0 || r.operator === "<" && t.operator === "<=" ? r : t;
  };
  return S = j, S;
}
export {
  k as __require
};
//# sourceMappingURL=index.es201.js.map
