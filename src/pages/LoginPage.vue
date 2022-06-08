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
              @blur="v$.email.$touch"
              :error="v$.email.$error"
              :error-message="
                $filters.computeFormErrorMessage(v$.email.$errors)
              "
              class="error"
              clearable
              v-model="state.email"
              type="email"
              label="Email"
            />
            <q-input
              square
              filled
              clearable
              v-model="state.password"
              @blur="v$.password.$touch"
              :error="v$.password.$error"
              :error-message="
                $filters.computeFormErrorMessage(v$.password.$errors)
              "
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
            <router-link to="/register">Create an Account</router-link>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from '@vue/reactivity';
import { required, helpers } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
export default {
  name: 'LoginPage',
};
</script>

<script setup lang="ts">
const state = reactive({
  email: '',
  password: '',
});

const rules = {
  email: { required: helpers.withMessage('Email cannot be blank', required) },
  password: {
    required: helpers.withMessage('Password cannot be blank', required),
  },
};

const v$ = useVuelidate(rules, state);
</script>
<style scoped></style>
