<template>
  <div class="col-sm-8 col-md-6" style="max-width: 500px">
    <div class="row">
      <h5 class="text-h5 text-white q-my-md">XLA</h5>
    </div>
    <div class="row">
      <q-card square bordered class="full-width q-pa-lg shadow-1">
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              square
              filled
              clearable
              v-model="email"
              type="email"
              label="Email"
            />
            <q-input
              square
              filled
              clearable
              v-model="password"
              type="password"
              label="Password"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            unelevated
            color="light-green-7"
            size="lg"
            class="full-width"
            label="Login"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-none">
          <p class="text-grey-6">
            Not registered?
            <router-link to="/register"> Create an Account</router-link>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity';
export default {
  name: 'LoginPage',
};
</script>

<script setup lang="ts">
const email = ref('');
const password = ref('');
</script>
<style scoped></style>
