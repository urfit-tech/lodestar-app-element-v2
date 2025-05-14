import { __extends as e } from "./index.es54.js";
import { createHttpLink as o } from "./index.es204.js";
import { ApolloLink as f } from "./index.es55.js";
var c = (
  /** @class */
  function(r) {
    e(i, r);
    function i(t) {
      t === void 0 && (t = {});
      var n = r.call(this, o(t).request) || this;
      return n.options = t, n;
    }
    return i;
  }(f)
);
export {
  c as HttpLink
};
//# sourceMappingURL=index.es38.js.map
