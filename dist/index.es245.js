import { invariant as e } from "./index.es116.js";
import "./index.es117.js";
import { r as n } from "./index.es244.js";
import { getApolloContext as i } from "./index.es243.js";
function c(o) {
  var r = n.useContext(i()), t = o || r.client;
  return e(!!t, 49), t;
}
export {
  c as useApolloClient
};
//# sourceMappingURL=index.es245.js.map
