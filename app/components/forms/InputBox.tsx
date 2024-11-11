const InputBox = () => {
  return (
    <>
      <label htmlFor="email" className="block text-sm font-semibold mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="이메일을 입력하세요."
        className="w-full px-4 py-2 bg-yellow-100 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-500"
      />
    </>
  );
};

export default InputBox;
