import f from "./index.es113.js";
import d from "./index.es227.js";
function l(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function m(e, c, i) {
  if (!c)
    return e;
  const t = i && i.encode || l;
  f.isFunction(i) && (i = {
    serialize: i
  });
  const n = i && i.serialize;
  let r;
  if (n ? r = n(c, i) : r = f.isURLSearchParams(c) ? c.toString() : new d(c, i).toString(t), r) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
export {
  m as default
};
//# sourceMappingURL=index.es170.js.map
