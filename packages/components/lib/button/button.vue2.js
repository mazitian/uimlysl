"use strict";
require("./style/type.less.js");
const vue = require("vue");
const types = require("./types.js");
const _sfc_main = vue.defineComponent({
  name: "MlButton",
  props: types.buttonProps,
  setup(props) {
    const styleClass = vue.computed(() => {
      return {
        [`ml-button--${props.type}`]: props.type
      };
    });
    return {
      styleClass
    };
  }
});
module.exports = _sfc_main;
