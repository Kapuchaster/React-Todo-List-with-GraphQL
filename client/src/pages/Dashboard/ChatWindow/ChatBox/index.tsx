import { Message } from "../../../../__generated__/operations-types";

interface Props {
  messageDataList: Message[];
}

const ChatBox = ({ messageDataList }: Props) => {
  return (
    <div>
      {messageDataList.map((messageData) => {
        return (
          <div key={messageData.id}>
            {messageData.text}
            {messageData.author}
          </div>
        );
      })}
    </div>
  );
};

export default ChatBox;
