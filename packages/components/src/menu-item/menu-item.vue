<template>
  <div class="ml-menu-item">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MlMenuItem'
})
</script>

<style lang="less" scoped>
@import '../../common//index.less';
.ml-menu-item {
  height: 56px;
  line-height: 56px;
  text-align: center;
  &:hover {
    background-color: #79bbff;
  }
}
</style>
