import { __require as f } from "./index.es301.js";
var e, t;
function s() {
  if (t) return e;
  t = 1;
  var i = f().Buffer;
  return e = function(r) {
    return typeof r == "string" ? r : typeof r == "number" || i.isBuffer(r) ? r.toString() : JSON.stringify(r);
  }, e;
}
export {
  s as __require
};
//# sourceMappingURL=index.es229.js.map
