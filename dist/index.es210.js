import B from "./index.es206.js";
import r from "./index.es123.js";
import l from "./index.es134.js";
import H from "./index.es244.js";
import { trackStream as L } from "./index.es245.js";
import K from "./index.es137.js";
import { progressEventDecorator as P, progressEventReducer as A, asyncDecorator as O } from "./index.es242.js";
import z from "./index.es243.js";
import j from "./index.es240.js";
const w = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", D = w && typeof ReadableStream == "function", I = w && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), F = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, J = D && F(() => {
  let e = !1;
  const t = new Request(B.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), _ = 64 * 1024, T = D && F(() => r.isReadableStream(new Response("").body)), g = {
  stream: T && ((e) => e.body)
};
w && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !g[t] && (g[t] = r.isFunction(e[t]) ? (s) => s[t]() : (s, u) => {
      throw new l(`Response type '${t}' is not supported`, l.ERR_NOT_SUPPORT, u);
    });
  });
})(new Response());
const V = async (e) => {
  if (e == null)
    return 0;
  if (r.isBlob(e))
    return e.size;
  if (r.isSpecCompliantForm(e))
    return (await new Request(B.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (r.isArrayBufferView(e) || r.isArrayBuffer(e))
    return e.byteLength;
  if (r.isURLSearchParams(e) && (e = e + ""), r.isString(e))
    return (await I(e)).byteLength;
}, W = async (e, t) => {
  const s = r.toFiniteNumber(e.getContentLength());
  return s ?? V(t);
}, re = w && (async (e) => {
  let {
    url: t,
    method: s,
    data: u,
    signal: N,
    cancelToken: x,
    timeout: U,
    onDownloadProgress: R,
    onUploadProgress: b,
    responseType: n,
    headers: y,
    withCredentials: m = "same-origin",
    fetchOptions: v
  } = z(e);
  n = n ? (n + "").toLowerCase() : "text";
  let d = H([N, x && x.toAbortSignal()], U), f;
  const c = d && d.unsubscribe && (() => {
    d.unsubscribe();
  });
  let E;
  try {
    if (b && J && s !== "get" && s !== "head" && (E = await W(y, u)) !== 0) {
      let i = new Request(t, {
        method: "POST",
        body: u,
        duplex: "half"
      }), p;
      if (r.isFormData(u) && (p = i.headers.get("content-type")) && y.setContentType(p), i.body) {
        const [S, h] = P(
          E,
          A(O(b))
        );
        u = L(i.body, _, S, h);
      }
    }
    r.isString(m) || (m = m ? "include" : "omit");
    const o = "credentials" in Request.prototype;
    f = new Request(t, {
      ...v,
      signal: d,
      method: s.toUpperCase(),
      headers: y.normalize().toJSON(),
      body: u,
      duplex: "half",
      credentials: o ? m : void 0
    });
    let a = await fetch(f);
    const C = T && (n === "stream" || n === "response");
    if (T && (R || C && c)) {
      const i = {};
      ["status", "statusText", "headers"].forEach((q) => {
        i[q] = a[q];
      });
      const p = r.toFiniteNumber(a.headers.get("content-length")), [S, h] = R && P(
        p,
        A(O(R), !0)
      ) || [];
      a = new Response(
        L(a.body, _, S, () => {
          h && h(), c && c();
        }),
        i
      );
    }
    n = n || "text";
    let k = await g[r.findKey(g, n) || "text"](a, e);
    return !C && c && c(), await new Promise((i, p) => {
      j(i, p, {
        data: k,
        headers: K.from(a.headers),
        status: a.status,
        statusText: a.statusText,
        config: e,
        request: f
      });
    });
  } catch (o) {
    throw c && c(), o && o.name === "TypeError" && /fetch/i.test(o.message) ? Object.assign(
      new l("Network Error", l.ERR_NETWORK, e, f),
      {
        cause: o.cause || o
      }
    ) : l.from(o, o && o.code, e, f);
  }
});
export {
  re as default
};
//# sourceMappingURL=index.es210.js.map
