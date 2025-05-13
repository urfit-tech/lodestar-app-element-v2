import { useToast as c } from "@chakra-ui/react";
import u from "./index.es33.js";
import l from "ajv";
import "./index.es18.js";
import p from "./index.es19.js";
import { useIntl as y } from "react-intl";
import { codeMessages as d } from "./index.es12.js";
import m from "./index.es21.js";
const g = new l(), k = (t, r, o, e, n, a) => ({
  formatCurrency: (s) => {
    const i = n || o || "TWD";
    return i === "LSC" ? `${s} ${e || a || "Coins"}` : s.toLocaleString(t || navigator.language, {
      style: "currency",
      currency: i,
      maximumFractionDigits: r?.minorUnits || 0,
      minimumFractionDigits: 0
    }) || "";
  }
}), f = (t) => {
  const r = {};
  return document.cookie.split(";").forEach(function(o) {
    const [e, n] = o.split("=");
    r[e.trim()] = n;
  }), r[t.trim()] || "";
}, x = (t) => {
  const [r, o] = t.split("_");
  return { type: r.split(/(?=[A-Z])/).join("_").toLowerCase(), target: o };
}, F = () => {
  const { formatMessage: t } = y(), r = c();
  return (e) => {
    try {
      r({
        title: e.responseCode ? `${t(d[e.responseCode])}` : e.title,
        status: e.status || "success",
        duration: e.duration || 1500,
        position: e.position || "top"
      });
    } catch {
      alert(e.responseCode);
    }
  };
}, b = u.load(), _ = async () => {
  const r = await (await b).get(), o = f("fingerPrintId");
  return o.length > 0 ? o : r.visitorId;
}, $ = async () => {
  try {
    const t = await m.get("https://ipapi.co/json/");
    if (t.data?.error)
      throw new Error(t.data.reason);
    return {
      ip: t.data.ip,
      country: t.data.country_name,
      countryCode: t.data.country_code,
      error: null
    };
  } catch (t) {
    return { ip: null, country: null, countryCode: null, error: t };
  }
}, q = (t) => {
  const r = p.decode(t), o = {
    type: "object",
    properties: {
      sub: { type: "string" },
      orgId: { type: "string", nullable: !0 },
      appId: { type: "string" },
      name: { type: "string" },
      username: { type: "string" },
      email: { type: "string" },
      phoneNumber: { type: "string", nullable: !0 },
      role: { type: "string" },
      pictureUrl: { type: "string", nullable: !0 },
      permissions: { type: "array", items: { type: "string" }, default: [] },
      options: { type: "object", nullable: !0 },
      isFinishedSignUpProperty: { type: "boolean", nullable: !0 },
      isBusiness: { type: "boolean", nullable: !0, default: !1 },
      loggedInMembers: { type: "array", items: { type: "object", required: [] }, nullable: !0, default: [] }
    },
    required: []
  }, e = g.compile(o);
  return e(r) ? r : (console.error(`validate error: ${e.errors?.join(`
`)}`), null);
};
export {
  $ as fetchCurrentGeolocation,
  f as getCookie,
  _ as getFingerPrintId,
  x as getResourceByProductId,
  q as parsePayload,
  k as useCurrency,
  F as useToastMessage
};
//# sourceMappingURL=index.es14.js.map
