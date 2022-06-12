<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class='bg-light-green window-height window-width row justify-center items-center'>
          <div class='text-center'>
            <h1 class='text-white'>Hello <template v-if='firstName && lastName'> {{ firstName }} {{ lastName}} </template></h1>
            <q-btn color='primary' label='Logout' size='lg' @click='logout'/>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang='ts'>
export default {
  name: 'MainLayout'
};
</script>

<script setup lang='ts'>
import { useStore } from 'src/store';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const $store = useStore();
const router = useRouter();

const firstName = computed(() => $store.state.appModule.profile?.firstName);
const lastName = computed(() => $store.state.appModule.profile?.lastName);

function logout() {
  api.post('/logout', {})
  .catch((err) => {
    console.error('error logging out', err);
  })
  .finally(() => {
    $store.commit('appModule/unsetProfile');
    router.push('/login')
  })
}
</script>

<style scoped>

</style>
