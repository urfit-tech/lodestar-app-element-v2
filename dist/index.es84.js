import { __exports as r } from "./index.es138.js";
import { __require as u } from "./index.es139.js";
import { __require as f } from "./index.es140.js";
var t;
function c() {
  if (t) return r;
  t = 1;
  var S = u(), e = f(), a = [
    "HS256",
    "HS384",
    "HS512",
    "RS256",
    "RS384",
    "RS512",
    "PS256",
    "PS384",
    "PS512",
    "ES256",
    "ES384",
    "ES512"
  ];
  return r.ALGORITHMS = a, r.sign = S.sign, r.verify = e.verify, r.decode = e.decode, r.isValid = e.isValid, r.createSign = function(i) {
    return new S(i);
  }, r.createVerify = function(i) {
    return new e(i);
  }, r;
}
export {
  c as __require
};
//# sourceMappingURL=index.es84.js.map
