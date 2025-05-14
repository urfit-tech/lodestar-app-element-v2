import { __require as h } from "./index.es167.js";
var o, u;
function v() {
  if (u) return o;
  u = 1;
  const t = h();
  return o = (p, m) => {
    const r = t(p, null, !0), e = t(m, null, !0), a = r.compare(e);
    if (a === 0)
      return null;
    const s = a > 0, f = s ? r : e, n = s ? e : r, c = !!f.prerelease.length;
    if (!!n.prerelease.length && !c) {
      if (!n.patch && !n.minor)
        return "major";
      if (n.compareMain(f) === 0)
        return n.minor && !n.patch ? "minor" : "patch";
    }
    const i = c ? "pre" : "";
    return r.major !== e.major ? i + "major" : r.minor !== e.minor ? i + "minor" : r.patch !== e.patch ? i + "patch" : "prerelease";
  }, o;
}
export {
  v as __require
};
//# sourceMappingURL=index.es171.js.map
