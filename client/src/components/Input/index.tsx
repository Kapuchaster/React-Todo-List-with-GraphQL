import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import "./style.css";

interface Props {
  value: string;
  name: string;
  size?: "sm" | "lg";
  placeholder?: string;
  onChange: (value: string, name: string) => void;
  onPressEnter?: () => void;
}

const Input = ({
  value,
  name,
  size = "sm",
  placeholder,
  onChange,
  onPressEnter,
}: Props) => {
  const sizeClass =
    size === "sm" ? "input__container--small" : "input__container--large";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(value, name);
  };

  const handleEnterKey = (
    event: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => {
    event.key === "Enter" && onPressEnter?.();
  };

  return (
    <input
      className={`input__container ${sizeClass}`}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleInputChange}
      onKeyUp={handleEnterKey}
    />
  );
};

export default Input;
