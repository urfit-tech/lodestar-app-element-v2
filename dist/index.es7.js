import { j as i } from "./index.es15.js";
import s from "./index.es25.js";
import "./index.es26.js";
import "./index.es27.js";
import "./index.es28.js";
import "./index.es29.js";
import { createContext as d, useState as p, useEffect as h } from "react";
import { IntlProvider as f } from "react-intl";
import { useApp as z } from "./index.es4.js";
const r = ["zh-tw", "zh-cn", "en-us", "vi", "acsi"], w = {
  currentLanguage: "zh-tw",
  locale: "zh-tw"
}, L = d(w), S = ({ children: m }) => {
  const { enabledModules: a, settings: l } = z(), [t, n] = p("zh-tw"), [c, u] = p("zh-tw");
  s.locale("zh-tw"), h(() => {
    const e = l.language || navigator.language.split("-")[0], o = localStorage.getItem("kolable.app.language");
    n(
      a.locale ? typeof o == "string" && r.includes(o) ? o : r.includes(e) ? e : "zh-tw" : "zh-tw"
    );
  }, [a, l]), h(() => {
    switch (t) {
      case "zh-tw":
      case "acsi":
        u("zh-tw"), s.locale("zh-tw");
        break;
      default:
        u(t), s.locale("zh-tw");
    }
  }, [t]);
  let g = {};
  try {
    a.locale && (g = require(`../translations/locales/${t}.json`));
  } catch {
  }
  return /* @__PURE__ */ i.jsx(
    L.Provider,
    {
      value: {
        currentLanguage: t,
        locale: c,
        setCurrentLanguage: (e) => {
          r.includes(e) && (localStorage.setItem("kolable.app.language", e), n(e));
        }
      },
      children: /* @__PURE__ */ i.jsx(f, { defaultLocale: "zh-tw", locale: c, messages: g, children: m })
    }
  );
};
export {
  S as LanguageProvider,
  L as default
};
//# sourceMappingURL=index.es7.js.map
