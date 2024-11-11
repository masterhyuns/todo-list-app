import Bubble from "@/app/components/Bubble";
import InputBox from "@/app/components/forms/InputBox";

/**
 *  메인 페이지
 *
 * 설명:
 * - 로그인을 할 수 있는 화면
 * - 비로그인시는 로그인페이지만 이동할 수 있다.
 *
 * 작성자: masterhyuns
 * 작성일: 2024. 11. 11.
 */

export default function Home() {
  return (
    <div className="flex min-w-[320px] items-center justify-center min-h-screen bg-gray-100 px-10  sm:px-0">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/*Logo and Title*/}
        <h1 className="text-3xl font-bold text-center mb-6">Todo List APP</h1>

        {/*Email Input*/}
        <div className="mb-4">
          <Bubble link={"https://github.io"}>
            <InputBox />
          </Bubble>
        </div>

        {/*Password Input*/}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-1"
          >
            Password
          </label>
          <Bubble link={"https://github.io"}>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
              className="w-full px-4 py-2 bg-yellow-100 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-500"
            />
          </Bubble>
        </div>

        {/*Log In Button*/}
        <Bubble link={"https://github.io"}>
          <button className="w-full py-2 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75">
            Log In
          </button>
        </Bubble>

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
}
