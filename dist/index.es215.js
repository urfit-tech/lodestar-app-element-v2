var e, r;
function u() {
  return r || (r = 1, e = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...s) => console.error("SEMVER", ...s) : () => {
  }), e;
}
export {
  u as __require
};
//# sourceMappingURL=index.es215.js.map
