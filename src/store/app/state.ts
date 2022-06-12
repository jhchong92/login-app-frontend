import { Profile } from 'src/interfaces';

export interface AppStateInterface {
  profile: Profile | null;
}

function state(): AppStateInterface {
  return { } as AppStateInterface;
}

export default state;
