function h(r, a) {
  let s = 0, u = 1e3 / a, e, t;
  const n = (l, o = Date.now()) => {
    s = o, e = null, t && (clearTimeout(t), t = null), r.apply(null, l);
  };
  return [(...l) => {
    const o = Date.now(), i = o - s;
    i >= u ? n(l, o) : (e = l, t || (t = setTimeout(() => {
      t = null, n(e);
    }, u - i)));
  }, () => e && n(e)];
}
export {
  h as default
};
//# sourceMappingURL=index.es315.js.map
