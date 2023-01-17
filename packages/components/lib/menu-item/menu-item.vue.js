"use strict";
const menuItem_vue_vue_type_script_lang = require("./menu-item.vue2.js");
const vue = require("vue");
require("./menu-item.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = { class: "ml-menu-item" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
const MenuItem = /* @__PURE__ */ _pluginVue_exportHelper(menuItem_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-87dc9a6d"]]);
module.exports = MenuItem;
