import * as r from "./index.es268.js";
import { r as t } from "./index.es268.js";
import { invariant as a } from "./index.es117.js";
import "./index.es118.js";
import { canUseSymbol as n } from "./index.es121.js";
var o = n ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function f() {
  a("createContext" in r, 45);
  var e = t.createContext[o];
  return e || (Object.defineProperty(t.createContext, o, {
    value: e = t.createContext({}),
    enumerable: !1,
    writable: !1,
    configurable: !0
  }), e.displayName = "ApolloContext"), e;
}
export {
  f as getApolloContext
};
//# sourceMappingURL=index.es269.js.map
