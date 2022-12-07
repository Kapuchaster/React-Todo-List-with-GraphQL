interface Props {
  messageDataList: { text: string; author: string; timestamp: string }[];
}

const ChatBox = ({ messageDataList }: Props) => {
  return (
    <div>
      {messageDataList.map((messageData) => {
        return (
          <div>
            {messageData.text}
            {messageData.author}
          </div>
        );
      })}
    </div>
  );
};

export default ChatBox;
