<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="bg-light-green window-height window-width row justify-center items-center"
      >
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity';
export default {
  name: 'GuestLayout',
};
</script>

<script setup lang="ts">
const email = ref('');
const password = ref('');
</script>

<style scoped></style>
