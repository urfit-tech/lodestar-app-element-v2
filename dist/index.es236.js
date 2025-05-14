import { __require as t } from "./index.es230.js";
var r, e;
function o() {
  if (e) return r;
  e = 1;
  const a = t();
  return r = (n, i) => {
    try {
      return new a(n, i).range || "*";
    } catch {
      return null;
    }
  }, r;
}
export {
  o as __require
};
//# sourceMappingURL=index.es236.js.map
