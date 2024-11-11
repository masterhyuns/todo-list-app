import { useState } from "react";
import Bubble from "@/app/components/Bubble";
import InputBox from "@/app/components/forms/InputBox";
import "../styles/globals.css";
import { GetServerSidePropsContext } from "next";
import { getCookie, deleteCookie } from "cookies-next";

/**
 * 로그인 페이지
 * form POST 방식을 하고, getServerSide 함수를 사용하기 위해 pages 밑에 구성하였다.
 */
const Login = ({ error }: { error: string }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * 폼 Submit 함수
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = document.getElementById("login-form") as HTMLFormElement;
    form.method = "POST";
    form.action = "/api/auth/login";
    form && form.submit();
  };
  return (
    <div className="flex min-w-[320px] items-center justify-center min-h-screen bg-gray-100 px-10  sm:px-0">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/*Logo and Title*/}
        <h1 className="text-3xl font-bold text-center mb-6">Todo List APP</h1>
        <form id={"login-form"} onSubmit={handleSubmit}>
          {/*Email Input*/}
          <div className="mb-4">
            <Bubble link={"blob/main/app/components/forms/InputBox.tsx"}>
              <InputBox
                type={"text"}
                name={"email"}
                label={"Email"}
                placeholder={"이메일을 입력하세요."}
                value={email}
                onChange={(value: string) => setEmail(value)}
              />
            </Bubble>
          </div>

          {/*Password Input*/}
          <div className="mb-6">
            <Bubble link={"blob/main/app/components/forms/InputBox.tsx"}>
              <InputBox
                type={"password"}
                name={"password"}
                label={"Password"}
                placeholder={"비밀번호를 입력하세요."}
                value={password}
                onChange={setPassword}
              />
            </Bubble>
          </div>
          {/*Log In Button*/}
          {error && (
            <p className={"mb-6 text-red-400"}>
              사용자 정보가 올바르지 않습니다.
            </p>
          )}
          <button
            type={"submit"}
            className="w-full py-2 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
          >
            로그인
          </button>
        </form>

        {/*Forgot Password and Create Account Links*/}
        <div className="flex justify-center gap-2.5 items-center mt-4 text-sm flex-col sm:flex-row">
          <a href="#" className="text-pink-500 hover:underline">
            비밀번호 찾기
          </a>
          <a href="#" className="text-pink-500 hover:underline">
            계정생성
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { req, res } = context;

  const error = getCookie("error", { req, res }) || "";
  // 쿠키에서 오류 메시지 확인
  if (error) {
    // 크리덴셜 오류가 있을시 쿠키를 삭제해준다.
    deleteCookie("error", { req, res });
  }
  return {
    props: { error },
  };
};
