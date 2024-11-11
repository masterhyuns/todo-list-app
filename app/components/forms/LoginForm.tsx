"use client";
import Bubble from "@/app/components/Bubble";
import InputBox from "@/app/components/forms/InputBox";
import { FC, useEffect, useState } from "react";

interface LoginFormProps {
  error?: string;
  onSubmit: (data: FormData) => void;
}

const LoginForm: FC<LoginFormProps> = ({ error, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    onSubmit(formData);
  };
  return (
    <div className="flex min-w-[320px] items-center justify-center min-h-screen bg-gray-100 px-10  sm:px-0">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/*Logo and Title*/}
        <h1 className="text-3xl font-bold text-center mb-6">Todo List APP</h1>
        <form id={"login-form"} onSubmit={handleSubmit}>
          {error}
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
          {error && <p>사용자 정보가 올바르지 않습니다.</p>}
          {/*Log In Button*/}
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

export default LoginForm;
