'use client';

import { userAtom } from '@/atoms/user';
import { userData } from '@/constants/user';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

function Logout() {
  const router = useRouter();
  const setLogout = useSetRecoilState(userAtom);

  const handleLogout = () => {
    setLogout({
      isAuth: false,
      user: userData,
    });
    router.replace('/');
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return <div>logout</div>;
}
export default Logout;
