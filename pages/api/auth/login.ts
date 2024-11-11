import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";
import { createToken } from "@/helpers/utils/token";

const SECRET_KEY = "your-secret-key"; // 환경 변수로 대체하는 것이 안전함

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.redirect(302, "/login");
  }

  const { email, password } = req.body;

  // 예제용 인증 로직 - 실제로는 데이터베이스 검증을 사용
  if (email === "test@example.com" && password === "password") {
    // JWT 생성
    // JWT 토큰 생성
    const token = await createToken({ email }, SECRET_KEY);
    const expiryDate = new Date(Number(new Date()) + 315360000000);
    setCookie("token", token, { req, res, expires: expiryDate });

    return res.redirect(302, "/"); // 로그인 성공 시 메인 페이지로 리다이렉트
  } else {
    const expiryDate = new Date(Number(new Date()) + 315360000000);
    console.log("set cookie");
    setCookie("error", "credential error", { req, res, expires: expiryDate });
    return res.redirect(302, "/login");
  }
}
