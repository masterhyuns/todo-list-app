"use client";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContexts";
import { useEffect } from "react";

/**
 *  메인 페이지
 *
 * 설명:
 *
 * 작성자: masterhyuns
 * 작성일: 2024. 11. 11.
 */

export default function Home() {
  const { user } = useAuth();

  /**
   * 폼 Submit 함수
   */
  const handleLogoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = document.getElementById("logout-form") as HTMLFormElement;
    form.method = "POST";
    form.action = "/api/auth/logout";
    form && form.submit();
  };

  useEffect(() => {
    console.log("user", user);
  }, []);
  return (
    <ProtectedRoute>
      <div>Welcome to the main page!</div>
      <form id={"logout-form"} onSubmit={handleLogoutSubmit}>
        <button type={"submit"}>로그아웃</button>
      </form>
    </ProtectedRoute>
  );
}
