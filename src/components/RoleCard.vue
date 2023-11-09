<script setup lang="ts">
import type { Role } from '@/types'
import { toLocalDate } from '@/helpers/dateHelper'

const props = defineProps<{
  role: Role
}>()

const { name, type, description, users, created_on, modified_on, active, editable } = props.role
</script>

<template>
  <div class="card">
    <div class="content">
      <div v-if="active" class="inactive-bagde">inactive</div>
      <h3>{{ name }}</h3>
      <span>{{ type }}</span>

      <p class="description">{{ description }}</p>
      <div class="users">
        <img
          v-for="user in users"
          :key="user.id"
          :src="user.photo_url"
          :alt="`${user.first_name} ${user.last_name}`"
        />
      </div>
    </div>

    <div class="card-footer">
      <span v-if="editable"> Last update: {{ toLocalDate(modified_on) }}</span>
      <span v-else> Date created: {{ toLocalDate(created_on) }}</span>
      <div v-if="editable" class="buttons">
        <button>edit</button>
        <button>delete</button>
      </div>
      <svg v-else xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <path
          d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid var(--color-light-gray);
  display: grid;
  background-color: var(--color-white);
}

.content {
  padding-inline: 20px;
  padding-block: 20px 50px;
  display: grid;
}

.inactive-bagde {
  justify-self: end;
  background-color: var(--color-red);
  color: white;
  text-transform: uppercase;
  padding: 5px;
  border-radius: 5px;
}

.description {
  padding-block: 20px;
}

.users {
  display: flex;
  gap: 5px;

  & > img {
    border-radius: 50%;
    max-width: 60px;
    max-height: 60px;
  }
}

.card-footer {
  background-color: var(--color-off-white);
  padding: 20px;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;

  & svg {
    fill: currentColor;
  }
}
</style>
