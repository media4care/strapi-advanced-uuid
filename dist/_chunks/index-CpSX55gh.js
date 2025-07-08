"use strict";
const React = require("react");
const jsxRuntime = require("react/jsx-runtime");
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const PLUGIN_ID = "strapi-advanced-uuid";
const getTranslation = (id) => `${PLUGIN_ID}.${id}`;
function Initializer({ setPlugin }) {
  const ref = React.useRef(setPlugin);
  React.useEffect(() => {
    ref.current(PLUGIN_ID);
  }, []);
  return null;
}
const Icon = "data:image/svg+xml,%3csvg%20width='32'%20height='24'%20viewBox='0%200%2032%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_601_5)'%3e%3cmask%20id='mask0_601_5'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='24'%3e%3cpath%20d='M32%200H0V24H32V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_601_5)'%3e%3cpath%20d='M29%200.5H3C1.61929%200.5%200.5%201.61929%200.5%203V21C0.5%2022.3807%201.61929%2023.5%203%2023.5H29C30.3807%2023.5%2031.5%2022.3807%2031.5%2021V3C31.5%201.61929%2030.3807%200.5%2029%200.5Z'%20fill='%238E5CF6'%20stroke='%23535155'/%3e%3c/g%3e%3cpath%20d='M14.4997%208.14321C15.3269%208.14321%2016%207.43784%2016%206.57161C16%205.70537%2015.3269%205%2014.4997%205C13.6731%205%2013%205.70537%2013%206.57161C13%207.43784%2013.6731%208.14321%2014.4997%208.14321ZM13.6817%2015C14.0574%2015%2014.3634%2014.6794%2014.3634%2014.2856V9.14276C14.3634%208.74902%2014.0574%208.42839%2013.6817%208.42839C13.306%208.42839%2013%208.74902%2013%209.14276V14.2856C13%2014.6794%2013.306%2015%2013.6817%2015Z'%20fill='white'/%3e%3cpath%20d='M18.6801%208H16.1582C15.7806%208%2015.473%208.30146%2015.4576%208.70472C15.44%209.1766%2015.3523%2011.6575%2015.3523%2014.1187C15.3523%2016.1918%2014.5536%2016.5709%2012.9815%2016.5709C11.0996%2016.5709%2010.4001%2015.9061%2010.4001%2014.1187V8.71485C10.4001%208.32115%2010.0859%208.00056%209.70006%208.00056C9.3142%208.00056%209%208.32115%209%208.71485V14.1187C9%2016.694%2010.34%2018%2012.982%2018C14.601%2018%2016.7535%2017.5979%2016.7541%2014.1187C16.7541%2012.2565%2016.8048%2010.3729%2016.8351%209.4297H18.6806C19.9809%209.4297%2021.5999%209.4297%2021.5999%2012.865C21.5999%2015.9522%2019.8905%2016.41%2018.0456%2016.4454C17.8587%2016.4471%2017.6834%2016.5236%2017.5522%2016.6597C17.4211%2016.7964%2017.3505%2016.9764%2017.3522%2017.167C17.3555%2017.5568%2017.6697%2017.8746%2018.0704%2017.8746C21.3414%2017.811%2023%2016.126%2023%2012.8656C23%208%2019.8613%208%2018.6801%208Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_601_5'%3e%3crect%20width='32'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const PluginIcon = () => /* @__PURE__ */ jsxRuntime.jsx("img", { alt: "uuid", src: Icon });
const prefixPluginTranslations = (trad, pluginId) => {
  return Object.keys(trad).reduce((acc, current) => {
    acc[`${pluginId}.${current}`] = trad[current];
    return acc;
  }, {});
};
const index = {
  register(app) {
    app.customFields.register({
      name: "uuid",
      pluginId: PLUGIN_ID,
      type: "string",
      intlLabel: {
        id: getTranslation("form.label"),
        defaultMessage: "Advanced UUID"
      },
      intlDescription: {
        id: getTranslation("form.description"),
        defaultMessage: "Generates a UUID v1"
      },
      icon: PluginIcon,
      components: {
        Input: async () => Promise.resolve().then(() => require(
          /* webpackChunkName: "input-uuid-component" */
          "./Input-DGiU3DF1.js"
        ))
      },
      options: {
        base: [
          {
            intlLabel: {
              id: getTranslation("form.field.uuidFormat"),
              defaultMessage: "UUID Format"
            },
            name: "options.uuid-format",
            type: "text"
          },
          {
            sectionTitle: {
              id: getTranslation("form.field.options"),
              defaultMessage: "Options"
            },
            items: [
              {
                intlLabel: {
                  id: getTranslation("form.field.disableAutoFill"),
                  defaultMessage: "Disable Auto Fill"
                },
                name: "options.disable-auto-fill",
                type: "checkbox",
                description: {
                  id: "form.field.disableAutoFill.description",
                  defaultMessage: "Disable initial auto fill of the UUID. UUID field will be editable when this option is enabled."
                }
              },
              {
                intlLabel: {
                  id: getTranslation("form.field.disableRegenerate"),
                  defaultMessage: "Disable Regenerate"
                },
                name: "options.disable-regenerate",
                type: "checkbox",
                description: {
                  id: "form.field.disableRegenerate.description",
                  defaultMessage: "Disable regeneration in the UI"
                }
              }
            ]
          }
        ],
        advanced: [
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings"
            },
            items: [
              {
                name: "required",
                type: "checkbox",
                intlLabel: {
                  id: getTranslation("form.attribute.item.requiredField"),
                  defaultMessage: "Required field"
                },
                description: {
                  id: getTranslation("form.attribute.item.requiredField.description"),
                  defaultMessage: "You won't be able to create an entry if this field is empty"
                }
              },
              {
                name: "private",
                type: "checkbox",
                intlLabel: {
                  id: "form.attribute.item.privateField",
                  defaultMessage: "Private field"
                },
                description: {
                  id: "form.attribute.item.privateField.description",
                  defaultMessage: "This field will not show up in the API response"
                }
              }
            ]
          }
        ]
      }
    });
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID
    });
  },
  async registerTrads(app) {
    const { locales } = app;
    const importedTranslations = await Promise.all(
      locales.map((locale) => {
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => Promise.resolve().then(() => require("./en-Nbt4HSkY.js")) }), `./translations/${locale}.json`, 3).then(({ default: data }) => {
          return {
            data: prefixPluginTranslations(data, PLUGIN_ID),
            locale
          };
        }).catch(() => {
          return {
            data: {},
            locale
          };
        });
      })
    );
    return importedTranslations;
  }
};
exports.getTranslation = getTranslation;
exports.index = index;
