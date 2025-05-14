import { __require as o } from "./index.es204.js";
import { __require as c } from "./index.es230.js";
var i, u;
function _() {
  if (u) return i;
  u = 1;
  const f = o(), m = c();
  return i = (s, l, n) => {
    let r = null, t = null, a = null;
    try {
      a = new m(l, n);
    } catch {
      return null;
    }
    return s.forEach((e) => {
      a.test(e) && (!r || t.compare(e) === 1) && (r = e, t = new f(r, n));
    }), r;
  }, i;
}
export {
  _ as __require
};
//# sourceMappingURL=index.es234.js.map
