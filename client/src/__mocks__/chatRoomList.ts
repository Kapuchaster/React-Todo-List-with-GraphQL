const chatRoomList = [
  {
    id: "roomId_1",
    title: "roomTitle_1",
    messages: [
      {
        id: "1",
        author: { id: "Bot_1", name: "John Bot" },
        text: "welcome in roomId_1",
        timestamp: "1674658964520",
      },
    ],
    description: "roomDescription_1",
    participants: [{ id: "p_1", name: "partName_1" }],
  },
  {
    id: "roomId_2",
    title: "roomTitle_2",
    messages: [
      {
        id: "1",
        author: { id: "Bot_2", name: "John Bot 2" },
        text: "welcome in roomId_2",
        timestamp: "1674658964520",
      },
    ],
    description: "roomDescription_2",
    participants: [{ id: "p_2", name: "partName_2" }],
  },
];

export default chatRoomList;
