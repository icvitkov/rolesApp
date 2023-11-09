<script setup lang="ts">
import PageWrapper from '@/components/PageWrapper.vue'
import RoleForm from '@/components/RoleForm.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  console.log(route)
})
</script>

<template>
  <main>
    <PageWrapper title="Create New Role">
      <RoleForm :role-id="route.params.id as string" />
    </PageWrapper>
  </main>
</template>

<style lang="scss" scoped></style>
