import ChatRoomsPanel from "./layouts/ChatRoomsPanel/ChatRoomsPanel";
import Dashboard from "./layouts/Dashboard/Dashboard";
import {
  useChatRoomSubscription,
  useCreateChatRoomMutation,
  useGetChatRoomListQuery,
} from "./__generated__/operations-types";

function App() {
  // const { data: data2 } = useChatRoomSubscription();

  // console.log(data2);

  const { data, loading, error } = useGetChatRoomListQuery();

  if (loading) console.log("loading");
  if (error) console.log("loading");

  console.log(data?.chatRoomList);

  const [createChatRoomMutation] = useCreateChatRoomMutation({
    variables: {
      name: "value",
    },
  });

  const handleAddNewRoom = () => {
    console.log("Add new room");
    createChatRoomMutation();
  };

  const DashboardLeftPanel = () => (
    <ChatRoomsPanel
      chatRoomList={data?.chatRoomList}
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
