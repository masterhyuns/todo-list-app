// app/fonts.ts
import localFont from 'next/font/local';

// Noto Sans KR 폰트 선언
export const notoSansKR = localFont({
  src: [
    {
      path: './fonts/NotoSansKR-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/NotoSansKR-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/NotoSansKR-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NotoSansKR-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/NotoSansKR-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/NotoSansKR-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-noto-sans-kr',
});
