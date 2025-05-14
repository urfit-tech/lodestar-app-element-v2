import { serializeFetchParameter as u } from "./index.es259.js";
function q(e, r) {
  var o = [], t = function(a, c) {
    o.push("".concat(a, "=").concat(encodeURIComponent(c)));
  };
  if ("query" in r && t("query", r.query), r.operationName && t("operationName", r.operationName), r.variables) {
    var s = void 0;
    try {
      s = u(r.variables, "Variables map");
    } catch (a) {
      return { parseError: a };
    }
    t("variables", s);
  }
  if (r.extensions) {
    var m = void 0;
    try {
      m = u(r.extensions, "Extensions map");
    } catch (a) {
      return { parseError: a };
    }
    t("extensions", m);
  }
  var p = "", n = e, i = e.indexOf("#");
  i !== -1 && (p = e.substr(i), n = e.substr(0, i));
  var f = n.indexOf("?") === -1 ? "?" : "&", v = n + f + o.join("&") + p;
  return { newURI: v };
}
export {
  q as rewriteURIForGET
};
//# sourceMappingURL=index.es264.js.map
