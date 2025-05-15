import o from "./index.es296.js";
import a from "./index.es297.js";
import n from "./index.es298.js";
import t from "./index.es299.js";
import { canUseAsyncIteratorSymbol as i } from "./index.es121.js";
function f(r) {
  return !!r.body;
}
function s(r) {
  return !!r.getReader;
}
function m(r) {
  return !!(i && r[Symbol.asyncIterator]);
}
function u(r) {
  return !!r.stream;
}
function b(r) {
  return !!r.arrayBuffer;
}
function d(r) {
  return !!r.pipe;
}
function R(r) {
  var e = r;
  if (f(r) && (e = r.body), m(e))
    return o(e);
  if (s(e))
    return t(e.getReader());
  if (u(e))
    return t(e.stream().getReader());
  if (b(e))
    return n(e.arrayBuffer());
  if (d(e))
    return a(e);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
export {
  R as responseIterator
};
//# sourceMappingURL=index.es216.js.map
