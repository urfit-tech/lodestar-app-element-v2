import { j as o } from "./index.es15.js";
import { createApolloClient as n } from "./index.es9.js";
import { useAuth as l } from "./index.es6.js";
import { ApolloProvider as p } from "./index.es16.js";
const c = ({ appId: t, children: r }) => {
  const { authToken: e } = l(), i = n(
    { appId: t, authToken: e },
    {
      "invalid-jwt": typeof window < "u" ? window.location.reload : () => {
      }
    }
  );
  return /* @__PURE__ */ o.jsx(p, { client: i, children: /* @__PURE__ */ o.jsx(o.Fragment, { children: r }) });
};
export {
  c as ApiProvider
};
//# sourceMappingURL=index.es3.js.map
