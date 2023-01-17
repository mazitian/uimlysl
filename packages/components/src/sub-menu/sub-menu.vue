<template>
  <div class="ml-sub-menu">
    <div class="title" @click="changeShow">
      <slot name="title"></slot>
      <span class="icon">&gt;</span>
    </div>
    <div class="sub-item" v-show="subMenuShow">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MlSubMenu',
  setup() {
    const subMenuShow = ref<boolean>(false)
    const changeShow = () => {
      subMenuShow.value = !subMenuShow.value
    }

    return {
      subMenuShow,
      changeShow
    }
  }
})
</script>

<style lang="less" scoped>
@import '../../common//index.less';
.@{prefix}-sub-menu {
  position: relative;
  .title {
    position: relative;
    height: 56px;
    line-height: 56px;
    text-align: center;
    &:hover {
    background-color: #79bbff;
  }
    .icon {
      position: absolute;
      right: 15px;
    }
  }
  .sub-item {
    // position: absolute;
    // left: 100%;
    height: 100%;
    top: 0;
    width: 100%;
  }
}
</style>
