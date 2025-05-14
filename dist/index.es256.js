import { __awaiter as P, __generator as L, __assign as d } from "./index.es63.js";
import { responseIterator as T } from "./index.es257.js";
import { PROTOCOL_ERRORS_SYMBOL as B } from "./index.es67.js";
import { isApolloPayloadResult as D } from "./index.es141.js";
import { throwServerError as k } from "./index.es258.js";
var N = Object.prototype.hasOwnProperty;
function F(r, t) {
  return P(this, void 0, void 0, function() {
    var i, e, o, f, c, a, _, h, y, p, R, S, j, u, l, v, A, m, O, n, s, g, x, w;
    return L(this, function(b) {
      switch (b.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          i = new TextDecoder("utf-8"), e = (w = r.headers) === null || w === void 0 ? void 0 : w.get("content-type"), o = "boundary=", f = e?.includes(o) ? e?.substring(e?.indexOf(o) + o.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", c = `\r
--`.concat(f), a = "", _ = T(r), h = !0, b.label = 1;
        case 1:
          return h ? [4, _.next()] : [3, 3];
        case 2:
          for (y = b.sent(), p = y.value, R = y.done, S = typeof p == "string" ? p : i.decode(p), j = a.length - c.length + 1, h = !R, a += S, u = a.indexOf(c, j); u > -1; ) {
            if (l = void 0, g = [
              a.slice(0, u),
              a.slice(u + c.length)
            ], l = g[0], a = g[1], v = l.indexOf(`\r
\r
`), A = E(l.slice(0, v)), m = A["content-type"], m && m.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (O = l.slice(v), O) {
              if (n = C(r, O), Object.keys(n).length > 1 || "data" in n || "incremental" in n || "errors" in n || "payload" in n)
                if (D(n)) {
                  if (s = {}, "payload" in n) {
                    if (Object.keys(n).length === 1 && n.payload === null)
                      return [
                        2
                        /*return*/
                      ];
                    s = d({}, n.payload);
                  }
                  "errors" in n && (s = d(d({}, s), { extensions: d(d({}, "extensions" in s ? s.extensions : null), (x = {}, x[B] = n.errors, x)) })), t(s);
                } else
                  t(n);
              else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(n).length === 1 && "hasNext" in n && !n.hasNext
              )
                return [
                  2
                  /*return*/
                ];
            }
            u = a.indexOf(c);
          }
          return [3, 1];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function E(r) {
  var t = {};
  return r.split(`
`).forEach(function(i) {
    var e = i.indexOf(":");
    if (e > -1) {
      var o = i.slice(0, e).trim().toLowerCase(), f = i.slice(e + 1).trim();
      t[o] = f;
    }
  }), t;
}
function C(r, t) {
  if (r.status >= 300) {
    var i = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    k(r, i(), "Response not successful: Received status code ".concat(r.status));
  }
  try {
    return JSON.parse(t);
  } catch (o) {
    var e = o;
    throw e.name = "ServerParseError", e.response = r, e.statusCode = r.status, e.bodyText = t, e;
  }
}
function U(r, t) {
  r.result && r.result.errors && r.result.data && t.next(r.result), t.error(r);
}
function Y(r) {
  return function(t) {
    return t.text().then(function(i) {
      return C(t, i);
    }).then(function(i) {
      return !Array.isArray(i) && !N.call(i, "data") && !N.call(i, "errors") && k(t, i, "Server response was missing for query '".concat(Array.isArray(r) ? r.map(function(e) {
        return e.operationName;
      }) : r.operationName, "'.")), i;
    });
  };
}
export {
  U as handleError,
  Y as parseAndCheckHttpResponse,
  E as parseHeaders,
  C as parseJsonBody,
  F as readMultipartBody
};
//# sourceMappingURL=index.es256.js.map
