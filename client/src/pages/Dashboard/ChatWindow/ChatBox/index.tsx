interface Props {
  messageDataList: { text: string; author: string; date: Date }[];
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
