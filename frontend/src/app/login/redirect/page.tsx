'use client';

import { useEffect } from 'react';

// 백엔드와 통신 테스트 중인 컴포넌트
function LoginRedirect() {
  const fetchData = async () => {
    try {
      const res = await fetch('https://api.campinggo.store', {
        // const res = await fetch('/api/oauth', {
        method: 'GET',
        credentials: 'include',
      });
      // const data = await res.json();
      const data = await res.text();
      console.log(res);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    console.log('쿠키: ' + document.cookie);
  }, []);

  return <div>LoginRedirect</div>;
}
export default LoginRedirect;

// 'use client';

// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import useSWR from 'swr';

// const fetcher = async (url: string) => {
//   const response = await fetch(url, {
//     method: 'GET',
//     credentials: 'include',
//   });
//   // const data = await response.text();
//   const data = await response.json();
//   return data;
// };

// function LoginRedirect() {
//   const router = useRouter();
//   const { data, isLoading, error } = useSWR('/api/oauth', fetcher);
//   console.log(data);

//   useEffect(() => {
//     // if (data) return router.replace('/');
//   }, [data]);
//   if (isLoading) return <div>isLoading...</div>;
//   if (error) return <div>error...</div>;

//   const fetchData = async () => {
//     try {
//       const res = await fetch('https://api.campinggo.store', {
//         // const res = await fetch('/api/oauth', {
//         method: 'GET',
//         credentials: 'include',
//       });
//       // const data = await res.json();
//       const data = await res.text();
//       // setData(data);
//       console.log(res);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//     console.log('쿠키: ' + document.cookie);
//   }, []);

//   return <div>LoginRedirect</div>;
// }
// export default LoginRedirect;
