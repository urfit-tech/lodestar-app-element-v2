import { __require as t } from "./index.es167.js";
var r, n;
function l() {
  if (n) return r;
  n = 1;
  const a = t();
  return r = (i, s) => {
    const e = a(i.trim().replace(/^[=v]+/, ""), s);
    return e ? e.version : null;
  }, r;
}
export {
  l as __require
};
//# sourceMappingURL=index.es169.js.map
