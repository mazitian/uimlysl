<!-- 把你想保存的测试代码保存下来 -->
<template>
  <div class="side-menu">
    <ml-menu>
      <template v-for="item of options" :key="item.id">
        <ml-menu-item v-if="!item.children">
          {{ item.title }}
        </ml-menu-item>
        <ml-sub-menu v-else>
          <template #title>{{ item.title }}</template>
          <template v-for="iten of item.children" :key="iten.id">
            <ml-menu-item>
              {{ iten.title }}
            </ml-menu-item>
          </template>
        </ml-sub-menu>
      </template>
    </ml-menu>
  </div>
</template>
<script lang="ts" setup>
const options = [
  {
    id: 1,
    title: '菜单1'
  },
  {
    id: 2,
    title: '菜单2'
  },
  {
    id: 3,
    title: '菜单3',
    children: [
      {
        id: 31,
        title: '菜单3-1'
      },
      {
        id: 32,
        title: '菜单3-2'
      },
      {
        id: 33,
        title: '菜单3-3'
      }
    ]
  },
  {
    id: 4,
    title: '菜单4',
    children: [
      {
        id: 41,
        title: '菜单4-1'
      }
    ]
  },
  {
    id: 5,
    title: '菜单5'
  }
]
</script>
<style lang="less"></style>
