"use client";
/**
 *  ProtectedRoute 컴포넌트
 *
 * 설명:
 * - 인증이 필요한 페이지에서 사용하여, 해당 페이지에 접근하기 전에 인증을 한 번에 확인할 수 있게 합니다.
 *
 * 작성자: masterhyuns
 * 작성일: 2024. 11. 11.
 */
import { useAuth } from "@/contexts/AuthContexts";
import { FC, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null; // 인증 확인 중에는 아무것도 렌더링하지 않음

  return <>{children}</>;
};

export default ProtectedRoute;
