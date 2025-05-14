import { j as e } from "./index.es15.js";
import i from "./index.es19.js";
import { useTheme as n, extendTheme as d, ChakraProvider as m } from "@chakra-ui/react";
import { ThemeProvider as p } from "styled-components";
import { useApp as b } from "./index.es4.js";
import u from "./index.es20.js";
const v = ({
  extendChakraTheme: s = {},
  children: a
}) => {
  const { settings: r } = b(), l = d(
    u(
      {
        components: {
          Button: {
            baseStyle: {
              fontWeight: "400",
              borderRadius: "2px",
              _focus: {
                boxShadow: "0"
              }
            },
            variants: {
              primary: {
                background: "primary.500",
                color: "#ffffff",
                _hover: {
                  background: "primary.300"
                }
              },
              outline: {
                border: "solid 1px",
                borderColor: "var(--gray)",
                color: "#585858",
                _hover: {
                  background: "transparent",
                  borderColor: r["theme.@primary-color"] || "#000000",
                  color: r["theme.@primary-color"] || "#000000"
                }
              },
              ghost: {
                _hover: {
                  color: "primary.400",
                  background: "transparent"
                }
              },
              link: {
                color: "primary.500"
              }
            }
          },
          CloseButton: {
            baseStyle: {
              _focus: {
                boxShadow: "0"
              }
            }
          },
          Divider: {
            baseStyle: {
              borderColor: "#e8e8e8"
            }
          },
          IconButton: {
            download: {
              background: "transparent"
            }
          },
          Input: {
            variants: {
              outline: () => ({
                field: {
                  borderColor: "var(--gray)",
                  _focus: {
                    borderColor: r["theme.@primary-color"]
                  }
                }
              })
            }
          },
          Select: {
            variants: {
              outline: () => ({
                field: {
                  borderColor: "#ccc"
                }
              })
            }
          },
          Textarea: {
            variants: {
              outline: () => ({
                borderColor: "var(--gray)"
              })
            }
          },
          Radio: {
            baseStyle: {
              _focus: {
                boxShadow: "none"
              }
            }
          },
          FormError: {
            baseStyle: {
              text: {
                color: "danger.500"
              }
            }
          },
          Menu: {
            baseStyle: {
              item: {
                _active: {
                  bg: `${r["theme.@primary-color"]}1a`
                },
                _focus: {
                  bg: `${r["theme.@primary-color"]}1a`
                }
              }
            }
          },
          Modal: {
            baseStyle: {
              dialog: {
                borderRadius: "2px"
              }
            }
          },
          Tooltip: {
            baseStyle: {
              bg: "#4a4a4a",
              borderRadius: "4px",
              fontWeight: "500",
              fontSize: "12px"
            }
          },
          Tabs: {
            baseStyle: {
              tab: {
                _focus: {
                  boxShadow: 0
                }
              }
            }
          }
        },
        colors: {
          ...i(r["theme.@primary-color"] || "#2d313a"),
          danger: {
            ...i("#ff7d62").primary
          },
          gray: {
            100: "rgba(0, 0, 0, 0.1)",
            200: "#f7f8f8",
            300: "#ececec",
            400: "#cdcece",
            500: "#cdcdcd",
            600: "#9b9b9b",
            700: "#585858",
            800: "#4a4a4a",
            900: "rgba(0, 0, 0, 0.45)"
          }
        }
      },
      s
    )
  ), c = Object.keys(r).filter((o) => o.split(".")[0] === "theme").map((o) => o.split(".")[1]).reduce(
    (o, t) => (o[t] = r[`theme.${t}`], o),
    {
      "@primary-color": "#2d313a"
    }
  );
  return /* @__PURE__ */ e.jsx(m, { theme: l, children: a ? /* @__PURE__ */ e.jsx(p, { theme: c, children: /* @__PURE__ */ e.jsx(e.Fragment, { children: a }) }) : null });
}, _ = n;
export {
  v as AppThemeProvider,
  _ as useAppTheme
};
//# sourceMappingURL=index.es5.js.map
