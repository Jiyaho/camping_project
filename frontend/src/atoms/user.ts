import { userData } from '@/constants/user';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// 새로고침 시 전역 상태 유지를 위함(세션 스토리지에 저장)
const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'auth',
  storage: sessionStorage,
});

export const userAtom = atom({
  key: 'userAtom',
  default: {
    isAuth: false,
    user: userData,
  },
  effects_UNSTABLE: [persistAtom],
});
