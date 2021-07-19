import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import User from '@/models/User';

const { persistAtom } = recoilPersist();

export const userAtom = atom<User | null>({
  key: 'user',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
