import { SignJWT, jwtVerify, JWTPayload } from "jose";

// JWT 토큰 생성 함수
export async function createToken(payload: JWTPayload, secret: string) {
  const encoder = new TextEncoder();
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encoder.encode(secret));
}

// JWT 토큰 검증 함수
export async function verifyToken(token: string, secret: string) {
  const encoder = new TextEncoder();
  const { payload } = await jwtVerify(token, encoder.encode(secret));
  return payload;
}
