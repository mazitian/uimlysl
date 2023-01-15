"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ButtonType = [
  "primary",
  "success",
  "info",
  "warning",
  "danger",
  "text"
];
const buttonProps = {
  type: {
    type: String,
    validator(value) {
      return ButtonType.includes(value);
    }
  }
};
exports.ButtonType = ButtonType;
exports.buttonProps = buttonProps;
