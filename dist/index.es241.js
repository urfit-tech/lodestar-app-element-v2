import { getOperationName as a } from "./index.es36.js";
function t(r) {
  var e = {
    variables: r.variables || {},
    extensions: r.extensions || {},
    operationName: r.operationName,
    query: r.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? a(e.query) || void 0 : ""), e;
}
export {
  t as transformOperation
};
//# sourceMappingURL=index.es241.js.map
