import { useEffect, useState } from "react";
import { WithModalContext } from "./HOC/WithModal";
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

  const handleAddNewRoom = (title: string, description: string) => {
    createChatRoomMutation({
      variables: {
        input: {
          title,
          description,
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
    <WithModalContext>
      <Dashboard
        leftPanel={<DashboardLeftPanel />}
        rightPanel={<>right-panel</>}
      >
        <>main</>
      </Dashboard>
    </WithModalContext>
  );
}

export default App;
