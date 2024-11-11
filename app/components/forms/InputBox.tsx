"use client";
import { ChangeEvent, FC } from "react";

/**
 *  Input  컴포넌트
 *
 * 설명:
 * - 디자인을 재활용하기 위해 컴포넌트화
 *
 * 작성자: masterhyuns
 * 작성일: 2024. 11. 11.
 */

interface InputBoxProps {
  type: "text" | "password"; // input type
  name: string; // input 에 사용될 name 값 ( ID 와 동일하게 사용됨 )
  label?: string; // label 명
  placeholder?: string; // placeholder
  value: string; // input value
  onChange?: (value: string) => void; // change 함수
}

const InputBox: FC<InputBoxProps> = ({
  type,
  name,
  label,
  placeholder = "",
  value,
  onChange,
}) => {
  /**
   * Input element Change Event binding function
   */
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange && onChange(event.target.value);
  };
  return (
    <>
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        className="w-full px-4 py-2 bg-yellow-100 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-500"
        onChange={handleInputChange}
      />
    </>
  );
};

export default InputBox;
