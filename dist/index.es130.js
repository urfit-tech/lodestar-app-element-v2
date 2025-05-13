function f(r, n) {
  const o = {};
  if (Array.isArray(n))
    for (const e of n) {
      const t = Object.getOwnPropertyDescriptor(r, e);
      t?.enumerable && Object.defineProperty(o, e, t);
    }
  else
    for (const e of Reflect.ownKeys(r)) {
      const t = Object.getOwnPropertyDescriptor(r, e);
      if (t.enumerable) {
        const s = r[e];
        n(e, s, r) && Object.defineProperty(o, e, t);
      }
    }
  return o;
}
export {
  f as includeKeys
};
//# sourceMappingURL=index.es130.js.map
