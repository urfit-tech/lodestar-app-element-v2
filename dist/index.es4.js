import { j as k } from "./index.es15.js";
import { createContext as y, useContext as h, useMemo as o, useEffect as f } from "react";
import { useAuth as g } from "./index.es6.js";
import { useQuery as x } from "./index.es17.js";
import { gql as I } from "./index.es18.js";
const u = {
  id: "",
  orgId: null,
  name: "",
  title: null,
  description: null,
  host: "",
  hosts: [],
  enabledModules: {},
  appPlanId: "",
  navs: [],
  settings: {},
  secrets: {},
  currencyId: "TWD",
  currencies: {},
  loading: !0,
  options: {
    video_duration: 0,
    watched_seconds: 0
  },
  endedAt: null
}, c = y(u), E = () => h(c), T = ({ appId: i, children: b }) => {
  const { authToken: a, refreshToken: s } = g(), { data: n, loading: l, error: r, refetch: _ } = x(
    I`
      query GET_APP($appId: String!) {
        currency {
          id
          name
          label
          unit
          minor_units
        }

        app_by_pk(id: $appId) {
          id
          org_id
          name
          title
          description
          app_modules {
            id
            module_id
          }
          app_plan_id
          app_navs(order_by: { position: asc }, where: { parent_id: { _is_null: true } }) {
            id
            block
            position
            label
            icon
            href
            external
            locale
            tag
            parent_id
            sub_app_navs(order_by: { position: asc }) {
              id
              block
              position
              label
              icon
              href
              external
              locale
              tag
              parent_id
            }
          }
          app_settings {
            key
            value
          }
          app_secrets {
            key
            value
          }
          app_hosts(order_by: { priority: asc }) {
            host
          }
          options
          ended_at
        }
      }
    `,
    {
      variables: { appId: i },
      context: { important: !0 }
    }
  ), p = o(
    () => Object.fromEntries(n?.app_by_pk?.app_settings.map((e) => [e.key, e.value]) || []),
    [n?.app_by_pk?.app_settings]
  ), d = o(
    () => Object.fromEntries(n?.app_by_pk?.app_secrets.map((e) => [e.key, e.value]) || []),
    [n?.app_by_pk?.app_secrets]
  ), m = o(
    () => n?.app_by_pk ? {
      loading: l,
      error: r,
      refetch: _,
      id: n.app_by_pk.id,
      orgId: n.app_by_pk.org_id || null,
      name: n.app_by_pk.name || "",
      title: n.app_by_pk.title || null,
      description: n.app_by_pk.description || null,
      host: n.app_by_pk.app_hosts?.[0]?.host ?? (typeof window < "u" ? window.location.host : ""),
      hosts: n?.app_by_pk?.app_hosts.map((e) => e.host) || [],
      enabledModules: Object.fromEntries(n.app_by_pk.app_modules.map((e) => [e.module_id, !0]) || []),
      appPlanId: n?.app_by_pk.app_plan_id,
      navs: n.app_by_pk.app_navs.map((e) => ({
        id: e.id,
        block: e.block,
        position: e.position,
        label: e.label,
        icon: e.icon || null,
        href: e.href,
        external: e.external,
        locale: e.locale,
        tag: e.tag || null,
        parentId: e.parent_id || null,
        subNavs: e.sub_app_navs.map((t) => ({
          id: t.id,
          block: t.block,
          position: t.position,
          label: t.label,
          icon: t.icon || null,
          href: t.href,
          external: t.external,
          locale: t.locale,
          tag: t.tag || null,
          parentId: t.parent_id || null
        }))
      })),
      settings: p,
      secrets: d,
      currencyId: p.currency_id || "TWD",
      currencies: n?.currency.reduce(
        (e, t) => (e[t.id] = {
          id: t.id,
          name: t.id === "LSC" && p["coin.name"] ? p["coin.name"] : t.name,
          label: t.id === "LSC" && p["coin.label"] ? p["coin.label"] : t.label,
          unit: t.id === "LSC" && p["coin.unit"] ? p["coin.unit"] : t.unit,
          minorUnits: t.minor_units ? t.minor_units : 0
        }, e),
        {}
      ) || {},
      options: n.app_by_pk.options,
      endedAt: n.app_by_pk.ended_at || null
    } : u,
    [n?.app_by_pk, n?.currency, r, l, _, d, p]
  );
  return f(() => {
    a || s?.();
  }, [i, a, s]), /* @__PURE__ */ k.jsx(c.Provider, { value: m, children: b });
};
export {
  T as AppProvider,
  E as useApp
};
//# sourceMappingURL=index.es4.js.map
