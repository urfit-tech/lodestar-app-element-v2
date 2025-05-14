import { __require as c } from "./index.es140.js";
var r, n;
function s() {
  if (n) return r;
  n = 1;
  const e = c();
  return r = (a, m, i) => {
    const o = new e(a, i), u = new e(m, i);
    return o.compare(u) || o.compareBuild(u);
  }, r;
}
export {
  s as __require
};
//# sourceMappingURL=index.es154.js.map
