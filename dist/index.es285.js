import a from "./index.es95.js";
function E(i, f, t) {
  const u = t.config.validateStatus;
  !t.status || !u || u(t.status) ? i(t) : f(new a(
    "Request failed with status code " + t.status,
    [a.ERR_BAD_REQUEST, a.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
export {
  E as default
};
//# sourceMappingURL=index.es285.js.map
