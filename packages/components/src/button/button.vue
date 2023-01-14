<template>
  <button class="ml-button" :class="styleClass">
    <slot />
  </button>
</template>

<script lang="ts">
import './style/type.less'
import { defineComponent, computed } from 'vue'
import { buttonProps } from './types'
export default defineComponent({
  name: 'ml-button',
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`ml-button--${props.type}`]: props.type
      }
    })
    return {
      styleClass
    }
  }
})
</script>
