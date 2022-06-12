import { MutationTree } from 'vuex';
import { AppStateInterface } from './state';

const mutation: MutationTree<AppStateInterface> = {
  setProfile(state, profile) {
    state.profile = profile
  },
  unsetProfile(state) {
    state.profile = null
  }
};

export default mutation;
