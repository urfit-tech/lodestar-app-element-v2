import { __require as i } from "./index.es196.js";
var e, a;
function o() {
  if (a) return e;
  a = 1;
  const t = i();
  return e = (r, u, n = !1) => {
    if (r instanceof t)
      return r;
    try {
      return new t(r, u);
    } catch (s) {
      if (!n)
        return null;
      throw s;
    }
  }, e;
}
export {
  o as __require
};
//# sourceMappingURL=index.es198.js.map
