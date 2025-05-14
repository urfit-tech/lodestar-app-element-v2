import "./index.es18.js";
import p from "./index.es22.js";
import c from "./index.es31.js";
import f from "query-string";
import { css as h } from "styled-components";
import { BREAK_POINT as S } from "./index.es2.js";
import { LoginDeviceError as g, BindDeviceError as b, NoMemberError as N, PasswordError as $, SendEmailError as O, NoModuleError as M, SessionError as _, InputError as C } from "./index.es10.js";
import u from "./index.es21.js";
const P = (e) => {
  if (e >= 3600) {
    const t = e % 3600;
    return "HOURS:MINUTES:SECONDS".replace("HOURS", `${Math.floor(e / 3600)}`.padStart(2, "0")).replace("MINUTES", `${Math.floor(t / 60)}`.padStart(2, "0")).replace("SECONDS", `${Math.floor(t % 60)}`.padStart(2, "0"));
  } else
    return "MINUTES:SECONDS".replace("MINUTES", `${Math.floor(e / 60)}`.padStart(2, "0")).replace("SECONDS", `${Math.floor(e % 60)}`.padStart(2, "0"));
}, j = (e) => typeof e == "number" && `約 ${(e / 60).toFixed(0)} 分鐘`, L = async (e, t, r, n, o) => await u.post(
  `${n}/sys/sign-url`,
  {
    operation: "putObject",
    params: {
      Key: e,
      ContentType: t.type
    }
  },
  {
    headers: { authorization: `Bearer ${r}` }
  }
).then((a) => a.data.result).then((a) => {
  const { query: i } = f.parseUrl(a);
  return u.put(a, t, {
    ...o,
    headers: {
      ...i,
      "Content-Type": t.type
    }
  });
}), R = (e) => e.response && e.response.data ? alert(e.response.data.message) : alert(e.message), z = (e) => e != null, H = (e, t) => {
  const r = (e || "#2d313a").replace("#", ""), n = parseInt(r.slice(0, 2), 16), o = parseInt(r.slice(2, 4), 16), a = parseInt(r.slice(4, 6), 16);
  return `rgba(${n}, ${o}, ${a}, ${t})`;
}, v = (e, t) => p(e).format(t || "YYYY/MM/DD HH:mm"), E = (e) => (e.soldAt && p() < p(e.soldAt) ? e.salePrice : e.listPrice) || 0, Y = (e) => e.filter((t) => t.publishedAt !== null).reduce(
  (t, r) => t === null || E(r) < E(t) ? r : t,
  null
), Z = (e) => h`
  @media (min-width: ${S}px) {
    ${e}
  }
`, m = {
  phone: /^((?:\+|00)[17](?: |-)?|(?:\+|00)[1-9]\d{0,2}(?: |-)?|(?:\+|00)1-\d{3}(?: |-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneBarCode: /^\/{1}[0-9A-Z+-.]{7}$/,
  citizenCode: /^[A-Z]{2}[0-9]{14}$/
}, V = (e) => {
  const t = [];
  return e.name.length === 0 && t.push("name"), (e.phone.length === 0 || !m.phone?.test(e.phone)) && t.push("phone"), (e.email.length === 0 || !m.email?.test(e.email)) && t.push("email"), t;
}, q = (e) => e.split("/").filter((r) => r !== "").join("_") || "_", K = (e) => !(e || "").replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi, "").replace(/(<([^>]+)>)/gi, "").trim();
function I(e, t, r) {
  const n = Math.min(e.length, t.length), o = [];
  for (let a = 0; a < n; a++) o[a] = r(e[a], t[a]);
  return o;
}
function k(e, t) {
  return e + t;
}
function y(e, t) {
  return e * t;
}
const W = (e, t = {}) => {
  const { applyOldRules: r = !1 } = t;
  if (typeof e != "string" && typeof e != "number") return !1;
  const n = [1, 2, 1, 2, 1, 2, 4, 1], o = e.toString();
  if (!/^\d{8}$/.test(o)) return !1;
  const i = 10, l = I(
    n,
    o.split("").map((s) => parseInt(s, i)),
    y
  ).map((s) => s % 10 + Math.floor(s / 10)).reduce(k, 0), d = r ? 10 : 5;
  return l % d === 0 || parseInt(o.charAt(6), i) === 7 && (l + 1) % d === 0;
}, G = (e, t, r) => {
  let n;
  switch (e) {
    case "E_INPUT":
      n = new C(t, r);
      break;
    case "E_SESSION":
      n = new _(t, r);
      break;
    case "E_NO_MODULE":
      n = new M(t, r);
      break;
    case "E_SEND_EMAIL":
      n = new O(t, r);
      break;
    case "E_PASSWORD":
      n = new $(t, r);
      break;
    case "E_NO_MEMBER":
      n = new N(t, r);
      break;
    case "E_BIND_DEVICE":
      n = new b(t, r);
      break;
    case "E_LOGIN_DEVICE":
      n = new g(t, r);
      break;
    default:
      n = new Error(t);
  }
  return n;
}, J = () => {
  const e = c.get("_fbc"), t = c.get("_fbp"), r = c.get("__eruid");
  let n = c.get("utm");
  n = n ? JSON.parse(n) : null;
  const o = {};
  return n && Object.assign(o, { utm: n }), r && Object.assign(o, { dmpId: r }), e && Object.assign(o, { fbc: e }), t && Object.assign(o, { fbp: t }), o;
}, Q = (e, t, r) => {
  if (e != null)
    return t === "LSC" ? `${e} ${r || t}` : `NT$ ${e}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export {
  k as add,
  W as checkUniformNumber,
  q as convertPathName,
  Q as currencyFormatter,
  v as dateFormatter,
  Z as desktopViewMixin,
  j as durationFormatter,
  P as durationFullFormatter,
  Y as findCheapestPlan,
  G as getBackendServerError,
  E as getCurrentPrice,
  J as getTrackingCookie,
  R as handleError,
  K as isHTMLString,
  y as multiply,
  z as notEmpty,
  H as rgba,
  L as uploadFile,
  V as validateContactInfo,
  m as validationRegExp,
  I as zipWith
};
//# sourceMappingURL=index.es11.js.map
