import { __require as u } from "./index.es222.js";
var r, s;
function c() {
  if (s) return r;
  s = 1;
  const i = u();
  return r = (t, e, a) => {
    try {
      e = new i(e, a);
    } catch {
      return !1;
    }
    return e.test(t);
  }, r;
}
export {
  c as __require
};
//# sourceMappingURL=index.es223.js.map
