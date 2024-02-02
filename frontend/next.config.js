/** @type {import('next').NextConfig} */
const nextConfig = {
  // compiler: {
  //   styledComponents: true,
  // },
  images: {
    // 외부 이미지 url 가져오기 위해 도메인 허용
    domains: ['gocamping.or.kr', 'phinf.pstatic.net', 'k.kakaocdn.net'],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://api.campinggo.store/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
