import { __require as p } from "./index.es215.js";
import { __require as _ } from "./index.es216.js";
import { __require as a } from "./index.es213.js";
import { __require as v } from "./index.es217.js";
import { __require as y } from "./index.es214.js";
import { __require as j } from "./index.es218.js";
var i, c;
function L() {
  if (c) return i;
  c = 1;
  const n = p(), o = _(), s = a(), q = v(), f = y(), m = j();
  return i = (r, u, e, t) => {
    switch (u) {
      case "===":
        return typeof r == "object" && (r = r.version), typeof e == "object" && (e = e.version), r === e;
      case "!==":
        return typeof r == "object" && (r = r.version), typeof e == "object" && (e = e.version), r !== e;
      case "":
      case "=":
      case "==":
        return n(r, e, t);
      case "!=":
        return o(r, e, t);
      case ">":
        return s(r, e, t);
      case ">=":
        return q(r, e, t);
      case "<":
        return f(r, e, t);
      case "<=":
        return m(r, e, t);
      default:
        throw new TypeError(`Invalid operator: ${u}`);
    }
  }, i;
}
export {
  L as __require
};
//# sourceMappingURL=index.es219.js.map
