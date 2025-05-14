import { __require as U } from "./index.es319.js";
import { __require as V } from "./index.es318.js";
import { __require as K } from "./index.es285.js";
import { __require as B } from "./index.es317.js";
import { __require as J } from "./index.es260.js";
import { __require as Q } from "./index.es258.js";
import { __require as W } from "./index.es259.js";
var A, w;
function le() {
  if (w) return A;
  w = 1;
  const C = /\s+/g;
  class E {
    constructor(e, i) {
      if (i = _(i), e instanceof E)
        return e.loose === !!i.loose && e.includePrerelease === !!i.includePrerelease ? e : new E(e.raw, i);
      if (e instanceof p)
        return this.raw = e.value, this.set = [[e]], this.formatted = void 0, this;
      if (this.options = i, this.loose = !!i.loose, this.includePrerelease = !!i.includePrerelease, this.raw = e.trim().replace(C, " "), this.set = this.raw.split("||").map((t) => this.parseRange(t.trim())).filter((t) => t.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const t = this.set[0];
        if (this.set = this.set.filter((l) => !S(l[0])), this.set.length === 0)
          this.set = [t];
        else if (this.set.length > 1) {
          for (const l of this.set)
            if (l.length === 1 && x(l[0])) {
              this.set = [l];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let e = 0; e < this.set.length; e++) {
          e > 0 && (this.formatted += "||");
          const i = this.set[e];
          for (let t = 0; t < i.length; t++)
            t > 0 && (this.formatted += " "), this.formatted += i[t].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(e) {
      const t = ((this.options.includePrerelease && v) | (this.options.loose && N)) + ":" + e, l = O.get(t);
      if (l)
        return l;
      const s = this.options.loose, n = s ? d[u.HYPHENRANGELOOSE] : d[u.HYPHENRANGE];
      e = e.replace(n, z(this.options.includePrerelease)), f("hyphen replace", e), e = e.replace(d[u.COMPARATORTRIM], y), f("comparator trim", e), e = e.replace(d[u.TILDETRIM], G), f("tilde trim", e), e = e.replace(d[u.CARETTRIM], m), f("caret trim", e);
      let $ = e.split(" ").map((o) => I(o, this.options)).join(" ").split(/\s+/).map((o) => k(o, this.options));
      s && ($ = $.filter((o) => (f("loose invalid filter", o, this.options), !!o.match(d[u.COMPARATORLOOSE])))), f("range list", $);
      const a = /* @__PURE__ */ new Map(), c = $.map((o) => new p(o, this.options));
      for (const o of c) {
        if (S(o))
          return [o];
        a.set(o.value, o);
      }
      a.size > 1 && a.has("") && a.delete("");
      const R = [...a.values()];
      return O.set(t, R), R;
    }
    intersects(e, i) {
      if (!(e instanceof E))
        throw new TypeError("a Range is required");
      return this.set.some((t) => q(t, i) && e.set.some((l) => q(l, i) && t.every((s) => l.every((n) => s.intersects(n, i)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(e) {
      if (!e)
        return !1;
      if (typeof e == "string")
        try {
          e = new P(e, this.options);
        } catch {
          return !1;
        }
      for (let i = 0; i < this.set.length; i++)
        if (F(this.set[i], e, this.options))
          return !0;
      return !1;
    }
  }
  A = E;
  const L = U(), O = new L(), _ = V(), p = K(), f = B(), P = J(), {
    safeRe: d,
    t: u,
    comparatorTrimReplace: y,
    tildeTrimReplace: G,
    caretTrimReplace: m
  } = Q(), { FLAG_INCLUDE_PRERELEASE: v, FLAG_LOOSE: N } = W(), S = (r) => r.value === "<0.0.0-0", x = (r) => r.value === "", q = (r, e) => {
    let i = !0;
    const t = r.slice();
    let l = t.pop();
    for (; i && t.length; )
      i = t.every((s) => l.intersects(s, e)), l = t.pop();
    return i;
  }, I = (r, e) => (f("comp", r, e), r = j(r, e), f("caret", r), r = X(r, e), f("tildes", r), r = D(r, e), f("xrange", r), r = Y(r, e), f("stars", r), r), h = (r) => !r || r.toLowerCase() === "x" || r === "*", X = (r, e) => r.trim().split(/\s+/).map((i) => g(i, e)).join(" "), g = (r, e) => {
    const i = e.loose ? d[u.TILDELOOSE] : d[u.TILDE];
    return r.replace(i, (t, l, s, n, $) => {
      f("tilde", r, t, l, s, n, $);
      let a;
      return h(l) ? a = "" : h(s) ? a = `>=${l}.0.0 <${+l + 1}.0.0-0` : h(n) ? a = `>=${l}.${s}.0 <${l}.${+s + 1}.0-0` : $ ? (f("replaceTilde pr", $), a = `>=${l}.${s}.${n}-${$} <${l}.${+s + 1}.0-0`) : a = `>=${l}.${s}.${n} <${l}.${+s + 1}.0-0`, f("tilde return", a), a;
    });
  }, j = (r, e) => r.trim().split(/\s+/).map((i) => b(i, e)).join(" "), b = (r, e) => {
    f("caret", r, e);
    const i = e.loose ? d[u.CARETLOOSE] : d[u.CARET], t = e.includePrerelease ? "-0" : "";
    return r.replace(i, (l, s, n, $, a) => {
      f("caret", r, l, s, n, $, a);
      let c;
      return h(s) ? c = "" : h(n) ? c = `>=${s}.0.0${t} <${+s + 1}.0.0-0` : h($) ? s === "0" ? c = `>=${s}.${n}.0${t} <${s}.${+n + 1}.0-0` : c = `>=${s}.${n}.0${t} <${+s + 1}.0.0-0` : a ? (f("replaceCaret pr", a), s === "0" ? n === "0" ? c = `>=${s}.${n}.${$}-${a} <${s}.${n}.${+$ + 1}-0` : c = `>=${s}.${n}.${$}-${a} <${s}.${+n + 1}.0-0` : c = `>=${s}.${n}.${$}-${a} <${+s + 1}.0.0-0`) : (f("no pr"), s === "0" ? n === "0" ? c = `>=${s}.${n}.${$}${t} <${s}.${n}.${+$ + 1}-0` : c = `>=${s}.${n}.${$}${t} <${s}.${+n + 1}.0-0` : c = `>=${s}.${n}.${$} <${+s + 1}.0.0-0`), f("caret return", c), c;
    });
  }, D = (r, e) => (f("replaceXRanges", r, e), r.split(/\s+/).map((i) => H(i, e)).join(" ")), H = (r, e) => {
    r = r.trim();
    const i = e.loose ? d[u.XRANGELOOSE] : d[u.XRANGE];
    return r.replace(i, (t, l, s, n, $, a) => {
      f("xRange", r, t, l, s, n, $, a);
      const c = h(s), R = c || h(n), o = R || h($), T = o;
      return l === "=" && T && (l = ""), a = e.includePrerelease ? "-0" : "", c ? l === ">" || l === "<" ? t = "<0.0.0-0" : t = "*" : l && T ? (R && (n = 0), $ = 0, l === ">" ? (l = ">=", R ? (s = +s + 1, n = 0, $ = 0) : (n = +n + 1, $ = 0)) : l === "<=" && (l = "<", R ? s = +s + 1 : n = +n + 1), l === "<" && (a = "-0"), t = `${l + s}.${n}.${$}${a}`) : R ? t = `>=${s}.0.0${a} <${+s + 1}.0.0-0` : o && (t = `>=${s}.${n}.0${a} <${s}.${+n + 1}.0-0`), f("xRange return", t), t;
    });
  }, Y = (r, e) => (f("replaceStars", r, e), r.trim().replace(d[u.STAR], "")), k = (r, e) => (f("replaceGTE0", r, e), r.trim().replace(d[e.includePrerelease ? u.GTE0PRE : u.GTE0], "")), z = (r) => (e, i, t, l, s, n, $, a, c, R, o, T) => (h(t) ? i = "" : h(l) ? i = `>=${t}.0.0${r ? "-0" : ""}` : h(s) ? i = `>=${t}.${l}.0${r ? "-0" : ""}` : n ? i = `>=${i}` : i = `>=${i}${r ? "-0" : ""}`, h(c) ? a = "" : h(R) ? a = `<${+c + 1}.0.0-0` : h(o) ? a = `<${c}.${+R + 1}.0-0` : T ? a = `<=${c}.${R}.${o}-${T}` : r ? a = `<${c}.${R}.${+o + 1}-0` : a = `<=${a}`, `${i} ${a}`.trim()), F = (r, e, i) => {
    for (let t = 0; t < r.length; t++)
      if (!r[t].test(e))
        return !1;
    if (e.prerelease.length && !i.includePrerelease) {
      for (let t = 0; t < r.length; t++)
        if (f(r[t].semver), r[t].semver !== p.ANY && r[t].semver.prerelease.length > 0) {
          const l = r[t].semver;
          if (l.major === e.major && l.minor === e.minor && l.patch === e.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return A;
}
export {
  le as __require
};
//# sourceMappingURL=index.es286.js.map
