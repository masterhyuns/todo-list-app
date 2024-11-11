import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCookie } from "cookies-next";
import { verifyToken } from "@/helpers/utils/token";
const SECRET_KEY = "your-secret-key"; // 환경 변수로 대체하는 것이 안전함

export function middleware(request: NextRequest, response: NextResponse) {
  const { pathname } = request.nextUrl;

  // 보호된 페이지 목록
  const protectedPaths = ["/"];
  const isProtectedPath = protectedPaths.includes(pathname);

  // 쿠키에서 토큰 추출
  const token = (getCookie("token", { req: request, res: response }) ||
    "") as string;
  // 토큰이 없고 보호된 페이지에 접근 시도 시 로그인 페이지로 리다이렉트
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 토큰 검증
  if (token) {
    try {
      verifyToken(token, SECRET_KEY);

      // 로그인 상태일 경우
      if (["/login", "/signup", "/forgot-password"].includes(pathname)) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (err) {
      console.log(err);
      // 토큰이 유효하지 않으면 로그인 페이지로 리다이렉트
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/signup", "/forgot-password"],
};
