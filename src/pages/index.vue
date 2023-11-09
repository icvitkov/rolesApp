<script setup lang="ts">
import { useRolesStore } from '@/stores/roles'
import { onMounted } from 'vue'

import RoleCard from '@/components/RoleCard.vue'

const rolesStore = useRolesStore()

onMounted(() => {
  console.log(rolesStore.roles)
})
</script>

<template>
  <main>
    <h1>Index page</h1>
    <div v-for="role in rolesStore.roles" :key="role.id">
      <RoleCard :role="role" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
