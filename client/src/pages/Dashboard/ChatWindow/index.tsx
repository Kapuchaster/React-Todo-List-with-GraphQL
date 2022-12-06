import { useState } from "react";
import { Button } from "../../../components";
import Input from "../../../components/Input";
import ChatBox from "./ChatBox";

const __MockedChatBoxData__: { text: string; author: string; date: Date }[] = [
  { text: "Hi how are you", author: "michal", date: new Date() },
  { text: "Hi I am fine, and you?", author: "ania", date: new Date() },
  { text: "thx me too", author: "michal", date: new Date() },
];

interface Props {}

const ChatWindow = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSendMessage = () => {
    __MockedChatBoxData__.push({
      text: input,
      author: "author",
      date: new Date(),
    });

    setInput("");
  };

  return (
    <div>
      <h1>ChatWindow</h1>
      <ChatBox messageDataList={__MockedChatBoxData__} />
      <Input value={input} name="messageInput" onChange={handleInputChange} />
      <Button title=">" variant="primary" onClick={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
