import { __require as t } from "./index.es262.js";
var r, s;
function i() {
  if (s) return r;
  s = 1;
  const a = t();
  return r = (l, n) => {
    const e = a(l, n);
    return e && e.prerelease.length ? e.prerelease : null;
  }, r;
}
export {
  i as __require
};
//# sourceMappingURL=index.es270.js.map
