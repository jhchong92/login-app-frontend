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
export default {
  name: 'GuestLayout',
};
</script>

<script setup lang="ts">
</script>

<style scoped></style>
