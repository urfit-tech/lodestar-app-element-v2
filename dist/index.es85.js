import { __require as i } from "./index.es134.js";
var e, a;
function s() {
  if (a) return e;
  a = 1;
  var u = i();
  return e = function(r, f) {
    var n = f || Math.floor(Date.now() / 1e3);
    if (typeof r == "string") {
      var t = u(r);
      return typeof t > "u" ? void 0 : Math.floor(n + t / 1e3);
    } else return typeof r == "number" ? n + r : void 0;
  }, e;
}
export {
  s as __require
};
//# sourceMappingURL=index.es85.js.map
