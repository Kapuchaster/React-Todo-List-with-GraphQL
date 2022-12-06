import "./style.css";

interface Props {
  value: string;
  name: string;
  onChange: (value: string, name: string) => void;
}

const Input = ({ value, name, onChange }: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(value, name);
  };

  return (
    <input
      className="input--container"
      value={value}
      name={name}
      onChange={handleInputChange}
    />
  );
};

export default Input;
