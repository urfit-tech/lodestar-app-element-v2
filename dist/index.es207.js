import { __require as s } from "./index.es206.js";
var r, i;
function l() {
  if (i) return r;
  i = 1;
  const a = s();
  return r = (n, u) => {
    const e = a(n, u);
    return e ? e.version : null;
  }, r;
}
export {
  l as __require
};
//# sourceMappingURL=index.es207.js.map
