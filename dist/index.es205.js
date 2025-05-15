import { invariant as e } from "./index.es93.js";
import "./index.es94.js";
import { r as n } from "./index.es204.js";
import { getApolloContext as i } from "./index.es203.js";
function c(o) {
  var r = n.useContext(i()), t = o || r.client;
  return e(!!t, 49), t;
}
export {
  c as useApolloClient
};
//# sourceMappingURL=index.es205.js.map
