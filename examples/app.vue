<template>
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="info">信息按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="text">文字按钮</Button>
</template>
<script lang="ts" setup>
import { Button } from 'mlysl-ui'
</script>
<style lang="less">
button.ml-button {
  margin-right: 10px;
}
</style>
