const { hasOwnProperty: t } = Object.prototype, c = Array.from || function(r) {
  const o = [];
  return r.forEach((n) => o.push(n)), o;
};
function s(r) {
  const { unsubscribe: o } = r;
  typeof o == "function" && (r.unsubscribe = void 0, o());
}
export {
  c as arrayFromSet,
  t as hasOwnProperty,
  s as maybeUnsubscribe
};
//# sourceMappingURL=index.es312.js.map
