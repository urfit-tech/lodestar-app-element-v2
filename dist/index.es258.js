import { __require as m } from "./index.es256.js";
var r, o;
function u() {
  if (o) return r;
  o = 1;
  const a = m();
  return r = (e, t) => new a(e, t).set.map((s) => s.map((i) => i.value).join(" ").trim().split(" ")), r;
}
export {
  u as __require
};
//# sourceMappingURL=index.es258.js.map
