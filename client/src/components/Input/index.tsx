import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import "./style.css";

interface Props {
  value: string;
  name: string;
  placeholder?: string;
  onChange: (value: string, name: string) => void;
  onPressEnter?: () => void;
}

const Input = ({ value, name, placeholder, onChange, onPressEnter }: Props) => {
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
      className="input--container"
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleInputChange}
      onKeyUp={handleEnterKey}
    />
  );
};

export default Input;
