import { invariant as e } from "./index.es65.js";
import "./index.es66.js";
import { r as n } from "./index.es175.js";
import { getApolloContext as i } from "./index.es174.js";
function c(o) {
  var r = n.useContext(i()), t = o || r.client;
  return e(!!t, 49), t;
}
export {
  c as useApolloClient
};
//# sourceMappingURL=index.es176.js.map
