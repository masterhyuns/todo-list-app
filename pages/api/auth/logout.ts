import { NextApiRequest, NextApiResponse } from "next";
import { deleteCookie } from "cookies-next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  deleteCookie("token", { req, res });

  return res.redirect(302, "/login"); // 로그아웃 후 로그인 페이지로 리다이렉트
}
