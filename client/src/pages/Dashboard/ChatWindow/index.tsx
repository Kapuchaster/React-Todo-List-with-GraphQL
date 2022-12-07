import { useState } from "react";
import { Button } from "../../../components";
import Input from "../../../components/Input";
import { ChatRoom } from "../../../__generated__/operations-types";
import ChatBox from "./ChatBox";

interface Props {
  chatRoom: ChatRoom;
}

const ChatWindow = ({ chatRoom }: Props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSendMessage = () => {
    // __MockedChatBoxData__.push({
    //   text: input,
    //   author: "author",
    //   date: new Date(),
    // });

    setInput("");
  };

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
