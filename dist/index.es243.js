import o from "./index.es141.js";
const n = o.hasStandardBrowserEnv ? /* @__PURE__ */ ((r, e) => (t) => (t = new URL(t, o.origin), r.protocol === t.protocol && r.host === t.host && (e || r.port === t.port)))(
  new URL(o.origin),
  o.navigator && /(msie|trident)/i.test(o.navigator.userAgent)
) : () => !0;
export {
  n as default
};
//# sourceMappingURL=index.es243.js.map
