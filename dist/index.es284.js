const e = typeof window < "u" && typeof document < "u", o = typeof navigator == "object" && navigator || void 0, n = e && (!o || ["ReactNative", "NativeScript", "NS"].indexOf(o.product) < 0), t = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", r = e && window.location.href || "http://localhost";
export {
  e as hasBrowserEnv,
  n as hasStandardBrowserEnv,
  t as hasStandardBrowserWebWorkerEnv,
  o as navigator,
  r as origin
};
//# sourceMappingURL=index.es284.js.map
