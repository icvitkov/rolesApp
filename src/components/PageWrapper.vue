<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: var(--color-white);
  width: 80%;
  height: 90%;
  justify-self: center;
  padding-block: 32px;
  padding-inline: 40px;
}
</style>
