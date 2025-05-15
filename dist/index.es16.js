import { __assign as l } from "./index.es92.js";
import { invariant as c } from "./index.es93.js";
import "./index.es94.js";
import { r } from "./index.es204.js";
import { getApolloContext as m } from "./index.es203.js";
var s = function(e) {
  var o = e.client, a = e.children, n = m(), t = r.useContext(n), i = r.useMemo(function() {
    return l(l({}, t), { client: o || t.client });
  }, [t, o]);
  return c(i.client, 46), r.createElement(n.Provider, { value: i }, a);
};
export {
  s as ApolloProvider
};
//# sourceMappingURL=index.es16.js.map
