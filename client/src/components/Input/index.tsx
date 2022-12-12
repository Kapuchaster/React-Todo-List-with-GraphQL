import "./style.css";

interface Props {
  value: string;
  name: string;
  placeholder?: string;
  onChange: (value: string, name: string) => void;
}

const Input = ({ value, name, placeholder, onChange }: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(value, name);
  };

  return (
    <input
      className="input--container"
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

export default Input;
