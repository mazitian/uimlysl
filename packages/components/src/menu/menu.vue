<template>
  <div class="ml-menu">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MlMenu'
})
</script>

<style lang="less" scoped>
@import '../../common//index.less';
.@{prefix}-menu {
  box-sizing: border-box;
  border-right: 1px #dcdfe6 solid;
  width: 210px;
  font-size: var(--font-size-primary);
  &:hover {
    cursor: pointer;
  }
}
</style>
