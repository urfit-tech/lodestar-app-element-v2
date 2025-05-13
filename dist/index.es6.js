import { j as N } from "./index.es15.js";
import "./index.es18.js";
import B from "./index.es19.js";
import O from "libphonenumber-js";
import { createContext as U, useContext as R, useState as w, useMemo as $, useEffect as v, useCallback as L } from "react";
import k from "./index.es20.js";
import { getBackendServerError as E } from "./index.es11.js";
import { parsePayload as f, getFingerPrintId as T, fetchCurrentGeolocation as S } from "./index.es14.js";
import a from "./index.es21.js";
const P = {
  isAuthenticating: !window.AUTH_TOKEN,
  isAuthenticated: !1,
  currentUserRole: "anonymous",
  currentMemberId: null,
  authToken: null,
  currentMember: null,
  permissions: {},
  isFinishedSignUpProperty: !0
}, M = () => {
  typeof window < "u" && (window.lodestar = window.lodestar || {});
}, g = U(P), F = () => R(g), V = ({ appId: d, children: C }) => {
  const [I, b] = w(P.isAuthenticating), [l, i] = w(window.AUTH_TOKEN || null), n = $(() => l ? f(l) : null, [l]);
  v(() => {
    if (n)
      try {
        const e = n?.phoneNumber ? O(n.phoneNumber, "TW") : null, t = window;
        t.insider_object = {
          user: {
            gdpr_optin: !0,
            sms_optin: !0,
            email: n.email,
            phone_number: e?.isValid() ? e.number : n.phoneNumber,
            email_optin: !0
          }
        }, k.set({ userId: n.sub });
      } catch (e) {
        process.env.NODE_ENV === "development" && console.error(e);
      }
  }, [n, window]);
  const y = L(async () => {
    const e = await T(), { ip: t, country: s, countryCode: r } = await S(), {
      data: { code: o, result: c }
    } = await a.post(
      `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/refresh-token`,
      { appId: d, fingerPrintId: e, geoLocation: { ip: t, country: s, countryCode: r } },
      {
        method: "POST",
        withCredentials: !0
      }
    );
    o === "SUCCESS" ? i(c.authToken) : o === "E_NO_DEVICE" ? (i(null), alert("您已被登出，目前有其他裝置登入這組帳號")) : i(null), b(!1);
  }, [d]), p = n && {
    id: n.sub,
    name: n.name,
    username: n.username,
    email: n.email,
    pictureUrl: n.pictureUrl || null,
    role: n.role,
    options: n.options || {}
  };
  return M(), typeof window < "u" && (window.lodestar.getCurrentMember = () => p, window.lodestar.getDataLayerByEvent = (e) => window.dataLayer.find((t) => t.event === e)), /* @__PURE__ */ N.jsx(
    g.Provider,
    {
      value: {
        isAuthenticating: I,
        isAuthenticated: !!l,
        currentUserRole: n?.role || "anonymous",
        currentMemberId: n?.sub || null,
        authToken: l,
        updateAuthToken: (e) => i(e),
        isFinishedSignUpProperty: !!n?.isFinishedSignUpProperty,
        currentMember: p,
        permissions: n?.permissions?.reduce((e, t) => (e[t] = !0, e), {}) || {},
        refreshToken: y,
        register: async (e) => a.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/register`,
          {
            appId: e.appId || d,
            username: e.username,
            email: e.email,
            password: e.password,
            isBusiness: e.isBusiness ?? !1
          },
          { withCredentials: !0 }
        ).then(({ data: { code: t, message: s, result: r } }) => {
          if (t === "SUCCESS") {
            e.withoutLogin || i(r.authToken);
            try {
              const o = B.decode(r.authToken)?.sub, c = sessionStorage.getItem("phone");
              c && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT && a.post(
                process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT,
                {
                  query: `
                        mutation INSERT_MEMBER_PHONE_ONE($currentMemberId: String!, $phone: String!) {
                          insert_member_phone_one(object: { member_id: $currentMemberId, phone: $phone }) {
                            id
                          }
                        }
                    `,
                  variables: {
                    currentMemberId: o,
                    phone: c
                  }
                },
                { headers: { Authorization: `Bearer ${r.authToken}` } }
              );
              const u = JSON.parse(sessionStorage.getItem("categoryIds") || "[]"), _ = JSON.parse(
                sessionStorage.getItem("memberProperties") || "[]"
              );
              u.length && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT && a.post(
                process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT,
                {
                  query: `
                        mutation INSERT_MEMBER_CATEGORIES($memberProperties: [member_property_insert_input!]!, $data: [member_category_insert_input!]!) {
                          insert_member_property(objects: $memberProperties) {
                            affected_rows
                          }
                          insert_member_category(objects: $data) {
                            affected_rows
                          }
                        }
                      `,
                  variables: {
                    memberProperties: _.map((m) => ({
                      member_id: o,
                      property_id: m.propertyId,
                      value: m.value
                    })),
                    data: u.map((m, A) => ({
                      member_id: o,
                      category_id: m,
                      position: A
                    }))
                  }
                },
                { headers: { Authorization: `Bearer ${r.authToken}` } }
              );
              const h = sessionStorage.getItem("star");
              return h && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT && a.post(
                process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT,
                {
                  query: `
                        mutation SET_MEMBER_STAR($memberId: String!, $star: numeric!) {
                          update_member(where: {id: {_eq: $memberId}}, _set: {star: $star}) {
                            affected_rows
                          }
                        }                      
                      `,
                  variables: {
                    memberId: o,
                    star: parseInt(h)
                  }
                },
                { headers: { Authorization: `Bearer ${r.authToken}` } }
              ), r.authToken;
            } catch {
            }
          } else
            throw i(null), new Error(t);
        }),
        login: async ({ account: e, password: t, accountLinkToken: s }) => {
          const r = await T(), { ip: o, country: c, countryCode: u } = await S(), {
            data: { code: _, message: h, result: m }
          } = await a.post(
            `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/general-login`,
            { appId: d, account: e, password: t, fingerPrintId: r, geoLocation: { ip: o, country: c, countryCode: u } },
            { withCredentials: !0 }
          );
          if (_ === "SUCCESS")
            i(m.authToken), s && m.authToken && window.location.assign(`/line-binding?accountLinkToken=${s}`);
          else if (_ === "I_RESET_PASSWORD")
            window.location.assign(`/check-email?email=${e}&type=reset-password`);
          else
            throw i(null), E(_, h, m);
          return { code: _ };
        },
        socialLogin: async ({ provider: e, providerToken: t, accountLinkToken: s, isForceLogin: r }) => a.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/social-login`,
          {
            appId: d,
            provider: e,
            providerToken: t,
            isForceLogin: r
          },
          { withCredentials: !0 }
        ).then(async ({ data: { code: o, message: c, result: u } }) => {
          if (o === "SUCCESS") {
            if (i(u.authToken), !f(u.authToken))
              throw new Error("no auth token");
            s && u.authToken && window.location.assign(`/line-binding?accountLinkToken=${s}`);
          } else
            throw i(null), E(o, c, u);
        }),
        switchMember: async ({ memberId: e }) => a.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/switch-member`,
          {
            memberId: e
          },
          { withCredentials: !0, headers: { Authorization: "Bearer " + l } }
        ).then(({ data: { code: t, _: s, result: r } }) => {
          if (t === "SUCCESS")
            i(r.authToken);
          else
            throw new Error(t);
        }),
        logout: async () => {
          localStorage.clear(), typeof window < "u" && window.location.assign(
            `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/logout?redirect=${window.location.href}`
          );
        },
        sendSmsCode: async ({ phoneNumber: e }) => a.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/sms/send-code`,
          {
            appId: d,
            phoneNumber: e
          },
          { withCredentials: !0 }
        ).then(({ data: { code: t } }) => {
          if (t !== "SUCCESS")
            throw new Error(t);
        }),
        verifySmsCode: async ({ phoneNumber: e, code: t }) => a.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/sms/verify-code`,
          {
            appId: d,
            phoneNumber: e,
            code: t
          },
          { withCredentials: !0 }
        ).then(({ data: { code: s, _: r, result: o } }) => {
          if (s !== "SUCCESS" || !o?.codeValid)
            throw new Error(s);
        }),
        forceLogin: async ({ account: e, password: t, accountLinkToken: s }) => a.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/force-login`,
          { appId: d, account: e, password: t },
          { withCredentials: !0 }
        ).then(({ data: { code: r, result: o } }) => {
          if (r === "SUCCESS")
            i(o.authToken), s && o.authToken && typeof window < "u" && window.location.assign(`/line-binding?accountLinkToken=${s}`);
          else if (r === "I_RESET_PASSWORD" && typeof window < "u")
            window.location.assign(`/check-email?email=${e}&type=reset-password`);
          else
            throw i(null), new Error(r);
        }).catch((r) => {
          throw r;
        })
      },
      children: C
    }
  );
};
export {
  V as AuthProvider,
  F as useAuth
};
//# sourceMappingURL=index.es6.js.map
