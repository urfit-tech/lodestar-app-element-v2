import { __require as p } from "./index.es165.js";
import { __require as q } from "./index.es191.js";
import { __require as _ } from "./index.es182.js";
var u, c;
function d() {
  if (c) return u;
  c = 1;
  const n = p(), f = q(), a = _();
  return u = (r, l) => {
    r = new f(r, l);
    let e = new n("0.0.0");
    if (r.test(e) || (e = new n("0.0.0-0"), r.test(e)))
      return e;
    e = null;
    for (let s = 0; s < r.set.length; ++s) {
      const m = r.set[s];
      let i = null;
      m.forEach((o) => {
        const t = new n(o.semver.version);
        switch (o.operator) {
          case ">":
            t.prerelease.length === 0 ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
          /* fallthrough */
          case "":
          case ">=":
            (!i || a(t, i)) && (i = t);
            break;
          case "<":
          case "<=":
            break;
          /* istanbul ignore next */
          default:
            throw new Error(`Unexpected operation: ${o.operator}`);
        }
      }), i && (!e || a(e, i)) && (e = i);
    }
    return e && r.test(e) ? e : null;
  }, u;
}
export {
  d as __require
};
//# sourceMappingURL=index.es196.js.map
