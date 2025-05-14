import { invariant as e } from "./index.es117.js";
import "./index.es118.js";
import { r as n } from "./index.es268.js";
import { getApolloContext as i } from "./index.es269.js";
function c(o) {
  var r = n.useContext(i()), t = o || r.client;
  return e(!!t, 49), t;
}
export {
  c as useApolloClient
};
//# sourceMappingURL=index.es267.js.map
