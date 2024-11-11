import type { Metadata } from "next";
import { notoSansKR } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo List App",
  description: "[ hyuns portpolio ] todo list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  {
    /*
			notoSansKR.variable:
			notoSansKR 폰트를 선언할 때 variable 속성을 설정하면, Next.js가 해당 폰트에 대한 CSS 변수를 자동으로 생성
			antialiased: 이 클래스는 텍스트의 안티앨리어싱 처리를 적용하기 위해 사용하는 TailwindCSS의 유틸리티 클래스입니다.
			**antialiased**는 텍스트의 경계선이 더 부드럽고 선명하게 보이도록 처리해 줍니다.
		*/
  
  }
  return (
    <html lang="en">
      <body
        className={`${notoSansKR.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
