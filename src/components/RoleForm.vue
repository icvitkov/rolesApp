<script setup lang="ts">
import { useRolesStore } from '@/stores/roles'
import type { Role } from '@/types'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const rolesStore = useRolesStore()

const props = defineProps<{
  roleId?: string
}>()

const role = ref({
  name: '',
  type: '',
  description: '',
  editable: true,
  active: true,
  users: [
    {
      id: 0,
      first_name: undefined,
      last_name: undefined,
      photo_url: undefined
    }
  ]
})

const submitForm = () => {
  console.log(role)
}

const addUser = () => {
  role.value.users.push({
    id: role.value.users.length + 1,
    first_name: undefined,
    last_name: undefined,
    photo_url: undefined
  })
}

const removeUser = (index: number) => {
  role.value.users.splice(index, 1)
}

const cancel = () => {
  router.push('/')
}

onMounted(() => {
  if (props.roleId) {
    console.log('aa')
    const id = Number(props.roleId)
    role.value = rolesStore.roles.find((role) => role.id === id) as Role
  }
})
</script>

<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="field">
      <label for="name">Role Name:</label>
      <input type="text" id="name" v-model="role.name" :disabled="!!roleId && !role.editable" />
    </div>

    <div class="field">
      <label for="name">Role Type:</label>
      <input type="text" id="type" v-model="role.type" :disabled="!!roleId && !role.editable" />
    </div>

    <div class="field">
      <label for="editable">Description:</label>
      <textarea id="description" v-model="role.description" :disabled="!role.editable"></textarea>
    </div>

    <div class="field">
      <label for="editable">Editable:</label>
      <input type="checkbox" v-model="role.editable" />
    </div>

    <div class="field">
      <label for="active">Active:</label>
      <input type="checkbox" v-model="role.active" />
    </div>

    <h3>Users:</h3>
    <div v-for="(user, index) in role.users" :key="user.id" class="user-entry">
      <div class="field">
        <label :for="'first_name_' + user.id">First Name:</label>
        <input :id="'first_name_' + user.id" type="text" v-model="user.first_name" />
      </div>

      <div class="field">
        <label :for="'last_name_' + user.id">Last Name:</label>
        <input :id="'last_name_' + user.id" type="text" v-model="user.last_name" />
      </div>

      <div class="field">
        <label :for="'photo_url_' + user.id">Photo URL:</label>
        <input :id="'photo_url_' + user.id" type="text" v-model="user.photo_url" />
      </div>

      <button type="button" @click="removeUser(index)">Remove User</button>
    </div>
    <button type="button" @click="addUser">Add User</button>
    <div class="actions">
      <button type="submit" :disabled="!!roleId && !role.editable">Save Role</button>
      <button @click="cancel">Cancel</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form {
  padding-block-start: 24px;
}

.field {
  width: 100%;
  display: flex;
  gap: 24px;
  padding-block-end: 24px;
}

.user-entry {
  padding-block-end: 24px;
}

.actions {
  display: flex;
  gap: 24px;
  padding-block: 48px;
}
</style>
