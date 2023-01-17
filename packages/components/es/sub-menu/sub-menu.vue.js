import _sfc_main from "./sub-menu.vue2.js";
import { openBlock, createElementBlock, createElementVNode, renderSlot, withDirectives, vShow, pushScopeId, popScopeId } from "vue";
import "./sub-menu.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-af099a41"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "ml-sub-menu" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "icon" }, ">", -1));
const _hoisted_3 = { class: "sub-item" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: "title",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.changeShow && _ctx.changeShow(...args))
    }, [
      renderSlot(_ctx.$slots, "title", {}, void 0, true),
      _hoisted_2
    ]),
    withDirectives(createElementVNode("div", _hoisted_3, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 512), [
      [vShow, _ctx.subMenuShow]
    ])
  ]);
}
const SubMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-af099a41"]]);
export {
  SubMenu as default
};
