var l = !1;
function u(e) {
  if (!l) {
    l = !0;
    var s = "https://www.google-analytics.com/analytics.js";
    e && e.gaAddress ? s = e.gaAddress : e && e.debug && (s = "https://www.google-analytics.com/analytics_debug.js");
    var g = e && e.onerror;
    (function(a, c, d, o, r, t, n) {
      a.GoogleAnalyticsObject = r, a[r] = a[r] || function() {
        (a[r].q = a[r].q || []).push(arguments);
      }, a[r].l = 1 * /* @__PURE__ */ new Date(), t = c.createElement(d), n = c.getElementsByTagName(d)[0], t.async = 1, t.src = o, t.onerror = g, n.parentNode.insertBefore(t, n);
    })(window, document, "script", s, "ga");
  }
}
export {
  u as default
};
//# sourceMappingURL=index.es167.js.map
