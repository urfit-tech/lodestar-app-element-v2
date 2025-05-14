var n, o;
function f() {
  if (o) return n;
  o = 1;
  const s = /^[0-9]+$/, c = (e, r) => {
    const i = s.test(e), t = s.test(r);
    return i && t && (e = +e, r = +r), e === r ? 0 : i && !t ? -1 : t && !i ? 1 : e < r ? -1 : 1;
  };
  return n = {
    compareIdentifiers: c,
    rcompareIdentifiers: (e, r) => c(r, e)
  }, n;
}
export {
  f as __require
};
//# sourceMappingURL=index.es197.js.map
