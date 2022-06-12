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
            @click="login"
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
export default {
  name: 'LoginPage',
};
</script>

<script setup lang="ts">
import { api } from 'boot/axios';
import { reactive } from '@vue/reactivity';
import { helpers, required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { Profile, ResponseBody } from 'src/interfaces';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'src/store';
import { useQuasar } from 'quasar';

const state = reactive({
  email: 'jhchong92@gmail.com',
  password: 'Abc123',
});

const store = useStore();
const router = useRouter();
const $q = useQuasar()

function handleAxiosError(err: AxiosError<ResponseBody>) {
  if (err.response) {
    $q.notify({
      message: err.response.data.message,
      color: 'red'
    })
  } else {
    console.error('Unhandled error', err);
  }
}
function login() {
  api.post('/login', {
    username: state.email,
    password: state.password
  }).then((res: AxiosResponse) => {
    // get profile after logging in and re-route to /home
    api.get('/profile')
    .then((res: AxiosResponse<Profile>) => {
      store.commit('appModule/setProfile', res.data);
      router.replace('/home')
    })
    .catch(handleAxiosError)
  }).catch(handleAxiosError)
}

const rules = {
  email: { required: helpers.withMessage('Email cannot be blank', required) },
  password: {
    required: helpers.withMessage('Password cannot be blank', required),
  },
};

const v$ = useVuelidate(rules, state);
</script>
<style scoped></style>
