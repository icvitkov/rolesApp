<script setup lang="ts">
import { useRolesStore } from '@/stores/roles'
import { ref } from 'vue'

import RoleCard from '@/components/RoleCard.vue'

const rolesStore = useRolesStore()

const search = ref()
</script>

<template>
  <input v-model="search" type="search" />
  <select>
    <option>aa</option>
  </select>
  <RouterLink to="/create-new">
    <button>Create new role</button>
  </RouterLink>
  <div class="roles-grid">
    <RoleCard v-for="role in rolesStore.roles" :key="role.id" :role="role" />
  </div>
</template>

<style lang="scss" scoped>
.roles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
</style>
