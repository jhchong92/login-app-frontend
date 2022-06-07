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
              v-model="firstName"
              type="text"
              label="First Name"
            />
            <q-input
              square
              filled
              clearable
              v-model="lastName"
              type="text"
              label="Last Name"
            />
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
            <q-input
              square
              filled
              clearable
              v-model="passwordConfirmation"
              type="passwordConfirmation"
              label="Password Confirmation"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            unelevated
            color="light-green-7"
            size="lg"
            class="full-width"
            label="Register"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-none">
          <router-link to="/login">Back to login</router-link>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity';
export default {
  name: 'RegisterPage',
};
</script>

<script setup lang="ts">
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
</script>
<style scoped></style>
