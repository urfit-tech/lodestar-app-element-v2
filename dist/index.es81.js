let t;
const e = new Uint8Array(16);
function o() {
  if (!t) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    t = crypto.getRandomValues.bind(crypto);
  }
  return t(e);
}
export {
  o as default
};
//# sourceMappingURL=index.es81.js.map
