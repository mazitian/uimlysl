<template>
  <MlButton>默认按钮</MlButton>
  <ml-button type="primary">主要按钮</ml-button>
  <ml-button type="success">成功按钮</ml-button>
  <ml-button type="info">信息按钮</ml-button>
  <ml-button type="warning">警告按钮</ml-button>
  <ml-button type="text">文字按钮</ml-button>
</template>
<script lang="ts" setup>
import { MlButton } from 'mlysl-ui'
</script>
<style lang="less">
button.ml-button {
  margin-right: 10px;
}
</style>
