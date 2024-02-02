'use client';
import { userAtom } from '@/atoms/user';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
function NaverLoginRedirect() {
  const setUserData = useSetRecoilState(userAtom);
  const router = useRouter();

  const token = new URL(window.location.href).hash.split('#')[1]?.split('=')[1].split('&')[0];

  const fetchUserData = async (token: string | string[]) => {
    try {
      const res = await fetch(`/api/login/naver?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const json = await res.json();
      const data = json.data.response;
      const userData = {
        email: data.email,
        name: data.name,
        nickname: data.nickname,
        profile_image: data.profile_image,
      };
      setUserData({
        isAuth: true,
        user: userData,
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (window.location.href.includes('access_token')) {
      fetchUserData(token);
    }
  }, []);
  return <div>NaverLoginRedirect</div>;
}
export default NaverLoginRedirect;
