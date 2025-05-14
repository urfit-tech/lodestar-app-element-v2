import a from "./index.es71.js";
import h from "./index.es126.js";
import m from "./index.es127.js";
import u from "./index.es128.js";
import d from "./index.es82.js";
const s = {
  http: h,
  xhr: m,
  fetch: u
};
a.forEach(s, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const c = (e) => `- ${e}`, b = (e) => a.isFunction(e) || e === null || e === !1, y = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: n } = e;
    let o, r;
    const p = {};
    for (let t = 0; t < n; t++) {
      o = e[t];
      let i;
      if (r = o, !b(o) && (r = s[(i = String(o)).toLowerCase()], r === void 0))
        throw new d(`Unknown adapter '${i}'`);
      if (r)
        break;
      p[i || "#" + t] = r;
    }
    if (!r) {
      const t = Object.entries(p).map(
        ([f, l]) => `adapter ${f} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = n ? t.length > 1 ? `since :
` + t.map(c).join(`
`) : " " + c(t[0]) : "as no adapter specified";
      throw new d(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: s
};
export {
  y as default
};
//# sourceMappingURL=index.es86.js.map
