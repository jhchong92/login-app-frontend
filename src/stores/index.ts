import { store } from 'quasar/wrappers'
import { createPinia, Pinia } from 'pinia';

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Pinia
  }
}

export default store( () => {
  return createPinia();
})
