import { __require as _ } from "./index.es230.js";
var c, a;
function s() {
  if (a) return c;
  a = 1;
  const u = _();
  return c = (e, q, r, n, t) => {
    typeof r == "string" && (t = n, n = r, r = void 0);
    try {
      return new u(
        e instanceof u ? e.version : e,
        r
      ).inc(q, n, t).version;
    } catch {
      return null;
    }
  }, c;
}
export {
  s as __require
};
//# sourceMappingURL=index.es235.js.map
