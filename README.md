This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

```
    todo-list-app/
    ├── .next/                        # Next.js 빌드 출력 폴더 (자동 생성)
    ├── node_modules/                 # 설치된 npm 패키지들
    ├── public/                       # 정적 파일 (이미지, 아이콘 등)
    │   └── favicon.ico
    ├── app/                          # Next.js App Router 폴더
    │   ├── layout.tsx                # 기본 레이아웃 파일
    │   ├── page.tsx                  # 메인 페이지 (로그인 후 접근 가능)
    │   ├── login/                    # 로그인 페이지
    │   │   └── page.tsx              # 로그인 페이지 컴포넌트
    │   ├── signup/                   # 회원가입 페이지
    │   │   └── page.tsx              # 회원가입 페이지 컴포넌트
    │   ├── forgot-password/          # 비밀번호 찾기 페이지
    │   │   └── page.tsx              # 비밀번호 찾기 페이지 컴포넌트
    │   ├── protected/                # 로그인 후 접근 가능한 페이지들
    │   │   └── page.tsx              # 메인 페이지 또는 보호된 페이지
    │   └── components/               # 재사용 가능한 컴포넌트
    │       ├── Button.tsx            # 버튼 컴포넌트
    │       ├── Input.tsx             # 입력 필드 컴포넌트
    │       └── Navbar.tsx            # 네비게이션 바
    ├── contexts/                     # 컨텍스트 폴더
    │   └── AuthContext.tsx           # 인증 상태 관리 컨텍스트
    ├── middleware.ts                 # 페이지 접근을 제어하는 미들웨어
    ├── styles/                       # 글로벌 스타일 및 Tailwind CSS 설정
    │   ├── globals.css               # 전역 CSS 파일
    │   └── tailwind.css              # Tailwind CSS 설정 파일
    ├── tsconfig.json                 # TypeScript 설정 파일
    ├── tailwind.config.js            # Tailwind CSS 설정 파일
    ├── package.json                  # 프로젝트 설정 및 의존성 목록
    └── next.config.js                # Next.js 설정 파일

```