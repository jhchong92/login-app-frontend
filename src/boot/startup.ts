import { boot } from 'quasar/wrappers';
import { api } from 'boot/axios';
import { Profile } from 'src/interfaces';
import { useProfileStore } from 'stores/profile';

const profileStore = useProfileStore();

export default boot(async ({ app, store, router }) => {
  try {
    const res = await api.get<Profile>('/profile');
    profileStore.setProfile(res.data);
  } catch (error) {
    // do nothing
  }

  router.beforeEach((to, from, next) => {
    console.log('route to ', to);
    console.log('store', store);
    console.log('store state value', store.state.value);
    console.log('profile store', profileStore.profile);
    console.log('profile store auth', profileStore._authenticated);
    const { authenticated } = profileStore
    // route all unauthenticated routes to /home if authenticated
    if (!to.meta.authenticated && authenticated) {
      console.log('route to /home since profile is set');
      router.replace('/home');
    }

    // route un-authenticated users to /login
    if (to.meta.authenticated && !authenticated) {
      router.replace('/login');
    }
    next();
  })
});
