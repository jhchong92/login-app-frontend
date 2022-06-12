import { defineStore } from 'pinia';
import { Profile } from 'src/interfaces';


export const useProfileStore = defineStore('profile', {
  state: () => ({
    _profile: {} as Profile,
    _authenticated: false,
  }),
  getters:  {
    profile: (state) => state._profile,
    authenticated: (state) => state._authenticated
  },
  actions: {
    setProfile(profile: Profile) {
      this._profile = profile;
      this._authenticated = true;
    },
    unsetProfile() {
      this._profile = {} as Profile
      this._authenticated = false;
    }
  }
})
