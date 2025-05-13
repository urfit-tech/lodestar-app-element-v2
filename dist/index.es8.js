import { j as r } from "./index.es15.js";
import { createContext as m } from "react";
import { ApiProvider as n } from "./index.es3.js";
import { AppProvider as s } from "./index.es4.js";
import { AppThemeProvider as x } from "./index.es5.js";
import { AuthProvider as d } from "./index.es6.js";
import { LanguageProvider as h } from "./index.es7.js";
const l = ({ appId: e, children: o, extend: t }) => {
  const i = m({ appId: e });
  return /* @__PURE__ */ r.jsx(i.Provider, { value: { appId: e }, children: /* @__PURE__ */ r.jsx(d, { appId: e, children: /* @__PURE__ */ r.jsx(n, { appId: e, children: /* @__PURE__ */ r.jsx(s, { appId: e, children: /* @__PURE__ */ r.jsx(h, { children: /* @__PURE__ */ r.jsx(x, { extendChakraTheme: t?.chakraTheme, children: o }) }) }) }) }) });
};
export {
  l as LodestarAppProvider
};
//# sourceMappingURL=index.es8.js.map
