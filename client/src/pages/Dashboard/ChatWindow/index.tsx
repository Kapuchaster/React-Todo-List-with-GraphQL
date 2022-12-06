import { useState } from "react";
import Input from "../../../components/Input";

interface Props {}

const ChatWindow = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  return (
    <div>
      <h1>ChatWindow</h1>
      <Input value={input} name="messageInput" onChange={handleInputChange} />
    </div>
  );
};

export default ChatWindow;
