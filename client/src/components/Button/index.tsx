import "./style.css";

interface Props {
  title: string;
  variant: "primary" | "secondary" | "warn" | "error";
  size?: "sm" | "md" | "lg";
  onClick: () => void;
}

const Button = ({ title, variant, size = "md", onClick }: Props) => {
  
  return (
    <button className="button--container" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
