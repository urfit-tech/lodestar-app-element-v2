import o from "./index.es129.js";
import { includeKeys as N } from "./index.es130.js";
import g from "./index.es131.js";
const j = (r) => r == null, A = (r) => encodeURIComponent(r).replaceAll(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), m = Symbol("encodeFragmentIdentifier");
function O(r) {
  switch (r.arrayFormat) {
    case "index":
      return (e) => (t, n) => {
        const f = t.length;
        return n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [
          ...t,
          [s(e, r), "[", f, "]"].join("")
        ] : [
          ...t,
          [s(e, r), "[", s(f, r), "]=", s(n, r)].join("")
        ];
      };
    case "bracket":
      return (e) => (t, n) => n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [
        ...t,
        [s(e, r), "[]"].join("")
      ] : [
        ...t,
        [s(e, r), "[]=", s(n, r)].join("")
      ];
    case "colon-list-separator":
      return (e) => (t, n) => n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [
        ...t,
        [s(e, r), ":list="].join("")
      ] : [
        ...t,
        [s(e, r), ":list=", s(n, r)].join("")
      ];
    case "comma":
    case "separator":
    case "bracket-separator": {
      const e = r.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (t) => (n, f) => f === void 0 || r.skipNull && f === null || r.skipEmptyString && f === "" ? n : (f = f === null ? "" : f, n.length === 0 ? [[s(t, r), e, s(f, r)].join("")] : [[n, s(f, r)].join(r.arrayFormatSeparator)]);
    }
    default:
      return (e) => (t, n) => n === void 0 || r.skipNull && n === null || r.skipEmptyString && n === "" ? t : n === null ? [
        ...t,
        s(e, r)
      ] : [
        ...t,
        [s(e, r), "=", s(n, r)].join("")
      ];
  }
}
function $(r) {
  let e;
  switch (r.arrayFormat) {
    case "index":
      return (t, n, f) => {
        if (e = /\[(\d*)]$/.exec(t), t = t.replace(/\[\d*]$/, ""), !e) {
          f[t] = n;
          return;
        }
        f[t] === void 0 && (f[t] = {}), f[t][e[1]] = n;
      };
    case "bracket":
      return (t, n, f) => {
        if (e = /(\[])$/.exec(t), t = t.replace(/\[]$/, ""), !e) {
          f[t] = n;
          return;
        }
        if (f[t] === void 0) {
          f[t] = [n];
          return;
        }
        f[t] = [...f[t], n];
      };
    case "colon-list-separator":
      return (t, n, f) => {
        if (e = /(:list)$/.exec(t), t = t.replace(/:list$/, ""), !e) {
          f[t] = n;
          return;
        }
        if (f[t] === void 0) {
          f[t] = [n];
          return;
        }
        f[t] = [...f[t], n];
      };
    case "comma":
    case "separator":
      return (t, n, f) => {
        const i = typeof n == "string" && n.includes(r.arrayFormatSeparator), a = typeof n == "string" && !i && d(n, r).includes(r.arrayFormatSeparator);
        n = a ? d(n, r) : n;
        const c = i || a ? n.split(r.arrayFormatSeparator).map((u) => d(u, r)) : n === null ? n : d(n, r);
        f[t] = c;
      };
    case "bracket-separator":
      return (t, n, f) => {
        const i = /(\[])$/.test(t);
        if (t = t.replace(/\[]$/, ""), !i) {
          f[t] = n && d(n, r);
          return;
        }
        const a = n === null ? [] : d(n, r).split(r.arrayFormatSeparator);
        if (f[t] === void 0) {
          f[t] = a;
          return;
        }
        f[t] = [...f[t], ...a];
      };
    default:
      return (t, n, f) => {
        if (f[t] === void 0) {
          f[t] = n;
          return;
        }
        f[t] = [...[f[t]].flat(), n];
      };
  }
}
function y(r) {
  if (typeof r != "string" || r.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function s(r, e) {
  return e.encode ? e.strict ? A(r) : encodeURIComponent(r) : r;
}
function d(r, e) {
  return e.decode ? o(r) : r;
}
function F(r) {
  return Array.isArray(r) ? r.sort() : typeof r == "object" ? F(Object.keys(r)).sort((e, t) => Number(e) - Number(t)).map((e) => r[e]) : r;
}
function b(r) {
  const e = r.indexOf("#");
  return e !== -1 && (r = r.slice(0, e)), r;
}
function x(r) {
  let e = "";
  const t = r.indexOf("#");
  return t !== -1 && (e = r.slice(t)), e;
}
function l(r, e, t) {
  return t === "string" && typeof r == "string" ? r : typeof t == "function" && typeof r == "string" ? t(r) : e.parseBooleans && r !== null && (r.toLowerCase() === "true" || r.toLowerCase() === "false") ? r.toLowerCase() === "true" : t === "number" && !Number.isNaN(Number(r)) && typeof r == "string" && r.trim() !== "" || e.parseNumbers && !Number.isNaN(Number(r)) && typeof r == "string" && r.trim() !== "" ? Number(r) : r;
}
function h(r) {
  r = b(r);
  const e = r.indexOf("?");
  return e === -1 ? "" : r.slice(e + 1);
}
function S(r, e) {
  e = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    types: /* @__PURE__ */ Object.create(null),
    ...e
  }, y(e.arrayFormatSeparator);
  const t = $(e), n = /* @__PURE__ */ Object.create(null);
  if (typeof r != "string" || (r = r.trim().replace(/^[?#&]/, ""), !r))
    return n;
  for (const f of r.split("&")) {
    if (f === "")
      continue;
    const i = e.decode ? f.replaceAll("+", " ") : f;
    let [a, c] = g(i, "=");
    a === void 0 && (a = i), c = c === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat) ? c : d(c, e), t(d(a, e), c, n);
  }
  for (const [f, i] of Object.entries(n))
    if (typeof i == "object" && i !== null && e.types[f] !== "string")
      for (const [a, c] of Object.entries(i)) {
        const u = e.types[f] ? e.types[f].replace("[]", "") : void 0;
        i[a] = l(c, e, u);
      }
    else typeof i == "object" && i !== null && e.types[f] === "string" ? n[f] = Object.values(i).join(e.arrayFormatSeparator) : n[f] = l(i, e, e.types[f]);
  return e.sort === !1 ? n : (e.sort === !0 ? Object.keys(n).sort() : Object.keys(n).sort(e.sort)).reduce((f, i) => {
    const a = n[i];
    return f[i] = a && typeof a == "object" && !Array.isArray(a) ? F(a) : a, f;
  }, /* @__PURE__ */ Object.create(null));
}
function I(r, e) {
  if (!r)
    return "";
  e = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...e
  }, y(e.arrayFormatSeparator);
  const t = (a) => e.skipNull && j(r[a]) || e.skipEmptyString && r[a] === "", n = O(e), f = {};
  for (const [a, c] of Object.entries(r))
    t(a) || (f[a] = c);
  const i = Object.keys(f);
  return e.sort !== !1 && i.sort(e.sort), i.map((a) => {
    const c = r[a];
    return c === void 0 ? "" : c === null ? s(a, e) : Array.isArray(c) ? c.length === 0 && e.arrayFormat === "bracket-separator" ? s(a, e) + "[]" : c.reduce(n(a), []).join("&") : s(a, e) + "=" + s(c, e);
  }).filter((a) => a.length > 0).join("&");
}
function E(r, e) {
  e = {
    decode: !0,
    ...e
  };
  let [t, n] = g(r, "#");
  return t === void 0 && (t = r), {
    url: t?.split("?")?.[0] ?? "",
    query: S(h(r), e),
    ...e && e.parseFragmentIdentifier && n ? { fragmentIdentifier: d(n, e) } : {}
  };
}
function U(r, e) {
  e = {
    encode: !0,
    strict: !0,
    [m]: !0,
    ...e
  };
  const t = b(r.url).split("?")[0] || "", n = h(r.url), f = {
    ...S(n, { sort: !1 }),
    ...r.query
  };
  let i = I(f, e);
  i && (i = `?${i}`);
  let a = x(r.url);
  if (typeof r.fragmentIdentifier == "string") {
    const c = new URL(t);
    c.hash = r.fragmentIdentifier, a = e[m] ? c.hash : `#${r.fragmentIdentifier}`;
  }
  return `${t}${i}${a}`;
}
function w(r, e, t) {
  t = {
    parseFragmentIdentifier: !0,
    [m]: !1,
    ...t
  };
  const { url: n, query: f, fragmentIdentifier: i } = E(r, t);
  return U({
    url: n,
    query: N(f, e),
    fragmentIdentifier: i
  }, t);
}
function q(r, e, t) {
  const n = Array.isArray(e) ? (f) => !e.includes(f) : (f, i) => !e(f, i);
  return w(r, n, t);
}
export {
  q as exclude,
  h as extract,
  S as parse,
  E as parseUrl,
  w as pick,
  I as stringify,
  U as stringifyUrl
};
//# sourceMappingURL=index.es32.js.map
