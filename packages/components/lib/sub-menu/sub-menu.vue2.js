"use strict";
const vue = require("vue");
const _sfc_main = vue.defineComponent({
  name: "MlSubMenu",
  setup() {
    const subMenuShow = vue.ref(false);
    const changeShow = () => {
      subMenuShow.value = !subMenuShow.value;
    };
    return {
      subMenuShow,
      changeShow
    };
  }
});
module.exports = _sfc_main;
