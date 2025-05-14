import { __require as g } from "./index.es293.js";
import { __require as E } from "./index.es195.js";
import { __require as b } from "./index.es194.js";
import { __require as d } from "./index.es294.js";
import { __require as v } from "./index.es197.js";
var p, m;
function P() {
  if (m) return p;
  m = 1;
  const h = g(), { MAX_LENGTH: c, MAX_SAFE_INTEGER: l } = E(), { safeRe: u, safeSrc: f, t: o } = b(), w = d(), { compareIdentifiers: n } = v();
  class a {
    constructor(e, r) {
      if (r = w(r), e instanceof a) {
        if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
          return e;
        e = e.version;
      } else if (typeof e != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
      if (e.length > c)
        throw new TypeError(
          `version is longer than ${c} characters`
        );
      h("SemVer", e, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
      const s = e.trim().match(r.loose ? u[o.LOOSE] : u[o.FULL]);
      if (!s)
        throw new TypeError(`Invalid Version: ${e}`);
      if (this.raw = e, this.major = +s[1], this.minor = +s[2], this.patch = +s[3], this.major > l || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > l || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > l || this.patch < 0)
        throw new TypeError("Invalid patch version");
      s[4] ? this.prerelease = s[4].split(".").map((t) => {
        if (/^[0-9]+$/.test(t)) {
          const i = +t;
          if (i >= 0 && i < l)
            return i;
        }
        return t;
      }) : this.prerelease = [], this.build = s[5] ? s[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(e) {
      if (h("SemVer.compare", this.version, this.options, e), !(e instanceof a)) {
        if (typeof e == "string" && e === this.version)
          return 0;
        e = new a(e, this.options);
      }
      return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
      return e instanceof a || (e = new a(e, this.options)), n(this.major, e.major) || n(this.minor, e.minor) || n(this.patch, e.patch);
    }
    comparePre(e) {
      if (e instanceof a || (e = new a(e, this.options)), this.prerelease.length && !e.prerelease.length)
        return -1;
      if (!this.prerelease.length && e.prerelease.length)
        return 1;
      if (!this.prerelease.length && !e.prerelease.length)
        return 0;
      let r = 0;
      do {
        const s = this.prerelease[r], t = e.prerelease[r];
        if (h("prerelease compare", r, s, t), s === void 0 && t === void 0)
          return 0;
        if (t === void 0)
          return 1;
        if (s === void 0)
          return -1;
        if (s === t)
          continue;
        return n(s, t);
      } while (++r);
    }
    compareBuild(e) {
      e instanceof a || (e = new a(e, this.options));
      let r = 0;
      do {
        const s = this.build[r], t = e.build[r];
        if (h("build compare", r, s, t), s === void 0 && t === void 0)
          return 0;
        if (t === void 0)
          return 1;
        if (s === void 0)
          return -1;
        if (s === t)
          continue;
        return n(s, t);
      } while (++r);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(e, r, s) {
      if (e.startsWith("pre")) {
        if (!r && s === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (r) {
          const t = new RegExp(`^${this.options.loose ? f[o.PRERELEASELOOSE] : f[o.PRERELEASE]}$`), i = `-${r}`.match(t);
          if (!i || i[1] !== r)
            throw new Error(`invalid identifier: ${r}`);
        }
      }
      switch (e) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, s);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, s);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", r, s), this.inc("pre", r, s);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", r, s), this.inc("pre", r, s);
          break;
        case "release":
          if (this.prerelease.length === 0)
            throw new Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const t = Number(s) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [t];
          else {
            let i = this.prerelease.length;
            for (; --i >= 0; )
              typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
            if (i === -1) {
              if (r === this.prerelease.join(".") && s === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(t);
            }
          }
          if (r) {
            let i = [r, t];
            s === !1 && (i = [r]), n(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${e}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return p = a, p;
}
export {
  P as __require
};
//# sourceMappingURL=index.es196.js.map
