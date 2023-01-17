import { defineComponent, ref } from "vue";
const _sfc_main = defineComponent({
  name: "MlSubMenu",
  setup() {
    const subMenuShow = ref(false);
    const changeShow = () => {
      subMenuShow.value = !subMenuShow.value;
    };
    return {
      subMenuShow,
      changeShow
    };
  }
});
export {
  _sfc_main as default
};
