var x = ({ hex: t, preserve: u, shades: p }) => {
  const M = ((a) => {
    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a) || [];
    try {
      let e = parseInt(r[1], 16), s = parseInt(r[2], 16), n = parseInt(r[3], 16);
      e /= 255, s /= 255, n /= 255;
      const h = Math.max(e, s, n), l = Math.min(e, s, n);
      let y, i = 0, d = (h + l) / 2;
      if (h == l) i = y = 0;
      else {
        const o = h - l;
        switch (y = d > 0.5 ? o / (2 - h - l) : o / (h + l), h) {
          case e:
            i = (s - n) / o + (s < n ? 6 : 0);
            break;
          case s:
            i = (n - e) / o + 2;
            break;
          case n:
            i = (e - s) / o + 4;
        }
        i /= 6;
      }
      const m = { h: 0, s: 0, l: 0 };
      return m.h = Math.round(360 * i), m.s = Math.round(100 * y), m.l = Math.round(100 * d), m;
    } catch {
      return console.log(a), { h: 0, s: 0, l: 0 };
    }
  })(t), c = {}, g = p.reduce((a, { name: r, lightness: e }) => {
    const { h: s, s: n, l: h } = M, l = (({ h: y, s: i, l: d }) => {
      d /= 100;
      const m = i * Math.min(d, 1 - d) / 100, o = (v) => {
        const f = (v + y / 30) % 12, b = d - m * Math.max(Math.min(f - 3, 9 - f, 1), -1);
        return Math.round(255 * b).toString(16).padStart(2, "0");
      };
      return `#${o(0)}${o(8)}${o(4)}`;
    })({ h: s, s: n, l: e });
    return a[r] = l, u && (c[r] = Math.abs(h - e)), a;
  }, {});
  if (u) {
    const [a] = Object.keys(c).sort((r, e) => c[r] - c[e]);
    g[a] = t;
  }
  return g;
}, $ = (t) => {
  typeof t == "string" && (t = { colors: [t] }), typeof t == "object" && Array.isArray(t) && (t = { colors: t }), t = Object.assign({ colors: [], names: ["primary", "secondary", "tertiary", "quaternary", "quinary", "senary", "septenary", "octonary", "nonary", "denary"], preserve: !0, shades: [{ name: "50", lightness: 98 }, { name: "100", lightness: 95 }, { name: "200", lightness: 90 }, { name: "300", lightness: 82 }, { name: "400", lightness: 64 }, { name: "500", lightness: 46 }, { name: "600", lightness: 33 }, { name: "700", lightness: 24 }, { name: "800", lightness: 14 }, { name: "900", lightness: 7 }, { name: "950", lightness: 4 }] }, t);
  const { colors: u, names: p, preserve: M, shades: c } = t;
  return u === void 0 || p === void 0 || M === void 0 || c === void 0 ? {} : u.reduce((g, a, r) => {
    const e = p[r], s = x({ hex: a, preserve: M, shades: c });
    return g[e] = s, g;
  }, {});
};
export {
  $ as default,
  $ as tailwindcssPaletteGenerator
};
//# sourceMappingURL=index.es19.js.map
