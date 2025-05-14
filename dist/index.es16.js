import { __assign as l } from "./index.es54.js";
import { invariant as c } from "./index.es70.js";
import "./index.es71.js";
import { r } from "./index.es207.js";
import { getApolloContext as m } from "./index.es206.js";
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
