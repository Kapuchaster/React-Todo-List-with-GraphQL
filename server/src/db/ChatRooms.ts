import { ChatRoom } from "../__generated__/resolvers-types";

const chatRoomList: ChatRoom[] = [
  {
    id: "1",
    title: "Town of cats",
    description: "Kate Chopin",
    messages: [
      {
        id: "1",
        author: { id: "Bot_1", name: "Bot" },
        text: "welcome in Town of cats",
        timestamp: Date.now().toString(),
      },
    ],
    participants: [],
  },
  {
    id: "2",
    title: "City of Glass",
    description: "Paul Auster",
    messages: [
      {
        id: "1",
        author: { id: "Bot_1", name: "Bot" },
        text: "welcome in City of Glass",
        timestamp: Date.now().toString(),
      },
    ],
    participants: [],
  },
];

export default chatRoomList;
