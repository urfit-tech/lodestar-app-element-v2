import { j as o } from "./index.es15.js";
import { ApolloProvider as n } from "@apollo/client";
import { createApolloClient as l } from "./index.es9.js";
import { useAuth as p } from "./index.es6.js";
const c = ({ appId: t, children: r }) => {
  const { authToken: e } = p(), i = l(
    { appId: t, authToken: e },
    {
      "invalid-jwt": typeof window < "u" ? window.location.reload : () => {
      }
    }
  );
  return /* @__PURE__ */ o.jsx(n, { client: i, children: /* @__PURE__ */ o.jsx(o.Fragment, { children: r }) });
};
export {
  c as ApiProvider
};
//# sourceMappingURL=index.es3.js.map
