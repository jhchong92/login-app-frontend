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
              v-model="state.firstName"
              @blur="v$.firstName.$touch"
              :error="v$.firstName.$error"
              :error-message="
                $filters.computeFormErrorMessage(v$.firstName.$errors)
              "
              type="text"
              label="First Name"
            />
            <q-input
              square
              filled
              v-model="state.lastName"
              @blur="v$.lastName.$touch"
              :error="v$.lastName.$error"
              :error-message="
                $filters.computeFormErrorMessage(v$.lastName.$errors)
              "
              type="text"
              label="Last Name"
            />
            <q-input
              square
              filled
              v-model="state.email"
              @blur="v$.email.$touch"
              :error="v$.email.$error"
              :error-message="
                $filters.computeFormErrorMessage(v$.email.$errors)
              "
              type="email"
              label="Email"
            />
            <q-input
              square
              filled
              v-model="state.password"
              @blur="v$.password.$touch"
              :error="v$.password.$error"
              :error-message="
                $filters.computeFormErrorMessage(v$.password.$errors)
              "
              type="password"
              label="Password"
            />
            <q-input
              square
              filled
              v-model="state.passwordConfirmation"
              @blur="v$.passwordConfirmation.$touch"
              :error="v$.passwordConfirmation.$error"
              :error-message="
                $filters.computeFormErrorMessage(
                  v$.passwordConfirmation.$errors
                )
              "
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
            @click='register'
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
export default {
  name: 'RegisterPage',
};
</script>

<script setup lang="ts">
import { reactive } from '@vue/reactivity';
import { email, helpers, required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { api } from 'boot/axios';

function register() {
  api.post('/registration', state)
  .then((res) => {
    console.log('registration response', res);
  })
}

const state = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
});

const passwordRule = helpers.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

const passwordConfirmationRule = (value: string) => state.password == value;

const rules = {
  email: {
    required: helpers.withMessage('Email cannot be blank', required),
    email: helpers.withMessage('Incorrect email format', email),
  },
  firstName: {
    required: helpers.withMessage('First Name cannot be blank', required),
  },
  lastName: {
    required: helpers.withMessage('Last Name cannot be blank', required),
  },
  password: {
    required: helpers.withMessage('Password cannot be blank', required),
    passwordRule: helpers.withMessage(
      'Password must contain minimum eight characters, at least one letter and one number',
      passwordRule
    ),
  },
  passwordConfirmation: {
    required: helpers.withMessage(
      'Password Confirmation cannot be blank',
      required
    ),
    passwordConfirmationRule: helpers.withMessage(
      'Does not match with password',
      passwordConfirmationRule
    ),
  },
};

const v$ = useVuelidate(rules, state);
</script>
<style scoped></style>
