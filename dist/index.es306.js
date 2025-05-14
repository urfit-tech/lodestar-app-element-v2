import r from "./index.es123.js";
import c from "./index.es206.js";
const p = c.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, i, s, u) {
      const o = [e + "=" + encodeURIComponent(t)];
      r.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), r.isString(i) && o.push("path=" + i), r.isString(s) && o.push("domain=" + s), u === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
export {
  p as default
};
//# sourceMappingURL=index.es306.js.map
