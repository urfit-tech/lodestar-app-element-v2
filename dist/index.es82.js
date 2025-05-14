import a from "./index.es71.js";
function e(t, i, o, E, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", i && (this.code = i), o && (this.config = o), E && (this.request = E), r && (this.response = r, this.status = r.status ? r.status : null);
}
a.inherits(e, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const R = e.prototype, u = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  u[t] = { value: t };
});
Object.defineProperties(e, u);
Object.defineProperty(R, "isAxiosError", { value: !0 });
e.from = (t, i, o, E, r, c) => {
  const s = Object.create(R);
  return a.toFlatObject(t, s, function(h) {
    return h !== Error.prototype;
  }, (n) => n !== "isAxiosError"), e.call(s, t.message, i, o, E, r), s.cause = t, s.name = t.name, c && Object.assign(s, c), s;
};
export {
  e as default
};
//# sourceMappingURL=index.es82.js.map
