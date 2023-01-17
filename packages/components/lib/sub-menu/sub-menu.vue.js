"use strict";
const subMenu_vue_vue_type_script_lang = require("./sub-menu.vue2.js");
const vue = require("vue");
require("./sub-menu.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-af099a41"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = { class: "ml-sub-menu" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "icon" }, ">", -1));
const _hoisted_3 = { class: "sub-item" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", {
      class: "title",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.changeShow && _ctx.changeShow(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "title", {}, void 0, true),
      _hoisted_2
    ]),
    vue.withDirectives(vue.createElementVNode("div", _hoisted_3, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 512), [
      [vue.vShow, _ctx.subMenuShow]
    ])
  ]);
}
const SubMenu = /* @__PURE__ */ _pluginVue_exportHelper(subMenu_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-af099a41"]]);
module.exports = SubMenu;
