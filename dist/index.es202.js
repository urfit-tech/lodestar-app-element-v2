import { __require as d } from "./index.es192.js";
import { __require as _ } from "./index.es176.js";
var u, c;
function S() {
  if (c) return u;
  c = 1;
  const m = d(), a = _();
  return u = (h, t, f) => {
    const n = [];
    let s = null, l = null;
    const o = h.sort((i, e) => a(i, e, f));
    for (const i of o)
      m(i, t, f) ? (l = i, s || (s = i)) : (l && n.push([s, l]), l = null, s = null);
    s && n.push([s, null]);
    const r = [];
    for (const [i, e] of n)
      i === e ? r.push(i) : !e && i === o[0] ? r.push("*") : e ? i === o[0] ? r.push(`<=${e}`) : r.push(`${i} - ${e}`) : r.push(`>=${i}`);
    const p = r.join(" || "), q = typeof t.raw == "string" ? t.raw : String(t);
    return p.length < q.length ? p : t;
  }, u;
}
export {
  S as __require
};
//# sourceMappingURL=index.es202.js.map
