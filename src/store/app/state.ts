import { Profile } from 'src/interfaces';

export interface AppStateInterface {
  profile: Profile;
}

function state(): AppStateInterface {
  return {
    profile: {} as Profile,
  };
}

export default state;
