function y(t, n) {
  t = t || 10;
  const c = new Array(t), o = new Array(t);
  let e = 0, r = 0, i;
  return n = n !== void 0 ? n : 1e3, function(h) {
    const d = Date.now(), a = o[r];
    i || (i = d), c[e] = h, o[e] = d;
    let f = r, u = 0;
    for (; f !== e; )
      u += c[f++], f = f % t;
    if (e = (e + 1) % t, e === r && (r = (r + 1) % t), d - i < n)
      return;
    const w = a && d - a;
    return w ? Math.round(u * 1e3 / w) : void 0;
  };
}
export {
  y as default
};
//# sourceMappingURL=index.es230.js.map
