var t = [];
const e = {
  calls: t,
  ga: function() {
    for (var s = arguments.length, l = new Array(s), a = 0; a < s; a++)
      l[a] = arguments[a];
    t.push([].concat(l));
  },
  resetCalls: function() {
    t.length = 0;
  }
};
export {
  e as default,
  t as gaCalls
};
//# sourceMappingURL=index.es115.js.map
