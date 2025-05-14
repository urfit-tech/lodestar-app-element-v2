import { __require as o } from "./index.es165.js";
import { __require as c } from "./index.es191.js";
var a, u;
function q() {
  if (u) return a;
  u = 1;
  const f = o(), m = c();
  return a = (s, l, i) => {
    let r = null, n = null, t = null;
    try {
      t = new m(l, i);
    } catch {
      return null;
    }
    return s.forEach((e) => {
      t.test(e) && (!r || n.compare(e) === -1) && (r = e, n = new f(r, i));
    }), r;
  }, a;
}
export {
  q as __require
};
//# sourceMappingURL=index.es194.js.map
