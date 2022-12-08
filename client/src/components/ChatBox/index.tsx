import { Message } from "../../__generated__/operations-types";

import "./style.css";

interface Props {
  messageDataList: Message[];
}

const ChatBox = ({ messageDataList }: Props) => {
  return (
    <div className="chatBox--container">
      {messageDataList.map((messageData) => {
        return (
          <div key={messageData.id} className="chatBox__message--container">
            <div className="chatBox__message--info">
              <div>{messageData.author}</div>
              <div>{messageData.timestamp}</div>
            </div>
            <div className="chatBox__message">{messageData.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBox;
