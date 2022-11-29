import { useEffect, useState } from "react";
import ChatRoomsPanel from "./layouts/ChatRoomsPanel/ChatRoomsPanel";
import Dashboard from "./layouts/Dashboard/Dashboard";
import {
  ChatRoom,
  useChatRoomSubscription,
  useCreateChatRoomMutation,
  useGetChatRoomListLazyQuery,
} from "./__generated__/operations-types";

function App() {
  const [chatRoomList, setChatRoomList] = useState<ChatRoom[]>([]);

  // Query
  const [getChatRoomList] = useGetChatRoomListLazyQuery();
  // Subscription
  const { data: chatRoomSubData } = useChatRoomSubscription();
  // Mutation
  const [createChatRoomMutation] = useCreateChatRoomMutation();

  useEffect(() => {
    getChatRoomList().then((response) =>
      setChatRoomList(response.data?.chatRoomList ?? [])
    );
  }, [getChatRoomList]);

  useEffect(() => {
    if (chatRoomSubData) {
      setChatRoomList((state) => [...state, chatRoomSubData?.chatRoomCreated]);
    }
  }, [chatRoomSubData]);

  const handleAddNewRoom = () => {
    createChatRoomMutation({
      variables: {
        input: {
          title: "value",
          description: "value",
        },
      },
    });
  };

  const DashboardLeftPanel = () => (
    <ChatRoomsPanel
      chatRoomList={chatRoomList}
      onAddNewRoom={handleAddNewRoom}
    />
  );

  return (
    <Dashboard leftPanel={<DashboardLeftPanel />} rightPanel={<>right-panel</>}>
      <>main</>
    </Dashboard>
  );
}

export default App;
