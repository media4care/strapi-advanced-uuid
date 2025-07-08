"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const reactIntl = require("react-intl");
const icons = require("@strapi/icons");
const designSystem = require("@strapi/design-system");
const admin = require("@strapi/strapi/admin");
const index = require("./index-CpSX55gh.js");
const uuid = require("uuid");
const regexRandstr = require("regex-randstr");
function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const generateUUID = (format) => {
  try {
    if (!format) {
      return uuid.v1();
    }
    const regexFormat = new RegExp(format);
    return regexRandstr.randString(regexFormat);
  } catch (error) {
    return null;
  }
};
const validateUUID = (format, initialValue) => {
  const newFormat = `^${format}$`;
  const regexFormat = new RegExp(newFormat, "i");
  return regexFormat.exec(initialValue);
};
const getOptions = (attribute) => {
  return {
    disableAutoFill: (attribute.options && attribute.options["disable-auto-fill"]) ?? false,
    disableRegenerate: (attribute.options && attribute.options["disable-regenerate"]) ?? false,
    uuidFormat: attribute.options && attribute.options["uuid-format"]
  };
};
const isValidUUIDValue = (uuidFormat, value) => {
  const isValidValue = uuidFormat ? validateUUID(uuidFormat, value) : uuid.validate(value);
  if (value && !isValidValue) {
    return false;
  }
  return true;
};
const Input = React__namespace.forwardRef(
  ({
    hint,
    disabled = false,
    labelAction,
    label,
    name,
    required = false,
    onChange,
    value,
    error,
    placeholder,
    attribute
  }, forwardedRef) => {
    const { formatMessage } = reactIntl.useIntl();
    const fieldRef = admin.useFocusInputField(name);
    const composedRefs = designSystem.useComposedRefs(forwardedRef, fieldRef);
    const [fieldError, setFieldError] = React__namespace.useState(error);
    const { disableAutoFill, disableRegenerate, uuidFormat } = getOptions(attribute);
    const getFieldError = () => formatMessage({
      id: "uuid.form.field.error",
      defaultMessage: "The UUID format is invalid."
    });
    React__namespace.useEffect(() => {
      if (!value && !disableAutoFill) {
        const newUUID = generateUUID(uuidFormat);
        onChange({ target: { value: newUUID, name } });
      }
    }, [value, attribute]);
    React__namespace.useEffect(() => {
      const isValid = isValidUUIDValue(uuidFormat, value);
      setFieldError(!isValid ? getFieldError() : void 0);
    }, [value]);
    const handleOnChange = (e) => {
      const { value: value2 } = e.target;
      const isValid = isValidUUIDValue(uuidFormat, value2);
      setFieldError(!isValid ? getFieldError() : void 0);
      onChange(e);
    };
    const handleRegenerate = () => {
      const newUUID = generateUUID(uuidFormat);
      onChange({ target: { value: newUUID, name } });
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Field.Root, { name, id: name, error: fieldError, hint, required, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Label, { action: labelAction, children: label }),
      /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.TextInput,
        {
          ref: composedRefs,
          "aria-label": formatMessage({
            id: index.getTranslation("form.label"),
            defaultMessage: "Advanced UUID"
          }),
          disabled: disabled || !disableAutoFill,
          value,
          placeholder,
          onChange: handleOnChange,
          endAction: !disableRegenerate && /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Field.Action,
            {
              label: formatMessage({
                id: "uuid.form.field.generate",
                defaultMessage: "Generate"
              }),
              onClick: handleRegenerate,
              children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.IconButton, { variant: "ghost", children: /* @__PURE__ */ jsxRuntime.jsx(icons.ArrowClockwise, { fill: "neutral400" }) })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {}),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Error, {})
    ] });
  }
);
exports.default = Input;
