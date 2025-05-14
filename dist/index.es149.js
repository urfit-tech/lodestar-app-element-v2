function s(o) {
  var b, e = o.Symbol;
  if (typeof e == "function")
    if (e.observable)
      b = e.observable;
    else {
      typeof e.for == "function" ? b = e.for("https://github.com/benlesh/symbol-observable") : b = e("https://github.com/benlesh/symbol-observable");
      try {
        e.observable = b;
      } catch {
      }
    }
  else
    b = "@@observable";
  return b;
}
export {
  s as default
};
//# sourceMappingURL=index.es149.js.map
