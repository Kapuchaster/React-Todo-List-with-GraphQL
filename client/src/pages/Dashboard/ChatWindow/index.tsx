import { useState } from "react";
import { Button } from "../../../components";
import Input from "../../../components/Input";
import {
  ChatRoom,
  CreateMessageInput,
} from "../../../__generated__/operations-types";
import ChatBox from "./ChatBox";

interface Props {
  chatRoom?: ChatRoom;
  onCreateMessage: (input: CreateMessageInput) => void;
}

const ChatWindow = ({ chatRoom, onCreateMessage }: Props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSendMessage = () => {
    onCreateMessage({ author: "michal", text: input });
    setInput("");
  };

  if (!chatRoom) {
    return <h1>Select Room</h1>;
  }

  return (
    <div>
      <h1>ChatWindow</h1>
      <div>{chatRoom.title}</div>
      <ChatBox messageDataList={chatRoom.messages} />
      <Input value={input} name="messageInput" onChange={handleInputChange} />
      <Button title=">" variant="primary" onClick={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
