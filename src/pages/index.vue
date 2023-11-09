<script setup lang="ts">
import { useRolesStore } from '@/stores/roles'
import { onMounted } from 'vue'

const roles = useRolesStore()

onMounted(() => {
  console.log(roles)
})
</script>

<template>
  <main>
    <h1>Index page</h1>
  </main>
</template>

<style lang="scss" scoped></style>
