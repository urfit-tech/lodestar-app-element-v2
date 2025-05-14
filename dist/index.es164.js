var e;
(function(l) {
  l[l.loading = 1] = "loading", l[l.setVariables = 2] = "setVariables", l[l.fetchMore = 3] = "fetchMore", l[l.refetch = 4] = "refetch", l[l.poll = 6] = "poll", l[l.ready = 7] = "ready", l[l.error = 8] = "error";
})(e || (e = {}));
function i(l) {
  return l ? l < 7 : !1;
}
export {
  e as NetworkStatus,
  i as isNetworkRequestInFlight
};
//# sourceMappingURL=index.es164.js.map
