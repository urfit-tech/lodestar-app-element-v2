import { invariant as e } from "./index.es70.js";
import "./index.es71.js";
import { r as n } from "./index.es207.js";
import { getApolloContext as i } from "./index.es206.js";
function c(o) {
  var r = n.useContext(i()), t = o || r.client;
  return e(!!t, 49), t;
}
export {
  c as useApolloClient
};
//# sourceMappingURL=index.es208.js.map
