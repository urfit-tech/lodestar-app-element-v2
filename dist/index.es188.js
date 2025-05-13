import { __require as q } from "./index.es229.js";
import { __require as p } from "./index.es161.js";
import { __require as _ } from "./index.es186.js";
import { __require as d } from "./index.es228.js";
import { __require as W } from "./index.es163.js";
import { __require as R } from "./index.es189.js";
var o, m;
function S() {
  if (m) return o;
  m = 1;
  const t = Symbol("SemVer ANY");
  class i {
    static get ANY() {
      return t;
    }
    constructor(r, e) {
      if (e = h(e), r instanceof i) {
        if (r.loose === !!e.loose)
          return r;
        r = r.value;
      }
      r = r.trim().split(/\s+/).join(" "), u("comparator", r, e), this.options = e, this.loose = !!e.loose, this.parse(r), this.semver === t ? this.value = "" : this.value = this.operator + this.semver.version, u("comp", this);
    }
    parse(r) {
      const e = this.options.loose ? n[l.COMPARATORLOOSE] : n[l.COMPARATOR], s = r.match(e);
      if (!s)
        throw new TypeError(`Invalid comparator: ${r}`);
      this.operator = s[1] !== void 0 ? s[1] : "", this.operator === "=" && (this.operator = ""), s[2] ? this.semver = new f(s[2], this.options.loose) : this.semver = t;
    }
    toString() {
      return this.value;
    }
    test(r) {
      if (u("Comparator.test", r, this.options.loose), this.semver === t || r === t)
        return !0;
      if (typeof r == "string")
        try {
          r = new f(r, this.options);
        } catch {
          return !1;
        }
      return a(r, this.operator, this.semver, this.options);
    }
    intersects(r, e) {
      if (!(r instanceof i))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new v(r.value, e).test(this.value) : r.operator === "" ? r.value === "" ? !0 : new v(this.value, e).test(r.semver) : (e = h(e), e.includePrerelease && (this.value === "<0.0.0-0" || r.value === "<0.0.0-0") || !e.includePrerelease && (this.value.startsWith("<0.0.0") || r.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && r.operator.startsWith(">") || this.operator.startsWith("<") && r.operator.startsWith("<") || this.semver.version === r.semver.version && this.operator.includes("=") && r.operator.includes("=") || a(this.semver, "<", r.semver, e) && this.operator.startsWith(">") && r.operator.startsWith("<") || a(this.semver, ">", r.semver, e) && this.operator.startsWith("<") && r.operator.startsWith(">")));
    }
  }
  o = i;
  const h = q(), { safeRe: n, t: l } = p(), a = _(), u = d(), f = W(), v = R();
  return o;
}
export {
  S as __require
};
//# sourceMappingURL=index.es188.js.map
