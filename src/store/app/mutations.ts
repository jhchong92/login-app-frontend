import { MutationTree } from 'vuex';
import { AppStateInterface } from './state';
import { Profile } from 'src/interfaces';

const mutation: MutationTree<AppStateInterface> = {
  setProfile(state, profile: Profile) {
    state.profile = profile
  },
  unsetProfile(state) {
    state.profile = null
  }
};

export default mutation;
