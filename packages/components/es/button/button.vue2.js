import "./style/type.less.js";
import { defineComponent, computed } from "vue";
import { buttonProps } from "./types.js";
const _sfc_main = defineComponent({
  name: "MlButton",
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`ml-button--${props.type}`]: props.type
      };
    });
    return {
      styleClass
    };
  }
});
export {
  _sfc_main as default
};
