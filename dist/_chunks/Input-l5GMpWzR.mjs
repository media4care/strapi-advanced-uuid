import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useIntl } from "react-intl";
import { ArrowClockwise } from "@strapi/icons";
import { useComposedRefs, Field, TextInput, IconButton } from "@strapi/design-system";
import { useFocusInputField } from "@strapi/strapi/admin";
import { g as getTranslation } from "./index-mqr2wgjR.mjs";
import { v1, validate } from "uuid";
import { randString } from "regex-randstr";
const generateUUID = (format) => {
  try {
    if (!format) {
      return v1();
    }
    const regexFormat = new RegExp(format);
    return randString(regexFormat);
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
  const isValidValue = uuidFormat ? validateUUID(uuidFormat, value) : validate(value);
  if (value && !isValidValue) {
    return false;
  }
  return true;
};
const Input = React.forwardRef(
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
    const { formatMessage } = useIntl();
    const fieldRef = useFocusInputField(name);
    const composedRefs = useComposedRefs(forwardedRef, fieldRef);
    const [fieldError, setFieldError] = React.useState(error);
    const { disableAutoFill, disableRegenerate, uuidFormat } = getOptions(attribute);
    const getFieldError = () => formatMessage({
      id: "uuid.form.field.error",
      defaultMessage: "The UUID format is invalid."
    });
    React.useEffect(() => {
      if (!value && !disableAutoFill) {
        const newUUID = generateUUID(uuidFormat);
        onChange({ target: { value: newUUID, name } });
      }
    }, [value, attribute]);
    React.useEffect(() => {
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
    return /* @__PURE__ */ jsxs(Field.Root, { name, id: name, error: fieldError, hint, required, children: [
      /* @__PURE__ */ jsx(Field.Label, { action: labelAction, children: label }),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          ref: composedRefs,
          "aria-label": formatMessage({
            id: getTranslation("form.label"),
            defaultMessage: "Advanced UUID"
          }),
          disabled: disabled || !disableAutoFill,
          value,
          placeholder,
          onChange: handleOnChange,
          endAction: !disableRegenerate && /* @__PURE__ */ jsx(
            Field.Action,
            {
              label: formatMessage({
                id: "uuid.form.field.generate",
                defaultMessage: "Generate"
              }),
              onClick: handleRegenerate,
              children: /* @__PURE__ */ jsx(IconButton, { variant: "ghost", children: /* @__PURE__ */ jsx(ArrowClockwise, { fill: "neutral400" }) })
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(Field.Hint, {}),
      /* @__PURE__ */ jsx(Field.Error, {})
    ] });
  }
);
export {
  Input as default
};
