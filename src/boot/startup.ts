import { boot } from 'quasar/wrappers';
import { api } from 'boot/axios';
import { Profile } from 'src/interfaces';

export default boot(async ({ store, router }) => {
  try {
    const profile = await api.get<Profile>('/profile');
    store.commit('appModule/setProfile', profile.data);
  } catch (error) {
    // do nothing
  }

  router.beforeEach((to, from, next) => {
    console.log('route to ', to);
    console.log('store', store);
    // route all unauthenticated routes to /home if profile is found
    if (store && store.state && store.state.appModule) {
      const profile: Profile = store.state.appModule.profile;
      if (!to.meta.authenticated && profile) {
        console.log('route to /home since profile is set');
        router.replace('/home');
      }

      // route un-authenticated users to /login
      if (to.meta.authenticated && !profile) {
        router.replace('/login');
      }
    }
    next();
  })
});
